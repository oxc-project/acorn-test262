__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    25,
    539
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              },
              "range": [
                30,
                36
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    32,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 3
                    },
                    "start": {
                      "column": 7,
                      "line": 3
                    }
                  }
                },
                "range": [
                  32,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 11,
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
              29,
              36
            ],
            "loc": {
              "end": {
                "column": 11,
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
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      41,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 3
                      },
                      "start": {
                        "column": 16,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      44,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 3
                      },
                      "start": {
                        "column": 19,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      47,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
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
                  40,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      52,
                      59
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 3
                      },
                      "start": {
                        "column": 27,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  51,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              39,
              61
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "range": [
            29,
            61
          ],
          "loc": {
            "end": {
              "column": 36,
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
        25,
        62
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
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
                        "name": "_j",
                        "optional": false,
                        "range": [
                          169,
                          171
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              174,
                              175
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 9
                              },
                              "start": {
                                "column": 17,
                                "line": 9
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "range": [
                              176,
                              177
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            174,
                            178
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "range": [
                            179,
                            180
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 9
                            },
                            "start": {
                              "column": 22,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          174,
                          181
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 9
                          },
                          "start": {
                            "column": 17,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        169,
                        181
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    165,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                107,
                188
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "range": [
                      96,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    96,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                92,
                97
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  101,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  103,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                }
              },
              "range": [
                101,
                105
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              }
            },
            "range": [
              87,
              188
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "ForInStatement",
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
                        "name": "k1",
                        "optional": false,
                        "range": [
                          228,
                          230
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 13
                          },
                          "start": {
                            "column": 12,
                            "line": 13
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            233,
                            234
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 13
                            },
                            "start": {
                              "column": 17,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            235,
                            236
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 13
                            },
                            "start": {
                              "column": 19,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          233,
                          237
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 13
                          },
                          "start": {
                            "column": 17,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        228,
                        237
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 13
                        },
                        "start": {
                          "column": 12,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    224,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
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
                        "name": "k2",
                        "optional": false,
                        "range": [
                          299,
                          301
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 16
                          },
                          "start": {
                            "column": 12,
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
                          "name": "k1",
                          "optional": false,
                          "range": [
                            304,
                            306
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 16
                            },
                            "start": {
                              "column": 17,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "range": [
                            307,
                            308
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 16
                            },
                            "start": {
                              "column": 20,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          304,
                          309
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 16
                          },
                          "start": {
                            "column": 17,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        299,
                        309
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 16
                        },
                        "start": {
                          "column": 12,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    295,
                    310
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
                }
              ],
              "range": [
                214,
                316
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            },
            "left": {
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
                      203,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    203,
                    204
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                199,
                204
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  208,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  210,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 12
                  },
                  "start": {
                    "column": 20,
                    "line": 12
                  }
                }
              },
              "range": [
                208,
                212
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 18,
                  "line": 12
                }
              }
            },
            "range": [
              194,
              316
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          81,
          318
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "left": {
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
                73,
                74
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "init": null,
            "range": [
              73,
              74
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 5
              },
              "start": {
                "column": 9,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          69,
          74
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          78,
          79
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
      "range": [
        64,
        318
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ForInStatement",
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
                    392,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": null,
                "range": [
                  392,
                  393
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              388,
              394
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 22
              },
              "start": {
                "column": 4,
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
                  "range": [
                    404,
                    405
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      408,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 24
                      },
                      "start": {
                        "column": 12,
                        "line": 24
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      413,
                      414
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 24
                      },
                      "start": {
                        "column": 17,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    408,
                    414
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 24
                    },
                    "start": {
                      "column": 12,
                      "line": 24
                    }
                  }
                },
                "range": [
                  404,
                  414
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              400,
              415
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          337,
          417
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 17,
            "line": 20
          }
        }
      },
      "left": {
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
                329,
                330
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "init": null,
            "range": [
              329,
              330
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 20
              },
              "start": {
                "column": 9,
                "line": 20
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          325,
          330
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "range": [
          334,
          335
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 20
          },
          "start": {
            "column": 14,
            "line": 20
          }
        }
      },
      "range": [
        320,
        417
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
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
            "name": "idx",
            "optional": false,
            "range": [
              423,
              426
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              429,
              430
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 27
              },
              "start": {
                "column": 10,
                "line": 27
              }
            }
          },
          "range": [
            423,
            430
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        419,
        431
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
              436,
              437
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  441,
                  442
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 28
                  },
                  "start": {
                    "column": 9,
                    "line": 28
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  444,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 28
                  },
                  "start": {
                    "column": 12,
                    "line": 28
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  447,
                  448
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 28
                  },
                  "start": {
                    "column": 15,
                    "line": 28
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  450,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 28
                  },
                  "start": {
                    "column": 18,
                    "line": 28
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "5",
                "value": 5,
                "range": [
                  453,
                  454
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 28
                  },
                  "start": {
                    "column": 21,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              440,
              455
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 28
              },
              "start": {
                "column": 8,
                "line": 28
              }
            }
          },
          "range": [
            436,
            455
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 28
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
        432,
        456
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 28
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
            "name": "n",
            "optional": false,
            "range": [
              502,
              503
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    507,
                    509
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 30
                    },
                    "start": {
                      "column": 9,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                506,
                510
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 30
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                514,
                516
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 30
                },
                "start": {
                  "column": 16,
                  "line": 30
                }
              }
            },
            "range": [
              506,
              516
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
          },
          "range": [
            502,
            516
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        498,
        517
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "EmptyStatement",
        "range": [
          538,
          539
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 32
          },
          "start": {
            "column": 19,
            "line": 32
          }
        }
      },
      "left": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "range": [
            524,
            525
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 32
            },
            "start": {
              "column": 5,
              "line": 32
            }
          }
        },
        "optional": false,
        "property": {
          "type": "UpdateExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "idx",
            "optional": false,
            "range": [
              526,
              529
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 32
              },
              "start": {
                "column": 7,
                "line": 32
              }
            }
          },
          "operator": "++",
          "prefix": false,
          "range": [
            526,
            531
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 32
            },
            "start": {
              "column": 7,
              "line": 32
            }
          }
        },
        "range": [
          524,
          532
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "range": [
          536,
          537
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 32
          },
          "start": {
            "column": 17,
            "line": 32
          }
        }
      },
      "range": [
        519,
        539
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 20,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
