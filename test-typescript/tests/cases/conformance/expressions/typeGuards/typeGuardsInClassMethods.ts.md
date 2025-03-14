__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    161,
    2452
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              },
              "range": [
                168,
                176
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  170,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 5
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              165,
              176
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            165,
            176
          ],
          "loc": {
            "end": {
              "column": 15,
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
        161,
        177
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 5
        },
        "start": {
          "column": 0,
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              },
              "range": [
                186,
                203
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      188,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 6
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      197,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  188,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              182,
              203
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            182,
            203
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        178,
        204
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          214,
          2451
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                220,
                231
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                231,
                635
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "range": [
                          313,
                          316
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "range": [
                                326,
                                330
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 10
                                },
                                "start": {
                                  "column": 21,
                                  "line": 10
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              319,
                              330
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 10
                              },
                              "start": {
                                "column": 14,
                                "line": 10
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              335,
                              343
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 10
                              },
                              "start": {
                                "column": 30,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            319,
                            343
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 10
                            },
                            "start": {
                              "column": 14,
                              "line": 10
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "range": [
                              347,
                              351
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 10
                              },
                              "start": {
                                "column": 42,
                                "line": 10
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
                              352,
                              358
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 10
                              },
                              "start": {
                                "column": 47,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            347,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 10
                            },
                            "start": {
                              "column": 42,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          319,
                          358
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 10
                          },
                          "start": {
                            "column": 14,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        313,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      313,
                      359
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 13
                              },
                              "start": {
                                "column": 16,
                                "line": 13
                              }
                            },
                            "range": [
                              432,
                              449
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    434,
                                    440
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 13
                                    }
                                  }
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    443,
                                    449
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 13
                                    }
                                  }
                                }
                              ],
                              "range": [
                                434,
                                449
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 13
                                },
                                "start": {
                                  "column": 18,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            428,
                            449
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          428,
                          449
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
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
                      424,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
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
                        "name": "num",
                        "optional": false,
                        "range": [
                          459,
                          462
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 14
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "range": [
                                472,
                                476
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 14
                                },
                                "start": {
                                  "column": 21,
                                  "line": 14
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              465,
                              476
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
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              481,
                              489
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 14
                              },
                              "start": {
                                "column": 30,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            465,
                            489
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 14
                            },
                            "start": {
                              "column": 14,
                              "line": 14
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "range": [
                              493,
                              497
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 14
                              },
                              "start": {
                                "column": 42,
                                "line": 14
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
                              498,
                              504
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 14
                              },
                              "start": {
                                "column": 47,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            493,
                            504
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 14
                            },
                            "start": {
                              "column": 42,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          465,
                          504
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        459,
                        504
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      459,
                      505
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
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
                        "name": "num",
                        "optional": false,
                        "range": [
                          571,
                          574
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "range": [
                                584,
                                589
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 17
                                },
                                "start": {
                                  "column": 21,
                                  "line": 17
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              577,
                              589
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 17
                              },
                              "start": {
                                "column": 14,
                                "line": 17
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              594,
                              602
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 17
                              },
                              "start": {
                                "column": 31,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            577,
                            602
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 17
                            },
                            "start": {
                              "column": 14,
                              "line": 17
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "range": [
                              606,
                              611
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 17
                              },
                              "start": {
                                "column": 43,
                                "line": 17
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
                              612,
                              618
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 17
                              },
                              "start": {
                                "column": 49,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            606,
                            618
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 17
                            },
                            "start": {
                              "column": 43,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          577,
                          618
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 17
                          },
                          "start": {
                            "column": 14,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        571,
                        618
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      571,
                      619
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  256,
                  635
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 40,
                    "line": 8
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 8
                      },
                      "start": {
                        "column": 21,
                        "line": 8
                      }
                    },
                    "range": [
                      237,
                      254
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            239,
                            245
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 8
                            },
                            "start": {
                              "column": 23,
                              "line": 8
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            248,
                            254
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 8
                            },
                            "start": {
                              "column": 32,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        239,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 8
                        },
                        "start": {
                          "column": 23,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    232,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              220,
              635
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                683,
                685
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
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
                685,
                1089
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "range": [
                          767,
                          770
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 22
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "range": [
                                780,
                                784
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 22
                                },
                                "start": {
                                  "column": 21,
                                  "line": 22
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              773,
                              784
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 22
                              },
                              "start": {
                                "column": 14,
                                "line": 22
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              789,
                              797
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 22
                              },
                              "start": {
                                "column": 30,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            773,
                            797
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 22
                            },
                            "start": {
                              "column": 14,
                              "line": 22
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "range": [
                              801,
                              805
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 22
                              },
                              "start": {
                                "column": 42,
                                "line": 22
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
                              806,
                              812
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 22
                              },
                              "start": {
                                "column": 47,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            801,
                            812
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 22
                            },
                            "start": {
                              "column": 42,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          773,
                          812
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 22
                          },
                          "start": {
                            "column": 14,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        767,
                        812
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      767,
                      813
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 25
                              },
                              "start": {
                                "column": 16,
                                "line": 25
                              }
                            },
                            "range": [
                              886,
                              903
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    888,
                                    894
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 25
                                    }
                                  }
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    897,
                                    903
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 25
                                    }
                                  }
                                }
                              ],
                              "range": [
                                888,
                                903
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 25
                                },
                                "start": {
                                  "column": 18,
                                  "line": 25
                                }
                              }
                            }
                          },
                          "range": [
                            882,
                            903
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          882,
                          903
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      878,
                      904
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
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
                        "name": "num",
                        "optional": false,
                        "range": [
                          913,
                          916
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 26
                          },
                          "start": {
                            "column": 8,
                            "line": 26
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "range": [
                                926,
                                930
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 26
                                },
                                "start": {
                                  "column": 21,
                                  "line": 26
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              919,
                              930
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 26
                              },
                              "start": {
                                "column": 14,
                                "line": 26
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              935,
                              943
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 26
                              },
                              "start": {
                                "column": 30,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            919,
                            943
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 26
                            },
                            "start": {
                              "column": 14,
                              "line": 26
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "range": [
                              947,
                              951
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 26
                              },
                              "start": {
                                "column": 42,
                                "line": 26
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
                              952,
                              958
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 26
                              },
                              "start": {
                                "column": 47,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            947,
                            958
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 26
                            },
                            "start": {
                              "column": 42,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          919,
                          958
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 26
                          },
                          "start": {
                            "column": 14,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        913,
                        958
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      913,
                      959
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
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
                        "name": "num",
                        "optional": false,
                        "range": [
                          1025,
                          1028
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 29
                          },
                          "start": {
                            "column": 8,
                            "line": 29
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "range": [
                                1038,
                                1043
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 29
                                },
                                "start": {
                                  "column": 21,
                                  "line": 29
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              1031,
                              1043
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 29
                              },
                              "start": {
                                "column": 14,
                                "line": 29
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              1048,
                              1056
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 29
                              },
                              "start": {
                                "column": 31,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            1031,
                            1056
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 29
                            },
                            "start": {
                              "column": 14,
                              "line": 29
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "range": [
                              1060,
                              1065
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 29
                              },
                              "start": {
                                "column": 43,
                                "line": 29
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
                              1066,
                              1072
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 29
                              },
                              "start": {
                                "column": 49,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            1060,
                            1072
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 29
                            },
                            "start": {
                              "column": 43,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          1031,
                          1072
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 29
                          },
                          "start": {
                            "column": 14,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        1025,
                        1072
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      1025,
                      1073
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  710,
                  1089
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 39,
                    "line": 20
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 20
                      },
                      "start": {
                        "column": 20,
                        "line": 20
                      }
                    },
                    "range": [
                      691,
                      708
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            693,
                            699
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 20
                            },
                            "start": {
                              "column": 22,
                              "line": 20
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            702,
                            708
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 20
                            },
                            "start": {
                              "column": 31,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "range": [
                        693,
                        708
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 20
                        },
                        "start": {
                          "column": 22,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    686,
                    708
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 20
                    },
                    "start": {
                      "column": 15,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              }
            },
            "range": [
              675,
              1089
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 20
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
              "name": "p2",
              "optional": false,
              "range": [
                1129,
                1131
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
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
                1131,
                1535
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "range": [
                          1213,
                          1216
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 34
                          },
                          "start": {
                            "column": 8,
                            "line": 34
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "range": [
                                1226,
                                1230
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 34
                                },
                                "start": {
                                  "column": 21,
                                  "line": 34
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              1219,
                              1230
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 34
                              },
                              "start": {
                                "column": 14,
                                "line": 34
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              1235,
                              1243
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 34
                              },
                              "start": {
                                "column": 30,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1219,
                            1243
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 34
                            },
                            "start": {
                              "column": 14,
                              "line": 34
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "range": [
                              1247,
                              1251
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 34
                              },
                              "start": {
                                "column": 42,
                                "line": 34
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
                              1252,
                              1258
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 34
                              },
                              "start": {
                                "column": 47,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1247,
                            1258
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 34
                            },
                            "start": {
                              "column": 42,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          1219,
                          1258
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 34
                          },
                          "start": {
                            "column": 14,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        1213,
                        1258
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      1213,
                      1259
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 37
                              },
                              "start": {
                                "column": 16,
                                "line": 37
                              }
                            },
                            "range": [
                              1332,
                              1349
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    1334,
                                    1340
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 37
                                    }
                                  }
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1343,
                                    1349
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 37
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1334,
                                1349
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 37
                                },
                                "start": {
                                  "column": 18,
                                  "line": 37
                                }
                              }
                            }
                          },
                          "range": [
                            1328,
                            1349
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 37
                            },
                            "start": {
                              "column": 12,
                              "line": 37
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          1328,
                          1349
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 37
                          },
                          "start": {
                            "column": 12,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1324,
                      1350
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
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
                        "name": "num",
                        "optional": false,
                        "range": [
                          1359,
                          1362
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 38
                          },
                          "start": {
                            "column": 8,
                            "line": 38
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "range": [
                                1372,
                                1376
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 38
                                },
                                "start": {
                                  "column": 21,
                                  "line": 38
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              1365,
                              1376
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 38
                              },
                              "start": {
                                "column": 14,
                                "line": 38
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              1381,
                              1389
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 38
                              },
                              "start": {
                                "column": 30,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            1365,
                            1389
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 38
                            },
                            "start": {
                              "column": 14,
                              "line": 38
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "range": [
                              1393,
                              1397
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 38
                              },
                              "start": {
                                "column": 42,
                                "line": 38
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
                              1398,
                              1404
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 38
                              },
                              "start": {
                                "column": 47,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            1393,
                            1404
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 38
                            },
                            "start": {
                              "column": 42,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          1365,
                          1404
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 38
                          },
                          "start": {
                            "column": 14,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        1359,
                        1404
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 38
                        },
                        "start": {
                          "column": 8,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      1359,
                      1405
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
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
                        "name": "num",
                        "optional": false,
                        "range": [
                          1471,
                          1474
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 41
                          },
                          "start": {
                            "column": 8,
                            "line": 41
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "range": [
                                1484,
                                1489
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 41
                                },
                                "start": {
                                  "column": 21,
                                  "line": 41
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              1477,
                              1489
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 41
                              },
                              "start": {
                                "column": 14,
                                "line": 41
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              1494,
                              1502
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 41
                              },
                              "start": {
                                "column": 31,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            1477,
                            1502
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 41
                            },
                            "start": {
                              "column": 14,
                              "line": 41
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "range": [
                              1506,
                              1511
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 41
                              },
                              "start": {
                                "column": 43,
                                "line": 41
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
                              1512,
                              1518
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 41
                              },
                              "start": {
                                "column": 49,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            1506,
                            1518
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 41
                            },
                            "start": {
                              "column": 43,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          1477,
                          1518
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 41
                          },
                          "start": {
                            "column": 14,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        1471,
                        1518
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1471,
                      1519
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  1156,
                  1535
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 31,
                    "line": 32
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 32
                      },
                      "start": {
                        "column": 12,
                        "line": 32
                      }
                    },
                    "range": [
                      1137,
                      1154
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1139,
                            1145
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 32
                            },
                            "start": {
                              "column": 14,
                              "line": 32
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1148,
                            1154
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 32
                            },
                            "start": {
                              "column": 23,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "range": [
                        1139,
                        1154
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 32
                        },
                        "start": {
                          "column": 14,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    1132,
                    1154
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 32
                    },
                    "start": {
                      "column": 7,
                      "line": 32
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 6,
                  "line": 32
                }
              }
            },
            "range": [
              1129,
              1535
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s1",
              "optional": false,
              "range": [
                1590,
                1592
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 44
                },
                "start": {
                  "column": 19,
                  "line": 44
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1592,
                1996
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "range": [
                          1674,
                          1677
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 46
                          },
                          "start": {
                            "column": 8,
                            "line": 46
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "range": [
                                1687,
                                1691
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 46
                                },
                                "start": {
                                  "column": 21,
                                  "line": 46
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              1680,
                              1691
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 46
                              },
                              "start": {
                                "column": 14,
                                "line": 46
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              1696,
                              1704
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 46
                              },
                              "start": {
                                "column": 30,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            1680,
                            1704
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 46
                            },
                            "start": {
                              "column": 14,
                              "line": 46
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "range": [
                              1708,
                              1712
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 46
                              },
                              "start": {
                                "column": 42,
                                "line": 46
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
                              1713,
                              1719
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 46
                              },
                              "start": {
                                "column": 47,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            1708,
                            1719
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 46
                            },
                            "start": {
                              "column": 42,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          1680,
                          1719
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 46
                          },
                          "start": {
                            "column": 14,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        1674,
                        1719
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 46
                        },
                        "start": {
                          "column": 8,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1674,
                      1720
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 49
                              },
                              "start": {
                                "column": 16,
                                "line": 49
                              }
                            },
                            "range": [
                              1793,
                              1810
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    1795,
                                    1801
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 49
                                    }
                                  }
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1804,
                                    1810
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 49
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1795,
                                1810
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 49
                                },
                                "start": {
                                  "column": 18,
                                  "line": 49
                                }
                              }
                            }
                          },
                          "range": [
                            1789,
                            1810
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 49
                            },
                            "start": {
                              "column": 12,
                              "line": 49
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          1789,
                          1810
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 49
                          },
                          "start": {
                            "column": 12,
                            "line": 49
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1785,
                      1811
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 49
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
                        "name": "num",
                        "optional": false,
                        "range": [
                          1820,
                          1823
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 50
                          },
                          "start": {
                            "column": 8,
                            "line": 50
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "range": [
                                1833,
                                1837
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 50
                                },
                                "start": {
                                  "column": 21,
                                  "line": 50
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              1826,
                              1837
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 50
                              },
                              "start": {
                                "column": 14,
                                "line": 50
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              1842,
                              1850
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 50
                              },
                              "start": {
                                "column": 30,
                                "line": 50
                              }
                            }
                          },
                          "range": [
                            1826,
                            1850
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 50
                            },
                            "start": {
                              "column": 14,
                              "line": 50
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "range": [
                              1854,
                              1858
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 50
                              },
                              "start": {
                                "column": 42,
                                "line": 50
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
                              1859,
                              1865
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 50
                              },
                              "start": {
                                "column": 47,
                                "line": 50
                              }
                            }
                          },
                          "range": [
                            1854,
                            1865
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 50
                            },
                            "start": {
                              "column": 42,
                              "line": 50
                            }
                          }
                        },
                        "range": [
                          1826,
                          1865
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 50
                          },
                          "start": {
                            "column": 14,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1820,
                        1865
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 50
                        },
                        "start": {
                          "column": 8,
                          "line": 50
                        }
                      }
                    },
                    "range": [
                      1820,
                      1866
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
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
                        "name": "num",
                        "optional": false,
                        "range": [
                          1932,
                          1935
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 53
                          },
                          "start": {
                            "column": 8,
                            "line": 53
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "range": [
                                1945,
                                1950
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 53
                                },
                                "start": {
                                  "column": 21,
                                  "line": 53
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              1938,
                              1950
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 53
                              },
                              "start": {
                                "column": 14,
                                "line": 53
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              1955,
                              1963
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 53
                              },
                              "start": {
                                "column": 31,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            1938,
                            1963
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 53
                            },
                            "start": {
                              "column": 14,
                              "line": 53
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "range": [
                              1967,
                              1972
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 53
                              },
                              "start": {
                                "column": 43,
                                "line": 53
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
                              1973,
                              1979
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 53
                              },
                              "start": {
                                "column": 49,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            1967,
                            1979
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 53
                            },
                            "start": {
                              "column": 43,
                              "line": 53
                            }
                          }
                        },
                        "range": [
                          1938,
                          1979
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 53
                          },
                          "start": {
                            "column": 14,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1932,
                        1979
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 53
                        },
                        "start": {
                          "column": 8,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      1932,
                      1980
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 53
                      },
                      "start": {
                        "column": 8,
                        "line": 53
                      }
                    }
                  }
                ],
                "range": [
                  1617,
                  1996
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 54
                  },
                  "start": {
                    "column": 46,
                    "line": 44
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 44
                      },
                      "start": {
                        "column": 27,
                        "line": 44
                      }
                    },
                    "range": [
                      1598,
                      1615
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1600,
                            1606
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 44
                            },
                            "start": {
                              "column": 29,
                              "line": 44
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1609,
                            1615
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 44
                            },
                            "start": {
                              "column": 38,
                              "line": 44
                            }
                          }
                        }
                      ],
                      "range": [
                        1600,
                        1615
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 44
                        },
                        "start": {
                          "column": 29,
                          "line": 44
                        }
                      }
                    }
                  },
                  "range": [
                    1593,
                    1615
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 44
                    },
                    "start": {
                      "column": 22,
                      "line": 44
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 54
                },
                "start": {
                  "column": 21,
                  "line": 44
                }
              }
            },
            "range": [
              1575,
              1996
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 44
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
              "name": "s2",
              "optional": false,
              "range": [
                2043,
                2045
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 56
                },
                "start": {
                  "column": 11,
                  "line": 56
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                2045,
                2449
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "range": [
                          2127,
                          2130
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 58
                          },
                          "start": {
                            "column": 8,
                            "line": 58
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "range": [
                                2140,
                                2144
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 58
                                },
                                "start": {
                                  "column": 21,
                                  "line": 58
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              2133,
                              2144
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 58
                              },
                              "start": {
                                "column": 14,
                                "line": 58
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              2149,
                              2157
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 58
                              },
                              "start": {
                                "column": 30,
                                "line": 58
                              }
                            }
                          },
                          "range": [
                            2133,
                            2157
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 58
                            },
                            "start": {
                              "column": 14,
                              "line": 58
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "range": [
                              2161,
                              2165
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 58
                              },
                              "start": {
                                "column": 42,
                                "line": 58
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
                              2166,
                              2172
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 58
                              },
                              "start": {
                                "column": 47,
                                "line": 58
                              }
                            }
                          },
                          "range": [
                            2161,
                            2172
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 58
                            },
                            "start": {
                              "column": 42,
                              "line": 58
                            }
                          }
                        },
                        "range": [
                          2133,
                          2172
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 58
                          },
                          "start": {
                            "column": 14,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        2127,
                        2172
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 58
                        },
                        "start": {
                          "column": 8,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      2127,
                      2173
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
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
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 61
                              },
                              "start": {
                                "column": 16,
                                "line": 61
                              }
                            },
                            "range": [
                              2246,
                              2263
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    2248,
                                    2254
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 61
                                    }
                                  }
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    2257,
                                    2263
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 61
                                    }
                                  }
                                }
                              ],
                              "range": [
                                2248,
                                2263
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 61
                                },
                                "start": {
                                  "column": 18,
                                  "line": 61
                                }
                              }
                            }
                          },
                          "range": [
                            2242,
                            2263
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 61
                            },
                            "start": {
                              "column": 12,
                              "line": 61
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          2242,
                          2263
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 61
                          },
                          "start": {
                            "column": 12,
                            "line": 61
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2238,
                      2264
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 61
                      },
                      "start": {
                        "column": 8,
                        "line": 61
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
                        "name": "num",
                        "optional": false,
                        "range": [
                          2273,
                          2276
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 62
                          },
                          "start": {
                            "column": 8,
                            "line": 62
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "range": [
                                2286,
                                2290
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 62
                                },
                                "start": {
                                  "column": 21,
                                  "line": 62
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              2279,
                              2290
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 62
                              },
                              "start": {
                                "column": 14,
                                "line": 62
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              2295,
                              2303
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 62
                              },
                              "start": {
                                "column": 30,
                                "line": 62
                              }
                            }
                          },
                          "range": [
                            2279,
                            2303
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 62
                            },
                            "start": {
                              "column": 14,
                              "line": 62
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "range": [
                              2307,
                              2311
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 62
                              },
                              "start": {
                                "column": 42,
                                "line": 62
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
                              2312,
                              2318
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 62
                              },
                              "start": {
                                "column": 47,
                                "line": 62
                              }
                            }
                          },
                          "range": [
                            2307,
                            2318
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 62
                            },
                            "start": {
                              "column": 42,
                              "line": 62
                            }
                          }
                        },
                        "range": [
                          2279,
                          2318
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 62
                          },
                          "start": {
                            "column": 14,
                            "line": 62
                          }
                        }
                      },
                      "range": [
                        2273,
                        2318
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 62
                        },
                        "start": {
                          "column": 8,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      2273,
                      2319
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 62
                      },
                      "start": {
                        "column": 8,
                        "line": 62
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
                        "name": "num",
                        "optional": false,
                        "range": [
                          2385,
                          2388
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 65
                          },
                          "start": {
                            "column": 8,
                            "line": 65
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "range": [
                                2398,
                                2403
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 65
                                },
                                "start": {
                                  "column": 21,
                                  "line": 65
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              2391,
                              2403
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 65
                              },
                              "start": {
                                "column": 14,
                                "line": 65
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"string\"",
                            "value": "string",
                            "range": [
                              2408,
                              2416
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 65
                              },
                              "start": {
                                "column": 31,
                                "line": 65
                              }
                            }
                          },
                          "range": [
                            2391,
                            2416
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 65
                            },
                            "start": {
                              "column": 14,
                              "line": 65
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "range": [
                              2420,
                              2425
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 65
                              },
                              "start": {
                                "column": 43,
                                "line": 65
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
                              2426,
                              2432
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 65
                              },
                              "start": {
                                "column": 49,
                                "line": 65
                              }
                            }
                          },
                          "range": [
                            2420,
                            2432
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 65
                            },
                            "start": {
                              "column": 43,
                              "line": 65
                            }
                          }
                        },
                        "range": [
                          2391,
                          2432
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 65
                          },
                          "start": {
                            "column": 14,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        2385,
                        2432
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 65
                        },
                        "start": {
                          "column": 8,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      2385,
                      2433
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 65
                      }
                    }
                  }
                ],
                "range": [
                  2070,
                  2449
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 66
                  },
                  "start": {
                    "column": 38,
                    "line": 56
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 56
                      },
                      "start": {
                        "column": 19,
                        "line": 56
                      }
                    },
                    "range": [
                      2051,
                      2068
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2053,
                            2059
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 56
                            },
                            "start": {
                              "column": 21,
                              "line": 56
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2062,
                            2068
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 56
                            },
                            "start": {
                              "column": 30,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "range": [
                        2053,
                        2068
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 56
                        },
                        "start": {
                          "column": 21,
                          "line": 56
                        }
                      }
                    }
                  },
                  "range": [
                    2046,
                    2068
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 56
                    },
                    "start": {
                      "column": 14,
                      "line": 56
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 66
                },
                "start": {
                  "column": 13,
                  "line": 56
                }
              }
            },
            "range": [
              2036,
              2449
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          211,
          213
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        205,
        2451
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 68
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
