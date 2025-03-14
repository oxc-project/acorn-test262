__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1211
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          12,
          99
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                25,
                36
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 11,
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
                36,
                58
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  55,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 2
                        },
                        "start": {
                          "column": 31,
                          "line": 2
                        }
                      },
                      "range": [
                        45,
                        53
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          47,
                          53
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 2
                          },
                          "start": {
                            "column": 33,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      44,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 2
                      },
                      "start": {
                        "column": 30,
                        "line": 2
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    37,
                    53
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 2
                    },
                    "start": {
                      "column": 23,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "range": [
              18,
              58
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 2
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
              "name": "createInstance",
              "optional": false,
              "range": [
                63,
                77
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                77,
                97
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            92,
                            93
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 3
                            },
                            "start": {
                              "column": 33,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "range": [
                          86,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 3
                          },
                          "start": {
                            "column": 27,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        82,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 3
                        },
                        "start": {
                          "column": 23,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      82,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  80,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
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
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "range": [
              63,
              97
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseA",
        "optional": false,
        "range": [
          6,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
        99
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
          113,
          203
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                129,
                140
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
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
                140,
                162
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  159,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 7
                  },
                  "start": {
                    "column": 44,
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 7
                        },
                        "start": {
                          "column": 34,
                          "line": 7
                        }
                      },
                      "range": [
                        149,
                        157
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          151,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 7
                          },
                          "start": {
                            "column": 36,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      148,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 7
                      },
                      "start": {
                        "column": 33,
                        "line": 7
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    141,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 7
                    },
                    "start": {
                      "column": 26,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            },
            "range": [
              119,
              162
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 7
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
              "name": "createInstance",
              "optional": false,
              "range": [
                167,
                181
              ],
              "loc": {
                "end": {
                  "column": 18,
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
                181,
                201
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            196,
                            197
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 8
                            },
                            "start": {
                              "column": 33,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "range": [
                          190,
                          195
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 8
                          },
                          "start": {
                            "column": 27,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        186,
                        198
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 8
                        },
                        "start": {
                          "column": 23,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      186,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  184,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
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
                  "column": 38,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              }
            },
            "range": [
              167,
              201
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 12,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseB",
        "optional": false,
        "range": [
          107,
          112
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        101,
        203
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
          217,
          351
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                231,
                242
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 23,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
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
                242,
                264
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  261,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 12
                  },
                  "start": {
                    "column": 42,
                    "line": 12
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 12
                        },
                        "start": {
                          "column": 32,
                          "line": 12
                        }
                      },
                      "range": [
                        251,
                        259
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          253,
                          259
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 12
                          },
                          "start": {
                            "column": 34,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      250,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 12
                      },
                      "start": {
                        "column": 31,
                        "line": 12
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    243,
                    259
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 12
                    },
                    "start": {
                      "column": 24,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 12
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              }
            },
            "range": [
              223,
              264
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
              "name": "createInstance",
              "optional": false,
              "range": [
                269,
                283
              ],
              "loc": {
                "end": {
                  "column": 18,
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
                283,
                303
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "3",
                          "value": 3,
                          "range": [
                            298,
                            299
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 13
                            },
                            "start": {
                              "column": 33,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "range": [
                          292,
                          297
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 13
                          },
                          "start": {
                            "column": 27,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        288,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 13
                        },
                        "start": {
                          "column": 23,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      288,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
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
                  286,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 13
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
              "params": [],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 13
                },
                "start": {
                  "column": 18,
                  "line": 13
                }
              }
            },
            "range": [
              269,
              303
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 13
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
              "name": "staticInstance",
              "optional": false,
              "range": [
                315,
                329
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
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
                329,
                349
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "4",
                          "value": 4,
                          "range": [
                            344,
                            345
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 14
                            },
                            "start": {
                              "column": 40,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "range": [
                          338,
                          343
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 14
                          },
                          "start": {
                            "column": 34,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        334,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 14
                        },
                        "start": {
                          "column": 30,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      334,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 14
                      },
                      "start": {
                        "column": 30,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  332,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 14
                  },
                  "start": {
                    "column": 28,
                    "line": 14
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
                  "column": 45,
                  "line": 14
                },
                "start": {
                  "column": 25,
                  "line": 14
                }
              }
            },
            "range": [
              308,
              349
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 12,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseC",
        "optional": false,
        "range": [
          211,
          216
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        205,
        351
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          382,
          568
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                388,
                399
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                399,
                431
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            426,
                            427
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 18
                            },
                            "start": {
                              "column": 42,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          420,
                          425
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 18
                          },
                          "start": {
                            "column": 36,
                            "line": 18
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        420,
                        428
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 18
                        },
                        "start": {
                          "column": 36,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      420,
                      429
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 18
                      },
                      "start": {
                        "column": 36,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  418,
                  431
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 18
                  },
                  "start": {
                    "column": 34,
                    "line": 18
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 18
                        },
                        "start": {
                          "column": 24,
                          "line": 18
                        }
                      },
                      "range": [
                        408,
                        416
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          410,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 18
                          },
                          "start": {
                            "column": 26,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      407,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 18
                      },
                      "start": {
                        "column": 23,
                        "line": 18
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    400,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 18
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
                  "column": 47,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            },
            "range": [
              388,
              431
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
              "name": "createInstance",
              "optional": false,
              "range": [
                436,
                450
              ],
              "loc": {
                "end": {
                  "column": 18,
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
                450,
                473
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "5",
                          "value": 5,
                          "range": [
                            468,
                            469
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 19
                            },
                            "start": {
                              "column": 36,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedA",
                        "optional": false,
                        "range": [
                          459,
                          467
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 19
                          },
                          "start": {
                            "column": 27,
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
                          "column": 38,
                          "line": 19
                        },
                        "start": {
                          "column": 23,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      455,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 19
                      },
                      "start": {
                        "column": 23,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  453,
                  473
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 19
                  },
                  "start": {
                    "column": 21,
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
                  "column": 41,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 19
                }
              }
            },
            "range": [
              436,
              473
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 19
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
              "name": "createBaseInstance",
              "optional": false,
              "range": [
                478,
                496
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 4,
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
                496,
                516
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "6",
                          "value": 6,
                          "range": [
                            511,
                            512
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 20
                            },
                            "start": {
                              "column": 37,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "range": [
                          505,
                          510
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 20
                          },
                          "start": {
                            "column": 31,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        501,
                        513
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 20
                        },
                        "start": {
                          "column": 27,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      501,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 20
                      },
                      "start": {
                        "column": 27,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  499,
                  516
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 20
                  },
                  "start": {
                    "column": 25,
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
                  "column": 42,
                  "line": 20
                },
                "start": {
                  "column": 22,
                  "line": 20
                }
              }
            },
            "range": [
              478,
              516
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 20
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
              "name": "staticBaseInstance",
              "optional": false,
              "range": [
                528,
                546
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
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
                546,
                566
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "7",
                          "value": 7,
                          "range": [
                            561,
                            562
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 21
                            },
                            "start": {
                              "column": 44,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "range": [
                          555,
                          560
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 21
                          },
                          "start": {
                            "column": 38,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        551,
                        563
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 21
                        },
                        "start": {
                          "column": 34,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      551,
                      564
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 21
                      },
                      "start": {
                        "column": 34,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  549,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 21
                  },
                  "start": {
                    "column": 32,
                    "line": 21
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
                  "column": 49,
                  "line": 21
                },
                "start": {
                  "column": 29,
                  "line": 21
                }
              }
            },
            "range": [
              521,
              566
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 29,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedA",
        "optional": false,
        "range": [
          359,
          367
        ],
        "loc": {
          "end": {
            "column": 14,
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
        "name": "BaseA",
        "optional": false,
        "range": [
          376,
          381
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 17
          },
          "start": {
            "column": 23,
            "line": 17
          }
        }
      },
      "range": [
        353,
        568
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          599,
          797
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                605,
                616
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
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
                616,
                648
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            643,
                            644
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 25
                            },
                            "start": {
                              "column": 42,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          637,
                          642
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 25
                          },
                          "start": {
                            "column": 36,
                            "line": 25
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        637,
                        645
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 25
                        },
                        "start": {
                          "column": 36,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      637,
                      646
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 25
                      },
                      "start": {
                        "column": 36,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  635,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 25
                  },
                  "start": {
                    "column": 34,
                    "line": 25
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 25
                        },
                        "start": {
                          "column": 24,
                          "line": 25
                        }
                      },
                      "range": [
                        625,
                        633
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          627,
                          633
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 25
                          },
                          "start": {
                            "column": 26,
                            "line": 25
                          }
                        }
                      }
                    },
                    "range": [
                      624,
                      633
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 25
                      },
                      "start": {
                        "column": 23,
                        "line": 25
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    617,
                    633
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 25
                    },
                    "start": {
                      "column": 16,
                      "line": 25
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 25
                }
              }
            },
            "range": [
              605,
              648
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
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
              "name": "createInstance",
              "optional": false,
              "range": [
                653,
                667
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
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
                667,
                690
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "7",
                          "value": 7,
                          "range": [
                            685,
                            686
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 26
                            },
                            "start": {
                              "column": 36,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedB",
                        "optional": false,
                        "range": [
                          676,
                          684
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 26
                          },
                          "start": {
                            "column": 27,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        672,
                        687
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 26
                        },
                        "start": {
                          "column": 23,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      672,
                      688
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 26
                      },
                      "start": {
                        "column": 23,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  670,
                  690
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 26
                  },
                  "start": {
                    "column": 21,
                    "line": 26
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
                  "column": 41,
                  "line": 26
                },
                "start": {
                  "column": 18,
                  "line": 26
                }
              }
            },
            "range": [
              653,
              690
            ],
            "loc": {
              "end": {
                "column": 41,
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
              "name": "createBaseInstance",
              "optional": false,
              "range": [
                695,
                713
              ],
              "loc": {
                "end": {
                  "column": 22,
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
                713,
                733
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "8",
                          "value": 8,
                          "range": [
                            728,
                            729
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 27
                            },
                            "start": {
                              "column": 37,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "range": [
                          722,
                          727
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 27
                          },
                          "start": {
                            "column": 31,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        718,
                        730
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 27
                        },
                        "start": {
                          "column": 27,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      718,
                      731
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 27
                      },
                      "start": {
                        "column": 27,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  716,
                  733
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 27
                  },
                  "start": {
                    "column": 25,
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
                  "column": 42,
                  "line": 27
                },
                "start": {
                  "column": 22,
                  "line": 27
                }
              }
            },
            "range": [
              695,
              733
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
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
              "name": "staticBaseInstance",
              "optional": false,
              "range": [
                751,
                769
              ],
              "loc": {
                "end": {
                  "column": 29,
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
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                769,
                789
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "9",
                          "value": 9,
                          "range": [
                            784,
                            785
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 28
                            },
                            "start": {
                              "column": 44,
                              "line": 28
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "range": [
                          778,
                          783
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 28
                          },
                          "start": {
                            "column": 38,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        774,
                        786
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 28
                        },
                        "start": {
                          "column": 34,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      774,
                      787
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 28
                      },
                      "start": {
                        "column": 34,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  772,
                  789
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 28
                  },
                  "start": {
                    "column": 32,
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
                  "column": 49,
                  "line": 28
                },
                "start": {
                  "column": 29,
                  "line": 28
                }
              }
            },
            "range": [
              744,
              789
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 28
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
            "line": 29
          },
          "start": {
            "column": 29,
            "line": 24
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedB",
        "optional": false,
        "range": [
          576,
          584
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 24
          },
          "start": {
            "column": 6,
            "line": 24
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseB",
        "optional": false,
        "range": [
          593,
          598
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 24
          },
          "start": {
            "column": 23,
            "line": 24
          }
        }
      },
      "range": [
        570,
        797
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          828,
          1043
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                843,
                854
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
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
                854,
                886
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            881,
                            882
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 32
                            },
                            "start": {
                              "column": 42,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          875,
                          880
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 32
                          },
                          "start": {
                            "column": 36,
                            "line": 32
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        875,
                        883
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 32
                        },
                        "start": {
                          "column": 36,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      875,
                      884
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 32
                      },
                      "start": {
                        "column": 36,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  873,
                  886
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 32
                  },
                  "start": {
                    "column": 34,
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 32
                        },
                        "start": {
                          "column": 24,
                          "line": 32
                        }
                      },
                      "range": [
                        863,
                        871
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          865,
                          871
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 32
                          },
                          "start": {
                            "column": 26,
                            "line": 32
                          }
                        }
                      }
                    },
                    "range": [
                      862,
                      871
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 32
                      },
                      "start": {
                        "column": 23,
                        "line": 32
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    855,
                    871
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 32
                    },
                    "start": {
                      "column": 16,
                      "line": 32
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 32
                },
                "start": {
                  "column": 15,
                  "line": 32
                }
              }
            },
            "range": [
              843,
              886
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
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
              "name": "createInstance",
              "optional": false,
              "range": [
                891,
                905
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
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                905,
                928
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "9",
                          "value": 9,
                          "range": [
                            923,
                            924
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 33
                            },
                            "start": {
                              "column": 36,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedC",
                        "optional": false,
                        "range": [
                          914,
                          922
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 33
                          },
                          "start": {
                            "column": 27,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        910,
                        925
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 33
                        },
                        "start": {
                          "column": 23,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      910,
                      926
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 33
                      },
                      "start": {
                        "column": 23,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  908,
                  928
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 33
                  },
                  "start": {
                    "column": 21,
                    "line": 33
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
                  "column": 41,
                  "line": 33
                },
                "start": {
                  "column": 18,
                  "line": 33
                }
              }
            },
            "range": [
              891,
              928
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
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
              "name": "createBaseInstance",
              "optional": false,
              "range": [
                933,
                951
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
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                951,
                972
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            966,
                            968
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 34
                            },
                            "start": {
                              "column": 37,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "range": [
                          960,
                          965
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 34
                          },
                          "start": {
                            "column": 31,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        956,
                        969
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 34
                        },
                        "start": {
                          "column": 27,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      956,
                      970
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 34
                      },
                      "start": {
                        "column": 27,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  954,
                  972
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 34
                  },
                  "start": {
                    "column": 25,
                    "line": 34
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
                  "column": 43,
                  "line": 34
                },
                "start": {
                  "column": 22,
                  "line": 34
                }
              }
            },
            "range": [
              933,
              972
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
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
              "name": "staticBaseInstance",
              "optional": false,
              "range": [
                993,
                1011
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 35
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
                1011,
                1032
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "11",
                          "value": 11,
                          "range": [
                            1026,
                            1028
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 35
                            },
                            "start": {
                              "column": 44,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "range": [
                          1020,
                          1025
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 35
                          },
                          "start": {
                            "column": 38,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        1016,
                        1029
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 35
                        },
                        "start": {
                          "column": 34,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      1016,
                      1030
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 35
                      },
                      "start": {
                        "column": 34,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  1014,
                  1032
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 35
                  },
                  "start": {
                    "column": 32,
                    "line": 35
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
                  "column": 50,
                  "line": 35
                },
                "start": {
                  "column": 29,
                  "line": 35
                }
              }
            },
            "range": [
              986,
              1032
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 29,
            "line": 31
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedC",
        "optional": false,
        "range": [
          805,
          813
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 31
          },
          "start": {
            "column": 6,
            "line": 31
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseC",
        "optional": false,
        "range": [
          822,
          827
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 31
          },
          "start": {
            "column": 23,
            "line": 31
          }
        }
      },
      "range": [
        799,
        1043
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "ba",
            "optional": false,
            "range": [
              1049,
              1051
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1064,
                  1065
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 38
                  },
                  "start": {
                    "column": 19,
                    "line": 38
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseA",
              "optional": false,
              "range": [
                1058,
                1063
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 38
                },
                "start": {
                  "column": 13,
                  "line": 38
                }
              }
            },
            "range": [
              1054,
              1066
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 38
              },
              "start": {
                "column": 9,
                "line": 38
              }
            }
          },
          "range": [
            1049,
            1066
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
      "declare": false,
      "kind": "var",
      "range": [
        1045,
        1067
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "bb",
            "optional": false,
            "range": [
              1072,
              1074
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1087,
                  1088
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 39
                  },
                  "start": {
                    "column": 19,
                    "line": 39
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseB",
              "optional": false,
              "range": [
                1081,
                1086
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 39
                },
                "start": {
                  "column": 13,
                  "line": 39
                }
              }
            },
            "range": [
              1077,
              1089
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 39
              },
              "start": {
                "column": 9,
                "line": 39
              }
            }
          },
          "range": [
            1072,
            1089
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 39
            },
            "start": {
              "column": 4,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1068,
        1090
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
            "name": "bc",
            "optional": false,
            "range": [
              1104,
              1106
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1119,
                  1120
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 40
                  },
                  "start": {
                    "column": 19,
                    "line": 40
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseC",
              "optional": false,
              "range": [
                1113,
                1118
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 40
                },
                "start": {
                  "column": 13,
                  "line": 40
                }
              }
            },
            "range": [
              1109,
              1121
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 40
              },
              "start": {
                "column": 9,
                "line": 40
              }
            }
          },
          "range": [
            1104,
            1121
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1100,
        1122
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "da",
            "optional": false,
            "range": [
              1137,
              1139
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1155,
                  1156
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 42
                  },
                  "start": {
                    "column": 22,
                    "line": 42
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedA",
              "optional": false,
              "range": [
                1146,
                1154
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 42
                },
                "start": {
                  "column": 13,
                  "line": 42
                }
              }
            },
            "range": [
              1142,
              1157
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 42
              },
              "start": {
                "column": 9,
                "line": 42
              }
            }
          },
          "range": [
            1137,
            1157
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1133,
        1158
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
            "name": "db",
            "optional": false,
            "range": [
              1163,
              1165
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1181,
                  1182
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 43
                  },
                  "start": {
                    "column": 22,
                    "line": 43
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedB",
              "optional": false,
              "range": [
                1172,
                1180
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 43
                },
                "start": {
                  "column": 13,
                  "line": 43
                }
              }
            },
            "range": [
              1168,
              1183
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 43
              },
              "start": {
                "column": 9,
                "line": 43
              }
            }
          },
          "range": [
            1163,
            1183
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1159,
        1184
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "dc",
            "optional": false,
            "range": [
              1189,
              1191
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1207,
                  1208
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 44
                  },
                  "start": {
                    "column": 22,
                    "line": 44
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedC",
              "optional": false,
              "range": [
                1198,
                1206
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 44
                },
                "start": {
                  "column": 13,
                  "line": 44
                }
              }
            },
            "range": [
              1194,
              1209
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 44
              },
              "start": {
                "column": 9,
                "line": 44
              }
            }
          },
          "range": [
            1189,
            1209
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 44
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1185,
        1210
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 45
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
