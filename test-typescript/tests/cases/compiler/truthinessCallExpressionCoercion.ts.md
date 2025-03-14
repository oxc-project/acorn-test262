__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1638
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                125,
                141
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "required",
              "optional": false,
              "range": [
                115,
                123
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "range": [
              111,
              141
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                161,
                174
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 5
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "optional",
              "optional": false,
              "range": [
                151,
                159
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              147,
              174
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                196,
                209
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 8
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "range": [
                    186,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 10,
                      "line": 8
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  185,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                184,
                194
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "range": [
              180,
              209
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                231,
                244
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "required",
                "optional": false,
                "range": [
                  219,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "range": [
                219,
                229
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "range": [
              215,
              244
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          105,
          246
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 105,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyErrorsWhenTestingNonNullableFunctionType",
        "optional": false,
        "range": [
          9,
          53
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "required",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 1
              },
              "start": {
                "column": 62,
                "line": 1
              }
            },
            "range": [
              62,
              77
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 1
                  },
                  "start": {
                    "column": 67,
                    "line": 1
                  }
                },
                "range": [
                  67,
                  77
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    70,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 1
                    },
                    "start": {
                      "column": 70,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                64,
                77
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 1
                },
                "start": {
                  "column": 64,
                  "line": 1
                }
              }
            }
          },
          "range": [
            54,
            77
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 1
            },
            "start": {
              "column": 54,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optional",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 103,
                "line": 1
              },
              "start": {
                "column": 88,
                "line": 1
              }
            },
            "range": [
              88,
              103
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 103,
                    "line": 1
                  },
                  "start": {
                    "column": 93,
                    "line": 1
                  }
                },
                "range": [
                  93,
                  103
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    96,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 1
                    },
                    "start": {
                      "column": 96,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                90,
                103
              ],
              "loc": {
                "end": {
                  "column": 103,
                  "line": 1
                },
                "start": {
                  "column": 90,
                  "line": 1
                }
              }
            }
          },
          "range": [
            79,
            103
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 1
            },
            "start": {
              "column": 79,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        246
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
            "type": "FunctionDeclaration",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "range": [
                            317,
                            321
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 16
                            },
                            "start": {
                              "column": 29,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "range": [
                            322,
                            328
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 16
                            },
                            "start": {
                              "column": 34,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          317,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 16
                          },
                          "start": {
                            "column": 29,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        317,
                        330
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 16
                        },
                        "start": {
                          "column": 29,
                          "line": 16
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "0.5",
                      "value": 0.5,
                      "range": [
                        333,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 16
                        },
                        "start": {
                          "column": 45,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      317,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 16
                      },
                      "start": {
                        "column": 29,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    310,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 16
                    },
                    "start": {
                      "column": 22,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                308,
                339
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 16
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                301,
                305
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            "params": [],
            "range": [
              292,
              339
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "'test'",
                        "value": "test",
                        "range": [
                          386,
                          392
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 19
                          },
                          "start": {
                            "column": 20,
                            "line": 19
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
                        "name": "console",
                        "optional": false,
                        "range": [
                          374,
                          381
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "range": [
                          382,
                          385
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 19
                          },
                          "start": {
                            "column": 16,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        374,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      374,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    374,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                355,
                400
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 18
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                349,
                353
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "range": [
              345,
              400
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 18
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "range": [
                          448,
                          452
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 23
                          },
                          "start": {
                            "column": 20,
                            "line": 23
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
                        "name": "console",
                        "optional": false,
                        "range": [
                          436,
                          443
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "range": [
                          444,
                          447
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 23
                          },
                          "start": {
                            "column": 16,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        436,
                        447
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      436,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    436,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                420,
                460
              ],
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
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                414,
                418
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "range": [
              410,
              460
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
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "range": [
                        492,
                        496
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
                    },
                    "optional": false,
                    "range": [
                      492,
                      498
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    492,
                    499
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
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
                476,
                505
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 14,
                  "line": 26
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                470,
                474
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "range": [
              466,
              505
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "range": [
                                    582,
                                    586
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 32
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  582,
                                  588
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 32
                                  }
                                }
                              },
                              "range": [
                                582,
                                589
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 32
                                },
                                "start": {
                                  "column": 12,
                                  "line": 32
                                }
                              }
                            }
                          ],
                          "range": [
                            568,
                            599
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 33
                            },
                            "start": {
                              "column": 35,
                              "line": 31
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          562,
                          599
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 33
                          },
                          "start": {
                            "column": 29,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "Literal",
                              "raw": "null",
                              "value": null,
                              "range": [
                                548,
                                552
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 31
                                },
                                "start": {
                                  "column": 15,
                                  "line": 31
                                }
                              }
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "range": [
                              542,
                              552
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 31
                              },
                              "start": {
                                "column": 9,
                                "line": 31
                              }
                            }
                          }
                        ],
                        "range": [
                          541,
                          553
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
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
                        "name": "forEach",
                        "optional": false,
                        "range": [
                          554,
                          561
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 31
                          },
                          "start": {
                            "column": 21,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        541,
                        561
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      541,
                      600
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    541,
                    601
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                525,
                607
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 14,
                  "line": 30
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                519,
                523
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
            "range": [
              515,
              607
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 30
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "range": [
                                    689,
                                    693
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 38
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  689,
                                  695
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 38
                                  }
                                }
                              },
                              "range": [
                                689,
                                696
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 38
                                },
                                "start": {
                                  "column": 12,
                                  "line": 38
                                }
                              }
                            }
                          ],
                          "range": [
                            675,
                            706
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 39
                            },
                            "start": {
                              "column": 37,
                              "line": 37
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
                            "name": "test",
                            "optional": false,
                            "range": [
                              667,
                              671
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 37
                              },
                              "start": {
                                "column": 29,
                                "line": 37
                              }
                            }
                          }
                        ],
                        "range": [
                          667,
                          706
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 39
                          },
                          "start": {
                            "column": 29,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "Literal",
                              "raw": "null",
                              "value": null,
                              "range": [
                                653,
                                657
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 37
                                },
                                "start": {
                                  "column": 15,
                                  "line": 37
                                }
                              }
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "range": [
                              647,
                              657
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
                          }
                        ],
                        "range": [
                          646,
                          658
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
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
                        "name": "forEach",
                        "optional": false,
                        "range": [
                          659,
                          666
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 37
                          },
                          "start": {
                            "column": 21,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        646,
                        666
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 37
                        },
                        "start": {
                          "column": 8,
                          "line": 37
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      646,
                      707
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    646,
                    708
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                627,
                714
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 14,
                  "line": 36
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                621,
                625
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
            "range": [
              617,
              714
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          286,
          716
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 38,
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
        "name": "onlyErrorsWhenUnusedInBody",
        "optional": false,
        "range": [
          257,
          283
        ],
        "loc": {
          "end": {
            "column": 35,
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
        248,
        716
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    762,
                    763
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 44
                    },
                    "start": {
                      "column": 10,
                      "line": 44
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
                        "name": "foo",
                        "optional": false,
                        "range": [
                          776,
                          779
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 45
                          },
                          "start": {
                            "column": 8,
                            "line": 45
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "range": [
                                795,
                                798
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 46
                                },
                                "start": {
                                  "column": 12,
                                  "line": 46
                                }
                              }
                            },
                            "kind": "init",
                            "method": true,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "FunctionExpression",
                              "range": [
                                798,
                                817
                              ],
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Literal",
                                      "raw": "true",
                                      "value": true,
                                      "range": [
                                        810,
                                        814
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 46
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 46
                                        }
                                      }
                                    },
                                    "range": [
                                      803,
                                      815
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 46
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 46
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  801,
                                  817
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 46
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
                                  "column": 34,
                                  "line": 46
                                },
                                "start": {
                                  "column": 15,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              795,
                              817
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 46
                              },
                              "start": {
                                "column": 12,
                                "line": 46
                              }
                            }
                          }
                        ],
                        "range": [
                          781,
                          827
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 47
                          },
                          "start": {
                            "column": 13,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        776,
                        827
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 47
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "range": [
                    766,
                    833
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 48
                    },
                    "start": {
                      "column": 14,
                      "line": 44
                    }
                  }
                },
                "range": [
                  762,
                  833
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 48
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
              756,
              833
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                854,
                870
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 51
                },
                "start": {
                  "column": 19,
                  "line": 50
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    843,
                    844
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
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
                    845,
                    848
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 50
                    },
                    "start": {
                      "column": 10,
                      "line": 50
                    }
                  }
                },
                "range": [
                  843,
                  848
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 50
                  },
                  "start": {
                    "column": 8,
                    "line": 50
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
                  849,
                  852
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 50
                  },
                  "start": {
                    "column": 14,
                    "line": 50
                  }
                }
              },
              "range": [
                843,
                852
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 50
                },
                "start": {
                  "column": 8,
                  "line": 50
                }
              }
            },
            "range": [
              839,
              870
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 50
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          907,
                          908
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
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          909,
                          912
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 54
                          },
                          "start": {
                            "column": 10,
                            "line": 54
                          }
                        }
                      },
                      "range": [
                        907,
                        912
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 54
                        },
                        "start": {
                          "column": 8,
                          "line": 54
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
                        913,
                        916
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 54
                        },
                        "start": {
                          "column": 14,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      907,
                      916
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 54
                      },
                      "start": {
                        "column": 8,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    907,
                    917
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 54
                    },
                    "start": {
                      "column": 8,
                      "line": 54
                    }
                  }
                }
              ],
              "range": [
                891,
                923
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 55
                },
                "start": {
                  "column": 19,
                  "line": 53
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    880,
                    881
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 53
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
                    882,
                    885
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 53
                    },
                    "start": {
                      "column": 10,
                      "line": 53
                    }
                  }
                },
                "range": [
                  880,
                  885
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 53
                  },
                  "start": {
                    "column": 8,
                    "line": 53
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
                  886,
                  889
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 53
                  },
                  "start": {
                    "column": 14,
                    "line": 53
                  }
                }
              },
              "range": [
                880,
                889
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 53
                },
                "start": {
                  "column": 8,
                  "line": 53
                }
              }
            },
            "range": [
              876,
              923
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "range": [
          750,
          925
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 32,
            "line": 43
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checksPropertyAccess",
        "optional": false,
        "range": [
          727,
          747
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 43
          },
          "start": {
            "column": 9,
            "line": 43
          }
        }
      },
      "params": [],
      "range": [
        718,
        925
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          937,
          1131
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
              "name": "maybeIsUser",
              "optional": false,
              "range": [
                943,
                954
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 59
                },
                "start": {
                  "column": 16,
                  "line": 59
                }
              },
              "range": [
                955,
                970
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 59
                    },
                    "start": {
                      "column": 21,
                      "line": 59
                    }
                  },
                  "range": [
                    960,
                    970
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      963,
                      970
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 59
                      },
                      "start": {
                        "column": 24,
                        "line": 59
                      }
                    }
                  }
                },
                "range": [
                  957,
                  970
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 59
                  },
                  "start": {
                    "column": 18,
                    "line": 59
                  }
                }
              }
            },
            "value": null,
            "range": [
              943,
              971
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
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
              "name": "isUser",
              "optional": false,
              "range": [
                977,
                983
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
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
                983,
                1014
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        1003,
                        1007
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 62
                        },
                        "start": {
                          "column": 15,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      996,
                      1008
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 62
                      },
                      "start": {
                        "column": 8,
                        "line": 62
                      }
                    }
                  }
                ],
                "range": [
                  986,
                  1014
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 63
                  },
                  "start": {
                    "column": 13,
                    "line": 61
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
                  "line": 63
                },
                "start": {
                  "column": 10,
                  "line": 61
                }
              }
            },
            "range": [
              977,
              1014
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 61
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
              "name": "test",
              "optional": false,
              "range": [
                1020,
                1024
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
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
                1024,
                1129
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1054,
                        1074
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 67
                        },
                        "start": {
                          "column": 25,
                          "line": 66
                        }
                      }
                    },
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          1041,
                          1045
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 66
                          },
                          "start": {
                            "column": 12,
                            "line": 66
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isUser",
                        "optional": false,
                        "range": [
                          1046,
                          1052
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 66
                          },
                          "start": {
                            "column": 17,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1041,
                        1052
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 66
                        },
                        "start": {
                          "column": 12,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1037,
                      1074
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 66
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1106,
                        1123
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 70
                        },
                        "start": {
                          "column": 30,
                          "line": 69
                        }
                      }
                    },
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          1088,
                          1092
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 69
                          },
                          "start": {
                            "column": 12,
                            "line": 69
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maybeIsUser",
                        "optional": false,
                        "range": [
                          1093,
                          1104
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 69
                          },
                          "start": {
                            "column": 17,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1088,
                        1104
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 69
                        },
                        "start": {
                          "column": 12,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      1084,
                      1123
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 70
                      },
                      "start": {
                        "column": 8,
                        "line": 69
                      }
                    }
                  }
                ],
                "range": [
                  1027,
                  1129
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 71
                  },
                  "start": {
                    "column": 11,
                    "line": 65
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
                  "line": 71
                },
                "start": {
                  "column": 8,
                  "line": 65
                }
              }
            },
            "range": [
              1020,
              1129
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 72
          },
          "start": {
            "column": 10,
            "line": 58
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
          933,
          936
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 58
          },
          "start": {
            "column": 6,
            "line": 58
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        927,
        1131
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 58
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
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "TemplateLiteral",
                        "expressions": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "stats",
                              "optional": false,
                              "range": [
                                1303,
                                1308
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 77
                                },
                                "start": {
                                  "column": 35,
                                  "line": 77
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ctime",
                              "optional": false,
                              "range": [
                                1309,
                                1314
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 77
                                },
                                "start": {
                                  "column": 41,
                                  "line": 77
                                }
                              }
                            },
                            "range": [
                              1303,
                              1314
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 77
                              },
                              "start": {
                                "column": 35,
                                "line": 77
                              }
                            }
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "[Directory] ",
                              "raw": "[Directory] "
                            },
                            "range": [
                              1288,
                              1303
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 77
                              },
                              "start": {
                                "column": 20,
                                "line": 77
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "range": [
                              1314,
                              1316
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 77
                              },
                              "start": {
                                "column": 46,
                                "line": 77
                              }
                            }
                          }
                        ],
                        "range": [
                          1288,
                          1316
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 77
                          },
                          "start": {
                            "column": 20,
                            "line": 77
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
                        "name": "console",
                        "optional": false,
                        "range": [
                          1276,
                          1283
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 77
                          },
                          "start": {
                            "column": 8,
                            "line": 77
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "range": [
                          1284,
                          1287
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 77
                          },
                          "start": {
                            "column": 16,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        1276,
                        1287
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 77
                        },
                        "start": {
                          "column": 8,
                          "line": 77
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1276,
                      1317
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 77
                      },
                      "start": {
                        "column": 8,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    1276,
                    1317
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 77
                    }
                  }
                }
              ],
              "range": [
                1259,
                1323
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 78
                },
                "start": {
                  "column": 27,
                  "line": 76
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "stats",
                "optional": false,
                "range": [
                  1240,
                  1245
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 76
                  },
                  "start": {
                    "column": 8,
                    "line": 76
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isDirectory",
                "optional": false,
                "range": [
                  1246,
                  1257
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 76
                  },
                  "start": {
                    "column": 14,
                    "line": 76
                  }
                }
              },
              "range": [
                1240,
                1257
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 76
                },
                "start": {
                  "column": 8,
                  "line": 76
                }
              }
            },
            "range": [
              1236,
              1323
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          }
        ],
        "range": [
          1230,
          1325
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 79
          },
          "start": {
            "column": 34,
            "line": 75
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          1205,
          1206
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 75
          },
          "start": {
            "column": 9,
            "line": 75
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stats",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 75
              },
              "start": {
                "column": 16,
                "line": 75
              }
            },
            "range": [
              1212,
              1228
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1223,
                  1228
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      1224,
                      1227
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 75
                      },
                      "start": {
                        "column": 28,
                        "line": 75
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 75
                  },
                  "start": {
                    "column": 27,
                    "line": 75
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StatsBase",
                "optional": false,
                "range": [
                  1214,
                  1223
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 75
                  },
                  "start": {
                    "column": 18,
                    "line": 75
                  }
                }
              },
              "range": [
                1214,
                1228
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 75
                },
                "start": {
                  "column": 18,
                  "line": 75
                }
              }
            }
          },
          "range": [
            1207,
            1228
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 75
            },
            "start": {
              "column": 11,
              "line": 75
            }
          }
        }
      ],
      "range": [
        1196,
        1325
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 75
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
            "alternate": null,
            "consequent": {
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            1408,
                            1409
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 83
                            },
                            "start": {
                              "column": 8,
                              "line": 83
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stats",
                          "optional": false,
                          "range": [
                            1410,
                            1415
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 83
                            },
                            "start": {
                              "column": 10,
                              "line": 83
                            }
                          }
                        },
                        "range": [
                          1408,
                          1415
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 83
                          },
                          "start": {
                            "column": 8,
                            "line": 83
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isDirectory",
                        "optional": false,
                        "range": [
                          1416,
                          1427
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 83
                          },
                          "start": {
                            "column": 16,
                            "line": 83
                          }
                        }
                      },
                      "range": [
                        1408,
                        1427
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 83
                        },
                        "start": {
                          "column": 8,
                          "line": 83
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1408,
                      1429
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 83
                      },
                      "start": {
                        "column": 8,
                        "line": 83
                      }
                    }
                  },
                  "range": [
                    1408,
                    1430
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
                    }
                  }
                }
              ],
              "range": [
                1391,
                1437
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 84
                },
                "start": {
                  "column": 29,
                  "line": 82
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    1370,
                    1371
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 82
                    },
                    "start": {
                      "column": 8,
                      "line": 82
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stats",
                  "optional": false,
                  "range": [
                    1372,
                    1377
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 82
                    },
                    "start": {
                      "column": 10,
                      "line": 82
                    }
                  }
                },
                "range": [
                  1370,
                  1377
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 82
                  },
                  "start": {
                    "column": 8,
                    "line": 82
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isDirectory",
                "optional": false,
                "range": [
                  1378,
                  1389
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 82
                  },
                  "start": {
                    "column": 16,
                    "line": 82
                  }
                }
              },
              "range": [
                1370,
                1389
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 82
                },
                "start": {
                  "column": 8,
                  "line": 82
                }
              }
            },
            "range": [
              1366,
              1437
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 82
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
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            1483,
                            1484
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 86
                            },
                            "start": {
                              "column": 8,
                              "line": 86
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stats",
                          "optional": false,
                          "range": [
                            1485,
                            1490
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 86
                            },
                            "start": {
                              "column": 10,
                              "line": 86
                            }
                          }
                        },
                        "range": [
                          1483,
                          1490
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 86
                          },
                          "start": {
                            "column": 8,
                            "line": 86
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isDirectory",
                        "optional": false,
                        "range": [
                          1491,
                          1502
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 86
                          },
                          "start": {
                            "column": 16,
                            "line": 86
                          }
                        }
                      },
                      "range": [
                        1483,
                        1502
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 86
                        },
                        "start": {
                          "column": 8,
                          "line": 86
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1483,
                      1504
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 86
                      },
                      "start": {
                        "column": 8,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    1483,
                    1505
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 86
                    },
                    "start": {
                      "column": 8,
                      "line": 86
                    }
                  }
                }
              ],
              "range": [
                1467,
                1511
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 87
                },
                "start": {
                  "column": 29,
                  "line": 85
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    1446,
                    1447
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 85
                    },
                    "start": {
                      "column": 8,
                      "line": 85
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stats",
                  "optional": false,
                  "range": [
                    1448,
                    1453
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 85
                    },
                    "start": {
                      "column": 10,
                      "line": 85
                    }
                  }
                },
                "range": [
                  1446,
                  1453
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 85
                  },
                  "start": {
                    "column": 8,
                    "line": 85
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isDirectory",
                "optional": false,
                "range": [
                  1454,
                  1465
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 85
                  },
                  "start": {
                    "column": 16,
                    "line": 85
                  }
                }
              },
              "range": [
                1446,
                1465
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 85
                },
                "start": {
                  "column": 8,
                  "line": 85
                }
              }
            },
            "range": [
              1442,
              1511
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "range": [
          1360,
          1513
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 88
          },
          "start": {
            "column": 33,
            "line": 81
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          1336,
          1337
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 81
          },
          "start": {
            "column": 9,
            "line": 81
          }
        }
      },
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
                "line": 81
              },
              "start": {
                "column": 12,
                "line": 81
              }
            },
            "range": [
              1339,
              1347
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "range": [
                  1341,
                  1347
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 81
                  },
                  "start": {
                    "column": 14,
                    "line": 81
                  }
                }
              },
              "range": [
                1341,
                1347
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 81
                },
                "start": {
                  "column": 14,
                  "line": 81
                }
              }
            }
          },
          "range": [
            1338,
            1347
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 81
            },
            "start": {
              "column": 11,
              "line": 81
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 81
              },
              "start": {
                "column": 23,
                "line": 81
              }
            },
            "range": [
              1350,
              1358
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "range": [
                  1352,
                  1358
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 81
                  },
                  "start": {
                    "column": 25,
                    "line": 81
                  }
                }
              },
              "range": [
                1352,
                1358
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 81
                },
                "start": {
                  "column": 25,
                  "line": 81
                }
              }
            }
          },
          "range": [
            1349,
            1358
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 81
            },
            "start": {
              "column": 22,
              "line": 81
            }
          }
        }
      ],
      "range": [
        1327,
        1513
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1539,
          1589
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isDirectory",
              "optional": false,
              "range": [
                1545,
                1556
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 91
                },
                "start": {
                  "column": 4,
                  "line": 91
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 91
                },
                "start": {
                  "column": 17,
                  "line": 91
                }
              },
              "range": [
                1558,
                1567
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1560,
                  1567
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 91
                  },
                  "start": {
                    "column": 19,
                    "line": 91
                  }
                }
              }
            },
            "static": false,
            "range": [
              1545,
              1568
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctime",
              "optional": false,
              "range": [
                1573,
                1578
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 92
                },
                "start": {
                  "column": 4,
                  "line": 92
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
                  "column": 17,
                  "line": 92
                },
                "start": {
                  "column": 9,
                  "line": 92
                }
              },
              "range": [
                1578,
                1586
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1580,
                  1586
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 92
                  },
                  "start": {
                    "column": 11,
                    "line": 92
                  }
                }
              }
            },
            "range": [
              1573,
              1587
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 92
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 93
          },
          "start": {
            "column": 23,
            "line": 90
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StatsBase",
        "optional": false,
        "range": [
          1526,
          1535
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 90
          },
          "start": {
            "column": 10,
            "line": 90
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 90
          },
          "start": {
            "column": 19,
            "line": 90
          }
        },
        "range": [
          1535,
          1538
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
                1536,
                1537
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 90
                },
                "start": {
                  "column": 20,
                  "line": 90
                }
              }
            },
            "out": false,
            "range": [
              1536,
              1537
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 90
              },
              "start": {
                "column": 20,
                "line": 90
              }
            }
          }
        ]
      },
      "range": [
        1516,
        1589
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1608,
          1638
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "stats",
              "optional": false,
              "range": [
                1614,
                1619
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 96
                },
                "start": {
                  "column": 4,
                  "line": 96
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
                  "column": 25,
                  "line": 96
                },
                "start": {
                  "column": 9,
                  "line": 96
                }
              },
              "range": [
                1619,
                1635
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1630,
                    1635
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        1631,
                        1634
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 96
                        },
                        "start": {
                          "column": 21,
                          "line": 96
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 96
                    },
                    "start": {
                      "column": 20,
                      "line": 96
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StatsBase",
                  "optional": false,
                  "range": [
                    1621,
                    1630
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 96
                    },
                    "start": {
                      "column": 11,
                      "line": 96
                    }
                  }
                },
                "range": [
                  1621,
                  1635
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 96
                  },
                  "start": {
                    "column": 11,
                    "line": 96
                  }
                }
              }
            },
            "range": [
              1614,
              1636
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 17,
            "line": 95
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "range": [
          1601,
          1607
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 95
          },
          "start": {
            "column": 10,
            "line": 95
          }
        }
      },
      "range": [
        1591,
        1638
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 95
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 97
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
