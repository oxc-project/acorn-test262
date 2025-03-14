__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1186
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          22,
          605
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
              "name": "prop",
              "range": [
                28,
                33
              ],
              "loc": {
                "end": {
                  "column": 9,
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
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                36,
                37
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "range": [
              28,
              37
            ],
            "loc": {
              "end": {
                "column": 13,
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
              "name": "dd",
              "optional": false,
              "range": [
                49,
                51
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestWithStatics",
                  "optional": false,
                  "range": [
                    58,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 3
                    },
                    "start": {
                      "column": 20,
                      "line": 3
                    }
                  }
                },
                "range": [
                  54,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 3
                  },
                  "start": {
                    "column": 16,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "name": "prop",
                "range": [
                  76,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 38,
                    "line": 3
                  }
                }
              },
              "range": [
                54,
                81
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "range": [
              42,
              82
            ],
            "loc": {
              "end": {
                "column": 44,
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
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"X_ z_ zz\"",
              "value": "X_ z_ zz",
              "range": [
                101,
                111
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  127,
                  603
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
                        137,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        145,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 16,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      137,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
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
                      "name": "m",
                      "optional": false,
                      "range": [
                        156,
                        157
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
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
                        157,
                        217
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
                                "type": "NewExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TestWithStatics",
                                  "optional": false,
                                  "range": [
                                    178,
                                    193
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  174,
                                  195
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 7
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "prop",
                                "range": [
                                  196,
                                  201
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                174,
                                201
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 7
                                },
                                "start": {
                                  "column": 12,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              174,
                              201
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 7
                              },
                              "start": {
                                "column": 12,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          160,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 6
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
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 9,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      156,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 6
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
                      "name": "C",
                      "optional": false,
                      "range": [
                        233,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "ClassExpression",
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "range": [
                          254,
                          387
                        ],
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m",
                              "optional": false,
                              "range": [
                                268,
                                269
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 10
                                },
                                "start": {
                                  "column": 12,
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
                                269,
                                377
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
                                        "type": "NewExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TestWithStatics",
                                          "optional": false,
                                          "range": [
                                            294,
                                            309
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 35,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 11
                                            }
                                          }
                                        },
                                        "range": [
                                          290,
                                          311
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 37,
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
                                        "type": "PrivateIdentifier",
                                        "name": "prop",
                                        "range": [
                                          312,
                                          317
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 38,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "range": [
                                        290,
                                        317
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      290,
                                      317
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 11
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "NewExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Inner",
                                          "optional": false,
                                          "range": [
                                            344,
                                            349
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 25,
                                              "line": 12
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 12
                                            }
                                          }
                                        },
                                        "range": [
                                          340,
                                          351
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "range": [
                                          352,
                                          356
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 28,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "range": [
                                        340,
                                        356
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 12
                                        }
                                      }
                                    },
                                    "range": [
                                      340,
                                      357
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 12
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  272,
                                  377
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 10
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
                                  "line": 13
                                },
                                "start": {
                                  "column": 13,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              268,
                              377
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 13
                              },
                              "start": {
                                "column": 12,
                                "line": 10
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 14
                          },
                          "start": {
                            "column": 36,
                            "line": 9
                          }
                        }
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "InnerInner",
                        "optional": false,
                        "range": [
                          243,
                          253
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 9
                          },
                          "start": {
                            "column": 25,
                            "line": 9
                          }
                        }
                      },
                      "implements": [],
                      "superClass": null,
                      "range": [
                        237,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 19,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      226,
                      387
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
                  },
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        404,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 16
                        },
                        "start": {
                          "column": 15,
                          "line": 16
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
                        405,
                        597
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ClassExpression",
                              "abstract": false,
                              "body": {
                                "type": "ClassBody",
                                "range": [
                                  434,
                                  587
                                ],
                                "body": [
                                  {
                                    "type": "MethodDefinition",
                                    "computed": false,
                                    "decorators": [],
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m",
                                      "optional": false,
                                      "range": [
                                        452,
                                        453
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
                                    "kind": "method",
                                    "optional": false,
                                    "override": false,
                                    "static": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "range": [
                                        453,
                                        573
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
                                                "type": "NewExpression",
                                                "arguments": [],
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestWithStatics",
                                                  "optional": false,
                                                  "range": [
                                                    482,
                                                    497
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 39,
                                                      "line": 19
                                                    },
                                                    "start": {
                                                      "column": 24,
                                                      "line": 19
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  478,
                                                  499
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 41,
                                                    "line": 19
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 19
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "prop",
                                                "range": [
                                                  500,
                                                  505
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 47,
                                                    "line": 19
                                                  },
                                                  "start": {
                                                    "column": 42,
                                                    "line": 19
                                                  }
                                                }
                                              },
                                              "range": [
                                                478,
                                                505
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 47,
                                                  "line": 19
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 19
                                                }
                                              }
                                            },
                                            "range": [
                                              478,
                                              505
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 47,
                                                "line": 19
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 19
                                              }
                                            }
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "NewExpression",
                                                "arguments": [],
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Inner",
                                                  "optional": false,
                                                  "range": [
                                                    536,
                                                    541
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 29,
                                                      "line": 20
                                                    },
                                                    "start": {
                                                      "column": 24,
                                                      "line": 20
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  532,
                                                  543
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 31,
                                                    "line": 20
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 20
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "foo",
                                                "range": [
                                                  544,
                                                  548
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 36,
                                                    "line": 20
                                                  },
                                                  "start": {
                                                    "column": 32,
                                                    "line": 20
                                                  }
                                                }
                                              },
                                              "range": [
                                                532,
                                                548
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 36,
                                                  "line": 20
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 20
                                                }
                                              }
                                            },
                                            "range": [
                                              532,
                                              549
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 37,
                                                "line": 20
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 20
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          456,
                                          573
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 17,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 20,
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
                                          "column": 17,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 18
                                        }
                                      }
                                    },
                                    "range": [
                                      452,
                                      573
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 18
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 17
                                  }
                                }
                              },
                              "declare": false,
                              "decorators": [],
                              "id": null,
                              "implements": [],
                              "superClass": null,
                              "range": [
                                428,
                                587
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 22
                                },
                                "start": {
                                  "column": 19,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              421,
                              587
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 22
                              },
                              "start": {
                                "column": 12,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "range": [
                          407,
                          597
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 23
                          },
                          "start": {
                            "column": 18,
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
                          "column": 9,
                          "line": 23
                        },
                        "start": {
                          "column": 16,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      397,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 38,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "range": [
                  121,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 4
                  },
                  "start": {
                    "column": 32,
                    "line": 4
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                115,
                603
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 26,
                  "line": 4
                }
              }
            },
            "range": [
              93,
              603
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
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
            "line": 25
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestWithStatics",
        "optional": false,
        "range": [
          6,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
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
        605
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
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
          628,
          1186
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
              "name": "prop",
              "range": [
                634,
                639
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                642,
                643
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 28
                },
                "start": {
                  "column": 12,
                  "line": 28
                }
              }
            },
            "range": [
              634,
              643
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
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
              "name": "dd",
              "optional": false,
              "range": [
                648,
                650
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
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
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestNonStatics",
                  "optional": false,
                  "range": [
                    657,
                    671
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 29
                    },
                    "start": {
                      "column": 13,
                      "line": 29
                    }
                  }
                },
                "range": [
                  653,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 29
                  },
                  "start": {
                    "column": 9,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "name": "prop",
                "range": [
                  674,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 29
                  },
                  "start": {
                    "column": 30,
                    "line": 29
                  }
                }
              },
              "range": [
                653,
                679
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 29
                }
              }
            },
            "range": [
              648,
              680
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"X_ z_ zz\"",
              "value": "X_ z_ zz",
              "range": [
                692,
                702
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 30
                },
                "start": {
                  "column": 5,
                  "line": 30
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  718,
                  1184
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
                        728,
                        732
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
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        736,
                        738
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 31
                        },
                        "start": {
                          "column": 16,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      728,
                      738
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
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "range": [
                        747,
                        748
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
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
                        748,
                        807
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
                                "type": "NewExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TestNonStatics",
                                  "optional": false,
                                  "range": [
                                    769,
                                    783
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 33
                                    }
                                  }
                                },
                                "range": [
                                  765,
                                  785
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 33
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "prop",
                                "range": [
                                  786,
                                  791
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                765,
                                791
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 33
                                },
                                "start": {
                                  "column": 12,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              765,
                              791
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 33
                              },
                              "start": {
                                "column": 12,
                                "line": 33
                              }
                            }
                          }
                        ],
                        "range": [
                          751,
                          807
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 34
                          },
                          "start": {
                            "column": 12,
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
                          "column": 9,
                          "line": 34
                        },
                        "start": {
                          "column": 9,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      747,
                      807
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 32
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
                      "name": "C",
                      "optional": false,
                      "range": [
                        816,
                        817
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "ClassExpression",
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "range": [
                          837,
                          969
                        ],
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m",
                              "optional": false,
                              "range": [
                                851,
                                852
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 36
                                },
                                "start": {
                                  "column": 12,
                                  "line": 36
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
                                852,
                                959
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
                                        "type": "NewExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TestNonStatics",
                                          "optional": false,
                                          "range": [
                                            877,
                                            891
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 34,
                                              "line": 37
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 37
                                            }
                                          }
                                        },
                                        "range": [
                                          873,
                                          893
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 37
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 37
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "prop",
                                        "range": [
                                          894,
                                          899
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 42,
                                            "line": 37
                                          },
                                          "start": {
                                            "column": 37,
                                            "line": 37
                                          }
                                        }
                                      },
                                      "range": [
                                        873,
                                        899
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 37
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 37
                                        }
                                      }
                                    },
                                    "range": [
                                      873,
                                      899
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 37
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 37
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "NewExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Inner",
                                          "optional": false,
                                          "range": [
                                            926,
                                            931
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 25,
                                              "line": 38
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 38
                                            }
                                          }
                                        },
                                        "range": [
                                          922,
                                          933
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
                                            "line": 38
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 38
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "range": [
                                          934,
                                          938
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 38
                                          },
                                          "start": {
                                            "column": 28,
                                            "line": 38
                                          }
                                        }
                                      },
                                      "range": [
                                        922,
                                        938
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 38
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 38
                                        }
                                      }
                                    },
                                    "range": [
                                      922,
                                      939
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 38
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 38
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  855,
                                  959
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 36
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
                                  "line": 39
                                },
                                "start": {
                                  "column": 13,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              851,
                              959
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 39
                              },
                              "start": {
                                "column": 12,
                                "line": 36
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 40
                          },
                          "start": {
                            "column": 29,
                            "line": 35
                          }
                        }
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "InnerInner",
                        "optional": false,
                        "range": [
                          826,
                          836
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 35
                          },
                          "start": {
                            "column": 18,
                            "line": 35
                          }
                        }
                      },
                      "implements": [],
                      "superClass": null,
                      "range": [
                        820,
                        969
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 40
                        },
                        "start": {
                          "column": 12,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      816,
                      969
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 35
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
                      "name": "M",
                      "optional": false,
                      "range": [
                        986,
                        987
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 42
                        },
                        "start": {
                          "column": 15,
                          "line": 42
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
                        987,
                        1178
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ClassExpression",
                              "abstract": false,
                              "body": {
                                "type": "ClassBody",
                                "range": [
                                  1016,
                                  1168
                                ],
                                "body": [
                                  {
                                    "type": "MethodDefinition",
                                    "computed": false,
                                    "decorators": [],
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m",
                                      "optional": false,
                                      "range": [
                                        1034,
                                        1035
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 44
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 44
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
                                        1035,
                                        1154
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
                                                "type": "NewExpression",
                                                "arguments": [],
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestNonStatics",
                                                  "optional": false,
                                                  "range": [
                                                    1064,
                                                    1078
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 38,
                                                      "line": 45
                                                    },
                                                    "start": {
                                                      "column": 24,
                                                      "line": 45
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  1060,
                                                  1080
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 40,
                                                    "line": 45
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 45
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "prop",
                                                "range": [
                                                  1081,
                                                  1086
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 46,
                                                    "line": 45
                                                  },
                                                  "start": {
                                                    "column": 41,
                                                    "line": 45
                                                  }
                                                }
                                              },
                                              "range": [
                                                1060,
                                                1086
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 46,
                                                  "line": 45
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 45
                                                }
                                              }
                                            },
                                            "range": [
                                              1060,
                                              1086
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 46,
                                                "line": 45
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 45
                                              }
                                            }
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "NewExpression",
                                                "arguments": [],
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Inner",
                                                  "optional": false,
                                                  "range": [
                                                    1117,
                                                    1122
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 29,
                                                      "line": 46
                                                    },
                                                    "start": {
                                                      "column": 24,
                                                      "line": 46
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  1113,
                                                  1124
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 31,
                                                    "line": 46
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 46
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "foo",
                                                "range": [
                                                  1125,
                                                  1129
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 36,
                                                    "line": 46
                                                  },
                                                  "start": {
                                                    "column": 32,
                                                    "line": 46
                                                  }
                                                }
                                              },
                                              "range": [
                                                1113,
                                                1129
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 36,
                                                  "line": 46
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 46
                                                }
                                              }
                                            },
                                            "range": [
                                              1113,
                                              1130
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 37,
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
                                          1038,
                                          1154
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 17,
                                            "line": 47
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 44
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
                                          "column": 17,
                                          "line": 47
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 44
                                        }
                                      }
                                    },
                                    "range": [
                                      1034,
                                      1154
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 44
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 43
                                  }
                                }
                              },
                              "declare": false,
                              "decorators": [],
                              "id": null,
                              "implements": [],
                              "superClass": null,
                              "range": [
                                1010,
                                1168
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 48
                                },
                                "start": {
                                  "column": 19,
                                  "line": 43
                                }
                              }
                            },
                            "range": [
                              1003,
                              1168
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 48
                              },
                              "start": {
                                "column": 12,
                                "line": 43
                              }
                            }
                          }
                        ],
                        "range": [
                          989,
                          1178
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 49
                          },
                          "start": {
                            "column": 18,
                            "line": 42
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
                          "column": 9,
                          "line": 49
                        },
                        "start": {
                          "column": 16,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      979,
                      1178
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 42
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 50
                  },
                  "start": {
                    "column": 31,
                    "line": 30
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "range": [
                  712,
                  717
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
              "implements": [],
              "superClass": null,
              "range": [
                706,
                1184
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 50
                },
                "start": {
                  "column": 19,
                  "line": 30
                }
              }
            },
            "range": [
              691,
              1184
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 21,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestNonStatics",
        "optional": false,
        "range": [
          613,
          627
        ],
        "loc": {
          "end": {
            "column": 20,
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
        607,
        1186
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 51
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
