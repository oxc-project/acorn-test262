__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2520
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          910
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                17,
                267
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
                          "name": "_this",
                          "optional": false,
                          "range": [
                            34,
                            39
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            42,
                            44
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 3
                            },
                            "start": {
                              "column": 20,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          34,
                          44
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
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
                      30,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
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
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "ThisExpression",
                              "range": [
                                174,
                                178
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 5
                                },
                                "start": {
                                  "column": 24,
                                  "line": 5
                                }
                              }
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  169,
                                  170
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 5
                                  }
                                }
                              }
                            ],
                            "range": [
                              169,
                              178
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 5
                              },
                              "start": {
                                "column": 19,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            162,
                            179
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
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
                        138,
                        261
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 38,
                          "line": 4
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "range": [
                        117,
                        122
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 4
                        },
                        "start": {
                          "column": 17,
                          "line": 4
                        }
                      }
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 4
                            },
                            "start": {
                              "column": 28,
                              "line": 4
                            }
                          },
                          "range": [
                            128,
                            136
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              130,
                              136
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 4
                              },
                              "start": {
                                "column": 30,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          123,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 4
                          },
                          "start": {
                            "column": 23,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      108,
                      261
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
                  }
                ],
                "range": [
                  20,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
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
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              }
            },
            "range": [
              16,
              267
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 2
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
              "name": "y",
              "optional": false,
              "range": [
                272,
                273
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                273,
                426
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
                          "name": "lamda",
                          "optional": false,
                          "range": [
                            290,
                            295
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "ThisExpression",
                                    "range": [
                                      353,
                                      357
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        348,
                                        349
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
                                  ],
                                  "range": [
                                    348,
                                    357
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  341,
                                  358
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "range": [
                              317,
                              420
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 11
                              },
                              "start": {
                                "column": 39,
                                "line": 9
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
                              "name": "_this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 9
                                  }
                                },
                                "range": [
                                  304,
                                  312
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    306,
                                    312
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 9
                                    }
                                  }
                                }
                              },
                              "range": [
                                299,
                                312
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 9
                                },
                                "start": {
                                  "column": 21,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "range": [
                            298,
                            420
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 11
                            },
                            "start": {
                              "column": 20,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          290,
                          420
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      286,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  276,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 8
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
                  "line": 12
                },
                "start": {
                  "column": 5,
                  "line": 8
                }
              }
            },
            "range": [
              272,
              426
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 8
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
              "name": "z",
              "optional": false,
              "range": [
                431,
                432
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 4,
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
                432,
                586
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
                          "name": "lambda",
                          "optional": false,
                          "range": [
                            472,
                            478
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 14
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "ThisExpression",
                                    "range": [
                                      513,
                                      517
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 15
                                      }
                                    }
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        508,
                                        509
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 15
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    508,
                                    517
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 15
                                    }
                                  }
                                },
                                "range": [
                                  501,
                                  518
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
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
                              487,
                              580
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 16
                              },
                              "start": {
                                "column": 27,
                                "line": 14
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            481,
                            580
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 16
                            },
                            "start": {
                              "column": 21,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          472,
                          580
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 16
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
                      468,
                      580
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
                  448,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 21,
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 13
                      }
                    },
                    "range": [
                      438,
                      446
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        440,
                        446
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    433,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 6,
                      "line": 13
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
                  "column": 5,
                  "line": 13
                }
              }
            },
            "range": [
              431,
              586
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 13
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
              "name": "x1",
              "optional": false,
              "range": [
                592,
                594
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                594,
                745
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
                          "name": "_this",
                          "optional": false,
                          "range": [
                            611,
                            616
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 20
                            },
                            "start": {
                              "column": 12,
                              "line": 20
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            619,
                            621
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 20
                            },
                            "start": {
                              "column": 20,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          611,
                          621
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 20
                          },
                          "start": {
                            "column": 12,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      607,
                      622
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "FunctionDeclaration",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        715,
                        739
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 22
                        },
                        "start": {
                          "column": 38,
                          "line": 21
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "range": [
                        694,
                        699
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 21
                        },
                        "start": {
                          "column": 17,
                          "line": 21
                        }
                      }
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 21
                            },
                            "start": {
                              "column": 28,
                              "line": 21
                            }
                          },
                          "range": [
                            705,
                            713
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              707,
                              713
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 21
                              },
                              "start": {
                                "column": 30,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          700,
                          713
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 21
                          },
                          "start": {
                            "column": 23,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "range": [
                      685,
                      739
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  597,
                  745
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 19
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
                  "line": 23
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              }
            },
            "range": [
              592,
              745
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 19
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
              "name": "y1",
              "optional": false,
              "range": [
                750,
                752
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
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
                752,
                826
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
                          "name": "lamda",
                          "optional": false,
                          "range": [
                            769,
                            774
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                              796,
                              820
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 26
                              },
                              "start": {
                                "column": 39,
                                "line": 25
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
                              "name": "_this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 25
                                  }
                                },
                                "range": [
                                  783,
                                  791
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    785,
                                    791
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 25
                                    }
                                  }
                                }
                              },
                              "range": [
                                778,
                                791
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 25
                                },
                                "start": {
                                  "column": 21,
                                  "line": 25
                                }
                              }
                            }
                          ],
                          "range": [
                            777,
                            820
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 26
                            },
                            "start": {
                              "column": 20,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          769,
                          820
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 26
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
                      765,
                      820
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  755,
                  826
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 9,
                    "line": 24
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
                  "line": 27
                },
                "start": {
                  "column": 6,
                  "line": 24
                }
              }
            },
            "range": [
              750,
              826
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 24
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
              "name": "z1",
              "optional": false,
              "range": [
                831,
                833
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 28
                },
                "start": {
                  "column": 4,
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
                833,
                908
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
                          "name": "lambda",
                          "optional": false,
                          "range": [
                            876,
                            882
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                              891,
                              902
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 30
                              },
                              "start": {
                                "column": 27,
                                "line": 29
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            885,
                            902
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 30
                            },
                            "start": {
                              "column": 21,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          876,
                          902
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      872,
                      902
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  849,
                  908
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 31
                  },
                  "start": {
                    "column": 22,
                    "line": 28
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 28
                      },
                      "start": {
                        "column": 12,
                        "line": 28
                      }
                    },
                    "range": [
                      839,
                      847
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        841,
                        847
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 28
                        },
                        "start": {
                          "column": 14,
                          "line": 28
                        }
                      }
                    }
                  },
                  "range": [
                    834,
                    847
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 28
                    },
                    "start": {
                      "column": 7,
                      "line": 28
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 31
                },
                "start": {
                  "column": 6,
                  "line": 28
                }
              }
            },
            "range": [
              831,
              908
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 31
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
            "line": 32
          },
          "start": {
            "column": 10,
            "line": 1
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
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
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
        910
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
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
          922,
          1098
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                928,
                939
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
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
                939,
                1096
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            978,
                            980
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 35
                            },
                            "start": {
                              "column": 12,
                              "line": 35
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
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  997,
                                  1004
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 36
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "range": [
                                                1060,
                                                1064
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 36,
                                                  "line": 37
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 37
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "range": [
                                              1051,
                                              1059
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 37
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 37
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            1051,
                                            1065
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 37,
                                              "line": 37
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 37
                                            }
                                          }
                                        },
                                        "range": [
                                          1044,
                                          1066
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 37
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 37
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      1026,
                                      1080
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 38
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 36
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    1020,
                                    1080
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 36
                                    }
                                  }
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      1007,
                                      1015
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 36
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 36
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1006,
                                  1080
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 36
                                  }
                                }
                              },
                              "range": [
                                997,
                                1080
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 38
                                },
                                "start": {
                                  "column": 12,
                                  "line": 36
                                }
                              }
                            }
                          ],
                          "range": [
                            983,
                            1090
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 39
                            },
                            "start": {
                              "column": 17,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          978,
                          1090
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 39
                          },
                          "start": {
                            "column": 12,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      974,
                      1090
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  955,
                  1096
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 31,
                    "line": 34
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 34
                      },
                      "start": {
                        "column": 21,
                        "line": 34
                      }
                    },
                    "range": [
                      945,
                      953
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        947,
                        953
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
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
                    940,
                    953
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 34
                    },
                    "start": {
                      "column": 16,
                      "line": 34
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 15,
                  "line": 34
                }
              }
            },
            "range": [
              928,
              1096
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 11,
            "line": 33
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "range": [
          917,
          921
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 33
          },
          "start": {
            "column": 6,
            "line": 33
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        911,
        1098
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 44
                },
                "start": {
                  "column": 19,
                  "line": 42
                }
              },
              "range": [
                1118,
                1142
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "range": [
                        1126,
                        1129
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 43
                        },
                        "start": {
                          "column": 4,
                          "line": 43
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 43
                            },
                            "start": {
                              "column": 11,
                              "line": 43
                            }
                          },
                          "range": [
                            1133,
                            1138
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              1135,
                              1138
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 43
                              },
                              "start": {
                                "column": 13,
                                "line": 43
                              }
                            }
                          }
                        },
                        "range": [
                          1130,
                          1138
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 43
                          },
                          "start": {
                            "column": 8,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "range": [
                      1126,
                      1140
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 43
                      },
                      "start": {
                        "column": 4,
                        "line": 43
                      }
                    }
                  }
                ],
                "range": [
                  1120,
                  1142
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 44
                  },
                  "start": {
                    "column": 21,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              1111,
              1142
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 44
              },
              "start": {
                "column": 12,
                "line": 42
              }
            }
          },
          "init": null,
          "range": [
            1111,
            1142
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 44
            },
            "start": {
              "column": 12,
              "line": 42
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        1099,
        1142
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 42
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              1196,
                              1200
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 47
                              },
                              "start": {
                                "column": 23,
                                "line": 47
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              1201,
                              1202
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 47
                              },
                              "start": {
                                "column": 28,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1196,
                            1202
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 47
                            },
                            "start": {
                              "column": 23,
                              "line": 47
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
                            1184,
                            1191
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 47
                            },
                            "start": {
                              "column": 11,
                              "line": 47
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
                            1192,
                            1195
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 47
                            },
                            "start": {
                              "column": 19,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1184,
                          1195
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 47
                          },
                          "start": {
                            "column": 11,
                            "line": 47
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1184,
                        1203
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 47
                        },
                        "start": {
                          "column": 11,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      1184,
                      1204
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 47
                      },
                      "start": {
                        "column": 11,
                        "line": 47
                      }
                    }
                  }
                ],
                "range": [
                  1182,
                  1206
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 47
                  },
                  "start": {
                    "column": 9,
                    "line": 47
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1177,
                    1178
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                1177,
                1206
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              1177,
              1207
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "range": [
          1171,
          1209
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 27,
            "line": 46
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          1153,
          1155
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 46
          },
          "start": {
            "column": 9,
            "line": 46
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 46
              },
              "start": {
                "column": 17,
                "line": 46
              }
            },
            "range": [
              1161,
              1169
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1163,
                1169
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 46
                },
                "start": {
                  "column": 19,
                  "line": 46
                }
              }
            }
          },
          "range": [
            1156,
            1169
          ],
          "loc": {
            "end": {
              "column": 25,
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
        1144,
        1209
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1230,
          1339
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1236,
                1247
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1247,
                1263
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 51
                      },
                      "start": {
                        "column": 21,
                        "line": 51
                      }
                    },
                    "range": [
                      1253,
                      1261
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1255,
                        1261
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 51
                        },
                        "start": {
                          "column": 23,
                          "line": 51
                        }
                      }
                    }
                  },
                  "range": [
                    1248,
                    1261
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 51
                    },
                    "start": {
                      "column": 16,
                      "line": 51
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 51
                },
                "start": {
                  "column": 15,
                  "line": 51
                }
              }
            },
            "range": [
              1236,
              1263
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
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
              "name": "z",
              "optional": false,
              "range": [
                1294,
                1295
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1295,
                1311
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 52
                      },
                      "start": {
                        "column": 11,
                        "line": 52
                      }
                    },
                    "range": [
                      1301,
                      1309
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1303,
                        1309
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 52
                        },
                        "start": {
                          "column": 13,
                          "line": 52
                        }
                      }
                    }
                  },
                  "range": [
                    1296,
                    1309
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 52
                    },
                    "start": {
                      "column": 6,
                      "line": 52
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 52
                },
                "start": {
                  "column": 5,
                  "line": 52
                }
              }
            },
            "range": [
              1294,
              1311
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 19,
            "line": 50
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "range": [
          1225,
          1229
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 50
          },
          "start": {
            "column": 14,
            "line": 50
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1211,
        1339
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          1357,
          1359
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 54
          },
          "start": {
            "column": 17,
            "line": 54
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 54
              },
              "start": {
                "column": 25,
                "line": 54
              }
            },
            "range": [
              1365,
              1373
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1367,
                1373
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 54
                },
                "start": {
                  "column": 27,
                  "line": 54
                }
              }
            }
          },
          "range": [
            1360,
            1373
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 54
            },
            "start": {
              "column": 20,
              "line": 54
            }
          }
        }
      ],
      "range": [
        1340,
        1375
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1400,
          1943
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1406,
                1417
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1417,
                1433
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 57
                      },
                      "start": {
                        "column": 21,
                        "line": 57
                      }
                    },
                    "range": [
                      1423,
                      1431
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1425,
                        1431
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 57
                        },
                        "start": {
                          "column": 23,
                          "line": 57
                        }
                      }
                    }
                  },
                  "range": [
                    1418,
                    1431
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 57
                    },
                    "start": {
                      "column": 16,
                      "line": 57
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 57
                },
                "start": {
                  "column": 15,
                  "line": 57
                }
              }
            },
            "range": [
              1406,
              1433
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
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
                1464,
                1475
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1475,
                1491
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 58
                      },
                      "start": {
                        "column": 21,
                        "line": 58
                      }
                    },
                    "range": [
                      1481,
                      1489
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1483,
                        1489
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 58
                        },
                        "start": {
                          "column": 23,
                          "line": 58
                        }
                      }
                    }
                  },
                  "range": [
                    1476,
                    1489
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 58
                    },
                    "start": {
                      "column": 16,
                      "line": 58
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 58
                },
                "start": {
                  "column": 15,
                  "line": 58
                }
              }
            },
            "range": [
              1464,
              1491
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
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
                1522,
                1533
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1533,
                1687
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            1569,
                            1571
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 60
                            },
                            "start": {
                              "column": 12,
                              "line": 60
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
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  1588,
                                  1595
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 61
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "range": [
                                                1651,
                                                1655
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 36,
                                                  "line": 62
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 62
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "range": [
                                              1642,
                                              1650
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 62
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 62
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            1642,
                                            1656
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 37,
                                              "line": 62
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 62
                                            }
                                          }
                                        },
                                        "range": [
                                          1635,
                                          1657
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 62
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 62
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      1617,
                                      1671
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 63
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 61
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    1611,
                                    1671
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 61
                                    }
                                  }
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      1598,
                                      1606
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 61
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 61
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1597,
                                  1671
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 61
                                  }
                                }
                              },
                              "range": [
                                1588,
                                1671
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 63
                                },
                                "start": {
                                  "column": 12,
                                  "line": 61
                                }
                              }
                            }
                          ],
                          "range": [
                            1574,
                            1681
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 64
                            },
                            "start": {
                              "column": 17,
                              "line": 60
                            }
                          }
                        },
                        "range": [
                          1569,
                          1681
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 64
                          },
                          "start": {
                            "column": 12,
                            "line": 60
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1565,
                      1681
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 64
                      },
                      "start": {
                        "column": 8,
                        "line": 60
                      }
                    }
                  }
                ],
                "range": [
                  1546,
                  1687
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 65
                  },
                  "start": {
                    "column": 28,
                    "line": 59
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 59
                      },
                      "start": {
                        "column": 21,
                        "line": 59
                      }
                    },
                    "range": [
                      1539,
                      1544
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1541,
                        1544
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 59
                        },
                        "start": {
                          "column": 23,
                          "line": 59
                        }
                      }
                    }
                  },
                  "range": [
                    1534,
                    1544
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 59
                    },
                    "start": {
                      "column": 16,
                      "line": 59
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 65
                },
                "start": {
                  "column": 15,
                  "line": 59
                }
              }
            },
            "range": [
              1522,
              1687
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 65
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
              "name": "z",
              "optional": false,
              "range": [
                1693,
                1694
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 67
                },
                "start": {
                  "column": 4,
                  "line": 67
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1694,
                1710
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 67
                      },
                      "start": {
                        "column": 11,
                        "line": 67
                      }
                    },
                    "range": [
                      1700,
                      1708
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1702,
                        1708
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 67
                        },
                        "start": {
                          "column": 13,
                          "line": 67
                        }
                      }
                    }
                  },
                  "range": [
                    1695,
                    1708
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 67
                    },
                    "start": {
                      "column": 6,
                      "line": 67
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 67
                },
                "start": {
                  "column": 5,
                  "line": 67
                }
              }
            },
            "range": [
              1693,
              1710
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
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
              "name": "z",
              "optional": false,
              "range": [
                1741,
                1742
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1742,
                1758
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 68
                      },
                      "start": {
                        "column": 11,
                        "line": 68
                      }
                    },
                    "range": [
                      1748,
                      1756
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1750,
                        1756
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 68
                        },
                        "start": {
                          "column": 13,
                          "line": 68
                        }
                      }
                    }
                  },
                  "range": [
                    1743,
                    1756
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 68
                    },
                    "start": {
                      "column": 6,
                      "line": 68
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 68
                },
                "start": {
                  "column": 5,
                  "line": 68
                }
              }
            },
            "range": [
              1741,
              1758
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
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
              "name": "z",
              "optional": false,
              "range": [
                1789,
                1790
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
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
                1790,
                1941
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
                          "name": "lambda",
                          "optional": false,
                          "range": [
                            1827,
                            1833
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 70
                            },
                            "start": {
                              "column": 12,
                              "line": 70
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "async": false,
                                  "body": {
                                    "type": "ThisExpression",
                                    "range": [
                                      1868,
                                      1872
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 71
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 71
                                      }
                                    }
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        1863,
                                        1864
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 71
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 71
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    1863,
                                    1872
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 71
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 71
                                    }
                                  }
                                },
                                "range": [
                                  1856,
                                  1873
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 71
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 71
                                  }
                                }
                              }
                            ],
                            "range": [
                              1842,
                              1935
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 72
                              },
                              "start": {
                                "column": 27,
                                "line": 70
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            1836,
                            1935
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 72
                            },
                            "start": {
                              "column": 21,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1827,
                          1935
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 72
                          },
                          "start": {
                            "column": 12,
                            "line": 70
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1823,
                      1935
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 70
                      }
                    }
                  }
                ],
                "range": [
                  1803,
                  1941
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 73
                  },
                  "start": {
                    "column": 18,
                    "line": 69
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 69
                      },
                      "start": {
                        "column": 11,
                        "line": 69
                      }
                    },
                    "range": [
                      1796,
                      1801
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1798,
                        1801
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 69
                        },
                        "start": {
                          "column": 13,
                          "line": 69
                        }
                      }
                    }
                  },
                  "range": [
                    1791,
                    1801
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 69
                    },
                    "start": {
                      "column": 6,
                      "line": 69
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 5,
                  "line": 69
                }
              }
            },
            "range": [
              1789,
              1941
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 11,
            "line": 56
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "range": [
          1395,
          1399
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 56
          },
          "start": {
            "column": 6,
            "line": 56
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1389,
        1943
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 56
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 77
                },
                "start": {
                  "column": 19,
                  "line": 75
                }
              },
              "range": [
                1963,
                1987
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "range": [
                        1971,
                        1974
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 76
                        },
                        "start": {
                          "column": 4,
                          "line": 76
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 76
                            },
                            "start": {
                              "column": 11,
                              "line": 76
                            }
                          },
                          "range": [
                            1978,
                            1983
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              1980,
                              1983
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 76
                              },
                              "start": {
                                "column": 13,
                                "line": 76
                              }
                            }
                          }
                        },
                        "range": [
                          1975,
                          1983
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 76
                          },
                          "start": {
                            "column": 8,
                            "line": 76
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "range": [
                      1971,
                      1985
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 76
                      },
                      "start": {
                        "column": 4,
                        "line": 76
                      }
                    }
                  }
                ],
                "range": [
                  1965,
                  1987
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 77
                  },
                  "start": {
                    "column": 21,
                    "line": 75
                  }
                }
              }
            },
            "range": [
              1956,
              1987
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 77
              },
              "start": {
                "column": 12,
                "line": 75
              }
            }
          },
          "init": null,
          "range": [
            1956,
            1987
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 77
            },
            "start": {
              "column": 12,
              "line": 75
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        1944,
        1987
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          1998,
          2000
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 79
          },
          "start": {
            "column": 9,
            "line": 79
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 79
              },
              "start": {
                "column": 17,
                "line": 79
              }
            },
            "range": [
              2006,
              2014
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                2008,
                2014
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 79
                },
                "start": {
                  "column": 19,
                  "line": 79
                }
              }
            }
          },
          "range": [
            2001,
            2014
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 79
            },
            "start": {
              "column": 12,
              "line": 79
            }
          }
        }
      ],
      "range": [
        1989,
        2016
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          2052,
          2054
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 80
          },
          "start": {
            "column": 9,
            "line": 80
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 80
              },
              "start": {
                "column": 17,
                "line": 80
              }
            },
            "range": [
              2060,
              2068
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                2062,
                2068
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 80
                },
                "start": {
                  "column": 19,
                  "line": 80
                }
              }
            }
          },
          "range": [
            2055,
            2068
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 80
            },
            "start": {
              "column": 12,
              "line": 80
            }
          }
        }
      ],
      "range": [
        2043,
        2070
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              2146,
                              2150
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 82
                              },
                              "start": {
                                "column": 23,
                                "line": 82
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2151,
                              2152
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 82
                              },
                              "start": {
                                "column": 28,
                                "line": 82
                              }
                            }
                          },
                          "range": [
                            2146,
                            2152
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 82
                            },
                            "start": {
                              "column": 23,
                              "line": 82
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
                            2134,
                            2141
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 82
                            },
                            "start": {
                              "column": 11,
                              "line": 82
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
                            2142,
                            2145
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 82
                            },
                            "start": {
                              "column": 19,
                              "line": 82
                            }
                          }
                        },
                        "range": [
                          2134,
                          2145
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 82
                          },
                          "start": {
                            "column": 11,
                            "line": 82
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        2134,
                        2153
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 82
                        },
                        "start": {
                          "column": 11,
                          "line": 82
                        }
                      }
                    },
                    "range": [
                      2134,
                      2154
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 82
                      },
                      "start": {
                        "column": 11,
                        "line": 82
                      }
                    }
                  }
                ],
                "range": [
                  2132,
                  2156
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 82
                  },
                  "start": {
                    "column": 9,
                    "line": 82
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    2127,
                    2128
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 82
                    },
                    "start": {
                      "column": 4,
                      "line": 82
                    }
                  }
                }
              ],
              "range": [
                2127,
                2156
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 82
                },
                "start": {
                  "column": 4,
                  "line": 82
                }
              }
            },
            "range": [
              2127,
              2157
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          }
        ],
        "range": [
          2121,
          2159
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 24,
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
        "name": "f3",
        "optional": false,
        "range": [
          2106,
          2108
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 81
              },
              "start": {
                "column": 17,
                "line": 81
              }
            },
            "range": [
              2114,
              2119
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                2116,
                2119
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 81
                },
                "start": {
                  "column": 19,
                  "line": 81
                }
              }
            }
          },
          "range": [
            2109,
            2119
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 81
            },
            "start": {
              "column": 12,
              "line": 81
            }
          }
        }
      ],
      "range": [
        2097,
        2159
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2180,
          2395
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                2186,
                2197
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 86
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                2197,
                2213
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 86
                      },
                      "start": {
                        "column": 21,
                        "line": 86
                      }
                    },
                    "range": [
                      2203,
                      2211
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2205,
                        2211
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 86
                        },
                        "start": {
                          "column": 23,
                          "line": 86
                        }
                      }
                    }
                  },
                  "range": [
                    2198,
                    2211
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 86
                    },
                    "start": {
                      "column": 16,
                      "line": 86
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 86
                },
                "start": {
                  "column": 15,
                  "line": 86
                }
              }
            },
            "range": [
              2186,
              2213
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
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
                2244,
                2255
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 87
                },
                "start": {
                  "column": 4,
                  "line": 87
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                2255,
                2271
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 87
                      },
                      "start": {
                        "column": 21,
                        "line": 87
                      }
                    },
                    "range": [
                      2261,
                      2269
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2263,
                        2269
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 87
                        },
                        "start": {
                          "column": 23,
                          "line": 87
                        }
                      }
                    }
                  },
                  "range": [
                    2256,
                    2269
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 87
                    },
                    "start": {
                      "column": 16,
                      "line": 87
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 87
                },
                "start": {
                  "column": 15,
                  "line": 87
                }
              }
            },
            "range": [
              2244,
              2271
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
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
              "name": "z",
              "optional": false,
              "range": [
                2302,
                2303
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                2303,
                2319
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 88
                      },
                      "start": {
                        "column": 11,
                        "line": 88
                      }
                    },
                    "range": [
                      2309,
                      2317
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2311,
                        2317
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 88
                        },
                        "start": {
                          "column": 13,
                          "line": 88
                        }
                      }
                    }
                  },
                  "range": [
                    2304,
                    2317
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 88
                    },
                    "start": {
                      "column": 6,
                      "line": 88
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 88
                },
                "start": {
                  "column": 5,
                  "line": 88
                }
              }
            },
            "range": [
              2302,
              2319
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
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
              "name": "z",
              "optional": false,
              "range": [
                2350,
                2351
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 89
                },
                "start": {
                  "column": 4,
                  "line": 89
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                2351,
                2367
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 89
                      },
                      "start": {
                        "column": 11,
                        "line": 89
                      }
                    },
                    "range": [
                      2357,
                      2365
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2359,
                        2365
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 89
                        },
                        "start": {
                          "column": 13,
                          "line": 89
                        }
                      }
                    }
                  },
                  "range": [
                    2352,
                    2365
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 89
                    },
                    "start": {
                      "column": 6,
                      "line": 89
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 89
                },
                "start": {
                  "column": 5,
                  "line": 89
                }
              }
            },
            "range": [
              2350,
              2367
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 90
          },
          "start": {
            "column": 19,
            "line": 85
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo4",
        "optional": false,
        "range": [
          2175,
          2179
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 85
          },
          "start": {
            "column": 14,
            "line": 85
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        2161,
        2395
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          2414,
          2416
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 92
          },
          "start": {
            "column": 17,
            "line": 92
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 92
              },
              "start": {
                "column": 25,
                "line": 92
              }
            },
            "range": [
              2422,
              2430
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                2424,
                2430
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 92
                },
                "start": {
                  "column": 27,
                  "line": 92
                }
              }
            }
          },
          "range": [
            2417,
            2430
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 92
            },
            "start": {
              "column": 20,
              "line": 92
            }
          }
        }
      ],
      "range": [
        2397,
        2432
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 92
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          2476,
          2478
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 93
          },
          "start": {
            "column": 17,
            "line": 93
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 93
              },
              "start": {
                "column": 25,
                "line": 93
              }
            },
            "range": [
              2484,
              2492
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                2486,
                2492
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 93
                },
                "start": {
                  "column": 27,
                  "line": 93
                }
              }
            }
          },
          "range": [
            2479,
            2492
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 93
            },
            "start": {
              "column": 20,
              "line": 93
            }
          }
        }
      ],
      "range": [
        2459,
        2494
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 93
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 61,
      "line": 93
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
