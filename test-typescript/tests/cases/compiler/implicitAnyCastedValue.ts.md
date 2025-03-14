__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1633
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
            "name": "x",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "expression": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        38,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 2
                        },
                        "start": {
                          "column": 16,
                          "line": 2
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        34,
                        37
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 2
                        },
                        "start": {
                          "column": 12,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      33,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    26,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 2
                    },
                    "start": {
                      "column": 4,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                20,
                74
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              8,
              74
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            74
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        74
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "Literal",
                "raw": "\"hello world\"",
                "value": "hello world",
                "range": [
                  109,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 6
                  },
                  "start": {
                    "column": 16,
                    "line": 6
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  105,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 12,
                    "line": 6
                  }
                }
              },
              "range": [
                104,
                122
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
            "range": [
              97,
              123
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          91,
          157
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          85,
          88
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [],
      "range": [
        76,
        157
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          167,
          557
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
              "name": "bar",
              "optional": false,
              "range": [
                173,
                176
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                179,
                183
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "range": [
              173,
              184
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
              "name": "foo",
              "optional": false,
              "range": [
                217,
                220
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                223,
                232
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              }
            },
            "range": [
              217,
              233
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
              "name": "tempVar",
              "optional": false,
              "range": [
                277,
                284
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                284,
                349
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "expression": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          309,
                          310
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
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          305,
                          308
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 13
                          },
                          "start": {
                            "column": 16,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        304,
                        310
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      297,
                      311
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  287,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 12
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
                  "line": 14
                },
                "start": {
                  "column": 22,
                  "line": 12
                }
              }
            },
            "range": [
              266,
              349
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
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
              "name": "returnBarWithCase",
              "optional": false,
              "range": [
                362,
                379
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 16
                },
                "start": {
                  "column": 11,
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
                379,
                453
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            438,
                            442
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
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "range": [
                            443,
                            446
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 17
                            },
                            "start": {
                              "column": 25,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          438,
                          446
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 17
                          },
                          "start": {
                            "column": 20,
                            "line": 17
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          434,
                          437
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 17
                          },
                          "start": {
                            "column": 16,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        433,
                        446
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      426,
                      447
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
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
                  382,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 31,
                    "line": 16
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
                  "line": 18
                },
                "start": {
                  "column": 28,
                  "line": 16
                }
              }
            },
            "range": [
              355,
              453
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
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
              "name": "returnFooWithCase",
              "optional": false,
              "range": [
                466,
                483
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 20
                },
                "start": {
                  "column": 11,
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
                483,
                555
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            508,
                            512
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 21
                            },
                            "start": {
                              "column": 20,
                              "line": 21
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
                            513,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 21
                            },
                            "start": {
                              "column": 25,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          508,
                          516
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 21
                          },
                          "start": {
                            "column": 20,
                            "line": 21
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          504,
                          507
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 21
                          },
                          "start": {
                            "column": 16,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        503,
                        516
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 21
                        },
                        "start": {
                          "column": 15,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      496,
                      517
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  486,
                  555
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 31,
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
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 28,
                  "line": 20
                }
              }
            },
            "range": [
              459,
              555
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
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
            "line": 9
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
          165,
          166
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        159,
        557
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          568,
          824
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
              "name": "getValue",
              "optional": false,
              "range": [
                574,
                582
              ],
              "loc": {
                "end": {
                  "column": 12,
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
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                585,
                589
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 26
                },
                "start": {
                  "column": 15,
                  "line": 26
                }
              }
            },
            "range": [
              574,
              590
            ],
            "loc": {
              "end": {
                "column": 20,
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
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "castedGet",
              "optional": false,
              "range": [
                635,
                644
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 28
                },
                "start": {
                  "column": 15,
                  "line": 28
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                644,
                721
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            669,
                            673
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
                          "name": "getValue",
                          "optional": false,
                          "range": [
                            674,
                            682
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 29
                            },
                            "start": {
                              "column": 25,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          669,
                          682
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          665,
                          668
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 29
                          },
                          "start": {
                            "column": 16,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        664,
                        682
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 29
                        },
                        "start": {
                          "column": 15,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      657,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
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
                  647,
                  721
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 27,
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
                  "column": 24,
                  "line": 28
                }
              }
            },
            "range": [
              624,
              721
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
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "notCastedGet",
              "optional": false,
              "range": [
                738,
                750
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 32
                },
                "start": {
                  "column": 15,
                  "line": 32
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                750,
                822
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
                        "type": "ThisExpression",
                        "range": [
                          770,
                          774
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 33
                          },
                          "start": {
                            "column": 15,
                            "line": 33
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getValue",
                        "optional": false,
                        "range": [
                          775,
                          783
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 33
                          },
                          "start": {
                            "column": 20,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        770,
                        783
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 33
                        },
                        "start": {
                          "column": 15,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      763,
                      784
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  753,
                  822
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 34
                  },
                  "start": {
                    "column": 30,
                    "line": 32
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
                  "line": 34
                },
                "start": {
                  "column": 27,
                  "line": 32
                }
              }
            },
            "range": [
              727,
              822
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 25
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
          565,
          567
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 25
          },
          "start": {
            "column": 6,
            "line": 25
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        559,
        824
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 25
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
              "type": "TSTypeAssertion",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  866,
                  870
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 38
                  },
                  "start": {
                    "column": 16,
                    "line": 38
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  862,
                  865
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 38
                  },
                  "start": {
                    "column": 12,
                    "line": 38
                  }
                }
              },
              "range": [
                861,
                870
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 38
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            },
            "range": [
              854,
              871
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          848,
          905
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 22,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "castedNull",
        "optional": false,
        "range": [
          835,
          845
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "params": [],
      "range": [
        826,
        905
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 37
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
              "raw": "null",
              "value": null,
              "range": [
                945,
                949
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 42
                },
                "start": {
                  "column": 11,
                  "line": 42
                }
              }
            },
            "range": [
              938,
              950
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          }
        ],
        "range": [
          932,
          980
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 25,
            "line": 41
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notCastedNull",
        "optional": false,
        "range": [
          916,
          929
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 41
          },
          "start": {
            "column": 9,
            "line": 41
          }
        }
      },
      "params": [],
      "range": [
        907,
        980
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 41
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
              "raw": "null",
              "value": null,
              "range": [
                1025,
                1029
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 46
                },
                "start": {
                  "column": 11,
                  "line": 46
                }
              }
            },
            "range": [
              1018,
              1030
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          1012,
          1064
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 30,
            "line": 45
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnTypeBar",
        "optional": false,
        "range": [
          991,
          1004
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 45
          },
          "start": {
            "column": 9,
            "line": 45
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 45
          },
          "start": {
            "column": 24,
            "line": 45
          }
        },
        "range": [
          1006,
          1011
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            1008,
            1011
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 45
            },
            "start": {
              "column": 26,
              "line": 45
            }
          }
        }
      },
      "range": [
        982,
        1064
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 45
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
              "type": "TSTypeAssertion",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  1108,
                  1117
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 50
                  },
                  "start": {
                    "column": 16,
                    "line": 50
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1104,
                  1107
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 50
                  },
                  "start": {
                    "column": 12,
                    "line": 50
                  }
                }
              },
              "range": [
                1103,
                1117
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 50
                },
                "start": {
                  "column": 11,
                  "line": 50
                }
              }
            },
            "range": [
              1096,
              1118
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "range": [
          1090,
          1152
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 24,
            "line": 49
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefinedBar",
        "optional": false,
        "range": [
          1075,
          1087
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 49
          }
        }
      },
      "params": [],
      "range": [
        1066,
        1152
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 49
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      1284,
                      1288
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 58
                      },
                      "start": {
                        "column": 15,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1277,
                    1289
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                }
              ],
              "range": [
                1267,
                1295
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 59
                },
                "start": {
                  "column": 9,
                  "line": 57
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "expression": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1249,
                        1250
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 55
                        },
                        "start": {
                          "column": 20,
                          "line": 55
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1245,
                        1248
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 55
                        },
                        "start": {
                          "column": 16,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1244,
                      1250
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 55
                      },
                      "start": {
                        "column": 15,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1237,
                    1251
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                1227,
                1257
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 56
                },
                "start": {
                  "column": 11,
                  "line": 54
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1224,
                1225
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 54
                },
                "start": {
                  "column": 8,
                  "line": 54
                }
              }
            },
            "range": [
              1220,
              1295
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "range": [
          1180,
          1297
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 26,
            "line": 53
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleRets1",
        "optional": false,
        "range": [
          1163,
          1176
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 53
          },
          "start": {
            "column": 9,
            "line": 53
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            1177,
            1178
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 53
            },
            "start": {
              "column": 23,
              "line": 53
            }
          }
        }
      ],
      "range": [
        1154,
        1297
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 53
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
            "type": "IfStatement",
            "alternate": {
              "type": "IfStatement",
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        1479,
                        1488
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 70
                        },
                        "start": {
                          "column": 15,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      1472,
                      1489
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 70
                      },
                      "start": {
                        "column": 8,
                        "line": 70
                      }
                    }
                  }
                ],
                "range": [
                  1462,
                  1495
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 71
                  },
                  "start": {
                    "column": 9,
                    "line": 69
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "expression": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1444,
                          1445
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 67
                          },
                          "start": {
                            "column": 20,
                            "line": 67
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          1440,
                          1443
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 67
                          },
                          "start": {
                            "column": 16,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        1439,
                        1445
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 67
                        },
                        "start": {
                          "column": 15,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      1432,
                      1446
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  }
                ],
                "range": [
                  1422,
                  1452
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 68
                  },
                  "start": {
                    "column": 21,
                    "line": 66
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1414,
                    1415
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 66
                    },
                    "start": {
                      "column": 13,
                      "line": 66
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1419,
                    1420
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 66
                    },
                    "start": {
                      "column": 18,
                      "line": 66
                    }
                  }
                },
                "range": [
                  1414,
                  1420
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 66
                  },
                  "start": {
                    "column": 13,
                    "line": 66
                  }
                }
              },
              "range": [
                1410,
                1495
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 71
                },
                "start": {
                  "column": 9,
                  "line": 66
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      1389,
                      1393
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 64
                      },
                      "start": {
                        "column": 15,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    1382,
                    1394
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
                    }
                  }
                }
              ],
              "range": [
                1372,
                1400
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 65
                },
                "start": {
                  "column": 11,
                  "line": 63
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1369,
                1370
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 63
                },
                "start": {
                  "column": 8,
                  "line": 63
                }
              }
            },
            "range": [
              1365,
              1495
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          }
        ],
        "range": [
          1325,
          1497
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 72
          },
          "start": {
            "column": 26,
            "line": 62
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleRets2",
        "optional": false,
        "range": [
          1308,
          1321
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 62
          },
          "start": {
            "column": 9,
            "line": 62
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            1322,
            1323
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 62
            },
            "start": {
              "column": 23,
              "line": 62
            }
          }
        }
      ],
      "range": [
        1299,
        1497
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 62
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
            "name": "bar1",
            "optional": false,
            "range": [
              1534,
              1538
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                1546,
                1550
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 75
                },
                "start": {
                  "column": 16,
                  "line": 75
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1542,
                1545
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 75
                },
                "start": {
                  "column": 12,
                  "line": 75
                }
              }
            },
            "range": [
              1541,
              1550
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 75
              },
              "start": {
                "column": 11,
                "line": 75
              }
            }
          },
          "range": [
            1534,
            1550
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 75
            },
            "start": {
              "column": 4,
              "line": 75
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1530,
        1551
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
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
            "name": "bar2",
            "optional": false,
            "range": [
              1556,
              1560
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                1568,
                1577
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 76
                },
                "start": {
                  "column": 16,
                  "line": 76
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1564,
                1567
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 76
                },
                "start": {
                  "column": 12,
                  "line": 76
                }
              }
            },
            "range": [
              1563,
              1577
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 76
              },
              "start": {
                "column": 11,
                "line": 76
              }
            }
          },
          "range": [
            1556,
            1577
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 76
            },
            "start": {
              "column": 4,
              "line": 76
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1552,
        1578
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
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
            "name": "bar3",
            "optional": false,
            "range": [
              1583,
              1587
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1595,
                1596
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 77
                },
                "start": {
                  "column": 16,
                  "line": 77
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1591,
                1594
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 77
                },
                "start": {
                  "column": 12,
                  "line": 77
                }
              }
            },
            "range": [
              1590,
              1596
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 77
              },
              "start": {
                "column": 11,
                "line": 77
              }
            }
          },
          "range": [
            1583,
            1596
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 77
            },
            "start": {
              "column": 4,
              "line": 77
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1579,
        1597
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
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
            "name": "array",
            "optional": false,
            "range": [
              1602,
              1607
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1616,
                    1620
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 78
                    },
                    "start": {
                      "column": 18,
                      "line": 78
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    1622,
                    1631
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 78
                    },
                    "start": {
                      "column": 24,
                      "line": 78
                    }
                  }
                }
              ],
              "range": [
                1615,
                1632
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 78
                },
                "start": {
                  "column": 17,
                  "line": 78
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1611,
                1614
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 78
                },
                "start": {
                  "column": 13,
                  "line": 78
                }
              }
            },
            "range": [
              1610,
              1632
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 78
              },
              "start": {
                "column": 12,
                "line": 78
              }
            }
          },
          "range": [
            1602,
            1632
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 78
            },
            "start": {
              "column": 4,
              "line": 78
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1598,
        1633
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 35,
      "line": 78
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
