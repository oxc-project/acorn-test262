__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    93,
    989
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          139,
          142
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 2
          },
          "start": {
            "column": 46,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics1",
        "optional": false,
        "range": [
          102,
          115
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 2
              },
              "start": {
                "column": 30,
                "line": 2
              }
            },
            "range": [
              123,
              126
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  125,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 2
                  },
                  "start": {
                    "column": 32,
                    "line": 2
                  }
                }
              },
              "range": [
                125,
                126
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              }
            }
          },
          "range": [
            122,
            126
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 2
            },
            "start": {
              "column": 29,
              "line": 2
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 2
              },
              "start": {
                "column": 36,
                "line": 2
              }
            },
            "range": [
              129,
              137
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                131,
                137
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 2
                },
                "start": {
                  "column": 38,
                  "line": 2
                }
              }
            }
          },
          "range": [
            128,
            137
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 2
            },
            "start": {
              "column": 35,
              "line": 2
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 2
          },
          "start": {
            "column": 22,
            "line": 2
          }
        },
        "range": [
          115,
          121
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
                116,
                117
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              116,
              117
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 23,
                "line": 2
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
              "name": "U",
              "optional": false,
              "range": [
                119,
                120
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 26,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              119,
              120
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 26,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        93,
        142
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "raw": "3",
            "value": 3,
            "range": [
              173,
              174
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 30,
                "line": 3
              }
            }
          },
          {
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              176,
              177
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
          "name": "someGenerics1",
          "optional": false,
          "range": [
            143,
            156
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            156,
            172
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                157,
                163
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                165,
                171
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        },
        "range": [
          143,
          178
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        143,
        179
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
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
        "body": [],
        "range": [
          385,
          388
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 6
          },
          "start": {
            "column": 54,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics4",
        "optional": false,
        "range": [
          340,
          353
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 6
              },
              "start": {
                "column": 30,
                "line": 6
              }
            },
            "range": [
              361,
              364
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  363,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 6
                  },
                  "start": {
                    "column": 32,
                    "line": 6
                  }
                }
              },
              "range": [
                363,
                364
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 6
                }
              }
            }
          },
          "range": [
            360,
            364
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 6
            },
            "start": {
              "column": 29,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 6
              },
              "start": {
                "column": 36,
                "line": 6
              }
            },
            "range": [
              367,
              383
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 43,
                        "line": 6
                      },
                      "start": {
                        "column": 40,
                        "line": 6
                      }
                    },
                    "range": [
                      371,
                      374
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          373,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 6
                          },
                          "start": {
                            "column": 42,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        373,
                        374
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 6
                        },
                        "start": {
                          "column": 42,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    370,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 6
                    },
                    "start": {
                      "column": 39,
                      "line": 6
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 6
                  },
                  "start": {
                    "column": 45,
                    "line": 6
                  }
                },
                "range": [
                  376,
                  383
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    379,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 6
                    },
                    "start": {
                      "column": 48,
                      "line": 6
                    }
                  }
                }
              },
              "range": [
                369,
                383
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 6
                },
                "start": {
                  "column": 38,
                  "line": 6
                }
              }
            }
          },
          "range": [
            366,
            383
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 6
            },
            "start": {
              "column": 35,
              "line": 6
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 6
          },
          "start": {
            "column": 22,
            "line": 6
          }
        },
        "range": [
          353,
          359
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
                354,
                355
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              354,
              355
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
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
              "name": "U",
              "optional": false,
              "range": [
                357,
                358
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              357,
              358
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 6
              },
              "start": {
                "column": 26,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        331,
        388
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "raw": "''",
            "value": "",
            "range": [
              419,
              421
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 7
              },
              "start": {
                "column": 30,
                "line": 7
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "''",
              "value": "",
              "range": [
                438,
                440
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 7
                },
                "start": {
                  "column": 49,
                  "line": 7
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
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 7
                    },
                    "start": {
                      "column": 36,
                      "line": 7
                    }
                  },
                  "range": [
                    425,
                    433
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      427,
                      433
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 7
                      },
                      "start": {
                        "column": 38,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  424,
                  433
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 7
                  },
                  "start": {
                    "column": 35,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              423,
              440
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 7
              },
              "start": {
                "column": 34,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "range": [
            389,
            402
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            402,
            418
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                403,
                409
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                411,
                417
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 7
            },
            "start": {
              "column": 13,
              "line": 7
            }
          }
        },
        "range": [
          389,
          441
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        389,
        442
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
          648,
          651
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 10
          },
          "start": {
            "column": 54,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics5",
        "optional": false,
        "range": [
          603,
          616
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 10
              },
              "start": {
                "column": 30,
                "line": 10
              }
            },
            "range": [
              624,
              627
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  626,
                  627
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 10
                  },
                  "start": {
                    "column": 32,
                    "line": 10
                  }
                }
              },
              "range": [
                626,
                627
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 10
                },
                "start": {
                  "column": 32,
                  "line": 10
                }
              }
            }
          },
          "range": [
            623,
            627
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 10
            },
            "start": {
              "column": 29,
              "line": 10
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 10
              },
              "start": {
                "column": 36,
                "line": 10
              }
            },
            "range": [
              630,
              646
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 43,
                        "line": 10
                      },
                      "start": {
                        "column": 40,
                        "line": 10
                      }
                    },
                    "range": [
                      634,
                      637
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          636,
                          637
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 10
                          },
                          "start": {
                            "column": 42,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        636,
                        637
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 10
                        },
                        "start": {
                          "column": 42,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    633,
                    637
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 10
                    },
                    "start": {
                      "column": 39,
                      "line": 10
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 10
                  },
                  "start": {
                    "column": 45,
                    "line": 10
                  }
                },
                "range": [
                  639,
                  646
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    642,
                    646
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 10
                    },
                    "start": {
                      "column": 48,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                632,
                646
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 10
                },
                "start": {
                  "column": 38,
                  "line": 10
                }
              }
            }
          },
          "range": [
            629,
            646
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 10
            },
            "start": {
              "column": 35,
              "line": 10
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 10
          },
          "start": {
            "column": 22,
            "line": 10
          }
        },
        "range": [
          616,
          622
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                617,
                618
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 10
                },
                "start": {
                  "column": 23,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              617,
              618
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 10
              },
              "start": {
                "column": 23,
                "line": 10
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
              "name": "T",
              "optional": false,
              "range": [
                620,
                621
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 10
                },
                "start": {
                  "column": 26,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              620,
              621
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 26,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        594,
        651
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "raw": "''",
            "value": "",
            "range": [
              682,
              684
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 11
              },
              "start": {
                "column": 30,
                "line": 11
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "''",
              "value": "",
              "range": [
                701,
                703
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 11
                },
                "start": {
                  "column": 49,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 11
                    },
                    "start": {
                      "column": 36,
                      "line": 11
                    }
                  },
                  "range": [
                    688,
                    696
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      690,
                      696
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 11
                      },
                      "start": {
                        "column": 38,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  687,
                  696
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 11
                  },
                  "start": {
                    "column": 35,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              686,
              703
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 11
              },
              "start": {
                "column": 34,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "range": [
            652,
            665
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            665,
            681
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                666,
                672
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                674,
                680
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 11
                },
                "start": {
                  "column": 22,
                  "line": 11
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        },
        "range": [
          652,
          704
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        652,
        705
      ],
      "loc": {
        "end": {
          "column": 53,
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
        "body": [],
        "range": [
          899,
          902
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 14
          },
          "start": {
            "column": 74,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics6",
        "optional": false,
        "range": [
          834,
          847
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
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
                "column": 40,
                "line": 14
              },
              "start": {
                "column": 27,
                "line": 14
              }
            },
            "range": [
              852,
              865
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 34,
                        "line": 14
                      },
                      "start": {
                        "column": 31,
                        "line": 14
                      }
                    },
                    "range": [
                      856,
                      859
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          858,
                          859
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 14
                          },
                          "start": {
                            "column": 33,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        858,
                        859
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 14
                        },
                        "start": {
                          "column": 33,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    855,
                    859
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 14
                    },
                    "start": {
                      "column": 30,
                      "line": 14
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 14
                  },
                  "start": {
                    "column": 36,
                    "line": 14
                  }
                },
                "range": [
                  861,
                  865
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      864,
                      865
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 14
                      },
                      "start": {
                        "column": 39,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    864,
                    865
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 14
                    },
                    "start": {
                      "column": 39,
                      "line": 14
                    }
                  }
                }
              },
              "range": [
                854,
                865
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 14
                },
                "start": {
                  "column": 29,
                  "line": 14
                }
              }
            }
          },
          "range": [
            851,
            865
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 14
            },
            "start": {
              "column": 26,
              "line": 14
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
                "column": 56,
                "line": 14
              },
              "start": {
                "column": 43,
                "line": 14
              }
            },
            "range": [
              868,
              881
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 14
                      },
                      "start": {
                        "column": 47,
                        "line": 14
                      }
                    },
                    "range": [
                      872,
                      875
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          874,
                          875
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 14
                          },
                          "start": {
                            "column": 49,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        874,
                        875
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 14
                        },
                        "start": {
                          "column": 49,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    871,
                    875
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 14
                    },
                    "start": {
                      "column": 46,
                      "line": 14
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 14
                  },
                  "start": {
                    "column": 52,
                    "line": 14
                  }
                },
                "range": [
                  877,
                  881
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      880,
                      881
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 14
                      },
                      "start": {
                        "column": 55,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    880,
                    881
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 14
                    },
                    "start": {
                      "column": 55,
                      "line": 14
                    }
                  }
                }
              },
              "range": [
                870,
                881
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 14
                },
                "start": {
                  "column": 45,
                  "line": 14
                }
              }
            }
          },
          "range": [
            867,
            881
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 14
            },
            "start": {
              "column": 42,
              "line": 14
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 72,
                "line": 14
              },
              "start": {
                "column": 59,
                "line": 14
              }
            },
            "range": [
              884,
              897
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 14
                      },
                      "start": {
                        "column": 63,
                        "line": 14
                      }
                    },
                    "range": [
                      888,
                      891
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          890,
                          891
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 14
                          },
                          "start": {
                            "column": 65,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        890,
                        891
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 14
                        },
                        "start": {
                          "column": 65,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    887,
                    891
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 14
                    },
                    "start": {
                      "column": 62,
                      "line": 14
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 14
                  },
                  "start": {
                    "column": 68,
                    "line": 14
                  }
                },
                "range": [
                  893,
                  897
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      896,
                      897
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 14
                      },
                      "start": {
                        "column": 71,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    896,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 14
                    },
                    "start": {
                      "column": 71,
                      "line": 14
                    }
                  }
                }
              },
              "range": [
                886,
                897
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 14
                },
                "start": {
                  "column": 61,
                  "line": 14
                }
              }
            }
          },
          "range": [
            883,
            897
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 14
            },
            "start": {
              "column": 58,
              "line": 14
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 14
          },
          "start": {
            "column": 22,
            "line": 14
          }
        },
        "range": [
          847,
          850
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                848,
                849
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 14
                },
                "start": {
                  "column": 23,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              848,
              849
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 14
              },
              "start": {
                "column": 23,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        825,
        902
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                940,
                941
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 15
                },
                "start": {
                  "column": 37,
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 24,
                      "line": 15
                    }
                  },
                  "range": [
                    927,
                    935
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      929,
                      935
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
                },
                "range": [
                  926,
                  935
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 15
                  },
                  "start": {
                    "column": 23,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              925,
              941
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 15
              },
              "start": {
                "column": 22,
                "line": 15
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                958,
                959
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 15
                },
                "start": {
                  "column": 55,
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 15
                    },
                    "start": {
                      "column": 42,
                      "line": 15
                    }
                  },
                  "range": [
                    945,
                    953
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      947,
                      953
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 15
                      },
                      "start": {
                        "column": 44,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  944,
                  953
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 15
                  },
                  "start": {
                    "column": 41,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              943,
              959
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 15
              },
              "start": {
                "column": 40,
                "line": 15
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                976,
                977
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 15
                },
                "start": {
                  "column": 73,
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 15
                    },
                    "start": {
                      "column": 60,
                      "line": 15
                    }
                  },
                  "range": [
                    963,
                    971
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      965,
                      971
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 15
                      },
                      "start": {
                        "column": 62,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  962,
                  971
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 15
                  },
                  "start": {
                    "column": 59,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              961,
              977
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 15
              },
              "start": {
                "column": 58,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "range": [
            903,
            916
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            916,
            924
          ],
          "params": [
            {
              "type": "TSNumberKeyword",
              "range": [
                917,
                923
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 15
                },
                "start": {
                  "column": 14,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 15
            },
            "start": {
              "column": 13,
              "line": 15
            }
          }
        },
        "range": [
          903,
          978
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        903,
        979
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
