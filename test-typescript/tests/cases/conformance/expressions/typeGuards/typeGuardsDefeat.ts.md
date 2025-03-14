__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    129,
    747
  ],
  "body": [
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        191,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        195,
                        197
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 5
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      191,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    191,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
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
                181,
                204
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 17,
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
              "name": "f",
              "optional": false,
              "range": [
                177,
                178
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "params": [],
            "range": [
              168,
              204
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        318,
                        319
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
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      318,
                      321
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
                  },
                  "range": [
                    311,
                    322
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
                }
              ],
              "range": [
                301,
                338
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
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
                      "name": "f",
                      "optional": false,
                      "range": [
                        246,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      246,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    246,
                    250
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
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        266,
                        267
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
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "range": [
                        268,
                        274
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 9
                        },
                        "start": {
                          "column": 17,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      266,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 9
                      },
                      "start": {
                        "column": 15,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    259,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
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
                236,
                291
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 31,
                  "line": 7
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    220,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 15,
                      "line": 7
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  213,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  226,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              "range": [
                213,
                234
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "range": [
              209,
              338
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          162,
          340
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 33,
            "line": 3
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
          138,
          141
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            },
            "range": [
              143,
              160
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    145,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    154,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                145,
                160
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            }
          },
          "range": [
            142,
            160
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        }
      ],
      "range": [
        129,
        340
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
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
            "type": "IfStatement",
            "alternate": {
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
                        "name": "f",
                        "optional": false,
                        "range": [
                          474,
                          475
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 20
                          },
                          "start": {
                            "column": 12,
                            "line": 20
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
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    511,
                                    512
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 21
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    515,
                                    516
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 21
                                    }
                                  }
                                },
                                "range": [
                                  511,
                                  516
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                504,
                                517
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 21
                                },
                                "start": {
                                  "column": 12,
                                  "line": 21
                                }
                              }
                            }
                          ],
                          "range": [
                            490,
                            527
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 22
                            },
                            "start": {
                              "column": 28,
                              "line": 20
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          478,
                          527
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 22
                          },
                          "start": {
                            "column": 16,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        474,
                        527
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 22
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
                    470,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                460,
                534
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
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        425,
                        426
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
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
                        427,
                        433
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      425,
                      433
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 17
                      },
                      "start": {
                        "column": 15,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    418,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
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
                408,
                450
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
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    392,
                    393
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
                "operator": "typeof",
                "prefix": true,
                "range": [
                  385,
                  393
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  398,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 16
                  },
                  "start": {
                    "column": 21,
                    "line": 16
                  }
                }
              },
              "range": [
                385,
                406
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              }
            },
            "range": [
              381,
              534
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 16
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
                "name": "x",
                "optional": false,
                "range": [
                  539,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  543,
                  550
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              "range": [
                539,
                550
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              539,
              551
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  556,
                  557
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "range": [
                556,
                559
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              556,
              560
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          375,
          562
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 34,
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
        "name": "foo2",
        "optional": false,
        "range": [
          350,
          354
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 15
              },
              "start": {
                "column": 15,
                "line": 15
              }
            },
            "range": [
              356,
              373
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    358,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    367,
                    373
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 26,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                358,
                373
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
            }
          },
          "range": [
            355,
            373
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 15
            },
            "start": {
              "column": 14,
              "line": 15
            }
          }
        }
      ],
      "range": [
        341,
        562
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
            "type": "IfStatement",
            "alternate": {
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
                        "name": "f",
                        "optional": false,
                        "range": [
                          696,
                          697
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 32
                          },
                          "start": {
                            "column": 12,
                            "line": 32
                          }
                        }
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              706,
                              707
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 32
                              },
                              "start": {
                                "column": 22,
                                "line": 32
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              710,
                              711
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 32
                              },
                              "start": {
                                "column": 26,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            706,
                            711
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 32
                            },
                            "start": {
                              "column": 22,
                              "line": 32
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          700,
                          711
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 32
                          },
                          "start": {
                            "column": 16,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        696,
                        711
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 32
                        },
                        "start": {
                          "column": 12,
                          "line": 32
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    692,
                    712
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                }
              ],
              "range": [
                682,
                718
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        647,
                        648
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 29
                        },
                        "start": {
                          "column": 15,
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
                        649,
                        655
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 29
                        },
                        "start": {
                          "column": 17,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      647,
                      655
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 29
                      },
                      "start": {
                        "column": 15,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    640,
                    656
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
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
                630,
                672
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 31,
                  "line": 28
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    614,
                    615
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 28
                    },
                    "start": {
                      "column": 15,
                      "line": 28
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  607,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  620,
                  628
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 28
                  },
                  "start": {
                    "column": 21,
                    "line": 28
                  }
                }
              },
              "range": [
                607,
                628
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "range": [
              603,
              718
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  723,
                  724
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  727,
                  734
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              },
              "range": [
                723,
                734
              ],
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
            "range": [
              723,
              735
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  740,
                  741
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 4,
                    "line": 35
                  }
                }
              },
              "optional": false,
              "range": [
                740,
                743
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            "range": [
              740,
              744
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "range": [
          597,
          746
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 34,
            "line": 27
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          572,
          576
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 27
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 27
              },
              "start": {
                "column": 15,
                "line": 27
              }
            },
            "range": [
              578,
              595
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    580,
                    586
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 27
                    },
                    "start": {
                      "column": 17,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    589,
                    595
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 27
                    },
                    "start": {
                      "column": 26,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                580,
                595
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 27
                },
                "start": {
                  "column": 17,
                  "line": 27
                }
              }
            }
          },
          "range": [
            577,
            595
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 27
            },
            "start": {
              "column": 14,
              "line": 27
            }
          }
        }
      ],
      "range": [
        563,
        746
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
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
      "column": 0,
      "line": 37
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
