__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    246
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
            "name": "fInferred",
            "optional": false,
            "range": [
              6,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                38,
                39
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 1
                },
                "start": {
                  "column": 38,
                  "line": 1
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
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
                          21,
                          22
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 1
                          },
                          "start": {
                            "column": 21,
                            "line": 1
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "range": [
                          21,
                          26
                        ],
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            21,
                            22
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 1
                            },
                            "start": {
                              "column": 21,
                              "line": 1
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            25,
                            26
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 1
                            },
                            "start": {
                              "column": 25,
                              "line": 1
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 1
                          },
                          "start": {
                            "column": 21,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        21,
                        26
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 1
                        },
                        "start": {
                          "column": 21,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    19,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 19,
                      "line": 1
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    31,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 1
                    },
                    "start": {
                      "column": 31,
                      "line": 1
                    }
                  }
                },
                "range": [
                  19,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              18,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          "range": [
            6,
            39
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        40
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "fAnnotated",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              },
              "range": [
                114,
                132
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fInferred",
                  "optional": false,
                  "range": [
                    123,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
                      "line": 4
                    }
                  }
                },
                "range": [
                  116,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              104,
              132
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
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
                  "column": 58,
                  "line": 4
                },
                "start": {
                  "column": 57,
                  "line": 4
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
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
                          138,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 4
                          },
                          "start": {
                            "column": 40,
                            "line": 4
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "range": [
                          138,
                          143
                        ],
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            138,
                            139
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 4
                            },
                            "start": {
                              "column": 40,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            142,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 4
                            },
                            "start": {
                              "column": 44,
                              "line": 4
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 4
                          },
                          "start": {
                            "column": 40,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        138,
                        143
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 4
                        },
                        "start": {
                          "column": 40,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    136,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 4
                    },
                    "start": {
                      "column": 38,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    148,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 4
                    },
                    "start": {
                      "column": 50,
                      "line": 4
                    }
                  }
                },
                "range": [
                  136,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 4
                  },
                  "start": {
                    "column": 38,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              135,
              156
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 4
              },
              "start": {
                "column": 37,
                "line": 4
              }
            }
          },
          "range": [
            104,
            156
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        98,
        157
      ],
      "loc": {
        "end": {
          "column": 59,
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
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              },
              "range": [
                172,
                199
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            176,
                            177
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 6
                            },
                            "start": {
                              "column": 17,
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
                              "column": 26,
                              "line": 6
                            },
                            "start": {
                              "column": 18,
                              "line": 6
                            }
                          },
                          "range": [
                            177,
                            185
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              179,
                              185
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 6
                              },
                              "start": {
                                "column": 20,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          176,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 6
                          },
                          "start": {
                            "column": 17,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      174,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      190,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 6
                      },
                      "start": {
                        "column": 31,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  174,
                  199
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              171,
              199
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            171,
            199
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        159,
        200
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 6
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
                  "name": "s",
                  "optional": false,
                  "range": [
                    209,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
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
                  "name": "s",
                  "optional": false,
                  "range": [
                    209,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
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
                  210
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              207,
              212
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "range": [
              215,
              216
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          },
          "range": [
            207,
            216
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        201,
        217
      ],
      "loc": {
        "end": {
          "column": 16,
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
          242,
          245
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 8
          },
          "start": {
            "column": 24,
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
        "name": "fst",
        "optional": false,
        "range": [
          227,
          230
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
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
                  "name": "s",
                  "optional": false,
                  "range": [
                    233,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
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
                  "name": "s",
                  "optional": false,
                  "range": [
                    233,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                },
                "range": [
                  233,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              231,
              236
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "range": [
              239,
              240
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
              }
            }
          },
          "range": [
            231,
            240
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 8
            },
            "start": {
              "column": 13,
              "line": 8
            }
          }
        }
      ],
      "range": [
        218,
        245
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
