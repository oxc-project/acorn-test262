__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    518
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "ThisInObjectLiteral",
                  "optional": false,
                  "range": [
                    31,
                    50
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_foo",
                        "optional": false,
                        "range": [
                          63,
                          67
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "'1'",
                        "value": "1",
                        "range": [
                          69,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 3
                          },
                          "start": {
                            "column": 14,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        63,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          86,
                          89
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
                      "kind": "get",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          89,
                          142
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "range": [
                                    121,
                                    126
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 5
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_foo",
                                  "optional": false,
                                  "range": [
                                    127,
                                    131
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  121,
                                  131
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                114,
                                132
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 5
                                },
                                "start": {
                                  "column": 12,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "range": [
                            100,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 6
                            },
                            "start": {
                              "column": 26,
                              "line": 4
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
                              "line": 4
                            }
                          },
                          "range": [
                            91,
                            99
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              93,
                              99
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 4
                              },
                              "start": {
                                "column": 19,
                                "line": 4
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 6
                          },
                          "start": {
                            "column": 15,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        82,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          156,
                          159
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      },
                      "kind": "set",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          159,
                          218
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
                                    "type": "Super",
                                    "range": [
                                      189,
                                      194
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
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
                                    "name": "_foo",
                                    "optional": false,
                                    "range": [
                                      195,
                                      199
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    189,
                                    199
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
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "range": [
                                    202,
                                    207
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  189,
                                  207
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
                              "range": [
                                189,
                                208
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
                            }
                          ],
                          "range": [
                            175,
                            218
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 9
                            },
                            "start": {
                              "column": 31,
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 7
                                },
                                "start": {
                                  "column": 21,
                                  "line": 7
                                }
                              },
                              "range": [
                                165,
                                173
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  167,
                                  173
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              160,
                              173
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
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
                            "column": 9,
                            "line": 9
                          },
                          "start": {
                            "column": 15,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        152,
                        218
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "range": [
                          228,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "range": [
                                    267,
                                    272
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
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
                                  "name": "_foo",
                                  "optional": false,
                                  "range": [
                                    273,
                                    277
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 11
                                    }
                                  }
                                },
                                "range": [
                                  267,
                                  277
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                260,
                                278
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
                            }
                          ],
                          "range": [
                            246,
                            288
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 12
                            },
                            "start": {
                              "column": 26,
                              "line": 10
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          234,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 12
                          },
                          "start": {
                            "column": 14,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        228,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    53,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 30,
                      "line": 2
                    }
                  }
                },
                "range": [
                  31,
                  294
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              27,
              294
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
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
          296
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 21,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          20
        ],
        "decorators": [],
        "name": "ObjectLiteral",
        "optional": false,
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        296
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
          306,
          346
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                315,
                319
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
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
                319,
                344
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        339,
                        341
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 16
                        },
                        "start": {
                          "column": 41,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      332,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 16
                      },
                      "start": {
                        "column": 34,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  330,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 16
                  },
                  "start": {
                    "column": 32,
                    "line": 16
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 16
                  },
                  "start": {
                    "column": 23,
                    "line": 16
                  }
                },
                "range": [
                  321,
                  329
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    323,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 16
                    },
                    "start": {
                      "column": 25,
                      "line": 16
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 46,
                  "line": 16
                },
                "start": {
                  "column": 21,
                  "line": 16
                }
              }
            },
            "range": [
              308,
              344
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 16
              },
              "start": {
                "column": 10,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 16
          },
          "start": {
            "column": 8,
            "line": 16
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "range": [
          304,
          305
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 16
          },
          "start": {
            "column": 6,
            "line": 16
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        298,
        346
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          379,
          516
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testing",
              "optional": false,
              "range": [
                392,
                399
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
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
                399,
                514
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
                          "name": "test",
                          "optional": false,
                          "range": [
                            416,
                            420
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 19
                            },
                            "start": {
                              "column": 12,
                              "line": 19
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "range": [
                                  441,
                                  442
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 20
                                  }
                                }
                              },
                              "kind": "get",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "range": [
                                  442,
                                  497
                                ],
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "range": [
                                              470,
                                              475
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 21
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 21
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "test",
                                            "optional": false,
                                            "range": [
                                              476,
                                              480
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 33,
                                                "line": 21
                                              },
                                              "start": {
                                                "column": 29,
                                                "line": 21
                                              }
                                            }
                                          },
                                          "range": [
                                            470,
                                            480
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 33,
                                              "line": 21
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 21
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          470,
                                          482
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 35,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 21
                                          }
                                        }
                                      },
                                      "range": [
                                        463,
                                        483
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 21
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    445,
                                    497
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 20
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
                                    "column": 13,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                437,
                                497
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 22
                                },
                                "start": {
                                  "column": 12,
                                  "line": 20
                                }
                              }
                            }
                          ],
                          "range": [
                            423,
                            507
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 23
                            },
                            "start": {
                              "column": 19,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          416,
                          507
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 23
                          },
                          "start": {
                            "column": 12,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      412,
                      508
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  402,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 21,
                    "line": 18
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
                  "line": 24
                },
                "start": {
                  "column": 18,
                  "line": 18
                }
              }
            },
            "range": [
              385,
              514
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 32,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SuperObjectTest",
        "optional": false,
        "range": [
          353,
          368
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "range": [
          377,
          378
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 17
          },
          "start": {
            "column": 30,
            "line": 17
          }
        }
      },
      "range": [
        347,
        516
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
