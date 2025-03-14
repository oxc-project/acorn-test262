__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    43,
    630
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
            "name": "x",
            "optional": false,
            "range": [
              47,
              48
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    58,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  52,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    67,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  61,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              51,
              71
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            47,
            71
          ],
          "loc": {
            "end": {
              "column": 28,
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
        43,
        72
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "r2",
            "optional": false,
            "range": [
              77,
              79
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  82,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "range": [
                82,
                86
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            },
            "optional": false,
            "range": [
              82,
              88
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "range": [
            77,
            88
          ],
          "loc": {
            "end": {
              "column": 15,
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
        73,
        89
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          99,
          119
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
              "name": "foo",
              "optional": false,
              "range": [
                105,
                108
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              },
              "range": [
                108,
                116
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  110,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              }
            },
            "value": null,
            "range": [
              105,
              117
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 8,
            "line": 6
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
          97,
          98
        ],
        "loc": {
          "end": {
            "column": 7,
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
        91,
        119
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "y",
            "optional": false,
            "range": [
              124,
              125
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  129,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  132,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              128,
              134
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          },
          "range": [
            124,
            134
          ],
          "loc": {
            "end": {
              "column": 14,
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
        120,
        135
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "name": "r3",
            "optional": false,
            "range": [
              140,
              142
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  149,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  151,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 15,
                    "line": 10
                  }
                }
              },
              "range": [
                149,
                153
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "range": [
              145,
              155
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          "range": [
            140,
            155
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        136,
        156
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 12
                },
                "start": {
                  "column": 5,
                  "line": 12
                }
              },
              "range": [
                163,
                210
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 19,
                              "line": 12
                            },
                            "start": {
                              "column": 11,
                              "line": 12
                            }
                          },
                          "range": [
                            169,
                            177
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              171,
                              177
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 12
                              },
                              "start": {
                                "column": 13,
                                "line": 12
                              }
                            }
                          }
                        },
                        "range": [
                          168,
                          177
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 12
                          },
                          "start": {
                            "column": 10,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 12
                        },
                        "start": {
                          "column": 20,
                          "line": 12
                        }
                      },
                      "range": [
                        178,
                        186
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          180,
                          186
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 12
                          },
                          "start": {
                            "column": 22,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      167,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 40,
                              "line": 12
                            },
                            "start": {
                              "column": 32,
                              "line": 12
                            }
                          },
                          "range": [
                            190,
                            198
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              192,
                              198
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
                          189,
                          198
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 12
                        },
                        "start": {
                          "column": 41,
                          "line": 12
                        }
                      },
                      "range": [
                        199,
                        207
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          201,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 12
                          },
                          "start": {
                            "column": 43,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      188,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 12
                      },
                      "start": {
                        "column": 30,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  165,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              162,
              210
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            162,
            210
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        158,
        211
      ],
      "loc": {
        "end": {
          "column": 53,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              },
              "range": [
                217,
                264
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 19,
                              "line": 13
                            },
                            "start": {
                              "column": 11,
                              "line": 13
                            }
                          },
                          "range": [
                            223,
                            231
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              225,
                              231
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
                          222,
                          231
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 13
                          },
                          "start": {
                            "column": 10,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 13
                        },
                        "start": {
                          "column": 20,
                          "line": 13
                        }
                      },
                      "range": [
                        232,
                        240
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          234,
                          240
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 13
                          },
                          "start": {
                            "column": 22,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      221,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 9,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 40,
                              "line": 13
                            },
                            "start": {
                              "column": 32,
                              "line": 13
                            }
                          },
                          "range": [
                            244,
                            252
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              246,
                              252
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 13
                              },
                              "start": {
                                "column": 34,
                                "line": 13
                              }
                            }
                          }
                        },
                        "range": [
                          243,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 13
                          },
                          "start": {
                            "column": 31,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 13
                        },
                        "start": {
                          "column": 41,
                          "line": 13
                        }
                      },
                      "range": [
                        253,
                        261
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          255,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 13
                          },
                          "start": {
                            "column": 43,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      242,
                      262
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 13
                      },
                      "start": {
                        "column": 30,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  219,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              216,
              264
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            216,
            264
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        212,
        265
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 13
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                271,
                312
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 19,
                              "line": 14
                            },
                            "start": {
                              "column": 11,
                              "line": 14
                            }
                          },
                          "range": [
                            277,
                            285
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              279,
                              285
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 14
                              },
                              "start": {
                                "column": 13,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          276,
                          285
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 14
                          },
                          "start": {
                            "column": 10,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 14
                        },
                        "start": {
                          "column": 20,
                          "line": 14
                        }
                      },
                      "range": [
                        286,
                        294
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          288,
                          294
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 14
                          },
                          "start": {
                            "column": 22,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      275,
                      295
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 37,
                              "line": 14
                            },
                            "start": {
                              "column": 32,
                              "line": 14
                            }
                          },
                          "range": [
                            298,
                            303
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              300,
                              303
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 14
                              },
                              "start": {
                                "column": 34,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          297,
                          303
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 14
                          },
                          "start": {
                            "column": 31,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 14
                        },
                        "start": {
                          "column": 38,
                          "line": 14
                        }
                      },
                      "range": [
                        304,
                        309
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          306,
                          309
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 14
                          },
                          "start": {
                            "column": 40,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      296,
                      310
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
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
                  273,
                  312
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              270,
              312
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            270,
            312
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        266,
        313
      ],
      "loc": {
        "end": {
          "column": 47,
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
            "name": "z",
            "optional": false,
            "range": [
              318,
              319
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  323,
                  324
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  326,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 15
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  329,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              322,
              331
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          "range": [
            318,
            331
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        314,
        332
      ],
      "loc": {
        "end": {
          "column": 18,
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
            "name": "r4",
            "optional": false,
            "range": [
              337,
              339
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                342,
                343
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                344,
                345
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              342,
              346
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          },
          "range": [
            337,
            346
          ],
          "loc": {
            "end": {
              "column": 13,
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
      "kind": "var",
      "range": [
        333,
        347
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "r5",
            "optional": false,
            "range": [
              352,
              354
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  360,
                  362
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 17
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r4",
              "optional": false,
              "range": [
                357,
                359
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "optional": false,
            "range": [
              357,
              363
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 17
              },
              "start": {
                "column": 9,
                "line": 17
              }
            }
          },
          "range": [
            352,
            363
          ],
          "loc": {
            "end": {
              "column": 15,
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
        348,
        364
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "name": "r5b",
            "optional": false,
            "range": [
              387,
              390
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  396,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 18
                  },
                  "start": {
                    "column": 13,
                    "line": 18
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r4",
              "optional": false,
              "range": [
                393,
                395
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 18
                },
                "start": {
                  "column": 10,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              393,
              398
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 18
              },
              "start": {
                "column": 10,
                "line": 18
              }
            }
          },
          "range": [
            387,
            398
          ],
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        383,
        399
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 20
                },
                "start": {
                  "column": 6,
                  "line": 20
                }
              },
              "range": [
                407,
                451
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 18,
                              "line": 20
                            },
                            "start": {
                              "column": 15,
                              "line": 20
                            }
                          },
                          "range": [
                            416,
                            419
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                418,
                                419
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 20
                                },
                                "start": {
                                  "column": 17,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              418,
                              419
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 20
                              },
                              "start": {
                                "column": 17,
                                "line": 20
                              }
                            }
                          }
                        },
                        "range": [
                          415,
                          419
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 20
                          },
                          "start": {
                            "column": 14,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 20
                        },
                        "start": {
                          "column": 19,
                          "line": 20
                        }
                      },
                      "range": [
                        420,
                        428
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          422,
                          428
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 20
                          },
                          "start": {
                            "column": 21,
                            "line": 20
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 20
                        },
                        "start": {
                          "column": 10,
                          "line": 20
                        }
                      },
                      "range": [
                        411,
                        414
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
                              412,
                              413
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 20
                              },
                              "start": {
                                "column": 11,
                                "line": 20
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            412,
                            413
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 20
                            },
                            "start": {
                              "column": 11,
                              "line": 20
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      411,
                      429
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 20
                      },
                      "start": {
                        "column": 10,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 39,
                              "line": 20
                            },
                            "start": {
                              "column": 31,
                              "line": 20
                            }
                          },
                          "range": [
                            432,
                            440
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              434,
                              440
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 20
                              },
                              "start": {
                                "column": 33,
                                "line": 20
                              }
                            }
                          }
                        },
                        "range": [
                          431,
                          440
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 20
                          },
                          "start": {
                            "column": 30,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 20
                        },
                        "start": {
                          "column": 40,
                          "line": 20
                        }
                      },
                      "range": [
                        441,
                        449
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          443,
                          449
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 20
                          },
                          "start": {
                            "column": 42,
                            "line": 20
                          }
                        }
                      }
                    },
                    "range": [
                      430,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 20
                      },
                      "start": {
                        "column": 29,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  409,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              405,
              451
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": null,
          "range": [
            405,
            451
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        401,
        452
      ],
      "loc": {
        "end": {
          "column": 51,
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 21
                },
                "start": {
                  "column": 6,
                  "line": 21
                }
              },
              "range": [
                459,
                504
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 18,
                              "line": 21
                            },
                            "start": {
                              "column": 15,
                              "line": 21
                            }
                          },
                          "range": [
                            468,
                            471
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                470,
                                471
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 21
                                },
                                "start": {
                                  "column": 17,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              470,
                              471
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 21
                              },
                              "start": {
                                "column": 17,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          467,
                          471
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 21
                          },
                          "start": {
                            "column": 14,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 21
                        },
                        "start": {
                          "column": 19,
                          "line": 21
                        }
                      },
                      "range": [
                        472,
                        480
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          474,
                          480
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 21
                          },
                          "start": {
                            "column": 21,
                            "line": 21
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 21
                        },
                        "start": {
                          "column": 10,
                          "line": 21
                        }
                      },
                      "range": [
                        463,
                        466
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
                              464,
                              465
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 21
                              },
                              "start": {
                                "column": 11,
                                "line": 21
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            464,
                            465
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 21
                            },
                            "start": {
                              "column": 11,
                              "line": 21
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      463,
                      481
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 21
                      },
                      "start": {
                        "column": 10,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 39,
                              "line": 21
                            },
                            "start": {
                              "column": 31,
                              "line": 21
                            }
                          },
                          "range": [
                            484,
                            492
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              486,
                              492
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 21
                              },
                              "start": {
                                "column": 33,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          483,
                          492
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 21
                          },
                          "start": {
                            "column": 30,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 21
                        },
                        "start": {
                          "column": 40,
                          "line": 21
                        }
                      },
                      "range": [
                        493,
                        501
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          495,
                          501
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 21
                          },
                          "start": {
                            "column": 42,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      482,
                      502
                    ],
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
                  }
                ],
                "range": [
                  461,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              457,
              504
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            457,
            504
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        453,
        505
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 22
                }
              },
              "range": [
                512,
                554
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 20,
                              "line": 22
                            },
                            "start": {
                              "column": 12,
                              "line": 22
                            }
                          },
                          "range": [
                            518,
                            526
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              520,
                              526
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
                          517,
                          526
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
                    "returnType": {
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
                        527,
                        535
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          529,
                          535
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
                      516,
                      536
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
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 39,
                              "line": 22
                            },
                            "start": {
                              "column": 36,
                              "line": 22
                            }
                          },
                          "range": [
                            542,
                            545
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                544,
                                545
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 22
                                },
                                "start": {
                                  "column": 38,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              544,
                              545
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 22
                              },
                              "start": {
                                "column": 38,
                                "line": 22
                              }
                            }
                          }
                        },
                        "range": [
                          541,
                          545
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 22
                          },
                          "start": {
                            "column": 35,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 22
                        },
                        "start": {
                          "column": 40,
                          "line": 22
                        }
                      },
                      "range": [
                        546,
                        551
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          548,
                          551
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 22
                          },
                          "start": {
                            "column": 42,
                            "line": 22
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 22
                        },
                        "start": {
                          "column": 31,
                          "line": 22
                        }
                      },
                      "range": [
                        537,
                        540
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
                              538,
                              539
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 22
                              },
                              "start": {
                                "column": 32,
                                "line": 22
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            538,
                            539
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 22
                            },
                            "start": {
                              "column": 32,
                              "line": 22
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      537,
                      552
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 22
                      },
                      "start": {
                        "column": 31,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  514,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 48,
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
              510,
              554
            ],
            "loc": {
              "end": {
                "column": 48,
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
            510,
            554
          ],
          "loc": {
            "end": {
              "column": 48,
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
        506,
        555
      ],
      "loc": {
        "end": {
          "column": 49,
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
            "name": "z2",
            "optional": false,
            "range": [
              561,
              563
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
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "range": [
                  567,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 24
                  },
                  "start": {
                    "column": 10,
                    "line": 24
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "range": [
                  571,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 24
                  },
                  "start": {
                    "column": 14,
                    "line": 24
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "range": [
                  575,
                  577
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 24
                  },
                  "start": {
                    "column": 18,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              566,
              578
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            561,
            578
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 24
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
        557,
        579
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 24
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
            "name": "r6",
            "optional": false,
            "range": [
              584,
              586
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "z2",
              "optional": false,
              "range": [
                589,
                591
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                592,
                593
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              }
            },
            "range": [
              589,
              594
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 25
              },
              "start": {
                "column": 9,
                "line": 25
              }
            }
          },
          "range": [
            584,
            594
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        580,
        595
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "r7",
            "optional": false,
            "range": [
              600,
              602
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  608,
                  610
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 26
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r6",
              "optional": false,
              "range": [
                605,
                607
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              605,
              611
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 26
              }
            }
          },
          "range": [
            600,
            611
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        596,
        612
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 34,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
