__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    877
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        208
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
              "name": "narrowToLiterals",
              "optional": false,
              "range": [
                13,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "SwitchStatement",
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "range": [
                                    139,
                                    142
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  132,
                                  143
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 5
                                  }
                                }
                              }
                            ],
                            "range": [
                              88,
                              151
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 6
                              },
                              "start": {
                                "column": 18,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "raw": "'abc'",
                          "value": "abc",
                          "range": [
                            81,
                            86
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 3
                            },
                            "start": {
                              "column": 11,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          76,
                          151
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 6
                          },
                          "start": {
                            "column": 6,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "'defaultValue'",
                              "value": "defaultValue",
                              "range": [
                                182,
                                196
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 8
                                },
                                "start": {
                                  "column": 15,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              175,
                              197
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 8
                              },
                              "start": {
                                "column": 8,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "test": null,
                        "range": [
                          158,
                          197
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 8
                          },
                          "start": {
                            "column": 6,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "discriminant": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "range": [
                        63,
                        66
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
                    "range": [
                      55,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 9
                      },
                      "start": {
                        "column": 4,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  49,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 10
                  },
                  "start": {
                    "column": 49,
                    "line": 1
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 1
                      },
                      "start": {
                        "column": 36,
                        "line": 1
                      }
                    },
                    "range": [
                      36,
                      44
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        38,
                        44
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 1
                        },
                        "start": {
                          "column": 38,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    33,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 1
                    },
                    "start": {
                      "column": 33,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                32,
                207
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 10
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              207
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          208
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 4,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        214,
        524
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
              "name": "narrowToString",
              "optional": false,
              "range": [
                227,
                241
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "SwitchStatement",
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "range": [
                                    380,
                                    383
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
                                  373,
                                  384
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 16
                                  }
                                }
                              }
                            ],
                            "range": [
                              322,
                              392
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 17
                              },
                              "start": {
                                "column": 18,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "raw": "'abc'",
                          "value": "abc",
                          "range": [
                            315,
                            320
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 14
                            },
                            "start": {
                              "column": 11,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          310,
                          392
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 17
                          },
                          "start": {
                            "column": 6,
                            "line": 14
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "range": [
                                    455,
                                    458
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  448,
                                  459
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 20
                                  }
                                }
                              }
                            ],
                            "range": [
                              418,
                              467
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 21
                              },
                              "start": {
                                "column": 25,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someOtherStr",
                          "optional": false,
                          "range": [
                            404,
                            416
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 18
                            },
                            "start": {
                              "column": 11,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          399,
                          467
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 21
                          },
                          "start": {
                            "column": 6,
                            "line": 18
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "'defaultValue'",
                              "value": "defaultValue",
                              "range": [
                                498,
                                512
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 23
                                },
                                "start": {
                                  "column": 15,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              491,
                              513
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 23
                              },
                              "start": {
                                "column": 8,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "test": null,
                        "range": [
                          474,
                          513
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 23
                          },
                          "start": {
                            "column": 6,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "discriminant": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "range": [
                        297,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 12,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      289,
                      519
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 24
                      },
                      "start": {
                        "column": 4,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  283,
                  523
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 25
                  },
                  "start": {
                    "column": 71,
                    "line": 12
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 12
                      },
                      "start": {
                        "column": 36,
                        "line": 12
                      }
                    },
                    "range": [
                      248,
                      256
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        250,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 12
                        },
                        "start": {
                          "column": 38,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    245,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 12
                    },
                    "start": {
                      "column": 33,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someOtherStr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 12
                      },
                      "start": {
                        "column": 58,
                        "line": 12
                      }
                    },
                    "range": [
                      270,
                      278
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        272,
                        278
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 12
                        },
                        "start": {
                          "column": 60,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    258,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 12
                    },
                    "start": {
                      "column": 46,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                244,
                523
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 25
                },
                "start": {
                  "column": 32,
                  "line": 12
                }
              }
            },
            "range": [
              227,
              523
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 25
              },
              "start": {
                "column": 15,
                "line": 12
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          221,
          524
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 4,
          "line": 25
        },
        "start": {
          "column": 2,
          "line": 12
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        530,
        877
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
              "name": "narrowToStringOrNumber",
              "optional": false,
              "range": [
                543,
                565
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 27
                },
                "start": {
                  "column": 15,
                  "line": 27
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "SwitchStatement",
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "range": [
                                    711,
                                    714
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 31
                                    }
                                  }
                                },
                                "range": [
                                  704,
                                  715
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 31
                                  }
                                }
                              }
                            ],
                            "range": [
                              653,
                              723
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 32
                              },
                              "start": {
                                "column": 18,
                                "line": 29
                              }
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "raw": "'abc'",
                          "value": "abc",
                          "range": [
                            646,
                            651
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 29
                            },
                            "start": {
                              "column": 11,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          641,
                          723
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 32
                          },
                          "start": {
                            "column": 6,
                            "line": 29
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "range": [
                                    808,
                                    811
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 35
                                    }
                                  }
                                },
                                "range": [
                                  801,
                                  812
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 35
                                  }
                                }
                              }
                            ],
                            "range": [
                              747,
                              820
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 36
                              },
                              "start": {
                                "column": 23,
                                "line": 33
                              }
                            }
                          }
                        ],
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someNumber",
                          "optional": false,
                          "range": [
                            735,
                            745
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 33
                            },
                            "start": {
                              "column": 11,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          730,
                          820
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 36
                          },
                          "start": {
                            "column": 6,
                            "line": 33
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "'defaultValue'",
                              "value": "defaultValue",
                              "range": [
                                851,
                                865
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 38
                                },
                                "start": {
                                  "column": 15,
                                  "line": 38
                                }
                              }
                            },
                            "range": [
                              844,
                              866
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 38
                              },
                              "start": {
                                "column": 8,
                                "line": 38
                              }
                            }
                          }
                        ],
                        "test": null,
                        "range": [
                          827,
                          866
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 38
                          },
                          "start": {
                            "column": 6,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "discriminant": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "range": [
                        628,
                        631
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 28
                        },
                        "start": {
                          "column": 12,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      620,
                      872
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 39
                      },
                      "start": {
                        "column": 4,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  614,
                  876
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 40
                  },
                  "start": {
                    "column": 86,
                    "line": 27
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 27
                      },
                      "start": {
                        "column": 44,
                        "line": 27
                      }
                    },
                    "range": [
                      572,
                      589
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            574,
                            580
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 27
                            },
                            "start": {
                              "column": 46,
                              "line": 27
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            583,
                            589
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 27
                            },
                            "start": {
                              "column": 55,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "range": [
                        574,
                        589
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 27
                        },
                        "start": {
                          "column": 46,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    569,
                    589
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 27
                    },
                    "start": {
                      "column": 41,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someNumber",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 27
                      },
                      "start": {
                        "column": 73,
                        "line": 27
                      }
                    },
                    "range": [
                      601,
                      609
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        603,
                        609
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 27
                        },
                        "start": {
                          "column": 75,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    591,
                    609
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 27
                    },
                    "start": {
                      "column": 63,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                568,
                876
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 40
                },
                "start": {
                  "column": 40,
                  "line": 27
                }
              }
            },
            "range": [
              543,
              876
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 40
              },
              "start": {
                "column": 15,
                "line": 27
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          537,
          877
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 40
          },
          "start": {
            "column": 9,
            "line": 27
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 4,
          "line": 40
        },
        "start": {
          "column": 2,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 4,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
