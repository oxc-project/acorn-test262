__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    794
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
              "name": "bar",
              "optional": false,
              "range": [
                15,
                18
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
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
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                18,
                33
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      20,
                      26
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 2
                      },
                      "start": {
                        "column": 7,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      29,
                      33
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 2
                      },
                      "start": {
                        "column": 16,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  20,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              15,
              34
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                37,
                40
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 2,
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
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              },
              "range": [
                40,
                48
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  42,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 7,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              37,
              49
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "range": [
                52,
                58
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                  "column": 3,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              },
              "range": [
                58,
                102
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        66,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 5
                        },
                        "start": {
                          "column": 4,
                          "line": 5
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
                          "column": 13,
                          "line": 5
                        },
                        "start": {
                          "column": 5,
                          "line": 5
                        }
                      },
                      "range": [
                        67,
                        75
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          69,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 5
                          },
                          "start": {
                            "column": 7,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      66,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        81,
                        82
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
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 6
                        },
                        "start": {
                          "column": 5,
                          "line": 6
                        }
                      },
                      "range": [
                        82,
                        97
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              84,
                              90
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 6
                              },
                              "start": {
                                "column": 7,
                                "line": 6
                              }
                            }
                          },
                          {
                            "type": "TSNullKeyword",
                            "range": [
                              93,
                              97
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 6
                              },
                              "start": {
                                "column": 16,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          84,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 6
                          },
                          "start": {
                            "column": 7,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      81,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
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
                  60,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              52,
              102
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "range": [
          11,
          104
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "range": [
        0,
        105
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 8
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
            "name": "aFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              },
              "range": [
                117,
                122
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    119,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                },
                "range": [
                  119,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 12,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              113,
              122
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
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
                  "name": "bar",
                  "optional": false,
                  "range": [
                    127,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 10
                    },
                    "start": {
                      "column": 20,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    132,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 25,
                      "line": 10
                    }
                  }
                },
                "range": [
                  127,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "range": [
                    135,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 10
                    },
                    "start": {
                      "column": 28,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"b\"",
                  "value": "b",
                  "range": [
                    140,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 10
                    },
                    "start": {
                      "column": 33,
                      "line": 10
                    }
                  }
                },
                "range": [
                  135,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 28,
                    "line": 10
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "range": [
                    145,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 10
                    },
                    "start": {
                      "column": 38,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          155,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 10
                          },
                          "start": {
                            "column": 48,
                            "line": 10
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          158,
                          159
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 10
                          },
                          "start": {
                            "column": 51,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        155,
                        159
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
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          161,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 10
                          },
                          "start": {
                            "column": 54,
                            "line": 10
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"y\"",
                        "value": "y",
                        "range": [
                          164,
                          167
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 10
                          },
                          "start": {
                            "column": 57,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        161,
                        167
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 10
                        },
                        "start": {
                          "column": 54,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    153,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 10
                    },
                    "start": {
                      "column": 46,
                      "line": 10
                    }
                  }
                },
                "range": [
                  145,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 10
                  },
                  "start": {
                    "column": 38,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              125,
              171
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 10
              },
              "start": {
                "column": 18,
                "line": 10
              }
            }
          },
          "range": [
            113,
            171
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        107,
        172
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
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
                        "name": "bar",
                        "optional": false,
                        "range": [
                          217,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 13
                          },
                          "start": {
                            "column": 10,
                            "line": 13
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
                        "name": "bar",
                        "optional": false,
                        "range": [
                          217,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 13
                          },
                          "start": {
                            "column": 10,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        217,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 13
                        },
                        "start": {
                          "column": 10,
                          "line": 13
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "range": [
                          222,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 13
                          },
                          "start": {
                            "column": 15,
                            "line": 13
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
                        "name": "baz",
                        "optional": false,
                        "range": [
                          222,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 13
                          },
                          "start": {
                            "column": 15,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        222,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nested",
                        "optional": false,
                        "range": [
                          227,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 13
                          },
                          "start": {
                            "column": 20,
                            "line": 13
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                236,
                                237
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 13
                                },
                                "start": {
                                  "column": 29,
                                  "line": 13
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                236,
                                237
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 13
                                },
                                "start": {
                                  "column": 29,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              236,
                              237
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 13
                              },
                              "start": {
                                "column": 29,
                                "line": 13
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                239,
                                240
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 13
                                },
                                "start": {
                                  "column": 32,
                                  "line": 13
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
                              "name": "text",
                              "optional": false,
                              "range": [
                                242,
                                246
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 13
                                },
                                "start": {
                                  "column": 35,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              239,
                              246
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 13
                              },
                              "start": {
                                "column": 32,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "range": [
                          235,
                          247
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 13
                          },
                          "start": {
                            "column": 28,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        227,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 13
                        },
                        "start": {
                          "column": 20,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    215,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aFoo",
                  "optional": false,
                  "range": [
                    252,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 13
                    },
                    "start": {
                      "column": 45,
                      "line": 13
                    }
                  }
                },
                "range": [
                  215,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              209,
              257
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 13
              },
              "start": {
                "column": 2,
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
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    },
                    "range": [
                      271,
                      279
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        273,
                        279
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
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
                    266,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aFoo",
                    "optional": false,
                    "range": [
                      282,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 14
                      },
                      "start": {
                        "column": 24,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      287,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 14
                      },
                      "start": {
                        "column": 29,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    282,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 14
                    },
                    "start": {
                      "column": 24,
                      "line": 14
                    }
                  }
                },
                "range": [
                  266,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              260,
              291
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 14
              },
              "start": {
                "column": 2,
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
                  "name": "wrong",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    },
                    "range": [
                      305,
                      313
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        307,
                        313
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    300,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    316,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 15
                    },
                    "start": {
                      "column": 24,
                      "line": 15
                    }
                  }
                },
                "range": [
                  300,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              294,
              320
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 15
              },
              "start": {
                "column": 2,
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
                  "name": "another",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 16
                      },
                      "start": {
                        "column": 15,
                        "line": 16
                      }
                    },
                    "range": [
                      336,
                      344
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        338,
                        344
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 16
                        },
                        "start": {
                          "column": 17,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    329,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "range": [
                    347,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 26,
                      "line": 16
                    }
                  }
                },
                "range": [
                  329,
                  350
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
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              323,
              351
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 16
              },
              "start": {
                "column": 2,
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
                  "name": "aAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 17
                      },
                      "start": {
                        "column": 14,
                        "line": 17
                      }
                    },
                    "range": [
                      366,
                      374
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        368,
                        374
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 17
                        },
                        "start": {
                          "column": 16,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    360,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    377,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 17
                    },
                    "start": {
                      "column": 25,
                      "line": 17
                    }
                  }
                },
                "range": [
                  360,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              354,
              379
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 17
              },
              "start": {
                "column": 2,
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
                  "name": "bAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 18
                      },
                      "start": {
                        "column": 14,
                        "line": 18
                      }
                    },
                    "range": [
                      394,
                      402
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        396,
                        402
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 18
                        },
                        "start": {
                          "column": 16,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    388,
                    402
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "range": [
                    405,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 18
                    },
                    "start": {
                      "column": 25,
                      "line": 18
                    }
                  }
                },
                "range": [
                  388,
                  409
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              382,
              410
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 18
              }
            }
          }
        ],
        "range": [
          205,
          412
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 31,
            "line": 12
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "aFoo",
            "optional": false,
            "range": [
              178,
              182
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              183,
              186
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          },
          "range": [
            178,
            186
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "aFoo",
              "optional": false,
              "range": [
                190,
                194
              ],
              "loc": {
                "end": {
                  "column": 20,
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
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "range": [
                195,
                201
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 12
                },
                "start": {
                  "column": 21,
                  "line": 12
                }
              }
            },
            "range": [
              190,
              201
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
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              202,
              203
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 12
              },
              "start": {
                "column": 28,
                "line": 12
              }
            }
          },
          "range": [
            190,
            203
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 12
            },
            "start": {
              "column": 16,
              "line": 12
            }
          }
        },
        "range": [
          178,
          203
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 12
          },
          "start": {
            "column": 4,
            "line": 12
          }
        }
      },
      "range": [
        174,
        412
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "range": [
          419,
          422
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
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
              "name": "elem1",
              "optional": false,
              "range": [
                429,
                434
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 22
                },
                "start": {
                  "column": 2,
                  "line": 22
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
                  "column": 22,
                  "line": 22
                },
                "start": {
                  "column": 7,
                  "line": 22
                }
              },
              "range": [
                434,
                449
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      436,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      445,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 22
                      },
                      "start": {
                        "column": 18,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  436,
                  449
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 22
                  },
                  "start": {
                    "column": 9,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              429,
              450
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "elem2",
              "optional": false,
              "range": [
                453,
                458
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 23
                },
                "start": {
                  "column": 2,
                  "line": 23
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
                  "column": 19,
                  "line": 23
                },
                "start": {
                  "column": 7,
                  "line": 23
                }
              },
              "range": [
                458,
                470
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        460,
                        463
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 23
                        },
                        "start": {
                          "column": 9,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      460,
                      463
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 23
                      },
                      "start": {
                        "column": 9,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      466,
                      470
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  460,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              453,
              471
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          }
        ],
        "range": [
          425,
          473
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 11,
            "line": 21
          }
        }
      },
      "range": [
        414,
        474
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 24
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
            "name": "bBar",
            "optional": false,
            "range": [
              482,
              486
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
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
                  "name": "elem1",
                  "optional": false,
                  "range": [
                    491,
                    496
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 26
                    },
                    "start": {
                      "column": 15,
                      "line": 26
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "7",
                  "value": 7,
                  "range": [
                    498,
                    499
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 26
                    },
                    "start": {
                      "column": 22,
                      "line": 26
                    }
                  }
                },
                "range": [
                  491,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 26
                  },
                  "start": {
                    "column": 15,
                    "line": 26
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "elem2",
                  "optional": false,
                  "range": [
                    501,
                    506
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 26
                    },
                    "start": {
                      "column": 25,
                      "line": 26
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
                  "name": "aFoo",
                  "optional": false,
                  "range": [
                    508,
                    512
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 26
                    },
                    "start": {
                      "column": 32,
                      "line": 26
                    }
                  }
                },
                "range": [
                  501,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 26
                  },
                  "start": {
                    "column": 25,
                    "line": 26
                  }
                }
              }
            ],
            "range": [
              489,
              514
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 26
              },
              "start": {
                "column": 13,
                "line": 26
              }
            }
          },
          "range": [
            482,
            514
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        476,
        515
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
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
                        "name": "bar",
                        "optional": false,
                        "range": [
                          586,
                          589
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 29
                          },
                          "start": {
                            "column": 10,
                            "line": 29
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
                        "name": "bar",
                        "optional": false,
                        "range": [
                          586,
                          589
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 29
                          },
                          "start": {
                            "column": 10,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        586,
                        589
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 29
                        },
                        "start": {
                          "column": 10,
                          "line": 29
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "range": [
                          591,
                          594
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 29
                          },
                          "start": {
                            "column": 15,
                            "line": 29
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
                        "name": "baz",
                        "optional": false,
                        "range": [
                          591,
                          594
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 29
                          },
                          "start": {
                            "column": 15,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        591,
                        594
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 29
                        },
                        "start": {
                          "column": 15,
                          "line": 29
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nested",
                        "optional": false,
                        "range": [
                          596,
                          602
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                605,
                                606
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 29
                                },
                                "start": {
                                  "column": 29,
                                  "line": 29
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                605,
                                606
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 29
                                },
                                "start": {
                                  "column": 29,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              605,
                              606
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 29
                              },
                              "start": {
                                "column": 29,
                                "line": 29
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                608,
                                609
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 29
                                },
                                "start": {
                                  "column": 32,
                                  "line": 29
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
                              "name": "text",
                              "optional": false,
                              "range": [
                                611,
                                615
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 29
                                },
                                "start": {
                                  "column": 35,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              608,
                              615
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 29
                              },
                              "start": {
                                "column": 32,
                                "line": 29
                              }
                            }
                          }
                        ],
                        "range": [
                          604,
                          616
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 29
                          },
                          "start": {
                            "column": 28,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        596,
                        616
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 29
                        },
                        "start": {
                          "column": 20,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "range": [
                    584,
                    618
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bBar",
                    "optional": false,
                    "range": [
                      621,
                      625
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 29
                      },
                      "start": {
                        "column": 45,
                        "line": 29
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "elem2",
                    "optional": false,
                    "range": [
                      626,
                      631
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 29
                      },
                      "start": {
                        "column": 50,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    621,
                    631
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 29
                    },
                    "start": {
                      "column": 45,
                      "line": 29
                    }
                  }
                },
                "range": [
                  584,
                  631
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              578,
              632
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 29
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
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 30
                      },
                      "start": {
                        "column": 13,
                        "line": 30
                      }
                    },
                    "range": [
                      646,
                      654
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        648,
                        654
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 30
                        },
                        "start": {
                          "column": 15,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    641,
                    654
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bBar",
                      "optional": false,
                      "range": [
                        657,
                        661
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 30
                        },
                        "start": {
                          "column": 24,
                          "line": 30
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "elem2",
                      "optional": false,
                      "range": [
                        662,
                        667
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 30
                        },
                        "start": {
                          "column": 29,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      657,
                      667
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 30
                      },
                      "start": {
                        "column": 24,
                        "line": 30
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      668,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 30
                      },
                      "start": {
                        "column": 35,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    657,
                    671
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 30
                    },
                    "start": {
                      "column": 24,
                      "line": 30
                    }
                  }
                },
                "range": [
                  641,
                  671
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              635,
              672
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 30
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
                  "name": "wrong",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 31
                      },
                      "start": {
                        "column": 13,
                        "line": 31
                      }
                    },
                    "range": [
                      686,
                      694
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        688,
                        694
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 31
                        },
                        "start": {
                          "column": 15,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    681,
                    694
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    697,
                    700
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 31
                    },
                    "start": {
                      "column": 24,
                      "line": 31
                    }
                  }
                },
                "range": [
                  681,
                  700
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              675,
              701
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 31
              },
              "start": {
                "column": 2,
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
                  "name": "another",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 32
                      },
                      "start": {
                        "column": 15,
                        "line": 32
                      }
                    },
                    "range": [
                      717,
                      725
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        719,
                        725
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 32
                        },
                        "start": {
                          "column": 17,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    710,
                    725
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "range": [
                    728,
                    731
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 32
                    },
                    "start": {
                      "column": 26,
                      "line": 32
                    }
                  }
                },
                "range": [
                  710,
                  731
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              704,
              732
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 32
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
                  "name": "aAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 33
                      },
                      "start": {
                        "column": 14,
                        "line": 33
                      }
                    },
                    "range": [
                      747,
                      755
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        749,
                        755
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 33
                        },
                        "start": {
                          "column": 16,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    741,
                    755
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    758,
                    759
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 33
                    },
                    "start": {
                      "column": 25,
                      "line": 33
                    }
                  }
                },
                "range": [
                  741,
                  759
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              735,
              760
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 33
              },
              "start": {
                "column": 2,
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
                  "name": "bAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 34
                      },
                      "start": {
                        "column": 14,
                        "line": 34
                      }
                    },
                    "range": [
                      775,
                      783
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        777,
                        783
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 34
                        },
                        "start": {
                          "column": 16,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    769,
                    783
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "range": [
                    786,
                    790
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 34
                    },
                    "start": {
                      "column": 25,
                      "line": 34
                    }
                  }
                },
                "range": [
                  769,
                  790
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              763,
              791
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 34
              },
              "start": {
                "column": 2,
                "line": 34
              }
            }
          }
        ],
        "range": [
          574,
          793
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 57,
            "line": 28
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bBar",
              "optional": false,
              "range": [
                521,
                525
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "elem2",
              "optional": false,
              "range": [
                526,
                531
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              }
            },
            "range": [
              521,
              531
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "right": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "bBar",
                "optional": false,
                "range": [
                  535,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 28
                  },
                  "start": {
                    "column": 18,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "elem2",
                "optional": false,
                "range": [
                  540,
                  545
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 28
                  },
                  "start": {
                    "column": 23,
                    "line": 28
                  }
                }
              },
              "range": [
                535,
                545
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 28
                },
                "start": {
                  "column": 18,
                  "line": 28
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                546,
                549
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 28
                },
                "start": {
                  "column": 29,
                  "line": 28
                }
              }
            },
            "range": [
              535,
              549
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 28
              },
              "start": {
                "column": 18,
                "line": 28
              }
            }
          },
          "range": [
            521,
            549
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "bBar",
                "optional": false,
                "range": [
                  553,
                  557
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 28
                  },
                  "start": {
                    "column": 36,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "elem2",
                "optional": false,
                "range": [
                  558,
                  563
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 28
                  },
                  "start": {
                    "column": 41,
                    "line": 28
                  }
                }
              },
              "range": [
                553,
                563
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 28
                },
                "start": {
                  "column": 36,
                  "line": 28
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "range": [
                564,
                570
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 28
                },
                "start": {
                  "column": 47,
                  "line": 28
                }
              }
            },
            "range": [
              553,
              570
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 28
              },
              "start": {
                "column": 36,
                "line": 28
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              571,
              572
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 28
              },
              "start": {
                "column": 54,
                "line": 28
              }
            }
          },
          "range": [
            553,
            572
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 28
            },
            "start": {
              "column": 36,
              "line": 28
            }
          }
        },
        "range": [
          521,
          572
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 28
          },
          "start": {
            "column": 4,
            "line": 28
          }
        }
      },
      "range": [
        517,
        793
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
