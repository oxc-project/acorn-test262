__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    163
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              },
              "range": [
                8,
                41
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        12,
                        15
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 1
                        },
                        "start": {
                          "column": 12,
                          "line": 1
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
                          "column": 23,
                          "line": 1
                        },
                        "start": {
                          "column": 15,
                          "line": 1
                        }
                      },
                      "range": [
                        15,
                        23
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          17,
                          23
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
                      }
                    },
                    "range": [
                      12,
                      24
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 1
                      },
                      "start": {
                        "column": 12,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        25,
                        28
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 1
                        },
                        "start": {
                          "column": 25,
                          "line": 1
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
                          "column": 39,
                          "line": 1
                        },
                        "start": {
                          "column": 28,
                          "line": 1
                        }
                      },
                      "range": [
                        28,
                        39
                      ],
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          30,
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 1
                          },
                          "start": {
                            "column": 30,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      25,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 1
                      },
                      "start": {
                        "column": 25,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  10,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
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
              6,
              41
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    46,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 1
                    },
                    "start": {
                      "column": 46,
                      "line": 1
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
                    51,
                    52
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 1
                    },
                    "start": {
                      "column": 51,
                      "line": 1
                    }
                  }
                },
                "range": [
                  46,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 1
                  },
                  "start": {
                    "column": 46,
                    "line": 1
                  }
                }
              },
              {
                "type": "SpreadElement",
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
                          64,
                          67
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 1
                          },
                          "start": {
                            "column": 64,
                            "line": 1
                          }
                        }
                      },
                      "kind": "set",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          67,
                          83
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            80,
                            83
                          ],
                          "loc": {
                            "end": {
                              "column": 83,
                              "line": 1
                            },
                            "start": {
                              "column": 80,
                              "line": 1
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_v",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 1
                                },
                                "start": {
                                  "column": 70,
                                  "line": 1
                                }
                              },
                              "range": [
                                70,
                                78
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  72,
                                  78
                                ],
                                "loc": {
                                  "end": {
                                    "column": 78,
                                    "line": 1
                                  },
                                  "start": {
                                    "column": 72,
                                    "line": 1
                                  }
                                }
                              }
                            },
                            "range": [
                              68,
                              78
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 1
                              },
                              "start": {
                                "column": 68,
                                "line": 1
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 1
                          },
                          "start": {
                            "column": 67,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        60,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 1
                        },
                        "start": {
                          "column": 60,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    58,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 1
                    },
                    "start": {
                      "column": 58,
                      "line": 1
                    }
                  }
                },
                "range": [
                  54,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 1
                  },
                  "start": {
                    "column": 54,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              44,
              87
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 1
              },
              "start": {
                "column": 44,
                "line": 1
              }
            }
          },
          "range": [
            6,
            87
          ],
          "loc": {
            "end": {
              "column": 87,
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
        87
      ],
      "loc": {
        "end": {
          "column": 87,
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                96,
                116
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        100,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 2
                        },
                        "start": {
                          "column": 12,
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
                          "column": 26,
                          "line": 2
                        },
                        "start": {
                          "column": 15,
                          "line": 2
                        }
                      },
                      "range": [
                        103,
                        114
                      ],
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          105,
                          114
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 2
                          },
                          "start": {
                            "column": 17,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      100,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 2
                      },
                      "start": {
                        "column": 12,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  98,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              94,
              116
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    121,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 2
                    },
                    "start": {
                      "column": 33,
                      "line": 2
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
                    126,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 2
                    },
                    "start": {
                      "column": 38,
                      "line": 2
                    }
                  }
                },
                "range": [
                  121,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 2
                  },
                  "start": {
                    "column": 33,
                    "line": 2
                  }
                }
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          139,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 2
                          },
                          "start": {
                            "column": 51,
                            "line": 2
                          }
                        }
                      },
                      "kind": "set",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          142,
                          158
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            155,
                            158
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 2
                            },
                            "start": {
                              "column": 67,
                              "line": 2
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_v",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 2
                                },
                                "start": {
                                  "column": 57,
                                  "line": 2
                                }
                              },
                              "range": [
                                145,
                                153
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  147,
                                  153
                                ],
                                "loc": {
                                  "end": {
                                    "column": 65,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 59,
                                    "line": 2
                                  }
                                }
                              }
                            },
                            "range": [
                              143,
                              153
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 2
                              },
                              "start": {
                                "column": 55,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 2
                          },
                          "start": {
                            "column": 54,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        135,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 2
                        },
                        "start": {
                          "column": 47,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    133,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 2
                    },
                    "start": {
                      "column": 45,
                      "line": 2
                    }
                  }
                },
                "range": [
                  129,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              119,
              162
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 2
              },
              "start": {
                "column": 31,
                "line": 2
              }
            }
          },
          "range": [
            94,
            162
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        88,
        162
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
