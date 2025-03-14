__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    762
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          252
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                18,
                23
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                23,
                48
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        43,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 31,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      36,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  34,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                },
                "range": [
                  25,
                  33
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    27,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              48
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                55,
                60
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 6,
                  "line": 3
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                60,
                84
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  81,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    },
                    "range": [
                      62,
                      79
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            64,
                            70
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 3
                            },
                            "start": {
                              "column": 15,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            73,
                            79
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 3
                            },
                            "start": {
                              "column": 24,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        64,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    61,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              51,
              84
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "range": [
                92,
                97
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 6,
                  "line": 5
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                97,
                122
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        117,
                        119
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 5
                        },
                        "start": {
                          "column": 31,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      110,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  108,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                },
                "range": [
                  99,
                  107
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    101,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 36,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              88,
              122
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "range": [
                129,
                134
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                134,
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
                    "column": 35,
                    "line": 6
                  },
                  "start": {
                    "column": 32,
                    "line": 6
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    },
                    "range": [
                      136,
                      153
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            138,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 6
                            },
                            "start": {
                              "column": 15,
                              "line": 6
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            147,
                            153
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 6
                            },
                            "start": {
                              "column": 24,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        138,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
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
                    135,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              125,
              158
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "range": [
                162,
                167
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
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
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              },
              "range": [
                167,
                175
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  169,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              }
            },
            "value": null,
            "range": [
              162,
              176
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "range": [
                184,
                189
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                189,
                214
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        209,
                        211
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 10
                        },
                        "start": {
                          "column": 31,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      202,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 10
                      },
                      "start": {
                        "column": 24,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  200,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 10
                  }
                },
                "range": [
                  191,
                  199
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    193,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 15,
                      "line": 10
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              180,
              214
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "range": [
                221,
                226
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 11
                },
                "start": {
                  "column": 6,
                  "line": 11
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                226,
                250
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  247,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 11
                  },
                  "start": {
                    "column": 32,
                    "line": 11
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 11
                      },
                      "start": {
                        "column": 13,
                        "line": 11
                      }
                    },
                    "range": [
                      228,
                      245
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            230,
                            236
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 11
                            },
                            "start": {
                              "column": 15,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            239,
                            245
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 11
                            },
                            "start": {
                              "column": 24,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        230,
                        245
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    227,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              217,
              250
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "One",
        "optional": false,
        "range": [
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        252
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          264,
          555
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                272,
                277
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 15
                },
                "start": {
                  "column": 6,
                  "line": 15
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                277,
                302
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        297,
                        299
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 15
                        },
                        "start": {
                          "column": 31,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      290,
                      300
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 15
                      },
                      "start": {
                        "column": 24,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  288,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 15
                  },
                  "start": {
                    "column": 22,
                    "line": 15
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
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
                  279,
                  287
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    281,
                    287
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
              "loc": {
                "end": {
                  "column": 36,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              268,
              302
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                309,
                314
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 16
                },
                "start": {
                  "column": 6,
                  "line": 16
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                314,
                338
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  335,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 16
                  },
                  "start": {
                    "column": 32,
                    "line": 16
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 16
                      }
                    },
                    "range": [
                      316,
                      333
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            318,
                            324
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 16
                            },
                            "start": {
                              "column": 15,
                              "line": 16
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            327,
                            333
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
                        }
                      ],
                      "range": [
                        318,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 16
                        },
                        "start": {
                          "column": 15,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    315,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              305,
              338
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "range": [
                346,
                351
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 18
                },
                "start": {
                  "column": 6,
                  "line": 18
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                351,
                376
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        371,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 18
                        },
                        "start": {
                          "column": 31,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      364,
                      374
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 18
                      },
                      "start": {
                        "column": 24,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  362,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 18
                  },
                  "start": {
                    "column": 22,
                    "line": 18
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 18
                  },
                  "start": {
                    "column": 13,
                    "line": 18
                  }
                },
                "range": [
                  353,
                  361
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    355,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 18
                    },
                    "start": {
                      "column": 15,
                      "line": 18
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 36,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "range": [
              342,
              376
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 18
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "range": [
                383,
                388
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                388,
                403
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  400,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 19
                  },
                  "start": {
                    "column": 23,
                    "line": 19
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
                    389,
                    398
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
                }
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "range": [
              379,
              403
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "range": [
                411,
                416
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 21
                },
                "start": {
                  "column": 6,
                  "line": 21
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                416,
                441
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        436,
                        438
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 21
                        },
                        "start": {
                          "column": 31,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      429,
                      439
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 21
                      },
                      "start": {
                        "column": 24,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  427,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 21
                  },
                  "start": {
                    "column": 22,
                    "line": 21
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 21
                  },
                  "start": {
                    "column": 13,
                    "line": 21
                  }
                },
                "range": [
                  418,
                  426
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    420,
                    426
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 21
                    },
                    "start": {
                      "column": 15,
                      "line": 21
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 36,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "range": [
              407,
              441
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "range": [
                448,
                453
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 22
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                453,
                478
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  475,
                  478
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 22
                  },
                  "start": {
                    "column": 33,
                    "line": 22
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 22
                      },
                      "start": {
                        "column": 13,
                        "line": 22
                      }
                    },
                    "range": [
                      455,
                      473
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            457,
                            463
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 22
                            },
                            "start": {
                              "column": 15,
                              "line": 22
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            466,
                            473
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 22
                            },
                            "start": {
                              "column": 24,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        457,
                        473
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 22
                        },
                        "start": {
                          "column": 15,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    454,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "range": [
              444,
              478
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "range": [
                486,
                491
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 24
                },
                "start": {
                  "column": 6,
                  "line": 24
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                491,
                516
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        511,
                        513
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 24
                        },
                        "start": {
                          "column": 31,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      504,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  502,
                  516
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 24
                  },
                  "start": {
                    "column": 22,
                    "line": 24
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 24
                  },
                  "start": {
                    "column": 13,
                    "line": 24
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
                      "column": 21,
                      "line": 24
                    },
                    "start": {
                      "column": 15,
                      "line": 24
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 36,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "range": [
              482,
              516
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "range": [
                523,
                528
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 25
                },
                "start": {
                  "column": 6,
                  "line": 25
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                528,
                553
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  550,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 25
                  },
                  "start": {
                    "column": 33,
                    "line": 25
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 25
                      },
                      "start": {
                        "column": 13,
                        "line": 25
                      }
                    },
                    "range": [
                      530,
                      548
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            532,
                            538
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 25
                            },
                            "start": {
                              "column": 15,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            541,
                            548
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 25
                            },
                            "start": {
                              "column": 24,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        532,
                        548
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 25
                        },
                        "start": {
                          "column": 15,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    529,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 25
                    },
                    "start": {
                      "column": 12,
                      "line": 25
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 25
                }
              }
            },
            "range": [
              519,
              553
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Two",
        "optional": false,
        "range": [
          260,
          263
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        254,
        555
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
            "name": "u1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 28
                }
              },
              "range": [
                573,
                582
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "range": [
                        575,
                        578
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 28
                        },
                        "start": {
                          "column": 18,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      575,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 28
                      },
                      "start": {
                        "column": 18,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "range": [
                        579,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 28
                        },
                        "start": {
                          "column": 22,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      579,
                      582
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 28
                      },
                      "start": {
                        "column": 22,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  575,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 28
                  },
                  "start": {
                    "column": 18,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              571,
              582
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 28
              },
              "start": {
                "column": 14,
                "line": 28
              }
            }
          },
          "init": null,
          "range": [
            571,
            582
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 28
            },
            "start": {
              "column": 14,
              "line": 28
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        557,
        583
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              585,
              587
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 30
              },
              "start": {
                "column": 0,
                "line": 30
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "range": [
              588,
              593
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 30
              },
              "start": {
                "column": 3,
                "line": 30
              }
            }
          },
          "range": [
            585,
            593
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            596,
            598
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 30
            },
            "start": {
              "column": 11,
              "line": 30
            }
          }
        },
        "range": [
          585,
          598
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        585,
        599
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              600,
              602
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 31
              },
              "start": {
                "column": 0,
                "line": 31
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "range": [
              603,
              608
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 31
              },
              "start": {
                "column": 3,
                "line": 31
              }
            }
          },
          "range": [
            600,
            608
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            611,
            618
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 31
            },
            "start": {
              "column": 11,
              "line": 31
            }
          }
        },
        "range": [
          600,
          618
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        600,
        619
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              621,
              623
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 33
              },
              "start": {
                "column": 0,
                "line": 33
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "range": [
              624,
              629
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 33
              },
              "start": {
                "column": 3,
                "line": 33
              }
            }
          },
          "range": [
            621,
            629
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            632,
            634
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 33
            },
            "start": {
              "column": 11,
              "line": 33
            }
          }
        },
        "range": [
          621,
          634
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        621,
        635
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              636,
              638
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 34
              },
              "start": {
                "column": 0,
                "line": 34
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "range": [
              639,
              644
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 34
              },
              "start": {
                "column": 3,
                "line": 34
              }
            }
          },
          "range": [
            636,
            644
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            647,
            654
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 34
            },
            "start": {
              "column": 11,
              "line": 34
            }
          }
        },
        "range": [
          636,
          654
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        636,
        655
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              657,
              659
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 36
              },
              "start": {
                "column": 0,
                "line": 36
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop3",
            "optional": false,
            "range": [
              660,
              665
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 36
              },
              "start": {
                "column": 3,
                "line": 36
              }
            }
          },
          "range": [
            657,
            665
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            668,
            670
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 36
            },
            "start": {
              "column": 11,
              "line": 36
            }
          }
        },
        "range": [
          657,
          670
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        657,
        671
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              672,
              674
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 37
              },
              "start": {
                "column": 0,
                "line": 37
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop3",
            "optional": false,
            "range": [
              675,
              680
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 37
              },
              "start": {
                "column": 3,
                "line": 37
              }
            }
          },
          "range": [
            672,
            680
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            683,
            690
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 37
            },
            "start": {
              "column": 11,
              "line": 37
            }
          }
        },
        "range": [
          672,
          690
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        672,
        691
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              692,
              694
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 38
              },
              "start": {
                "column": 0,
                "line": 38
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop3",
            "optional": false,
            "range": [
              695,
              700
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 38
              },
              "start": {
                "column": 3,
                "line": 38
              }
            }
          },
          "range": [
            692,
            700
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            703,
            707
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 38
            },
            "start": {
              "column": 11,
              "line": 38
            }
          }
        },
        "range": [
          692,
          707
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        692,
        708
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              710,
              712
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 40
              },
              "start": {
                "column": 0,
                "line": 40
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop4",
            "optional": false,
            "range": [
              713,
              718
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 40
              },
              "start": {
                "column": 3,
                "line": 40
              }
            }
          },
          "range": [
            710,
            718
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            721,
            723
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 40
            },
            "start": {
              "column": 11,
              "line": 40
            }
          }
        },
        "range": [
          710,
          723
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        710,
        724
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              725,
              727
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 41
              },
              "start": {
                "column": 0,
                "line": 41
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop4",
            "optional": false,
            "range": [
              728,
              733
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 41
              },
              "start": {
                "column": 3,
                "line": 41
              }
            }
          },
          "range": [
            725,
            733
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            736,
            743
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 41
            },
            "start": {
              "column": 11,
              "line": 41
            }
          }
        },
        "range": [
          725,
          743
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        725,
        744
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              745,
              747
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 42
              },
              "start": {
                "column": 0,
                "line": 42
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop4",
            "optional": false,
            "range": [
              748,
              753
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 42
              },
              "start": {
                "column": 3,
                "line": 42
              }
            }
          },
          "range": [
            745,
            753
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            756,
            760
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 42
            },
            "start": {
              "column": 11,
              "line": 42
            }
          }
        },
        "range": [
          745,
          760
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        745,
        761
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
