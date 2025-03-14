__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    404
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Callback",
        "optional": false,
        "range": [
          27,
          35
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              },
              "range": [
                54,
                60
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TFoo",
                  "optional": false,
                  "range": [
                    56,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 34,
                      "line": 3
                    }
                  }
                },
                "range": [
                  56,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              51,
              60
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 3
              },
              "start": {
                "column": 29,
                "line": 3
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 3
                },
                "start": {
                  "column": 43,
                  "line": 3
                }
              },
              "range": [
                65,
                71
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TBar",
                  "optional": false,
                  "range": [
                    67,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 3
                    },
                    "start": {
                      "column": 45,
                      "line": 3
                    }
                  }
                },
                "range": [
                  67,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 3
                  },
                  "start": {
                    "column": 45,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              62,
              71
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 3
              },
              "start": {
                "column": 40,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 57,
              "line": 3
            },
            "start": {
              "column": 51,
              "line": 3
            }
          },
          "range": [
            73,
            79
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              76,
              79
            ],
            "loc": {
              "end": {
                "column": 57,
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
          50,
          79
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 3
          },
          "start": {
            "column": 28,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
          }
        },
        "range": [
          35,
          47
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFoo",
              "optional": false,
              "range": [
                36,
                40
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              36,
              40
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBar",
              "optional": false,
              "range": [
                42,
                46
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              42,
              46
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        79
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "example",
        "optional": false,
        "range": [
          98,
          105
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 7,
                "line": 6
              }
            },
            "range": [
              166,
              172
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TFoo",
                "optional": false,
                "range": [
                  168,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 6
                  }
                }
              },
              "range": [
                168,
                172
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            }
          },
          "range": [
            163,
            172
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            },
            "range": [
              186,
              197
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TCallback",
                "optional": false,
                "range": [
                  188,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 7
                  },
                  "start": {
                    "column": 14,
                    "line": 7
                  }
                }
              },
              "range": [
                188,
                197
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            }
          },
          "range": [
            178,
            197
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 13,
                "line": 8
              },
              "start": {
                "column": 7,
                "line": 8
              }
            },
            "range": [
              206,
              212
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBar",
                "optional": false,
                "range": [
                  208,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              },
              "range": [
                208,
                212
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            }
          },
          "range": [
            203,
            212
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 1,
            "line": 9
          }
        },
        "range": [
          215,
          226
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TCallback",
            "optional": false,
            "range": [
              217,
              226
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 9
              },
              "start": {
                "column": 3,
                "line": 9
              }
            }
          },
          "range": [
            217,
            226
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 9
            },
            "start": {
              "column": 3,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 76,
            "line": 5
          },
          "start": {
            "column": 24,
            "line": 5
          }
        },
        "range": [
          105,
          157
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFoo",
              "optional": false,
              "range": [
                106,
                110
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
            "out": false,
            "range": [
              106,
              110
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBar",
              "optional": false,
              "range": [
                112,
                116
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              112,
              116
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 5
              },
              "start": {
                "column": 31,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  144,
                  156
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TFoo",
                      "optional": false,
                      "range": [
                        145,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 5
                        },
                        "start": {
                          "column": 64,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      145,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 5
                      },
                      "start": {
                        "column": 64,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TBar",
                      "optional": false,
                      "range": [
                        151,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 5
                        },
                        "start": {
                          "column": 70,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      151,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 5
                      },
                      "start": {
                        "column": 70,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 5
                  },
                  "start": {
                    "column": 63,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Callback",
                "optional": false,
                "range": [
                  136,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 5
                  },
                  "start": {
                    "column": 55,
                    "line": 5
                  }
                }
              },
              "range": [
                136,
                156
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 5
                },
                "start": {
                  "column": 55,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TCallback",
              "optional": false,
              "range": [
                118,
                127
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 5
                },
                "start": {
                  "column": 37,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              118,
              156
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        81,
        226
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              236,
              238
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 11
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      261,
                      262
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 12
                      },
                      "start": {
                        "column": 4,
                        "line": 12
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
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 13
                                    }
                                  },
                                  "range": [
                                    285,
                                    293
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      287,
                                      293
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
                                  }
                                },
                                "range": [
                                  284,
                                  293
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 13
                                  }
                                }
                              },
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  296,
                                  299
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                284,
                                299
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 13
                                },
                                "start": {
                                  "column": 12,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let",
                          "range": [
                            280,
                            300
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
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
                        270,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      264,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 14
                      },
                      "start": {
                        "column": 7,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    261,
                    306
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
                }
              ],
              "range": [
                255,
                308
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 15
                },
                "start": {
                  "column": 27,
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
                "name": "foo",
                "optional": false,
                "range": [
                  241,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 11
                  }
                }
              },
              {
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
                    "column": 21,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              240,
              309
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'42'",
            "value": "42",
            "range": [
              311,
              315
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "range": [
            228,
            235
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          228,
          316
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        228,
        317
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              327,
              329
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      352,
                      353
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 18
                      },
                      "start": {
                        "column": 4,
                        "line": 18
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
                      353,
                      392
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
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 19
                                    }
                                  },
                                  "range": [
                                    371,
                                    379
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      373,
                                      379
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 19
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  370,
                                  379
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 19
                                  }
                                }
                              },
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  382,
                                  385
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                370,
                                385
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 19
                                },
                                "start": {
                                  "column": 12,
                                  "line": 19
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let",
                          "range": [
                            366,
                            386
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
                        356,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
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
                        "line": 20
                      },
                      "start": {
                        "column": 5,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    352,
                    392
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
                }
              ],
              "range": [
                346,
                394
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 21
                },
                "start": {
                  "column": 27,
                  "line": 17
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
                "name": "foo",
                "optional": false,
                "range": [
                  332,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 17
                  },
                  "start": {
                    "column": 13,
                    "line": 17
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  337,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              331,
              395
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 21
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'42'",
            "value": "42",
            "range": [
              397,
              401
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "range": [
            319,
            326
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          319,
          402
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        319,
        403
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 21
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
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
