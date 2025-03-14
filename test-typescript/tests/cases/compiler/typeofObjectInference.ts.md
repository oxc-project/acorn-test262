__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    602
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
            "name": "val",
            "optional": false,
            "range": [
              4,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              10,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            4,
            11
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 1
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
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            112,
                            117
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 4
                            },
                            "start": {
                              "column": 24,
                              "line": 4
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "range": [
                            119,
                            122
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 4
                            },
                            "start": {
                              "column": 31,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          112,
                          122
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 4
                          },
                          "start": {
                            "column": 24,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      111,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 4
                      },
                      "start": {
                        "column": 23,
                        "line": 4
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "range": [
                    108,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "range": [
                  108,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                },
                "range": [
                  101,
                  104
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "range": [
                      103,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    103,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                99,
                124
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              92,
              124
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          86,
          126
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 73,
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
        "name": "decorateA",
        "optional": false,
        "range": [
          22,
          31
        ],
        "loc": {
          "end": {
            "column": 18,
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
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 3
              },
              "start": {
                "column": 36,
                "line": 3
              }
            },
            "range": [
              49,
              84
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "first",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 3
                      },
                      "start": {
                        "column": 44,
                        "line": 3
                      }
                    },
                    "range": [
                      57,
                      78
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              60,
                              65
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 3
                              },
                              "start": {
                                "column": 47,
                                "line": 3
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
                                "column": 64,
                                "line": 3
                              },
                              "start": {
                                "column": 52,
                                "line": 3
                              }
                            },
                            "range": [
                              65,
                              77
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "range": [
                                  74,
                                  77
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                67,
                                77
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 3
                                },
                                "start": {
                                  "column": 54,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            60,
                            77
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 3
                            },
                            "start": {
                              "column": 47,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        59,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 3
                        },
                        "start": {
                          "column": 46,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    52,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 3
                    },
                    "start": {
                      "column": 39,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 3
                  },
                  "start": {
                    "column": 67,
                    "line": 3
                  }
                },
                "range": [
                  80,
                  84
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "range": [
                      83,
                      84
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 3
                      },
                      "start": {
                        "column": 70,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    83,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 3
                    },
                    "start": {
                      "column": 70,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                51,
                84
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 3
                },
                "start": {
                  "column": 38,
                  "line": 3
                }
              }
            }
          },
          "range": [
            47,
            84
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 3
            },
            "start": {
              "column": 34,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        },
        "range": [
          31,
          46
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSAnyKeyword",
              "range": [
                42,
                45
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              32,
              45
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        13,
        126
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "a",
            "optional": false,
            "range": [
              131,
              132
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    158,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 31,
                      "line": 6
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            147,
                            152
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
                              "line": 6
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            147,
                            152
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          147,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 6
                          },
                          "start": {
                            "column": 20,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      146,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
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
                  145,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorateA",
              "optional": false,
              "range": [
                135,
                144
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "optional": false,
            "range": [
              135,
              160
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            131,
            160
          ],
          "loc": {
            "end": {
              "column": 33,
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
      "kind": "let",
      "range": [
        127,
        160
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "range": [
                      251,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 23,
                        "line": 9
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "range": [
                    248,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
                      "line": 9
                    }
                  }
                },
                "optional": false,
                "range": [
                  248,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 9
                  },
                  "start": {
                    "column": 20,
                    "line": 9
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 13,
                    "line": 9
                  }
                },
                "range": [
                  241,
                  244
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "range": [
                      243,
                      244
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
                  "range": [
                    243,
                    244
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
                }
              },
              "range": [
                239,
                255
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              232,
              255
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          226,
          257
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 64,
            "line": 8
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "decorateB",
        "optional": false,
        "range": [
          171,
          180
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 8
              },
              "start": {
                "column": 36,
                "line": 8
              }
            },
            "range": [
              198,
              224
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "first",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 8
                      },
                      "start": {
                        "column": 44,
                        "line": 8
                      }
                    },
                    "range": [
                      206,
                      218
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          215,
                          218
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 8
                          },
                          "start": {
                            "column": 53,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        208,
                        218
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 8
                        },
                        "start": {
                          "column": 46,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    201,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 8
                    },
                    "start": {
                      "column": 39,
                      "line": 8
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 8
                  },
                  "start": {
                    "column": 58,
                    "line": 8
                  }
                },
                "range": [
                  220,
                  224
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "range": [
                      223,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 8
                      },
                      "start": {
                        "column": 61,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    223,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 8
                    },
                    "start": {
                      "column": 61,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                200,
                224
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 8
                },
                "start": {
                  "column": 38,
                  "line": 8
                }
              }
            }
          },
          "range": [
            196,
            224
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 8
            },
            "start": {
              "column": 34,
              "line": 8
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 8
          },
          "start": {
            "column": 18,
            "line": 8
          }
        },
        "range": [
          180,
          195
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSAnyKeyword",
              "range": [
                191,
                194
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 8
                },
                "start": {
                  "column": 29,
                  "line": 8
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                181,
                182
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              181,
              194
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 8
              },
              "start": {
                "column": 19,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        162,
        257
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "b",
            "optional": false,
            "range": [
              262,
              263
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    287,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 11
                    },
                    "start": {
                      "column": 29,
                      "line": 11
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
                    "name": "value",
                    "optional": false,
                    "range": [
                      277,
                      282
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
                  }
                ],
                "range": [
                  276,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 11
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorateB",
              "optional": false,
              "range": [
                266,
                275
              ],
              "loc": {
                "end": {
                  "column": 17,
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
              266,
              289
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 11
              }
            }
          },
          "range": [
            262,
            289
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        258,
        289
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            386,
                            391
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 14
                            },
                            "start": {
                              "column": 24,
                              "line": 14
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "range": [
                            393,
                            396
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 14
                            },
                            "start": {
                              "column": 31,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          386,
                          396
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 14
                          },
                          "start": {
                            "column": 24,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      385,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 14
                      },
                      "start": {
                        "column": 23,
                        "line": 14
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "range": [
                    382,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 14
                    },
                    "start": {
                      "column": 20,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "range": [
                  382,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 14
                  },
                  "start": {
                    "column": 20,
                    "line": 14
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 13,
                    "line": 14
                  }
                },
                "range": [
                  375,
                  378
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "range": [
                      377,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 14
                      },
                      "start": {
                        "column": 15,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    377,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 15,
                      "line": 14
                    }
                  }
                }
              },
              "range": [
                373,
                398
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              366,
              398
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          360,
          400
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 69,
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
        "name": "decorateC",
        "optional": false,
        "range": [
          300,
          309
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 13
              },
              "start": {
                "column": 36,
                "line": 13
              }
            },
            "range": [
              327,
              358
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "first",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 13
                      },
                      "start": {
                        "column": 44,
                        "line": 13
                      }
                    },
                    "range": [
                      335,
                      352
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              338,
                              343
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 13
                              },
                              "start": {
                                "column": 47,
                                "line": 13
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
                                "column": 60,
                                "line": 13
                              },
                              "start": {
                                "column": 52,
                                "line": 13
                              }
                            },
                            "range": [
                              343,
                              351
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                345,
                                351
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 13
                                },
                                "start": {
                                  "column": 54,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            338,
                            351
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 13
                            },
                            "start": {
                              "column": 47,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        337,
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 13
                        },
                        "start": {
                          "column": 46,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    330,
                    352
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 13
                    },
                    "start": {
                      "column": 39,
                      "line": 13
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 13
                  },
                  "start": {
                    "column": 63,
                    "line": 13
                  }
                },
                "range": [
                  354,
                  358
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "range": [
                      357,
                      358
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 13
                      },
                      "start": {
                        "column": 66,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    357,
                    358
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 13
                    },
                    "start": {
                      "column": 66,
                      "line": 13
                    }
                  }
                }
              },
              "range": [
                329,
                358
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 13
                },
                "start": {
                  "column": 38,
                  "line": 13
                }
              }
            }
          },
          "range": [
            325,
            358
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 13
            },
            "start": {
              "column": 34,
              "line": 13
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 13
          },
          "start": {
            "column": 18,
            "line": 13
          }
        },
        "range": [
          309,
          324
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSAnyKeyword",
              "range": [
                320,
                323
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 13
                },
                "start": {
                  "column": 29,
                  "line": 13
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                310,
                311
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              310,
              323
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 13
              },
              "start": {
                "column": 19,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        291,
        400
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "c",
            "optional": false,
            "range": [
              405,
              406
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    432,
                    433
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 16
                    },
                    "start": {
                      "column": 31,
                      "line": 16
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            421,
                            426
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 16
                            },
                            "start": {
                              "column": 20,
                              "line": 16
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            421,
                            426
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 16
                            },
                            "start": {
                              "column": 20,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          421,
                          426
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 16
                          },
                          "start": {
                            "column": 20,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "range": [
                      420,
                      427
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  419,
                  433
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 16
                  },
                  "start": {
                    "column": 18,
                    "line": 16
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorateC",
              "optional": false,
              "range": [
                409,
                418
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              409,
              434
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          },
          "range": [
            405,
            434
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        401,
        434
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "First",
        "optional": false,
        "range": [
          441,
          446
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                450,
                455
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 18
                },
                "start": {
                  "column": 14,
                  "line": 18
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
                  "column": 31,
                  "line": 18
                },
                "start": {
                  "column": 19,
                  "line": 18
                }
              },
              "range": [
                455,
                467
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "range": [
                    464,
                    467
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 18
                    },
                    "start": {
                      "column": 28,
                      "line": 18
                    }
                  }
                },
                "range": [
                  457,
                  467
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 18
                  },
                  "start": {
                    "column": 21,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              450,
              467
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 18
              },
              "start": {
                "column": 14,
                "line": 18
              }
            }
          }
        ],
        "range": [
          449,
          468
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 18
          },
          "start": {
            "column": 13,
            "line": 18
          }
        }
      },
      "range": [
        436,
        468
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            554,
                            559
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
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "range": [
                            561,
                            564
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 20
                            },
                            "start": {
                              "column": 31,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          554,
                          564
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 20
                          },
                          "start": {
                            "column": 24,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "range": [
                      553,
                      565
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 20
                      },
                      "start": {
                        "column": 23,
                        "line": 20
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "range": [
                    550,
                    552
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
                "optional": false,
                "range": [
                  550,
                  566
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
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 20
                  },
                  "start": {
                    "column": 13,
                    "line": 20
                  }
                },
                "range": [
                  543,
                  546
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "range": [
                      545,
                      546
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 20
                      },
                      "start": {
                        "column": 15,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    545,
                    546
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 15,
                      "line": 20
                    }
                  }
                }
              },
              "range": [
                541,
                566
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "range": [
              534,
              566
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          528,
          568
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 59,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "decorateD",
        "optional": false,
        "range": [
          478,
          487
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 19
              },
              "start": {
                "column": 36,
                "line": 19
              }
            },
            "range": [
              505,
              526
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "first",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 19
                      },
                      "start": {
                        "column": 44,
                        "line": 19
                      }
                    },
                    "range": [
                      513,
                      520
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "First",
                        "optional": false,
                        "range": [
                          515,
                          520
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 19
                          },
                          "start": {
                            "column": 46,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        515,
                        520
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 19
                        },
                        "start": {
                          "column": 46,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    508,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 19
                    },
                    "start": {
                      "column": 39,
                      "line": 19
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 19
                  },
                  "start": {
                    "column": 53,
                    "line": 19
                  }
                },
                "range": [
                  522,
                  526
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "range": [
                      525,
                      526
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 19
                      },
                      "start": {
                        "column": 56,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    525,
                    526
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 19
                    },
                    "start": {
                      "column": 56,
                      "line": 19
                    }
                  }
                }
              },
              "range": [
                507,
                526
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 19
                },
                "start": {
                  "column": 38,
                  "line": 19
                }
              }
            }
          },
          "range": [
            503,
            526
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 19
            },
            "start": {
              "column": 34,
              "line": 19
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 19
          },
          "start": {
            "column": 18,
            "line": 19
          }
        },
        "range": [
          487,
          502
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSAnyKeyword",
              "range": [
                498,
                501
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 19
                },
                "start": {
                  "column": 29,
                  "line": 19
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                488,
                489
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 19
                },
                "start": {
                  "column": 19,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              488,
              501
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 19
              },
              "start": {
                "column": 19,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        469,
        568
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "d",
            "optional": false,
            "range": [
              573,
              574
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    600,
                    601
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 22
                    },
                    "start": {
                      "column": 31,
                      "line": 22
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            589,
                            594
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 22
                            },
                            "start": {
                              "column": 20,
                              "line": 22
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            589,
                            594
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 22
                            },
                            "start": {
                              "column": 20,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          589,
                          594
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 22
                          },
                          "start": {
                            "column": 20,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "range": [
                      588,
                      595
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 22
                      },
                      "start": {
                        "column": 19,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  587,
                  601
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 22
                  },
                  "start": {
                    "column": 18,
                    "line": 22
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "decorateD",
              "optional": false,
              "range": [
                577,
                586
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              577,
              602
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 22
              },
              "start": {
                "column": 8,
                "line": 22
              }
            }
          },
          "range": [
            573,
            602
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        569,
        602
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 33,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
