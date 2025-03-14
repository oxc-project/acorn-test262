__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    51,
    2376
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
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
                              "name": "b",
                              "optional": false,
                              "range": [
                                182,
                                183
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 7
                                },
                                "start": {
                                  "column": 16,
                                  "line": 7
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                186,
                                187
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 7
                                },
                                "start": {
                                  "column": 20,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              182,
                              187
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 7
                              },
                              "start": {
                                "column": 16,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          178,
                          188
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "alternate": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  311,
                                  312
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 10
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "range": [
                                  313,
                                  321
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                311,
                                321
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 10
                                },
                                "start": {
                                  "column": 18,
                                  "line": 10
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              311,
                              323
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 10
                              },
                              "start": {
                                "column": 18,
                                "line": 10
                              }
                            }
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  269,
                                  270
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 9
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "range": [
                                  271,
                                  279
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                269,
                                279
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 9
                                },
                                "start": {
                                  "column": 18,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              269,
                              281
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 9
                              },
                              "start": {
                                "column": 18,
                                "line": 9
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
                                  235,
                                  236
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 8
                                  }
                                }
                              },
                              "operator": "typeof",
                              "prefix": true,
                              "range": [
                                228,
                                236
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 8
                                },
                                "start": {
                                  "column": 19,
                                  "line": 8
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"boolean\"",
                              "value": "boolean",
                              "range": [
                                241,
                                250
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 8
                                },
                                "start": {
                                  "column": 32,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              228,
                              250
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 8
                              },
                              "start": {
                                "column": 19,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            228,
                            323
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 10
                            },
                            "start": {
                              "column": 19,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          221,
                          324
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      164,
                      344
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
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
                    "name": "f",
                    "optional": false,
                    "range": [
                      160,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 6
                      }
                    }
                  },
                  "params": [],
                  "range": [
                    151,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "range": [
                  151,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  139,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
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
                      114,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    107,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    120,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 24,
                      "line": 4
                    }
                  }
                },
                "range": [
                  107,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "range": [
                107,
                347
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              100,
              348
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          94,
          350
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 43,
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
          60,
          63
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
                "column": 41,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            },
            "range": [
              65,
              92
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    67,
                    73
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
                    76,
                    82
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
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    85,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 3
                    },
                    "start": {
                      "column": 34,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                67,
                92
              ],
              "loc": {
                "end": {
                  "column": 41,
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
            64,
            92
          ],
          "loc": {
            "end": {
              "column": 41,
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
        51,
        350
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      678,
                      679
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
                ],
                "callee": {
                  "type": "FunctionExpression",
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
                              "name": "b",
                              "optional": false,
                              "range": [
                                502,
                                503
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 17
                                },
                                "start": {
                                  "column": 16,
                                  "line": 17
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                506,
                                507
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 17
                                },
                                "start": {
                                  "column": 20,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              502,
                              507
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 17
                              },
                              "start": {
                                "column": 16,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          498,
                          508
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "alternate": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  643,
                                  644
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 20
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "range": [
                                  645,
                                  653
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                643,
                                653
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 20
                                },
                                "start": {
                                  "column": 18,
                                  "line": 20
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              643,
                              655
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 20
                              },
                              "start": {
                                "column": 18,
                                "line": 20
                              }
                            }
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  601,
                                  602
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 19
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "range": [
                                  603,
                                  611
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                601,
                                611
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 19
                                },
                                "start": {
                                  "column": 18,
                                  "line": 19
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              601,
                              613
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 19
                              },
                              "start": {
                                "column": 18,
                                "line": 19
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
                                  567,
                                  568
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 18
                                  }
                                }
                              },
                              "operator": "typeof",
                              "prefix": true,
                              "range": [
                                560,
                                568
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 18
                                },
                                "start": {
                                  "column": 19,
                                  "line": 18
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"boolean\"",
                              "value": "boolean",
                              "range": [
                                573,
                                582
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 18
                                },
                                "start": {
                                  "column": 32,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              560,
                              582
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 18
                              },
                              "start": {
                                "column": 19,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            560,
                            655
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 20
                            },
                            "start": {
                              "column": 19,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          553,
                          656
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 20
                          },
                          "start": {
                            "column": 12,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      484,
                      676
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 21
                      },
                      "start": {
                        "column": 42,
                        "line": 16
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
                      461,
                      462
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
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
                            "line": 16
                          },
                          "start": {
                            "column": 22,
                            "line": 16
                          }
                        },
                        "range": [
                          464,
                          482
                        ],
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSNumberKeyword",
                              "range": [
                                466,
                                472
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 16
                                },
                                "start": {
                                  "column": 24,
                                  "line": 16
                                }
                              }
                            },
                            {
                              "type": "TSBooleanKeyword",
                              "range": [
                                475,
                                482
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 16
                                },
                                "start": {
                                  "column": 33,
                                  "line": 16
                                }
                              }
                            }
                          ],
                          "range": [
                            466,
                            482
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 16
                            },
                            "start": {
                              "column": 24,
                              "line": 16
                            }
                          }
                        }
                      },
                      "range": [
                        463,
                        482
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 16
                        },
                        "start": {
                          "column": 21,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    452,
                    676
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 21
                    },
                    "start": {
                      "column": 10,
                      "line": 16
                    }
                  }
                },
                "optional": false,
                "range": [
                  452,
                  680
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  440,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 15
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
                      415,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 18,
                        "line": 14
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    408,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    421,
                    429
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
                  408,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "range": [
                408,
                680
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              401,
              681
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          395,
          725
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 44,
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
        "name": "foo2",
        "optional": false,
        "range": [
          360,
          364
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
              }
            },
            "range": [
              366,
              393
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    368,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 13
                    },
                    "start": {
                      "column": 17,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    377,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 13
                    },
                    "start": {
                      "column": 26,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    386,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 13
                    },
                    "start": {
                      "column": 35,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                368,
                393
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              }
            }
          },
          "range": [
            365,
            393
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 13
            },
            "start": {
              "column": 14,
              "line": 13
            }
          }
        }
      ],
      "range": [
        351,
        725
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 13
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
              "type": "ConditionalExpression",
              "alternate": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
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
                              "name": "b",
                              "optional": false,
                              "range": [
                                852,
                                853
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 27
                                },
                                "start": {
                                  "column": 16,
                                  "line": 27
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                856,
                                857
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 27
                                },
                                "start": {
                                  "column": 20,
                                  "line": 27
                                }
                              }
                            },
                            "range": [
                              852,
                              857
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 27
                              },
                              "start": {
                                "column": 16,
                                "line": 27
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          848,
                          858
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 27
                          },
                          "start": {
                            "column": 12,
                            "line": 27
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "alternate": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  993,
                                  994
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 30
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "range": [
                                  995,
                                  1003
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                993,
                                1003
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 30
                                },
                                "start": {
                                  "column": 18,
                                  "line": 30
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              993,
                              1005
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 30
                              },
                              "start": {
                                "column": 18,
                                "line": 30
                              }
                            }
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  951,
                                  952
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 29
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "range": [
                                  953,
                                  961
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 29
                                  }
                                }
                              },
                              "range": [
                                951,
                                961
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 29
                                },
                                "start": {
                                  "column": 18,
                                  "line": 29
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              951,
                              963
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 29
                              },
                              "start": {
                                "column": 18,
                                "line": 29
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
                                  917,
                                  918
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 28
                                  }
                                }
                              },
                              "operator": "typeof",
                              "prefix": true,
                              "range": [
                                910,
                                918
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 28
                                },
                                "start": {
                                  "column": 19,
                                  "line": 28
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"boolean\"",
                              "value": "boolean",
                              "range": [
                                923,
                                932
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 28
                                },
                                "start": {
                                  "column": 32,
                                  "line": 28
                                }
                              }
                            },
                            "range": [
                              910,
                              932
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 28
                              },
                              "start": {
                                "column": 19,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            910,
                            1005
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 30
                            },
                            "start": {
                              "column": 19,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          903,
                          1006
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "range": [
                      834,
                      1026
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 31
                      },
                      "start": {
                        "column": 17,
                        "line": 26
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    828,
                    1026
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 31
                    },
                    "start": {
                      "column": 11,
                      "line": 26
                    }
                  }
                },
                "optional": false,
                "range": [
                  827,
                  1029
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 31
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  815,
                  816
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
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
                      790,
                      791
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 24
                      },
                      "start": {
                        "column": 18,
                        "line": 24
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    783,
                    791
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 24
                    },
                    "start": {
                      "column": 11,
                      "line": 24
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    796,
                    804
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 24
                    },
                    "start": {
                      "column": 24,
                      "line": 24
                    }
                  }
                },
                "range": [
                  783,
                  804
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              },
              "range": [
                783,
                1029
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "range": [
              776,
              1030
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          770,
          1032
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 44,
            "line": 23
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
          735,
          739
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
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
                "column": 42,
                "line": 23
              },
              "start": {
                "column": 15,
                "line": 23
              }
            },
            "range": [
              741,
              768
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    743,
                    749
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 23
                    },
                    "start": {
                      "column": 17,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    752,
                    758
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 23
                    },
                    "start": {
                      "column": 26,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    761,
                    768
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 23
                    },
                    "start": {
                      "column": 35,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                743,
                768
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 23
                },
                "start": {
                  "column": 17,
                  "line": 23
                }
              }
            }
          },
          "range": [
            740,
            768
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 23
            },
            "start": {
              "column": 14,
              "line": 23
            }
          }
        }
      ],
      "range": [
        726,
        1032
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 23
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
              "type": "ConditionalExpression",
              "alternate": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1354,
                      1355
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 41
                      },
                      "start": {
                        "column": 11,
                        "line": 41
                      }
                    }
                  }
                ],
                "callee": {
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
                              "name": "b",
                              "optional": false,
                              "range": [
                                1178,
                                1179
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 37
                                },
                                "start": {
                                  "column": 16,
                                  "line": 37
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1182,
                                1183
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 37
                                },
                                "start": {
                                  "column": 20,
                                  "line": 37
                                }
                              }
                            },
                            "range": [
                              1178,
                              1183
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 37
                              },
                              "start": {
                                "column": 16,
                                "line": 37
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          1174,
                          1184
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 37
                          },
                          "start": {
                            "column": 12,
                            "line": 37
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "alternate": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1319,
                                  1320
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 40
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "range": [
                                  1321,
                                  1329
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 40
                                  }
                                }
                              },
                              "range": [
                                1319,
                                1329
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 40
                                },
                                "start": {
                                  "column": 18,
                                  "line": 40
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1319,
                              1331
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 40
                              },
                              "start": {
                                "column": 18,
                                "line": 40
                              }
                            }
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1277,
                                  1278
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 39
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "range": [
                                  1279,
                                  1287
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 39
                                  }
                                }
                              },
                              "range": [
                                1277,
                                1287
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 39
                                },
                                "start": {
                                  "column": 18,
                                  "line": 39
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1277,
                              1289
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 39
                              },
                              "start": {
                                "column": 18,
                                "line": 39
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
                                  1243,
                                  1244
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 38
                                  }
                                }
                              },
                              "operator": "typeof",
                              "prefix": true,
                              "range": [
                                1236,
                                1244
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 38
                                },
                                "start": {
                                  "column": 19,
                                  "line": 38
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"boolean\"",
                              "value": "boolean",
                              "range": [
                                1249,
                                1258
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 38
                                },
                                "start": {
                                  "column": 32,
                                  "line": 38
                                }
                              }
                            },
                            "range": [
                              1236,
                              1258
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 38
                              },
                              "start": {
                                "column": 19,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            1236,
                            1331
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 40
                            },
                            "start": {
                              "column": 19,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          1229,
                          1332
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 40
                          },
                          "start": {
                            "column": 12,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "range": [
                      1160,
                      1352
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 41
                      },
                      "start": {
                        "column": 36,
                        "line": 36
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
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
                            "column": 31,
                            "line": 36
                          },
                          "start": {
                            "column": 13,
                            "line": 36
                          }
                        },
                        "range": [
                          1137,
                          1155
                        ],
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSNumberKeyword",
                              "range": [
                                1139,
                                1145
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 36
                                },
                                "start": {
                                  "column": 15,
                                  "line": 36
                                }
                              }
                            },
                            {
                              "type": "TSBooleanKeyword",
                              "range": [
                                1148,
                                1155
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 36
                                },
                                "start": {
                                  "column": 24,
                                  "line": 36
                                }
                              }
                            }
                          ],
                          "range": [
                            1139,
                            1155
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 36
                            },
                            "start": {
                              "column": 15,
                              "line": 36
                            }
                          }
                        }
                      },
                      "range": [
                        1136,
                        1155
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 36
                        },
                        "start": {
                          "column": 12,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "range": [
                    1135,
                    1352
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 41
                    },
                    "start": {
                      "column": 11,
                      "line": 36
                    }
                  }
                },
                "optional": false,
                "range": [
                  1134,
                  1356
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 41
                  },
                  "start": {
                    "column": 10,
                    "line": 36
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1122,
                  1123
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 35
                  },
                  "start": {
                    "column": 10,
                    "line": 35
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
                      1097,
                      1098
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 34
                      },
                      "start": {
                        "column": 18,
                        "line": 34
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    1090,
                    1098
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 34
                    },
                    "start": {
                      "column": 11,
                      "line": 34
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    1103,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 34
                    },
                    "start": {
                      "column": 24,
                      "line": 34
                    }
                  }
                },
                "range": [
                  1090,
                  1111
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 34
                  },
                  "start": {
                    "column": 11,
                    "line": 34
                  }
                }
              },
              "range": [
                1090,
                1356
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 41
                },
                "start": {
                  "column": 11,
                  "line": 34
                }
              }
            },
            "range": [
              1083,
              1357
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          1077,
          1401
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 44,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          1042,
          1046
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
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
                "column": 42,
                "line": 33
              },
              "start": {
                "column": 15,
                "line": 33
              }
            },
            "range": [
              1048,
              1075
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1050,
                    1056
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 33
                    },
                    "start": {
                      "column": 17,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1059,
                    1065
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 33
                    },
                    "start": {
                      "column": 26,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1068,
                    1075
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 33
                    },
                    "start": {
                      "column": 35,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                1050,
                1075
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 33
                },
                "start": {
                  "column": 17,
                  "line": 33
                }
              }
            }
          },
          "range": [
            1047,
            1075
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 33
            },
            "start": {
              "column": 14,
              "line": 33
            }
          }
        }
      ],
      "range": [
        1033,
        1401
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 33
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1551,
                          1552
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 46
                          },
                          "start": {
                            "column": 12,
                            "line": 46
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1555,
                          1556
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 46
                          },
                          "start": {
                            "column": 16,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        1551,
                        1556
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 46
                        },
                        "start": {
                          "column": 12,
                          "line": 46
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1547,
                    1557
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
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
                              "name": "z",
                              "optional": false,
                              "range": [
                                1610,
                                1611
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 48
                                },
                                "start": {
                                  "column": 16,
                                  "line": 48
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1614,
                                1615
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 48
                                },
                                "start": {
                                  "column": 20,
                                  "line": 48
                                }
                              }
                            },
                            "range": [
                              1610,
                              1615
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 48
                              },
                              "start": {
                                "column": 16,
                                "line": 48
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          1606,
                          1616
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 48
                          },
                          "start": {
                            "column": 12,
                            "line": 48
                          }
                        }
                      }
                    ],
                    "range": [
                      1592,
                      1636
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 49
                      },
                      "start": {
                        "column": 23,
                        "line": 47
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
                      1586,
                      1589
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 47
                      },
                      "start": {
                        "column": 17,
                        "line": 47
                      }
                    }
                  },
                  "params": [],
                  "range": [
                    1577,
                    1636
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                1537,
                1642
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 50
                },
                "start": {
                  "column": 31,
                  "line": 45
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
                    1521,
                    1522
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 45
                    },
                    "start": {
                      "column": 15,
                      "line": 45
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1514,
                  1522
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 45
                  },
                  "start": {
                    "column": 8,
                    "line": 45
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1527,
                  1535
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 45
                  },
                  "start": {
                    "column": 21,
                    "line": 45
                  }
                }
              },
              "range": [
                1514,
                1535
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 45
                },
                "start": {
                  "column": 8,
                  "line": 45
                }
              }
            },
            "range": [
              1510,
              1642
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          1504,
          1644
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 44,
            "line": 44
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "range": [
          1469,
          1473
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 44
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
                "column": 42,
                "line": 44
              },
              "start": {
                "column": 15,
                "line": 44
              }
            },
            "range": [
              1475,
              1502
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1477,
                    1483
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 44
                    },
                    "start": {
                      "column": 17,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1486,
                    1492
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 44
                    },
                    "start": {
                      "column": 26,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1495,
                    1502
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 44
                    },
                    "start": {
                      "column": 35,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                1477,
                1502
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 44
                },
                "start": {
                  "column": 17,
                  "line": 44
                }
              }
            }
          },
          "range": [
            1474,
            1502
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 44
            },
            "start": {
              "column": 14,
              "line": 44
            }
          }
        }
      ],
      "range": [
        1460,
        1644
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                        "column": 36,
                        "line": 53
                      },
                      "start": {
                        "column": 9,
                        "line": 53
                      }
                    },
                    "range": [
                      1665,
                      1692
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1667,
                            1673
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 53
                            },
                            "start": {
                              "column": 11,
                              "line": 53
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1676,
                            1682
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 53
                            },
                            "start": {
                              "column": 20,
                              "line": 53
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1685,
                            1692
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 53
                            },
                            "start": {
                              "column": 29,
                              "line": 53
                            }
                          }
                        }
                      ],
                      "range": [
                        1667,
                        1692
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 53
                        },
                        "start": {
                          "column": 11,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    1664,
                    1692
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 53
                    }
                  }
                },
                "init": null,
                "range": [
                  1664,
                  1692
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 53
                  },
                  "start": {
                    "column": 8,
                    "line": 53
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1660,
              1693
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          1722,
                          1723
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 55
                          },
                          "start": {
                            "column": 12,
                            "line": 55
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1726,
                          1727
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 55
                          },
                          "start": {
                            "column": 16,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1722,
                        1727
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 55
                        },
                        "start": {
                          "column": 12,
                          "line": 55
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1718,
                    1728
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 56
                            },
                            "start": {
                              "column": 13,
                              "line": 56
                            }
                          },
                          "range": [
                            1783,
                            1791
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1785,
                              1791
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 56
                              },
                              "start": {
                                "column": 15,
                                "line": 56
                              }
                            }
                          }
                        },
                        "range": [
                          1782,
                          1791
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 56
                          },
                          "start": {
                            "column": 12,
                            "line": 56
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        1782,
                        1791
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 56
                        },
                        "start": {
                          "column": 12,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1778,
                    1792
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": {
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
                            "name": "y",
                            "optional": false,
                            "range": [
                              1888,
                              1889
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 60
                              },
                              "start": {
                                "column": 12,
                                "line": 60
                              }
                            }
                          },
                          "right": {
                            "type": "ConditionalExpression",
                            "alternate": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    1967,
                                    1968
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 62
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 62
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "range": [
                                    1969,
                                    1977
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 62
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 62
                                    }
                                  }
                                },
                                "range": [
                                  1967,
                                  1977
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 62
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 62
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1967,
                                1979
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 62
                                },
                                "start": {
                                  "column": 14,
                                  "line": 62
                                }
                              }
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    1929,
                                    1930
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 61
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "range": [
                                    1931,
                                    1939
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 61
                                    }
                                  }
                                },
                                "range": [
                                  1929,
                                  1939
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 61
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1929,
                                1941
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 61
                                },
                                "start": {
                                  "column": 14,
                                  "line": 61
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
                                    1899,
                                    1900
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 60
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 60
                                    }
                                  }
                                },
                                "operator": "typeof",
                                "prefix": true,
                                "range": [
                                  1892,
                                  1900
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 60
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "\"boolean\"",
                                "value": "boolean",
                                "range": [
                                  1905,
                                  1914
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 60
                                  }
                                }
                              },
                              "range": [
                                1892,
                                1914
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 60
                                },
                                "start": {
                                  "column": 16,
                                  "line": 60
                                }
                              }
                            },
                            "range": [
                              1892,
                              1979
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 62
                              },
                              "start": {
                                "column": 16,
                                "line": 60
                              }
                            }
                          },
                          "range": [
                            1888,
                            1979
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 62
                            },
                            "start": {
                              "column": 12,
                              "line": 60
                            }
                          }
                        },
                        "range": [
                          1888,
                          1980
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 62
                          },
                          "start": {
                            "column": 12,
                            "line": 60
                          }
                        }
                      }
                    ],
                    "range": [
                      1874,
                      2000
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 63
                      },
                      "start": {
                        "column": 15,
                        "line": 59
                      }
                    }
                  },
                  "consequent": {
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
                            "name": "y",
                            "optional": false,
                            "range": [
                              1842,
                              1843
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 58
                              },
                              "start": {
                                "column": 12,
                                "line": 58
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              1846,
                              1847
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 58
                              },
                              "start": {
                                "column": 16,
                                "line": 58
                              }
                            }
                          },
                          "range": [
                            1842,
                            1847
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 58
                            },
                            "start": {
                              "column": 12,
                              "line": 58
                            }
                          }
                        },
                        "range": [
                          1842,
                          1847
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 58
                          },
                          "start": {
                            "column": 12,
                            "line": 58
                          }
                        }
                      }
                    ],
                    "range": [
                      1828,
                      1868
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 59
                      },
                      "start": {
                        "column": 35,
                        "line": 57
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
                          1812,
                          1813
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 57
                          },
                          "start": {
                            "column": 19,
                            "line": 57
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        1805,
                        1813
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 57
                        },
                        "start": {
                          "column": 12,
                          "line": 57
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"string\"",
                      "value": "string",
                      "range": [
                        1818,
                        1826
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 57
                        },
                        "start": {
                          "column": 25,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      1805,
                      1826
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 57
                      },
                      "start": {
                        "column": 12,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    1801,
                    2000
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 57
                    }
                  }
                }
              ],
              "range": [
                1708,
                2006
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 14,
                  "line": 54
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                1705,
                1707
              ],
              "decorators": [],
              "name": "m2",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 54
                },
                "start": {
                  "column": 11,
                  "line": 54
                }
              }
            },
            "kind": "module",
            "range": [
              1698,
              2006
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "range": [
          1654,
          2008
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 65
          },
          "start": {
            "column": 9,
            "line": 52
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1652,
          1653
        ],
        "decorators": [],
        "name": "m",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 52
          },
          "start": {
            "column": 7,
            "line": 52
          }
        }
      },
      "kind": "module",
      "range": [
        1645,
        2008
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                        "column": 36,
                        "line": 67
                      },
                      "start": {
                        "column": 9,
                        "line": 67
                      }
                    },
                    "range": [
                      2030,
                      2057
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2032,
                            2038
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 67
                            },
                            "start": {
                              "column": 11,
                              "line": 67
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2041,
                            2047
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 67
                            },
                            "start": {
                              "column": 20,
                              "line": 67
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            2050,
                            2057
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 67
                            },
                            "start": {
                              "column": 29,
                              "line": 67
                            }
                          }
                        }
                      ],
                      "range": [
                        2032,
                        2057
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 67
                        },
                        "start": {
                          "column": 11,
                          "line": 67
                        }
                      }
                    }
                  },
                  "range": [
                    2029,
                    2057
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 67
                    },
                    "start": {
                      "column": 8,
                      "line": 67
                    }
                  }
                },
                "init": null,
                "range": [
                  2029,
                  2057
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 67
                  },
                  "start": {
                    "column": 8,
                    "line": 67
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              2025,
              2058
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          2090,
                          2091
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 69
                          },
                          "start": {
                            "column": 12,
                            "line": 69
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2094,
                          2095
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 69
                          },
                          "start": {
                            "column": 16,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        2090,
                        2095
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 69
                        },
                        "start": {
                          "column": 12,
                          "line": 69
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2086,
                    2096
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 69
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 70
                            },
                            "start": {
                              "column": 13,
                              "line": 70
                            }
                          },
                          "range": [
                            2151,
                            2159
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              2153,
                              2159
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 70
                              },
                              "start": {
                                "column": 15,
                                "line": 70
                              }
                            }
                          }
                        },
                        "range": [
                          2150,
                          2159
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 70
                          },
                          "start": {
                            "column": 12,
                            "line": 70
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        2150,
                        2159
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 70
                        },
                        "start": {
                          "column": 12,
                          "line": 70
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2146,
                    2160
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": {
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
                            "name": "y",
                            "optional": false,
                            "range": [
                              2256,
                              2257
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 74
                              },
                              "start": {
                                "column": 12,
                                "line": 74
                              }
                            }
                          },
                          "right": {
                            "type": "ConditionalExpression",
                            "alternate": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    2335,
                                    2336
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 76
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 76
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "range": [
                                    2337,
                                    2345
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 76
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 76
                                    }
                                  }
                                },
                                "range": [
                                  2335,
                                  2345
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 76
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 76
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                2335,
                                2347
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 76
                                },
                                "start": {
                                  "column": 14,
                                  "line": 76
                                }
                              }
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    2297,
                                    2298
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 75
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 75
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "range": [
                                    2299,
                                    2307
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 75
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 75
                                    }
                                  }
                                },
                                "range": [
                                  2297,
                                  2307
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 75
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                2297,
                                2309
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 75
                                },
                                "start": {
                                  "column": 14,
                                  "line": 75
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
                                    2267,
                                    2268
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 74
                                    }
                                  }
                                },
                                "operator": "typeof",
                                "prefix": true,
                                "range": [
                                  2260,
                                  2268
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 74
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "\"boolean\"",
                                "value": "boolean",
                                "range": [
                                  2273,
                                  2282
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 74
                                  }
                                }
                              },
                              "range": [
                                2260,
                                2282
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 74
                                },
                                "start": {
                                  "column": 16,
                                  "line": 74
                                }
                              }
                            },
                            "range": [
                              2260,
                              2347
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 76
                              },
                              "start": {
                                "column": 16,
                                "line": 74
                              }
                            }
                          },
                          "range": [
                            2256,
                            2347
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 76
                            },
                            "start": {
                              "column": 12,
                              "line": 74
                            }
                          }
                        },
                        "range": [
                          2256,
                          2348
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 76
                          },
                          "start": {
                            "column": 12,
                            "line": 74
                          }
                        }
                      }
                    ],
                    "range": [
                      2242,
                      2368
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 77
                      },
                      "start": {
                        "column": 15,
                        "line": 73
                      }
                    }
                  },
                  "consequent": {
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
                            "name": "y",
                            "optional": false,
                            "range": [
                              2210,
                              2211
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 72
                              },
                              "start": {
                                "column": 12,
                                "line": 72
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              2214,
                              2215
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 72
                              },
                              "start": {
                                "column": 16,
                                "line": 72
                              }
                            }
                          },
                          "range": [
                            2210,
                            2215
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 72
                            },
                            "start": {
                              "column": 12,
                              "line": 72
                            }
                          }
                        },
                        "range": [
                          2210,
                          2215
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 72
                          },
                          "start": {
                            "column": 12,
                            "line": 72
                          }
                        }
                      }
                    ],
                    "range": [
                      2196,
                      2236
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 73
                      },
                      "start": {
                        "column": 35,
                        "line": 71
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
                          2180,
                          2181
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 71
                          },
                          "start": {
                            "column": 19,
                            "line": 71
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        2173,
                        2181
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 71
                        },
                        "start": {
                          "column": 12,
                          "line": 71
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"string\"",
                      "value": "string",
                      "range": [
                        2186,
                        2194
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 71
                        },
                        "start": {
                          "column": 25,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      2173,
                      2194
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 71
                      },
                      "start": {
                        "column": 12,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    2169,
                    2368
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 71
                    }
                  }
                }
              ],
              "range": [
                2076,
                2374
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 78
                },
                "start": {
                  "column": 17,
                  "line": 68
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "TSQualifiedName",
              "range": [
                2070,
                2075
              ],
              "left": {
                "type": "Identifier",
                "range": [
                  2070,
                  2072
                ],
                "decorators": [],
                "name": "m2",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 68
                  },
                  "start": {
                    "column": 11,
                    "line": 68
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "range": [
                  2073,
                  2075
                ],
                "decorators": [],
                "name": "m3",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 68
                  },
                  "start": {
                    "column": 14,
                    "line": 68
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 16,
                  "line": 68
                },
                "start": {
                  "column": 11,
                  "line": 68
                }
              }
            },
            "kind": "module",
            "range": [
              2063,
              2374
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          }
        ],
        "range": [
          2019,
          2376
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 79
          },
          "start": {
            "column": 10,
            "line": 66
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          2016,
          2018
        ],
        "decorators": [],
        "name": "m1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 66
          },
          "start": {
            "column": 7,
            "line": 66
          }
        }
      },
      "kind": "module",
      "range": [
        2009,
        2376
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 79
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
