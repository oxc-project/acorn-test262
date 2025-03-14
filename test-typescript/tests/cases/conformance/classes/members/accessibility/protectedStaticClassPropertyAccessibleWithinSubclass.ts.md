__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2232
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          415
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                34,
                35
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              },
              "range": [
                35,
                43
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  37,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              17,
              44
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 4,
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
              "name": "staticMethod",
              "optional": false,
              "range": [
                56,
                68
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                68,
                413
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          81,
                          85
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          86,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 4
                          },
                          "start": {
                            "column": 13,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        81,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      81,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "range": [
                          150,
                          158
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          159,
                          160
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 5
                          },
                          "start": {
                            "column": 17,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        150,
                        160
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      150,
                      161
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
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "range": [
                          219,
                          227
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          228,
                          229
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
                      "range": [
                        219,
                        229
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      219,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "range": [
                          288,
                          296
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          297,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 7
                          },
                          "start": {
                            "column": 17,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        288,
                        298
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      288,
                      299
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                  71,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 26,
                    "line": 3
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
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            },
            "range": [
              49,
              413
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
        415
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
          445,
          881
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticMethod1",
              "optional": false,
              "range": [
                458,
                471
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                471,
                879
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          484,
                          488
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          489,
                          490
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 13
                          },
                          "start": {
                            "column": 13,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        484,
                        490
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      484,
                      491
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "range": [
                          574,
                          582
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 14
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          583,
                          584
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 14
                          },
                          "start": {
                            "column": 17,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        574,
                        584
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      574,
                      585
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "range": [
                          664,
                          672
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          673,
                          674
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 15
                          },
                          "start": {
                            "column": 17,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        664,
                        674
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      664,
                      675
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "range": [
                          754,
                          762
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          763,
                          764
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 16
                          },
                          "start": {
                            "column": 17,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        754,
                        764
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      754,
                      765
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
                  474,
                  879
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 27,
                    "line": 12
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
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            },
            "range": [
              451,
              879
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
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 28,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "range": [
          423,
          431
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          440,
          444
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 11
          },
          "start": {
            "column": 23,
            "line": 11
          }
        }
      },
      "range": [
        417,
        881
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
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          911,
          1347
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticMethod2",
              "optional": false,
              "range": [
                924,
                937
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                937,
                1345
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          950,
                          954
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          955,
                          956
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 22
                          },
                          "start": {
                            "column": 13,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        950,
                        956
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      950,
                      957
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "range": [
                          1040,
                          1048
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1049,
                          1050
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 23
                          },
                          "start": {
                            "column": 17,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        1040,
                        1050
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      1040,
                      1051
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "range": [
                          1130,
                          1138
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1139,
                          1140
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
                        1130,
                        1140
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
                    },
                    "range": [
                      1130,
                      1141
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "range": [
                          1220,
                          1228
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 25
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1229,
                          1230
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 25
                          },
                          "start": {
                            "column": 17,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        1220,
                        1230
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 25
                        },
                        "start": {
                          "column": 8,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      1220,
                      1231
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  940,
                  1345
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 27,
                    "line": 21
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
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 24,
                  "line": 21
                }
              }
            },
            "range": [
              917,
              1345
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 28,
            "line": 20
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "range": [
          889,
          897
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 20
          },
          "start": {
            "column": 6,
            "line": 20
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          906,
          910
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 20
          },
          "start": {
            "column": 23,
            "line": 20
          }
        }
      },
      "range": [
        883,
        1347
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1381,
          1790
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1404,
                1405
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 30
                },
                "start": {
                  "column": 21,
                  "line": 30
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 30
                },
                "start": {
                  "column": 22,
                  "line": 30
                }
              },
              "range": [
                1405,
                1413
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1407,
                  1413
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 30
                  },
                  "start": {
                    "column": 24,
                    "line": 30
                  }
                }
              }
            },
            "value": null,
            "range": [
              1387,
              1414
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
              "name": "staticMethod3",
              "optional": false,
              "range": [
                1426,
                1439
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1439,
                1788
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          1452,
                          1456
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 32
                          },
                          "start": {
                            "column": 8,
                            "line": 32
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1457,
                          1458
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 32
                          },
                          "start": {
                            "column": 13,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        1452,
                        1458
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      1452,
                      1459
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "range": [
                          1542,
                          1550
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 33
                          },
                          "start": {
                            "column": 8,
                            "line": 33
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1551,
                          1552
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 33
                          },
                          "start": {
                            "column": 17,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        1542,
                        1552
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      1542,
                      1553
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "range": [
                          1632,
                          1640
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 34
                          },
                          "start": {
                            "column": 8,
                            "line": 34
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1641,
                          1642
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 34
                          },
                          "start": {
                            "column": 17,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        1632,
                        1642
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      1632,
                      1643
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "range": [
                          1722,
                          1730
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 35
                          },
                          "start": {
                            "column": 8,
                            "line": 35
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1731,
                          1732
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 35
                          },
                          "start": {
                            "column": 17,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        1722,
                        1732
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      1722,
                      1733
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
                  1442,
                  1788
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 36
                  },
                  "start": {
                    "column": 27,
                    "line": 31
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
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 24,
                  "line": 31
                }
              }
            },
            "range": [
              1419,
              1788
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 32,
            "line": 29
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "range": [
          1355,
          1363
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 29
          },
          "start": {
            "column": 6,
            "line": 29
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "range": [
          1372,
          1380
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 29
          },
          "start": {
            "column": 23,
            "line": 29
          }
        }
      },
      "range": [
        1349,
        1790
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "range": [
            1793,
            1797
          ],
          "loc": {
            "end": {
              "column": 4,
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
          "name": "x",
          "optional": false,
          "range": [
            1798,
            1799
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 40
            },
            "start": {
              "column": 5,
              "line": 40
            }
          }
        },
        "range": [
          1793,
          1799
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        1793,
        1800
      ],
      "loc": {
        "end": {
          "column": 7,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived1",
          "optional": false,
          "range": [
            1903,
            1911
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
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            1912,
            1913
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 41
            },
            "start": {
              "column": 9,
              "line": 41
            }
          }
        },
        "range": [
          1903,
          1913
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        1903,
        1914
      ],
      "loc": {
        "end": {
          "column": 11,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived2",
          "optional": false,
          "range": [
            2013,
            2021
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
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            2022,
            2023
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 42
            },
            "start": {
              "column": 9,
              "line": 42
            }
          }
        },
        "range": [
          2013,
          2023
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        2013,
        2024
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived3",
          "optional": false,
          "range": [
            2123,
            2131
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            2132,
            2133
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 43
            },
            "start": {
              "column": 9,
              "line": 43
            }
          }
        },
        "range": [
          2123,
          2133
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        2123,
        2134
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 109,
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
