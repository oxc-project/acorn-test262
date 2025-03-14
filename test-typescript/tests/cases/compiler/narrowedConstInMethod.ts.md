__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    35,
    357
  ],
  "body": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 11,
                        "line": 3
                      }
                    },
                    "range": [
                      61,
                      76
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            63,
                            69
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 3
                            },
                            "start": {
                              "column": 13,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            72,
                            76
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 3
                            },
                            "start": {
                              "column": 22,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        63,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 3
                        },
                        "start": {
                          "column": 13,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    60,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      84,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 34,
                        "line": 3
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      80,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 3
                      },
                      "start": {
                        "column": 30,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    79,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 3
                    }
                  }
                },
                "range": [
                  60,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              54,
              87
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
                  "type": "ReturnStatement",
                  "argument": {
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
                            139,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
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
                            142,
                            165
                          ],
                          "async": false,
                          "body": {
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
                                      154,
                                      155
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 6
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
                                      156,
                                      162
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    154,
                                    162
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  147,
                                  163
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
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
                              145,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 6
                              },
                              "start": {
                                "column": 18,
                                "line": 6
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
                              "line": 6
                            },
                            "start": {
                              "column": 15,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          139,
                          165
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      125,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    118,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                108,
                189
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  96,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  102,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              },
              "range": [
                96,
                106
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              92,
              189
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          48,
          191
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 13,
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
        "name": "f",
        "optional": false,
        "range": [
          44,
          45
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [],
      "range": [
        35,
        191
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 2
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    },
                    "range": [
                      220,
                      235
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            222,
                            228
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
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            231,
                            235
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 12
                            },
                            "start": {
                              "column": 22,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        222,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
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
                    219,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      243,
                      245
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 12
                      },
                      "start": {
                        "column": 34,
                        "line": 12
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      239,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 12
                      },
                      "start": {
                        "column": 30,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    238,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 12
                    },
                    "start": {
                      "column": 29,
                      "line": 12
                    }
                  }
                },
                "range": [
                  219,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              213,
              246
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ClassExpression",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        290,
                        347
                      ],
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              304,
                              307
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 15
                              },
                              "start": {
                                "column": 12,
                                "line": 15
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
                              307,
                              330
                            ],
                            "async": false,
                            "body": {
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
                                        319,
                                        320
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 15
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
                                        321,
                                        327
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "range": [
                                      319,
                                      327
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 15
                                      }
                                    }
                                  },
                                  "range": [
                                    312,
                                    328
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 15
                                    }
                                  }
                                }
                              ],
                              "range": [
                                310,
                                330
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 15
                                },
                                "start": {
                                  "column": 18,
                                  "line": 15
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
                                "line": 15
                              },
                              "start": {
                                "column": 15,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            304,
                            330
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
                    "declare": false,
                    "decorators": [],
                    "id": null,
                    "implements": [],
                    "superClass": null,
                    "range": [
                      284,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 16
                      },
                      "start": {
                        "column": 15,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    277,
                    348
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                267,
                354
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 20,
                  "line": 13
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  255,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  261,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 13
                  },
                  "start": {
                    "column": 14,
                    "line": 13
                  }
                }
              },
              "range": [
                255,
                265
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "range": [
              251,
              354
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
          }
        ],
        "range": [
          207,
          356
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 14,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          202,
          204
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [],
      "range": [
        193,
        356
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
