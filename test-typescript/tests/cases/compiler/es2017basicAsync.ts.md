__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    778
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "async": true,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    39,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                },
                "range": [
                  33,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "range": [
                33,
                41
              ],
              "loc": {
                "end": {
                  "column": 12,
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
            27,
            43
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        },
        "expression": false,
        "generator": false,
        "id": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 8,
              "line": 1
            }
          },
          "range": [
            8,
            23
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                17,
                23
              ],
              "params": [
                {
                  "type": "TSVoidKeyword",
                  "range": [
                    18,
                    22
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 1
                    },
                    "start": {
                      "column": 18,
                      "line": 1
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "range": [
                10,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "range": [
              10,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          }
        },
        "range": [
          0,
          43
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
      "range": [
        0,
        43
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
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              },
              "range": [
                78,
                85
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              78,
              86
            ],
            "loc": {
              "end": {
                "column": 12,
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
          72,
          88
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 27,
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
        "name": "asyncFunc",
        "optional": false,
        "range": [
          60,
          69
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "params": [],
      "range": [
        45,
        88
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asyncArrowFunc",
            "optional": false,
            "range": [
              96,
              110
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        152,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 10
                        },
                        "start": {
                          "column": 10,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      146,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 10
                      },
                      "start": {
                        "column": 4,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    146,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                140,
                156
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 50,
                  "line": 9
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 9
                },
                "start": {
                  "column": 31,
                  "line": 9
                }
              },
              "range": [
                121,
                136
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    130,
                    136
                  ],
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        131,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 9
                        },
                        "start": {
                          "column": 41,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 9
                    },
                    "start": {
                      "column": 40,
                      "line": 9
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    123,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 9
                    },
                    "start": {
                      "column": 33,
                      "line": 9
                    }
                  }
                },
                "range": [
                  123,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 9
                  },
                  "start": {
                    "column": 33,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              113,
              156
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 23,
                "line": 9
              }
            }
          },
          "range": [
            96,
            156
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        90,
        156
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  197,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              },
              "range": [
                191,
                198
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              191,
              199
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              260,
                              261
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 17
                              },
                              "start": {
                                "column": 14,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            254,
                            261
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 17
                            },
                            "start": {
                              "column": 8,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          254,
                          262
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
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
                      244,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 18
                      },
                      "start": {
                        "column": 43,
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
                        "column": 42,
                        "line": 16
                      },
                      "start": {
                        "column": 27,
                        "line": 16
                      }
                    },
                    "range": [
                      228,
                      243
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          237,
                          243
                        ],
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "range": [
                              238,
                              242
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 16
                              },
                              "start": {
                                "column": 37,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 16
                          },
                          "start": {
                            "column": 36,
                            "line": 16
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          230,
                          237
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 16
                          },
                          "start": {
                            "column": 29,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        230,
                        243
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
                    }
                  },
                  "range": [
                    212,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 18
                    },
                    "start": {
                      "column": 11,
                      "line": 16
                    }
                  }
                },
                "optional": false,
                "range": [
                  211,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              },
              "range": [
                205,
                271
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              205,
              272
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 18
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
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              352,
                              353
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 21
                              },
                              "start": {
                                "column": 14,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            346,
                            353
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 21
                            },
                            "start": {
                              "column": 8,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          346,
                          354
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
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
                      336,
                      360
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 22
                      },
                      "start": {
                        "column": 58,
                        "line": 20
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncNamedFunc",
                    "optional": false,
                    "range": [
                      304,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 20
                      },
                      "start": {
                        "column": 26,
                        "line": 20
                      }
                    }
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 20
                      },
                      "start": {
                        "column": 42,
                        "line": 20
                      }
                    },
                    "range": [
                      320,
                      335
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          329,
                          335
                        ],
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "range": [
                              330,
                              334
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 20
                              },
                              "start": {
                                "column": 52,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 20
                          },
                          "start": {
                            "column": 51,
                            "line": 20
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          322,
                          329
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 20
                          },
                          "start": {
                            "column": 44,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        322,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 20
                        },
                        "start": {
                          "column": 44,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    289,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 22
                    },
                    "start": {
                      "column": 11,
                      "line": 20
                    }
                  }
                },
                "optional": false,
                "range": [
                  288,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 22
                  },
                  "start": {
                    "column": 10,
                    "line": 20
                  }
                }
              },
              "range": [
                282,
                363
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              282,
              364
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              424,
                              425
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 25
                              },
                              "start": {
                                "column": 14,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            418,
                            425
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 25
                            },
                            "start": {
                              "column": 8,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          418,
                          426
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 25
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "range": [
                      408,
                      432
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 26
                      },
                      "start": {
                        "column": 38,
                        "line": 24
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 24
                      },
                      "start": {
                        "column": 19,
                        "line": 24
                      }
                    },
                    "range": [
                      389,
                      404
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          398,
                          404
                        ],
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "range": [
                              399,
                              403
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 24
                              },
                              "start": {
                                "column": 29,
                                "line": 24
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 24
                          },
                          "start": {
                            "column": 28,
                            "line": 24
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          391,
                          398
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 24
                          },
                          "start": {
                            "column": 21,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        391,
                        404
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 24
                        },
                        "start": {
                          "column": 21,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    381,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 26
                    },
                    "start": {
                      "column": 11,
                      "line": 24
                    }
                  }
                },
                "optional": false,
                "range": [
                  380,
                  435
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 24
                  }
                }
              },
              "range": [
                374,
                435
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              374,
              436
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          185,
          438
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 27,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncIIFE",
        "optional": false,
        "range": [
          173,
          182
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 13
          },
          "start": {
            "column": 15,
            "line": 13
          }
        }
      },
      "params": [],
      "range": [
        158,
        438
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          457,
          777
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
              "name": "asyncPropFunc",
              "optional": false,
              "range": [
                463,
                476
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          527,
                          528
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 31
                          },
                          "start": {
                            "column": 14,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        521,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      521,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  511,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 52,
                    "line": 30
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
                    "column": 51,
                    "line": 30
                  },
                  "start": {
                    "column": 36,
                    "line": 30
                  }
                },
                "range": [
                  495,
                  510
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      504,
                      510
                    ],
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "range": [
                          505,
                          509
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 30
                          },
                          "start": {
                            "column": 46,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 30
                      },
                      "start": {
                        "column": 45,
                        "line": 30
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      497,
                      504
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 30
                      },
                      "start": {
                        "column": 38,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    497,
                    510
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 30
                    },
                    "start": {
                      "column": 38,
                      "line": 30
                    }
                  }
                }
              },
              "range": [
                479,
                535
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 20,
                  "line": 30
                }
              }
            },
            "range": [
              463,
              535
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 30
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
              "name": "asyncPropNamedFunc",
              "optional": false,
              "range": [
                545,
                563
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          624,
                          625
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 35
                          },
                          "start": {
                            "column": 14,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        618,
                        625
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      618,
                      626
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  608,
                  632
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 36
                  },
                  "start": {
                    "column": 67,
                    "line": 34
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "namedFunc",
                "optional": false,
                "range": [
                  581,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 34
                  },
                  "start": {
                    "column": 40,
                    "line": 34
                  }
                }
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 34
                  },
                  "start": {
                    "column": 51,
                    "line": 34
                  }
                },
                "range": [
                  592,
                  607
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      601,
                      607
                    ],
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "range": [
                          602,
                          606
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 34
                          },
                          "start": {
                            "column": 61,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 34
                      },
                      "start": {
                        "column": 60,
                        "line": 34
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      594,
                      601
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 34
                      },
                      "start": {
                        "column": 53,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    594,
                    607
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 34
                    },
                    "start": {
                      "column": 53,
                      "line": 34
                    }
                  }
                }
              },
              "range": [
                566,
                632
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 25,
                  "line": 34
                }
              }
            },
            "range": [
              545,
              632
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 34
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
              "name": "asyncPropArrowFunc",
              "optional": false,
              "range": [
                638,
                656
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          702,
                          703
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 39
                          },
                          "start": {
                            "column": 14,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        696,
                        703
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      696,
                      704
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  686,
                  710
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 52,
                    "line": 38
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 38
                  },
                  "start": {
                    "column": 33,
                    "line": 38
                  }
                },
                "range": [
                  667,
                  682
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      676,
                      682
                    ],
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "range": [
                          677,
                          681
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 38
                          },
                          "start": {
                            "column": 43,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 38
                      },
                      "start": {
                        "column": 42,
                        "line": 38
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      669,
                      676
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 38
                      },
                      "start": {
                        "column": 35,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    669,
                    682
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 38
                    },
                    "start": {
                      "column": 35,
                      "line": 38
                    }
                  }
                }
              },
              "range": [
                659,
                710
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 25,
                  "line": 38
                }
              }
            },
            "range": [
              638,
              710
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 38
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
              "name": "asyncMethod",
              "optional": false,
              "range": [
                722,
                733
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 42
                },
                "start": {
                  "column": 10,
                  "line": 42
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
                733,
                775
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          767,
                          768
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 43
                          },
                          "start": {
                            "column": 14,
                            "line": 43
                          }
                        }
                      },
                      "range": [
                        761,
                        768
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 43
                        },
                        "start": {
                          "column": 8,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      761,
                      769
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
                "range": [
                  751,
                  775
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 39,
                    "line": 42
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
                    "column": 38,
                    "line": 42
                  },
                  "start": {
                    "column": 23,
                    "line": 42
                  }
                },
                "range": [
                  735,
                  750
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      744,
                      750
                    ],
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "range": [
                          745,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 42
                          },
                          "start": {
                            "column": 33,
                            "line": 42
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 42
                      },
                      "start": {
                        "column": 32,
                        "line": 42
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      737,
                      744
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 42
                      },
                      "start": {
                        "column": 25,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    737,
                    750
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 42
                    },
                    "start": {
                      "column": 25,
                      "line": 42
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 21,
                  "line": 42
                }
              }
            },
            "range": [
              716,
              775
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 17,
            "line": 29
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncClass",
        "optional": false,
        "range": [
          446,
          456
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 29
          },
          "start": {
            "column": 6,
            "line": 29
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        440,
        777
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 46
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
