__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    488
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          155
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                17,
                28
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                28,
                53
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            45,
                            46
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
                        "init": null,
                        "range": [
                          45,
                          46
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
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      41,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  31,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 2
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
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              17,
              53
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                65,
                68
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
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
                68,
                101
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"base\"",
                      "value": "base",
                      "range": [
                        88,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 6
                        },
                        "start": {
                          "column": 15,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      81,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  71,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 17,
                    "line": 5
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
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "range": [
              58,
              101
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                114,
                117
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
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
                117,
                153
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"basebar\"",
                      "value": "basebar",
                      "range": [
                        137,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      130,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  120,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 17,
                    "line": 9
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
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              107,
              153
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
        155
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
          181,
          260
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
              "name": "foo",
              "optional": false,
              "range": [
                194,
                197
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
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
                197,
                258
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "raw": "\"sub1\"",
                          "value": "sub1",
                          "range": [
                            217,
                            223
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 16
                            },
                            "start": {
                              "column": 15,
                              "line": 16
                            }
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "range": [
                                226,
                                231
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 16
                                },
                                "start": {
                                  "column": 24,
                                  "line": 16
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
                                232,
                                235
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 16
                                },
                                "start": {
                                  "column": 30,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              226,
                              235
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 16
                              },
                              "start": {
                                "column": 24,
                                "line": 16
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            226,
                            237
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 16
                            },
                            "start": {
                              "column": 24,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          217,
                          237
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 16
                          },
                          "start": {
                            "column": 15,
                            "line": 16
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "range": [
                              240,
                              245
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 16
                              },
                              "start": {
                                "column": 38,
                                "line": 16
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
                              246,
                              249
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 16
                              },
                              "start": {
                                "column": 44,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            240,
                            249
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 16
                            },
                            "start": {
                              "column": 38,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          240,
                          251
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 16
                          },
                          "start": {
                            "column": 38,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        217,
                        251
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 16
                        },
                        "start": {
                          "column": 15,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      210,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  200,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 17,
                    "line": 15
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
                  "line": 17
                },
                "start": {
                  "column": 14,
                  "line": 15
                }
              }
            },
            "range": [
              187,
              258
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 15
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
            "column": 24,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "range": [
          163,
          167
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          176,
          180
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 14
          },
          "start": {
            "column": 19,
            "line": 14
          }
        }
      },
      "range": [
        157,
        260
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          290,
          358
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
              "name": "foo",
              "optional": false,
              "range": [
                303,
                306
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
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
                306,
                356
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "raw": "\"subsub1\"",
                        "value": "subsub1",
                        "range": [
                          326,
                          335
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 23
                          },
                          "start": {
                            "column": 15,
                            "line": 23
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "range": [
                              338,
                              343
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 23
                              },
                              "start": {
                                "column": 27,
                                "line": 23
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
                              344,
                              347
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 23
                              },
                              "start": {
                                "column": 33,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            338,
                            347
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 23
                            },
                            "start": {
                              "column": 27,
                              "line": 23
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          338,
                          349
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 23
                          },
                          "start": {
                            "column": 27,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        326,
                        349
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 23
                        },
                        "start": {
                          "column": 15,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      319,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  309,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 17,
                    "line": 22
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
                  "column": 14,
                  "line": 22
                }
              }
            },
            "range": [
              296,
              356
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 22
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
            "column": 27,
            "line": 21
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubSub1",
        "optional": false,
        "range": [
          269,
          276
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 6,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "range": [
          285,
          289
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 21
          },
          "start": {
            "column": 22,
            "line": 21
          }
        }
      },
      "range": [
        263,
        358
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          372,
          421
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
              "name": "foo",
              "optional": false,
              "range": [
                385,
                388
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
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
                388,
                419
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "range": [
                            401,
                            406
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
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
                          "name": "foo",
                          "optional": false,
                          "range": [
                            407,
                            410
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 29
                            },
                            "start": {
                              "column": 14,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          401,
                          410
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
                      "optional": false,
                      "range": [
                        401,
                        412
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      401,
                      413
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                  391,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 17,
                    "line": 28
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
                  "line": 30
                },
                "start": {
                  "column": 14,
                  "line": 28
                }
              }
            },
            "range": [
              378,
              419
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 12,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "range": [
          366,
          371
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        360,
        421
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "s",
            "optional": false,
            "range": [
              427,
              428
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sub1",
              "optional": false,
              "range": [
                435,
                439
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 33
                },
                "start": {
                  "column": 12,
                  "line": 33
                }
              }
            },
            "range": [
              431,
              441
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
          "range": [
            427,
            441
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        423,
        442
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "ss",
            "optional": false,
            "range": [
              447,
              449
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubSub1",
              "optional": false,
              "range": [
                456,
                463
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 34
                },
                "start": {
                  "column": 13,
                  "line": 34
                }
              }
            },
            "range": [
              452,
              465
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 34
              },
              "start": {
                "column": 9,
                "line": 34
              }
            }
          },
          "range": [
            447,
            465
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        443,
        466
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "+",
        "left": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                467,
                468
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 35
                },
                "start": {
                  "column": 0,
                  "line": 35
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
                469,
                472
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 2,
                  "line": 35
                }
              }
            },
            "range": [
              467,
              472
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 0,
                "line": 35
              }
            }
          },
          "optional": false,
          "range": [
            467,
            474
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ss",
              "optional": false,
              "range": [
                477,
                479
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 35
                },
                "start": {
                  "column": 10,
                  "line": 35
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
                480,
                483
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 35
                },
                "start": {
                  "column": 13,
                  "line": 35
                }
              }
            },
            "range": [
              477,
              483
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 35
              },
              "start": {
                "column": 10,
                "line": 35
              }
            }
          },
          "optional": false,
          "range": [
            477,
            485
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 35
            },
            "start": {
              "column": 10,
              "line": 35
            }
          }
        },
        "range": [
          467,
          485
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        467,
        486
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 37
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
