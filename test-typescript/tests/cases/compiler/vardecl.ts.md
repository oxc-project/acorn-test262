__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1556
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
            "name": "simpleVar",
            "optional": false,
            "range": [
              4,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
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
      "kind": "var",
      "range": [
        0,
        14
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              },
              "range": [
                30,
                35
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  32,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
              20,
              35
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            20,
            35
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        16,
        36
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 3
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
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              },
              "range": [
                58,
                66
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  60,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              41,
              66
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            41,
            66
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        37,
        67
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "varWithArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              },
              "range": [
                88,
                98
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    90,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                },
                "range": [
                  90,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              72,
              98
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            72,
            98
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        68,
        99
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 5
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
            "name": "varWithInitialValue",
            "optional": false,
            "range": [
              105,
              124
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
          "init": {
            "type": "Literal",
            "raw": "30",
            "value": 30,
            "range": [
              127,
              129
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            }
          },
          "range": [
            105,
            129
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        101,
        130
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "withComplicatedValue",
            "optional": false,
            "range": [
              136,
              156
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    161,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 9
                    },
                    "start": {
                      "column": 29,
                      "line": 9
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "30",
                  "value": 30,
                  "range": [
                    164,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 9
                    },
                    "start": {
                      "column": 32,
                      "line": 9
                    }
                  }
                },
                "range": [
                  161,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 9
                  },
                  "start": {
                    "column": 29,
                    "line": 9
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    168,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 9
                    },
                    "start": {
                      "column": 36,
                      "line": 9
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "70",
                  "value": 70,
                  "range": [
                    171,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 9
                    },
                    "start": {
                      "column": 39,
                      "line": 9
                    }
                  }
                },
                "range": [
                  168,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 9
                  },
                  "start": {
                    "column": 36,
                    "line": 9
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "range": [
                    175,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 9
                    },
                    "start": {
                      "column": 43,
                      "line": 9
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"position\"",
                  "value": "position",
                  "range": [
                    181,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 9
                    },
                    "start": {
                      "column": 49,
                      "line": 9
                    }
                  }
                },
                "range": [
                  175,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 9
                  },
                  "start": {
                    "column": 43,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              159,
              193
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 9
              },
              "start": {
                "column": 27,
                "line": 9
              }
            }
          },
          "range": [
            136,
            193
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        132,
        194
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "declaredVar",
            "optional": false,
            "range": [
              208,
              219
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            208,
            219
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        196,
        220
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "declareVar2",
            "optional": false,
            "range": [
              233,
              244
            ],
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
          "init": null,
          "range": [
            233,
            244
          ],
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
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        221,
        244
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "declaredVar3",
            "optional": false,
            "range": [
              258,
              270
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 14
              },
              "start": {
                "column": 12,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            258,
            270
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        246,
        271
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 15
                },
                "start": {
                  "column": 30,
                  "line": 15
                }
              },
              "range": [
                302,
                310
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  304,
                  310
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 15
                  },
                  "start": {
                    "column": 32,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              284,
              310
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            284,
            310
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        272,
        311
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "arrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              },
              "range": [
                325,
                335
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    327,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 17
                    },
                    "start": {
                      "column": 14,
                      "line": 17
                    }
                  }
                },
                "range": [
                  327,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              317,
              335
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  339,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 17
                  },
                  "start": {
                    "column": 26,
                    "line": 17
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'b'",
                "value": "b",
                "range": [
                  344,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 17
                  },
                  "start": {
                    "column": 31,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              338,
              348
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 17
              },
              "start": {
                "column": 25,
                "line": 17
              }
            }
          },
          "range": [
            317,
            348
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        313,
        349
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "complicatedArrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 19
                },
                "start": {
                  "column": 23,
                  "line": 19
                }
              },
              "range": [
                374,
                403
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          378,
                          379
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 19
                          },
                          "start": {
                            "column": 27,
                            "line": 19
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
                            "column": 36,
                            "line": 19
                          },
                          "start": {
                            "column": 28,
                            "line": 19
                          }
                        },
                        "range": [
                          379,
                          387
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            381,
                            387
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 19
                            },
                            "start": {
                              "column": 30,
                              "line": 19
                            }
                          }
                        }
                      },
                      "range": [
                        378,
                        388
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 19
                        },
                        "start": {
                          "column": 27,
                          "line": 19
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          389,
                          390
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 19
                          },
                          "start": {
                            "column": 38,
                            "line": 19
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
                            "column": 47,
                            "line": 19
                          },
                          "start": {
                            "column": 39,
                            "line": 19
                          }
                        },
                        "range": [
                          390,
                          398
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            392,
                            398
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 19
                            },
                            "start": {
                              "column": 41,
                              "line": 19
                            }
                          }
                        }
                      },
                      "range": [
                        389,
                        399
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 19
                        },
                        "start": {
                          "column": 38,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "range": [
                    376,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 19
                    },
                    "start": {
                      "column": 25,
                      "line": 19
                    }
                  }
                },
                "range": [
                  376,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 19
                  },
                  "start": {
                    "column": 25,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              355,
              403
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            355,
            403
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        351,
        405
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    433,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 20
                    },
                    "start": {
                      "column": 27,
                      "line": 20
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "30",
                  "value": 30,
                  "range": [
                    436,
                    438
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 20
                    },
                    "start": {
                      "column": 30,
                      "line": 20
                    }
                  }
                },
                "range": [
                  433,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 20
                  },
                  "start": {
                    "column": 27,
                    "line": 20
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    440,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 20
                    },
                    "start": {
                      "column": 34,
                      "line": 20
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'hello world'",
                  "value": "hello world",
                  "range": [
                    444,
                    457
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 20
                    },
                    "start": {
                      "column": 38,
                      "line": 20
                    }
                  }
                },
                "range": [
                  440,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 20
                  },
                  "start": {
                    "column": 34,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              431,
              459
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 20
              },
              "start": {
                "column": 25,
                "line": 20
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
            "name": "complicatedArrayVar",
            "optional": false,
            "range": [
              406,
              425
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 20
              },
              "start": {
                "column": 0,
                "line": 20
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "range": [
              426,
              430
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 20
              },
              "start": {
                "column": 20,
                "line": 20
              }
            }
          },
          "range": [
            406,
            430
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          406,
          460
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        406,
        461
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 22
                }
              },
              "range": [
                469,
                495
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 22
                            },
                            "start": {
                              "column": 12,
                              "line": 22
                            }
                          },
                          "range": [
                            475,
                            483
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              477,
                              483
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 22
                              },
                              "start": {
                                "column": 14,
                                "line": 22
                              }
                            }
                          }
                        },
                        "range": [
                          474,
                          483
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 22
                          },
                          "start": {
                            "column": 11,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 22
                        },
                        "start": {
                          "column": 21,
                          "line": 22
                        }
                      },
                      "range": [
                        484,
                        492
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          486,
                          492
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 22
                          },
                          "start": {
                            "column": 23,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      473,
                      493
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 22
                      },
                      "start": {
                        "column": 10,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  471,
                  495
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              467,
              495
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": null,
          "range": [
            467,
            495
          ],
          "loc": {
            "end": {
              "column": 32,
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
      "kind": "var",
      "range": [
        463,
        496
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 6,
                  "line": 24
                }
              },
              "range": [
                504,
                535
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
                      "name": "new",
                      "optional": false,
                      "range": [
                        516,
                        519
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 25
                        },
                        "start": {
                          "column": 8,
                          "line": 25
                        }
                      }
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 25
                        },
                        "start": {
                          "column": 15,
                          "line": 25
                        }
                      },
                      "range": [
                        523,
                        528
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          525,
                          528
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 25
                          },
                          "start": {
                            "column": 17,
                            "line": 25
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      516,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
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
                  506,
                  535
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              502,
              535
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            502,
            535
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        498,
        535
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 24
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 32
                },
                "start": {
                  "column": 5,
                  "line": 28
                }
              },
              "range": [
                542,
                588
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        550,
                        553
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 29
                        },
                        "start": {
                          "column": 4,
                          "line": 29
                        }
                      }
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 31
                        },
                        "start": {
                          "column": 11,
                          "line": 29
                        }
                      },
                      "range": [
                        557,
                        585
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                569,
                                570
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 30
                                },
                                "start": {
                                  "column": 8,
                                  "line": 30
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
                                  "line": 30
                                },
                                "start": {
                                  "column": 9,
                                  "line": 30
                                }
                              },
                              "range": [
                                570,
                                578
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  572,
                                  578
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 30
                                  }
                                }
                              }
                            },
                            "range": [
                              569,
                              579
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 30
                              },
                              "start": {
                                "column": 8,
                                "line": 30
                              }
                            }
                          }
                        ],
                        "range": [
                          559,
                          585
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 31
                          },
                          "start": {
                            "column": 13,
                            "line": 29
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      550,
                      586
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 31
                      },
                      "start": {
                        "column": 4,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  544,
                  588
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 32
                  },
                  "start": {
                    "column": 7,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              541,
              588
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": null,
          "range": [
            541,
            588
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        537,
        588
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 39
                },
                "start": {
                  "column": 6,
                  "line": 34
                }
              },
              "range": [
                596,
                659
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        604,
                        607
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
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 38
                        },
                        "start": {
                          "column": 9,
                          "line": 35
                        }
                      },
                      "range": [
                        609,
                        656
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                621,
                                622
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 36
                                },
                                "start": {
                                  "column": 8,
                                  "line": 36
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
                                  "line": 36
                                },
                                "start": {
                                  "column": 9,
                                  "line": 36
                                }
                              },
                              "range": [
                                622,
                                630
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  624,
                                  630
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 36
                                  }
                                }
                              }
                            },
                            "range": [
                              621,
                              631
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 36
                              },
                              "start": {
                                "column": 8,
                                "line": 36
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                640,
                                641
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 37
                                },
                                "start": {
                                  "column": 8,
                                  "line": 37
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
                                  "line": 37
                                },
                                "start": {
                                  "column": 9,
                                  "line": 37
                                }
                              },
                              "range": [
                                641,
                                649
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  643,
                                  649
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 37
                                  }
                                }
                              }
                            },
                            "range": [
                              640,
                              650
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 37
                              },
                              "start": {
                                "column": 8,
                                "line": 37
                              }
                            }
                          }
                        ],
                        "range": [
                          611,
                          656
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 38
                          },
                          "start": {
                            "column": 11,
                            "line": 35
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      604,
                      657
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 38
                      },
                      "start": {
                        "column": 4,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  598,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              594,
              659
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          "init": null,
          "range": [
            594,
            659
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 39
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        590,
        659
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 45
                },
                "start": {
                  "column": 6,
                  "line": 41
                }
              },
              "range": [
                667,
                712
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        675,
                        678
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 42
                        },
                        "start": {
                          "column": 4,
                          "line": 42
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
                          "column": 5,
                          "line": 44
                        },
                        "start": {
                          "column": 10,
                          "line": 42
                        }
                      },
                      "range": [
                        681,
                        709
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                693,
                                694
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 43
                                },
                                "start": {
                                  "column": 8,
                                  "line": 43
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
                                  "line": 43
                                },
                                "start": {
                                  "column": 9,
                                  "line": 43
                                }
                              },
                              "range": [
                                694,
                                702
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  696,
                                  702
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 43
                                  }
                                }
                              }
                            },
                            "range": [
                              693,
                              703
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
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
                          683,
                          709
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 44
                          },
                          "start": {
                            "column": 12,
                            "line": 42
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      675,
                      710
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 44
                      },
                      "start": {
                        "column": 4,
                        "line": 42
                      }
                    }
                  }
                ],
                "range": [
                  669,
                  712
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 45
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              }
            },
            "range": [
              665,
              712
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          "init": null,
          "range": [
            665,
            712
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 45
            },
            "start": {
              "column": 4,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        661,
        712
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 49
                },
                "start": {
                  "column": 6,
                  "line": 47
                }
              },
              "range": [
                720,
                739
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 48
                        },
                        "start": {
                          "column": 6,
                          "line": 48
                        }
                      },
                      "range": [
                        730,
                        736
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          732,
                          736
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 48
                          },
                          "start": {
                            "column": 8,
                            "line": 48
                          }
                        }
                      }
                    },
                    "range": [
                      728,
                      737
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 48
                      },
                      "start": {
                        "column": 4,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  722,
                  739
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 49
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              718,
              739
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          "init": null,
          "range": [
            718,
            739
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 49
            },
            "start": {
              "column": 4,
              "line": 47
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        714,
        739
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 47
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
            "name": "n4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 3,
                  "line": 52
                },
                "start": {
                  "column": 6,
                  "line": 50
                }
              },
              "range": [
                746,
                767
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 51
                          },
                          "start": {
                            "column": 6,
                            "line": 51
                          }
                        },
                        "range": [
                          756,
                          762
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            758,
                            762
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 51
                            },
                            "start": {
                              "column": 8,
                              "line": 51
                            }
                          }
                        }
                      },
                      "range": [
                        754,
                        763
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 51
                        },
                        "start": {
                          "column": 4,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "range": [
                    748,
                    765
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                },
                "range": [
                  748,
                  767
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 50
                  }
                }
              }
            },
            "range": [
              744,
              767
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          "init": null,
          "range": [
            744,
            767
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 52
            },
            "start": {
              "column": 4,
              "line": 50
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        740,
        768
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 50
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
            "name": "d4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 59
                },
                "start": {
                  "column": 6,
                  "line": 54
                }
              },
              "range": [
                776,
                878
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        784,
                        787
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 55
                        },
                        "start": {
                          "column": 4,
                          "line": 55
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
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
                              "column": 17,
                              "line": 55
                            },
                            "start": {
                              "column": 9,
                              "line": 55
                            }
                          },
                          "range": [
                            789,
                            797
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              791,
                              797
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 55
                              },
                              "start": {
                                "column": 11,
                                "line": 55
                              }
                            }
                          }
                        },
                        "range": [
                          788,
                          797
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 55
                          },
                          "start": {
                            "column": 8,
                            "line": 55
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 55
                            },
                            "start": {
                              "column": 20,
                              "line": 55
                            }
                          },
                          "range": [
                            800,
                            827
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
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    804,
                                    805
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 55
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
                                      "column": 33,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 55
                                    }
                                  },
                                  "range": [
                                    805,
                                    813
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      807,
                                      813
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 55
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  804,
                                  814
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 55
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    815,
                                    816
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 55
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
                                      "column": 44,
                                      "line": 55
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 55
                                    }
                                  },
                                  "range": [
                                    816,
                                    824
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      818,
                                      824
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 55
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 55
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  815,
                                  825
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 55
                                  }
                                }
                              }
                            ],
                            "range": [
                              802,
                              827
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 55
                              },
                              "start": {
                                "column": 22,
                                "line": 55
                              }
                            }
                          }
                        },
                        "range": [
                          799,
                          827
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 55
                          },
                          "start": {
                            "column": 19,
                            "line": 55
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 58
                        },
                        "start": {
                          "column": 48,
                          "line": 55
                        }
                      },
                      "range": [
                        828,
                        875
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                840,
                                841
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 56
                                },
                                "start": {
                                  "column": 8,
                                  "line": 56
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
                                  "line": 56
                                },
                                "start": {
                                  "column": 9,
                                  "line": 56
                                }
                              },
                              "range": [
                                841,
                                849
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  843,
                                  849
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 56
                                  }
                                }
                              }
                            },
                            "range": [
                              840,
                              850
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 56
                              },
                              "start": {
                                "column": 8,
                                "line": 56
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                859,
                                860
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 57
                                },
                                "start": {
                                  "column": 8,
                                  "line": 57
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
                                  "line": 57
                                },
                                "start": {
                                  "column": 9,
                                  "line": 57
                                }
                              },
                              "range": [
                                860,
                                868
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  862,
                                  868
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 57
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 57
                                  }
                                }
                              }
                            },
                            "range": [
                              859,
                              869
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 57
                              },
                              "start": {
                                "column": 8,
                                "line": 57
                              }
                            }
                          }
                        ],
                        "range": [
                          830,
                          875
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 58
                          },
                          "start": {
                            "column": 50,
                            "line": 55
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      784,
                      876
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 58
                      },
                      "start": {
                        "column": 4,
                        "line": 55
                      }
                    }
                  }
                ],
                "range": [
                  778,
                  878
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 59
                  },
                  "start": {
                    "column": 8,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              774,
              878
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          "init": null,
          "range": [
            774,
            878
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 59
            },
            "start": {
              "column": 4,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        770,
        878
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              897,
              930
            ],
            "attributes": [],
            "declaration": {
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
                      908,
                      909
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 63
                      },
                      "start": {
                        "column": 15,
                        "line": 63
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    908,
                    909
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 63
                    },
                    "start": {
                      "column": 15,
                      "line": 63
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 63
                        },
                        "start": {
                          "column": 20,
                          "line": 63
                        }
                      },
                      "range": [
                        913,
                        921
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          915,
                          921
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 63
                          },
                          "start": {
                            "column": 22,
                            "line": 63
                          }
                        }
                      }
                    },
                    "range": [
                      911,
                      921
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 63
                      },
                      "start": {
                        "column": 18,
                        "line": 63
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      924,
                      926
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 63
                      },
                      "start": {
                        "column": 31,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    911,
                    926
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 63
                    },
                    "start": {
                      "column": 18,
                      "line": 63
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      928,
                      929
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 63
                      },
                      "start": {
                        "column": 35,
                        "line": 63
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    928,
                    929
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 63
                    },
                    "start": {
                      "column": 35,
                      "line": 63
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                904,
                930
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 63
                },
                "start": {
                  "column": 11,
                  "line": 63
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 37,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
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
                  "name": "m1",
                  "optional": false,
                  "range": [
                    939,
                    941
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
                    }
                  }
                },
                "init": null,
                "range": [
                  939,
                  941
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              935,
              942
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
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
                  "name": "a2",
                  "optional": false,
                  "range": [
                    951,
                    953
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 65
                    }
                  }
                },
                "init": null,
                "range": [
                  951,
                  953
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 65
                  },
                  "start": {
                    "column": 8,
                    "line": 65
                  }
                }
              },
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b22",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 65
                      },
                      "start": {
                        "column": 15,
                        "line": 65
                      }
                    },
                    "range": [
                      958,
                      966
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        960,
                        966
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 65
                        },
                        "start": {
                          "column": 17,
                          "line": 65
                        }
                      }
                    }
                  },
                  "range": [
                    955,
                    966
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 65
                    },
                    "start": {
                      "column": 12,
                      "line": 65
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    969,
                    971
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 65
                    },
                    "start": {
                      "column": 26,
                      "line": 65
                    }
                  }
                },
                "range": [
                  955,
                  971
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 65
                  },
                  "start": {
                    "column": 12,
                    "line": 65
                  }
                }
              },
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b222",
                  "optional": false,
                  "range": [
                    973,
                    977
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 65
                    },
                    "start": {
                      "column": 30,
                      "line": 65
                    }
                  }
                },
                "init": null,
                "range": [
                  973,
                  977
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 65
                  },
                  "start": {
                    "column": 30,
                    "line": 65
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              947,
              978
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
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
                  "name": "m3",
                  "optional": false,
                  "range": [
                    987,
                    989
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                },
                "init": null,
                "range": [
                  987,
                  989
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 66
                  },
                  "start": {
                    "column": 8,
                    "line": 66
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              983,
              990
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1004,
                1054
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      1014,
                      1025
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 69
                      },
                      "start": {
                        "column": 8,
                        "line": 69
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
                      1026,
                      1048
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1037,
                        1048
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 70
                        },
                        "start": {
                          "column": 31,
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
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            1034,
                            1035
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 69
                            },
                            "start": {
                              "column": 28,
                              "line": 69
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          1027,
                          1035
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 69
                          },
                          "start": {
                            "column": 21,
                            "line": 69
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 70
                      },
                      "start": {
                        "column": 20,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    1014,
                    1048
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
              "loc": {
                "end": {
                  "column": 5,
                  "line": 71
                },
                "start": {
                  "column": 12,
                  "line": 68
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
                1002,
                1003
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 68
                },
                "start": {
                  "column": 10,
                  "line": 68
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              996,
              1054
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1060,
              1126
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1076,
                  1126
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        1086,
                        1097
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 74
                        },
                        "start": {
                          "column": 8,
                          "line": 74
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
                        1098,
                        1120
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          1109,
                          1120
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 75
                          },
                          "start": {
                            "column": 31,
                            "line": 74
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
                            "name": "b",
                            "optional": false,
                            "range": [
                              1106,
                              1107
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 74
                              },
                              "start": {
                                "column": 28,
                                "line": 74
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            1099,
                            1107
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 74
                            },
                            "start": {
                              "column": 21,
                              "line": 74
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 75
                        },
                        "start": {
                          "column": 20,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      1086,
                      1120
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 75
                      },
                      "start": {
                        "column": 8,
                        "line": 74
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 76
                  },
                  "start": {
                    "column": 20,
                    "line": 73
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "range": [
                  1073,
                  1075
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 73
                  },
                  "start": {
                    "column": 17,
                    "line": 73
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                1067,
                1126
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 11,
                  "line": 73
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 73
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
                  "name": "m",
                  "optional": false,
                  "range": [
                    1135,
                    1136
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 77
                    }
                  }
                },
                "init": null,
                "range": [
                  1135,
                  1136
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 77
                  },
                  "start": {
                    "column": 8,
                    "line": 77
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1131,
              1137
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 77
              },
              "start": {
                "column": 4,
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
                  "name": "d1",
                  "optional": false,
                  "range": [
                    1154,
                    1156
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 78
                    },
                    "start": {
                      "column": 16,
                      "line": 78
                    }
                  }
                },
                "init": null,
                "range": [
                  1154,
                  1156
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 78
                  },
                  "start": {
                    "column": 16,
                    "line": 78
                  }
                }
              },
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "range": [
                    1158,
                    1160
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 78
                    },
                    "start": {
                      "column": 20,
                      "line": 78
                    }
                  }
                },
                "init": null,
                "range": [
                  1158,
                  1160
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 78
                  },
                  "start": {
                    "column": 20,
                    "line": 78
                  }
                }
              }
            ],
            "declare": true,
            "kind": "var",
            "range": [
              1142,
              1161
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
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
                  "name": "b23",
                  "optional": false,
                  "range": [
                    1170,
                    1173
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 79
                    },
                    "start": {
                      "column": 8,
                      "line": 79
                    }
                  }
                },
                "init": null,
                "range": [
                  1170,
                  1173
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 79
                  },
                  "start": {
                    "column": 8,
                    "line": 79
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1166,
              1174
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
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
                  "name": "v1",
                  "optional": false,
                  "range": [
                    1191,
                    1193
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 80
                    },
                    "start": {
                      "column": 16,
                      "line": 80
                    }
                  }
                },
                "init": null,
                "range": [
                  1191,
                  1193
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 80
                  },
                  "start": {
                    "column": 16,
                    "line": 80
                  }
                }
              }
            ],
            "declare": true,
            "kind": "var",
            "range": [
              1179,
              1194
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1199,
              1213
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mE",
                    "optional": false,
                    "range": [
                      1210,
                      1212
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 81
                      },
                      "start": {
                        "column": 15,
                        "line": 81
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    1210,
                    1212
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 81
                    },
                    "start": {
                      "column": 15,
                      "line": 81
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1206,
                1213
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 81
                },
                "start": {
                  "column": 11,
                  "line": 81
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 18,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1218,
              1246
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d1E",
                    "optional": false,
                    "range": [
                      1237,
                      1240
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 82
                      },
                      "start": {
                        "column": 23,
                        "line": 82
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    1237,
                    1240
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 82
                    },
                    "start": {
                      "column": 23,
                      "line": 82
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d2E",
                    "optional": false,
                    "range": [
                      1242,
                      1245
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 82
                      },
                      "start": {
                        "column": 28,
                        "line": 82
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    1242,
                    1245
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 82
                    },
                    "start": {
                      "column": 28,
                      "line": 82
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                1225,
                1246
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 82
                },
                "start": {
                  "column": 11,
                  "line": 82
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 32,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1251,
              1266
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b2E",
                    "optional": false,
                    "range": [
                      1262,
                      1265
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 83
                      },
                      "start": {
                        "column": 15,
                        "line": 83
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    1262,
                    1265
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 83
                    },
                    "start": {
                      "column": 15,
                      "line": 83
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1258,
                1266
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 83
                },
                "start": {
                  "column": 11,
                  "line": 83
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 19,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1271,
              1294
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v1E",
                    "optional": false,
                    "range": [
                      1290,
                      1293
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 84
                      },
                      "start": {
                        "column": 23,
                        "line": 84
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    1290,
                    1293
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 84
                    },
                    "start": {
                      "column": 23,
                      "line": 84
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                1278,
                1294
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 84
                },
                "start": {
                  "column": 11,
                  "line": 84
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 27,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          }
        ],
        "range": [
          890,
          1296
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 85
          },
          "start": {
            "column": 10,
            "line": 61
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          887,
          889
        ],
        "decorators": [],
        "name": "m2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 61
          },
          "start": {
            "column": 7,
            "line": 61
          }
        }
      },
      "kind": "module",
      "range": [
        880,
        1296
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 61
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
            "name": "a22",
            "optional": false,
            "range": [
              1302,
              1305
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          "init": null,
          "range": [
            1302,
            1305
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 87
            },
            "start": {
              "column": 4,
              "line": 87
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b22",
            "optional": false,
            "range": [
              1307,
              1310
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 87
              },
              "start": {
                "column": 9,
                "line": 87
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              1313,
              1315
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 87
              },
              "start": {
                "column": 15,
                "line": 87
              }
            }
          },
          "range": [
            1307,
            1315
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 87
            },
            "start": {
              "column": 9,
              "line": 87
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c22",
            "optional": false,
            "range": [
              1317,
              1320
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 87
              },
              "start": {
                "column": 19,
                "line": 87
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "30",
            "value": 30,
            "range": [
              1323,
              1325
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 87
              },
              "start": {
                "column": 25,
                "line": 87
              }
            }
          },
          "range": [
            1317,
            1325
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 87
            },
            "start": {
              "column": 19,
              "line": 87
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1298,
        1326
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
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
            "name": "nn",
            "optional": false,
            "range": [
              1331,
              1333
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          },
          "init": null,
          "range": [
            1331,
            1333
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 88
            },
            "start": {
              "column": 4,
              "line": 88
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1327,
        1334
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
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
            "name": "da1",
            "optional": false,
            "range": [
              1348,
              1351
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 90
              },
              "start": {
                "column": 12,
                "line": 90
              }
            }
          },
          "init": null,
          "range": [
            1348,
            1351
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 90
            },
            "start": {
              "column": 12,
              "line": 90
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "da2",
            "optional": false,
            "range": [
              1353,
              1356
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 90
              },
              "start": {
                "column": 17,
                "line": 90
              }
            }
          },
          "init": null,
          "range": [
            1353,
            1356
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 90
            },
            "start": {
              "column": 17,
              "line": 90
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        1336,
        1357
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
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
            "name": "normalVar",
            "optional": false,
            "range": [
              1362,
              1371
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          },
          "init": null,
          "range": [
            1362,
            1371
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 91
            },
            "start": {
              "column": 4,
              "line": 91
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1358,
        1372
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 91
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
            "name": "dv1",
            "optional": false,
            "range": [
              1385,
              1388
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 92
              },
              "start": {
                "column": 12,
                "line": 92
              }
            }
          },
          "init": null,
          "range": [
            1385,
            1388
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 92
            },
            "start": {
              "column": 12,
              "line": 92
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        1373,
        1389
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 92
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
            "name": "xl",
            "optional": false,
            "range": [
              1394,
              1396
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 93
              }
            }
          },
          "init": null,
          "range": [
            1394,
            1396
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 93
            },
            "start": {
              "column": 4,
              "line": 93
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1390,
        1397
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 93
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
            "name": "x",
            "optional": false,
            "range": [
              1402,
              1403
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          },
          "init": null,
          "range": [
            1402,
            1403
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 94
            },
            "start": {
              "column": 4,
              "line": 94
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1398,
        1404
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
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
            "name": "z",
            "optional": false,
            "range": [
              1409,
              1410
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 95
              }
            }
          },
          "init": null,
          "range": [
            1409,
            1410
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 95
            },
            "start": {
              "column": 4,
              "line": 95
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1405,
        1411
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 95
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    1440,
                    1441
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 98
                    },
                    "start": {
                      "column": 8,
                      "line": 98
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    1444,
                    1446
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 98
                    },
                    "start": {
                      "column": 12,
                      "line": 98
                    }
                  }
                },
                "range": [
                  1440,
                  1446
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 98
                  },
                  "start": {
                    "column": 8,
                    "line": 98
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1436,
              1447
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 98
              },
              "start": {
                "column": 4,
                "line": 98
              }
            }
          }
        ],
        "range": [
          1430,
          1449
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 99
          },
          "start": {
            "column": 17,
            "line": 97
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
          1422,
          1425
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 97
          },
          "start": {
            "column": 9,
            "line": 97
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "range": [
            1426,
            1428
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 97
            },
            "start": {
              "column": 13,
              "line": 97
            }
          }
        }
      ],
      "range": [
        1413,
        1449
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 97
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "range": [
                  1493,
                  1494
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 102
                  },
                  "start": {
                    "column": 4,
                    "line": 102
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                1493,
                1496
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 102
                },
                "start": {
                  "column": 4,
                  "line": 102
                }
              }
            },
            "range": [
              1493,
              1497
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          }
        ],
        "range": [
          1487,
          1499
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 103
          },
          "start": {
            "column": 36,
            "line": 101
          }
        }
      },
      "init": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1460,
                1461
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 101
                },
                "start": {
                  "column": 9,
                  "line": 101
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1464,
                1465
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 101
                },
                "start": {
                  "column": 13,
                  "line": 101
                }
              }
            },
            "range": [
              1460,
              1465
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 101
              },
              "start": {
                "column": 9,
                "line": 101
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "range": [
                1467,
                1468
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 101
                },
                "start": {
                  "column": 16,
                  "line": 101
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1471,
                1472
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 101
                },
                "start": {
                  "column": 20,
                  "line": 101
                }
              }
            },
            "range": [
              1467,
              1472
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 101
              },
              "start": {
                "column": 16,
                "line": 101
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          1456,
          1472
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 101
          },
          "start": {
            "column": 5,
            "line": 101
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            1474,
            1475
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 101
            },
            "start": {
              "column": 23,
              "line": 101
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            1478,
            1480
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 101
            },
            "start": {
              "column": 27,
              "line": 101
            }
          }
        },
        "range": [
          1474,
          1480
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 101
          },
          "start": {
            "column": 23,
            "line": 101
          }
        }
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            1482,
            1483
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 101
            },
            "start": {
              "column": 31,
              "line": 101
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1482,
          1485
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 101
          },
          "start": {
            "column": 31,
            "line": 101
          }
        }
      },
      "range": [
        1451,
        1499
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 101
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  1537,
                  1538
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 107
                  },
                  "start": {
                    "column": 4,
                    "line": 107
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                1537,
                1540
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 107
                },
                "start": {
                  "column": 4,
                  "line": 107
                }
              }
            },
            "range": [
              1537,
              1541
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 107
              },
              "start": {
                "column": 4,
                "line": 107
              }
            }
          }
        ],
        "range": [
          1531,
          1543
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 108
          },
          "start": {
            "column": 29,
            "line": 106
          }
        }
      },
      "init": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "range": [
                1511,
                1512
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 106
                },
                "start": {
                  "column": 9,
                  "line": 106
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1515,
                1516
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 106
                },
                "start": {
                  "column": 13,
                  "line": 106
                }
              }
            },
            "range": [
              1511,
              1516
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 106
              },
              "start": {
                "column": 9,
                "line": 106
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          1507,
          1516
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 106
          },
          "start": {
            "column": 5,
            "line": 106
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            1518,
            1519
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 106
            },
            "start": {
              "column": 16,
              "line": 106
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "30",
          "value": 30,
          "range": [
            1522,
            1524
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 106
            },
            "start": {
              "column": 20,
              "line": 106
            }
          }
        },
        "range": [
          1518,
          1524
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 106
          },
          "start": {
            "column": 16,
            "line": 106
          }
        }
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            1526,
            1527
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 106
            },
            "start": {
              "column": 24,
              "line": 106
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1526,
          1529
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 106
          },
          "start": {
            "column": 24,
            "line": 106
          }
        }
      },
      "range": [
        1502,
        1543
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 106
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
              1548,
              1549
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              1552,
              1554
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 109
              },
              "start": {
                "column": 8,
                "line": 109
              }
            }
          },
          "range": [
            1548,
            1554
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 109
            },
            "start": {
              "column": 4,
              "line": 109
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1544,
        1555
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 109
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 110
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
