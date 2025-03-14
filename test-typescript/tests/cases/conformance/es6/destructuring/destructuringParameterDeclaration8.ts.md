__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    108,
    388
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                234,
                240
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              234,
              240
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                245,
                246
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
            "range": [
              245,
              246
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
          }
        ],
        "range": [
          228,
          248
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 0,
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
        "name": "test",
        "optional": false,
        "range": [
          117,
          121
        ],
        "loc": {
          "end": {
            "column": 13,
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
                "name": "method",
                "optional": false,
                "range": [
                  128,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
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
                  128,
                  140
                ],
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "range": [
                    128,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "'z'",
                  "value": "z",
                  "range": [
                    137,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "range": [
                128,
                140
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  146,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
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
                      "name": "p",
                      "optional": false,
                      "range": [
                        156,
                        157
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 5
                        },
                        "start": {
                          "column": 14,
                          "line": 5
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
                        156,
                        163
                      ],
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          156,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 5
                          },
                          "start": {
                            "column": 14,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "raw": "'c'",
                        "value": "c",
                        "range": [
                          160,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 5
                          },
                          "start": {
                            "column": 18,
                            "line": 5
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 5
                        },
                        "start": {
                          "column": 14,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      156,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 14,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  154,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                }
              },
              "range": [
                146,
                165
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 1,
                "line": 6
              }
            },
            "range": [
              167,
              226
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
                    "name": "method",
                    "optional": false,
                    "range": [
                      175,
                      181
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 7
                      },
                      "start": {
                        "column": 4,
                        "line": 7
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 7
                      },
                      "start": {
                        "column": 11,
                        "line": 7
                      }
                    },
                    "range": [
                      182,
                      193
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'x'",
                            "value": "x",
                            "range": [
                              184,
                              187
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 7
                              },
                              "start": {
                                "column": 13,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            184,
                            187
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 7
                            },
                            "start": {
                              "column": 13,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'y'",
                            "value": "y",
                            "range": [
                              190,
                              193
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 7
                              },
                              "start": {
                                "column": 19,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            190,
                            193
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 7
                            },
                            "start": {
                              "column": 19,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        184,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 7
                        },
                        "start": {
                          "column": 13,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    175,
                    194
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
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "range": [
                      199,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 8
                      },
                      "start": {
                        "column": 4,
                        "line": 8
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 11,
                        "line": 8
                      }
                    },
                    "range": [
                      206,
                      224
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
                            "name": "p",
                            "optional": false,
                            "range": [
                              210,
                              211
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
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 8
                              },
                              "start": {
                                "column": 16,
                                "line": 8
                              }
                            },
                            "range": [
                              211,
                              222
                            ],
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "'a'",
                                    "value": "a",
                                    "range": [
                                      213,
                                      216
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    213,
                                    216
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 8
                                    }
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "'b'",
                                    "value": "b",
                                    "range": [
                                      219,
                                      222
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
                                  "range": [
                                    219,
                                    222
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
                                }
                              ],
                              "range": [
                                213,
                                222
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 8
                                },
                                "start": {
                                  "column": 18,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "range": [
                            210,
                            222
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
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
                        208,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 8
                        },
                        "start": {
                          "column": 13,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    199,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                169,
                226
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 9
                },
                "start": {
                  "column": 3,
                  "line": 6
                }
              }
            }
          },
          "range": [
            122,
            226
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "range": [
        108,
        248
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 3
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
            "properties": [],
            "range": [
              255,
              257
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 15
              },
              "start": {
                "column": 5,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            250,
            254
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          250,
          258
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        250,
        259
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
                  "name": "method",
                  "optional": false,
                  "range": [
                    267,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'x'",
                  "value": "x",
                  "range": [
                    275,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 16
                    },
                    "start": {
                      "column": 15,
                      "line": 16
                    }
                  }
                },
                "range": [
                  267,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 16
                  },
                  "start": {
                    "column": 7,
                    "line": 16
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
                    280,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                        "name": "p",
                        "optional": false,
                        "range": [
                          290,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 16
                          },
                          "start": {
                            "column": 30,
                            "line": 16
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          293,
                          296
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 16
                          },
                          "start": {
                            "column": 33,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        290,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 16
                        },
                        "start": {
                          "column": 30,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    288,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 16
                    },
                    "start": {
                      "column": 28,
                      "line": 16
                    }
                  }
                },
                "range": [
                  280,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 38,
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
              265,
              300
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 16
              },
              "start": {
                "column": 5,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            260,
            264
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          260,
          301
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        260,
        301
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
                  "name": "method",
                  "optional": false,
                  "range": [
                    309,
                    315
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 17
                    },
                    "start": {
                      "column": 7,
                      "line": 17
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'z'",
                  "value": "z",
                  "range": [
                    317,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 17
                    },
                    "start": {
                      "column": 15,
                      "line": 17
                    }
                  }
                },
                "range": [
                  309,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 17
                  },
                  "start": {
                    "column": 7,
                    "line": 17
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
                    322,
                    328
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 17
                    },
                    "start": {
                      "column": 20,
                      "line": 17
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
                        "name": "p",
                        "optional": false,
                        "range": [
                          332,
                          333
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 17
                          },
                          "start": {
                            "column": 30,
                            "line": 17
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "'b'",
                        "value": "b",
                        "range": [
                          335,
                          338
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 17
                          },
                          "start": {
                            "column": 33,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        332,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 17
                        },
                        "start": {
                          "column": 30,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "range": [
                    330,
                    340
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 17
                    },
                    "start": {
                      "column": 28,
                      "line": 17
                    }
                  }
                },
                "range": [
                  322,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 17
                  },
                  "start": {
                    "column": 20,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              307,
              342
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 17
              },
              "start": {
                "column": 5,
                "line": 17
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            302,
            306
          ],
          "loc": {
            "end": {
              "column": 4,
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
          302,
          343
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        302,
        343
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
                  "name": "method",
                  "optional": false,
                  "range": [
                    351,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 18
                    },
                    "start": {
                      "column": 7,
                      "line": 18
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'one'",
                  "value": "one",
                  "range": [
                    359,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 18
                    },
                    "start": {
                      "column": 15,
                      "line": 18
                    }
                  }
                },
                "range": [
                  351,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 18
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
                    366,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 18
                    },
                    "start": {
                      "column": 22,
                      "line": 18
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
                        "name": "p",
                        "optional": false,
                        "range": [
                          376,
                          377
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 18
                          },
                          "start": {
                            "column": 32,
                            "line": 18
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          379,
                          382
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 18
                          },
                          "start": {
                            "column": 35,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        376,
                        382
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 18
                        },
                        "start": {
                          "column": 32,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    374,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 18
                    },
                    "start": {
                      "column": 30,
                      "line": 18
                    }
                  }
                },
                "range": [
                  366,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 18
                  },
                  "start": {
                    "column": 22,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              349,
              386
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 18
              },
              "start": {
                "column": 5,
                "line": 18
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            344,
            348
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          344,
          387
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        344,
        387
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
      "line": 3
    }
  },
  "hashbang": null
}
```
