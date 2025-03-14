__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2733
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                15
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  9,
                  15
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        16
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "name": "arr",
            "optional": false,
            "range": [
              23,
              26
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
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
                  30,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  33,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  36,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 19,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              29,
              38
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            23,
            38
          ],
          "loc": {
            "end": {
              "column": 21,
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
        17,
        39
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            40,
            43
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "range": [
                46,
                49
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 6,
                  "line": 3
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                50,
                64
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "range": [
              46,
              64
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "optional": false,
          "range": [
            46,
            66
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        },
        "range": [
          40,
          66
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        40,
        67
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 3
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            74,
            77
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                99,
                106
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 25,
                  "line": 4
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "range": [
                80,
                83
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                84,
                98
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "range": [
              80,
              98
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "optional": false,
          "range": [
            80,
            107
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        },
        "range": [
          74,
          107
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        74,
        108
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            115,
            118
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                140,
                147
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "range": [
                      151,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 5
                      },
                      "start": {
                        "column": 36,
                        "line": 5
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      158,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 5
                      },
                      "start": {
                        "column": 43,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    151,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 5
                    },
                    "start": {
                      "column": 36,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      170,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 5
                      },
                      "start": {
                        "column": 55,
                        "line": 5
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      180,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 5
                      },
                      "start": {
                        "column": 65,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    170,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 5
                    },
                    "start": {
                      "column": 55,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                149,
                187
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "range": [
                121,
                124
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 5
                },
                "start": {
                  "column": 6,
                  "line": 5
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                125,
                139
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "range": [
              121,
              139
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "optional": false,
          "range": [
            121,
            188
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        },
        "range": [
          115,
          188
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        115,
        189
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "dates",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              },
              "range": [
                208,
                225
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "range": [
                        219,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 7
                        },
                        "start": {
                          "column": 22,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      219,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 7
                      },
                      "start": {
                        "column": 22,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    219,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 7
                    },
                    "start": {
                      "column": 22,
                      "line": 7
                    }
                  }
                },
                "range": [
                  210,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 28,
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
              203,
              225
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "range": [
                    233,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 36,
                      "line": 7
                    }
                  }
                },
                "range": [
                  229,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              },
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "range": [
                    245,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 7
                    },
                    "start": {
                      "column": 48,
                      "line": 7
                    }
                  }
                },
                "range": [
                  241,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 7
                  },
                  "start": {
                    "column": 44,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              228,
              252
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 7
              },
              "start": {
                "column": 31,
                "line": 7
              }
            }
          },
          "range": [
            203,
            252
          ],
          "loc": {
            "end": {
              "column": 55,
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
        197,
        253
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            254,
            257
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "range": [
                260,
                265
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                266,
                280
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "range": [
              260,
              280
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "optional": false,
          "range": [
            260,
            282
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        },
        "range": [
          254,
          282
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        254,
        283
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            290,
            293
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'fr'",
              "value": "fr",
              "range": [
                317,
                321
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 9
                },
                "start": {
                  "column": 27,
                  "line": 9
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "range": [
                296,
                301
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 9
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                302,
                316
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "range": [
              296,
              316
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "optional": false,
          "range": [
            296,
            322
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        },
        "range": [
          290,
          322
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        290,
        323
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            330,
            333
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'fr'",
              "value": "fr",
              "range": [
                357,
                361
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 10
                },
                "start": {
                  "column": 27,
                  "line": 10
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeZone",
                    "optional": false,
                    "range": [
                      365,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 10
                      },
                      "start": {
                        "column": 35,
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
                    "raw": "'UTC'",
                    "value": "UTC",
                    "range": [
                      375,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 10
                      },
                      "start": {
                        "column": 45,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    365,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 10
                    },
                    "start": {
                      "column": 35,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                363,
                382
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 10
                },
                "start": {
                  "column": 33,
                  "line": 10
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "range": [
                336,
                341
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
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                342,
                356
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 10
                }
              }
            },
            "range": [
              336,
              356
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "optional": false,
          "range": [
            336,
            383
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        },
        "range": [
          330,
          383
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        330,
        384
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "mixed",
            "optional": false,
            "range": [
              398,
              403
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
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
                  407,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 12
                  },
                  "start": {
                    "column": 15,
                    "line": 12
                  }
                }
              },
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "range": [
                    414,
                    418
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
                },
                "range": [
                  410,
                  420
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 12
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "59782",
                "value": 59782,
                "range": [
                  422,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 12
                  },
                  "start": {
                    "column": 30,
                    "line": 12
                  }
                }
              },
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "range": [
                    433,
                    437
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 12
                    },
                    "start": {
                      "column": 41,
                      "line": 12
                    }
                  }
                },
                "range": [
                  429,
                  439
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 12
                  },
                  "start": {
                    "column": 37,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              406,
              440
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 12
              },
              "start": {
                "column": 14,
                "line": 12
              }
            }
          },
          "range": [
            398,
            440
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        392,
        441
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            442,
            445
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "range": [
                448,
                453
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                454,
                468
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 13
                },
                "start": {
                  "column": 12,
                  "line": 13
                }
              }
            },
            "range": [
              448,
              468
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "optional": false,
          "range": [
            448,
            470
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        },
        "range": [
          442,
          470
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        442,
        471
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            478,
            481
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'fr'",
              "value": "fr",
              "range": [
                505,
                509
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 14
                },
                "start": {
                  "column": 27,
                  "line": 14
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "range": [
                484,
                489
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 14
                },
                "start": {
                  "column": 6,
                  "line": 14
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                490,
                504
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 14
                },
                "start": {
                  "column": 12,
                  "line": 14
                }
              }
            },
            "range": [
              484,
              504
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "optional": false,
          "range": [
            484,
            510
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        },
        "range": [
          478,
          510
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        478,
        511
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            518,
            521
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'de'",
              "value": "de",
              "range": [
                545,
                549
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 15
                },
                "start": {
                  "column": 27,
                  "line": 15
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "range": [
                      553,
                      558
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 15
                      },
                      "start": {
                        "column": 35,
                        "line": 15
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      560,
                      570
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 15
                      },
                      "start": {
                        "column": 42,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    553,
                    570
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 15
                    },
                    "start": {
                      "column": 35,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      572,
                      580
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 15
                      },
                      "start": {
                        "column": 54,
                        "line": 15
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      582,
                      587
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 15
                      },
                      "start": {
                        "column": 64,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    572,
                    587
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 15
                    },
                    "start": {
                      "column": 54,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                551,
                589
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 15
                },
                "start": {
                  "column": 33,
                  "line": 15
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "range": [
                524,
                529
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
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                530,
                544
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
                }
              }
            },
            "range": [
              524,
              544
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "optional": false,
          "range": [
            524,
            590
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        },
        "range": [
          518,
          590
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        518,
        591
      ],
      "loc": {
        "end": {
          "column": 73,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            598,
            601
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'de'",
              "value": "de",
              "range": [
                659,
                663
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 16
                },
                "start": {
                  "column": 61,
                  "line": 16
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      667,
                      675
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 16
                      },
                      "start": {
                        "column": 69,
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
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      677,
                      682
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 16
                      },
                      "start": {
                        "column": 79,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    667,
                    682
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 16
                    },
                    "start": {
                      "column": 69,
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
                    "name": "style",
                    "optional": false,
                    "range": [
                      684,
                      689
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 16
                      },
                      "start": {
                        "column": 86,
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
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      691,
                      701
                    ],
                    "loc": {
                      "end": {
                        "column": 103,
                        "line": 16
                      },
                      "start": {
                        "column": 93,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    684,
                    701
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 16
                    },
                    "start": {
                      "column": 86,
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
                    "name": "timeZone",
                    "optional": false,
                    "range": [
                      703,
                      711
                    ],
                    "loc": {
                      "end": {
                        "column": 113,
                        "line": 16
                      },
                      "start": {
                        "column": 105,
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
                    "raw": "'UTC'",
                    "value": "UTC",
                    "range": [
                      713,
                      718
                    ],
                    "loc": {
                      "end": {
                        "column": 120,
                        "line": 16
                      },
                      "start": {
                        "column": 115,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    703,
                    718
                  ],
                  "loc": {
                    "end": {
                      "column": 120,
                      "line": 16
                    },
                    "start": {
                      "column": 105,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                665,
                720
              ],
              "loc": {
                "end": {
                  "column": 122,
                  "line": 16
                },
                "start": {
                  "column": 67,
                  "line": 16
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "mixed",
                "optional": false,
                "range": [
                  605,
                  610
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 16
                  },
                  "start": {
                    "column": 7,
                    "line": 16
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    627,
                    642
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            628,
                            634
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
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "range": [
                              637,
                              641
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 16
                              },
                              "start": {
                                "column": 39,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            637,
                            641
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 16
                            },
                            "start": {
                              "column": 39,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        628,
                        641
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 16
                        },
                        "start": {
                          "column": 30,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 16
                    },
                    "start": {
                      "column": 29,
                      "line": 16
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "range": [
                    614,
                    627
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 16,
                      "line": 16
                    }
                  }
                },
                "range": [
                  614,
                  642
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 16
                  },
                  "start": {
                    "column": 16,
                    "line": 16
                  }
                }
              },
              "range": [
                605,
                642
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 16
                },
                "start": {
                  "column": 7,
                  "line": 16
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                644,
                658
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 16
                },
                "start": {
                  "column": 46,
                  "line": 16
                }
              }
            },
            "range": [
              604,
              658
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
              }
            }
          },
          "optional": false,
          "range": [
            604,
            721
          ],
          "loc": {
            "end": {
              "column": 123,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        },
        "range": [
          598,
          721
        ],
        "loc": {
          "end": {
            "column": 123,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        598,
        722
      ],
      "loc": {
        "end": {
          "column": 124,
          "line": 16
        },
        "start": {
          "column": 0,
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
            "name": "int8Array",
            "optional": false,
            "range": [
              736,
              745
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  762,
                  763
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "range": [
                752,
                761
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 18
                },
                "start": {
                  "column": 22,
                  "line": 18
                }
              }
            },
            "range": [
              748,
              764
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 18
              },
              "start": {
                "column": 18,
                "line": 18
              }
            }
          },
          "range": [
            736,
            764
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        730,
        765
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            766,
            769
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "range": [
                772,
                781
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                782,
                796
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 19
                },
                "start": {
                  "column": 16,
                  "line": 19
                }
              }
            },
            "range": [
              772,
              796
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "optional": false,
          "range": [
            772,
            798
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        },
        "range": [
          766,
          798
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        766,
        799
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            806,
            809
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                837,
                844
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 20
                },
                "start": {
                  "column": 31,
                  "line": 20
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "range": [
                812,
                821
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 6,
                  "line": 20
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                822,
                836
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              }
            },
            "range": [
              812,
              836
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "optional": false,
          "range": [
            812,
            845
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        },
        "range": [
          806,
          845
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        806,
        846
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            853,
            856
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                884,
                891
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 21
                },
                "start": {
                  "column": 31,
                  "line": 21
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "range": [
                      895,
                      900
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 21
                      },
                      "start": {
                        "column": 42,
                        "line": 21
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      902,
                      912
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 21
                      },
                      "start": {
                        "column": 49,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    895,
                    912
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 21
                    },
                    "start": {
                      "column": 42,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      914,
                      922
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 21
                      },
                      "start": {
                        "column": 61,
                        "line": 21
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      924,
                      929
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 21
                      },
                      "start": {
                        "column": 71,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    914,
                    929
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 21
                    },
                    "start": {
                      "column": 61,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                893,
                931
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 21
                },
                "start": {
                  "column": 40,
                  "line": 21
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "range": [
                859,
                868
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 6,
                  "line": 21
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                869,
                883
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 21
                },
                "start": {
                  "column": 16,
                  "line": 21
                }
              }
            },
            "range": [
              859,
              883
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "optional": false,
          "range": [
            859,
            932
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        },
        "range": [
          853,
          932
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        853,
        933
      ],
      "loc": {
        "end": {
          "column": 80,
          "line": 21
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
            "name": "uint8Array",
            "optional": false,
            "range": [
              947,
              957
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  975,
                  976
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 23
                  },
                  "start": {
                    "column": 34,
                    "line": 23
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "range": [
                964,
                974
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 23
                },
                "start": {
                  "column": 23,
                  "line": 23
                }
              }
            },
            "range": [
              960,
              977
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 23
              },
              "start": {
                "column": 19,
                "line": 23
              }
            }
          },
          "range": [
            947,
            977
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        941,
        978
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            979,
            982
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "range": [
                985,
                995
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 24
                },
                "start": {
                  "column": 6,
                  "line": 24
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                996,
                1010
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 24
                },
                "start": {
                  "column": 17,
                  "line": 24
                }
              }
            },
            "range": [
              985,
              1010
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "optional": false,
          "range": [
            985,
            1012
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        },
        "range": [
          979,
          1012
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        979,
        1013
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1020,
            1023
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1052,
                1059
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 25
                },
                "start": {
                  "column": 32,
                  "line": 25
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "range": [
                1026,
                1036
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 25
                },
                "start": {
                  "column": 6,
                  "line": 25
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1037,
                1051
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 25
                },
                "start": {
                  "column": 17,
                  "line": 25
                }
              }
            },
            "range": [
              1026,
              1051
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "optional": false,
          "range": [
            1026,
            1060
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        },
        "range": [
          1020,
          1060
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        1020,
        1061
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1068,
            1071
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1100,
                1107
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 26
                },
                "start": {
                  "column": 32,
                  "line": 26
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "range": [
                      1111,
                      1116
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 26
                      },
                      "start": {
                        "column": 43,
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
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      1118,
                      1128
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 26
                      },
                      "start": {
                        "column": 50,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    1111,
                    1128
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 26
                    },
                    "start": {
                      "column": 43,
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
                    "name": "currency",
                    "optional": false,
                    "range": [
                      1130,
                      1138
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 26
                      },
                      "start": {
                        "column": 62,
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
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      1140,
                      1145
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 26
                      },
                      "start": {
                        "column": 72,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    1130,
                    1145
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 26
                    },
                    "start": {
                      "column": 62,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                1109,
                1147
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 26
                },
                "start": {
                  "column": 41,
                  "line": 26
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "range": [
                1074,
                1084
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 26
                },
                "start": {
                  "column": 6,
                  "line": 26
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1085,
                1099
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 26
                },
                "start": {
                  "column": 17,
                  "line": 26
                }
              }
            },
            "range": [
              1074,
              1099
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "optional": false,
          "range": [
            1074,
            1148
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        },
        "range": [
          1068,
          1148
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        1068,
        1149
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "uint8ClampedArray",
            "optional": false,
            "range": [
              1163,
              1180
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  1205,
                  1206
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 28
                  },
                  "start": {
                    "column": 48,
                    "line": 28
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "range": [
                1187,
                1204
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 28
                },
                "start": {
                  "column": 30,
                  "line": 28
                }
              }
            },
            "range": [
              1183,
              1207
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 28
              },
              "start": {
                "column": 26,
                "line": 28
              }
            }
          },
          "range": [
            1163,
            1207
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1157,
        1208
      ],
      "loc": {
        "end": {
          "column": 51,
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
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1209,
            1212
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "range": [
                1215,
                1232
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 29
                },
                "start": {
                  "column": 6,
                  "line": 29
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1233,
                1247
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 29
                },
                "start": {
                  "column": 24,
                  "line": 29
                }
              }
            },
            "range": [
              1215,
              1247
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "optional": false,
          "range": [
            1215,
            1249
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        },
        "range": [
          1209,
          1249
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        1209,
        1250
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 29
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1257,
            1260
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1296,
                1303
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 30
                },
                "start": {
                  "column": 39,
                  "line": 30
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "range": [
                1263,
                1280
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 30
                },
                "start": {
                  "column": 6,
                  "line": 30
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1281,
                1295
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
              1263,
              1295
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
              }
            }
          },
          "optional": false,
          "range": [
            1263,
            1304
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        },
        "range": [
          1257,
          1304
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        1257,
        1305
      ],
      "loc": {
        "end": {
          "column": 48,
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
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1312,
            1315
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1351,
                1358
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 31
                },
                "start": {
                  "column": 39,
                  "line": 31
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "range": [
                      1362,
                      1367
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 31
                      },
                      "start": {
                        "column": 50,
                        "line": 31
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      1369,
                      1379
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 31
                      },
                      "start": {
                        "column": 57,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    1362,
                    1379
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 31
                    },
                    "start": {
                      "column": 50,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      1381,
                      1389
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 31
                      },
                      "start": {
                        "column": 69,
                        "line": 31
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      1391,
                      1396
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 31
                      },
                      "start": {
                        "column": 79,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    1381,
                    1396
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 31
                    },
                    "start": {
                      "column": 69,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                1360,
                1398
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 31
                },
                "start": {
                  "column": 48,
                  "line": 31
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "range": [
                1318,
                1335
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 31
                },
                "start": {
                  "column": 6,
                  "line": 31
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1336,
                1350
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 31
                },
                "start": {
                  "column": 24,
                  "line": 31
                }
              }
            },
            "range": [
              1318,
              1350
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "optional": false,
          "range": [
            1318,
            1399
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 31
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        },
        "range": [
          1312,
          1399
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        1312,
        1400
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 31
        },
        "start": {
          "column": 0,
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
            "name": "int16Array",
            "optional": false,
            "range": [
              1414,
              1424
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  1442,
                  1443
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 33
                  },
                  "start": {
                    "column": 34,
                    "line": 33
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "range": [
                1431,
                1441
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 33
                },
                "start": {
                  "column": 23,
                  "line": 33
                }
              }
            },
            "range": [
              1427,
              1444
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 33
              },
              "start": {
                "column": 19,
                "line": 33
              }
            }
          },
          "range": [
            1414,
            1444
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1408,
        1445
      ],
      "loc": {
        "end": {
          "column": 37,
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
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1446,
            1449
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "range": [
                1452,
                1462
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 34
                },
                "start": {
                  "column": 6,
                  "line": 34
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1463,
                1477
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 34
                },
                "start": {
                  "column": 17,
                  "line": 34
                }
              }
            },
            "range": [
              1452,
              1477
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "optional": false,
          "range": [
            1452,
            1479
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 34
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        },
        "range": [
          1446,
          1479
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        1446,
        1480
      ],
      "loc": {
        "end": {
          "column": 34,
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
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1487,
            1490
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1519,
                1526
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 35
                },
                "start": {
                  "column": 32,
                  "line": 35
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "range": [
                1493,
                1503
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 35
                },
                "start": {
                  "column": 6,
                  "line": 35
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1504,
                1518
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 35
                },
                "start": {
                  "column": 17,
                  "line": 35
                }
              }
            },
            "range": [
              1493,
              1518
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 35
              },
              "start": {
                "column": 6,
                "line": 35
              }
            }
          },
          "optional": false,
          "range": [
            1493,
            1527
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        },
        "range": [
          1487,
          1527
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        1487,
        1528
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1535,
            1538
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1567,
                1574
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 36
                },
                "start": {
                  "column": 32,
                  "line": 36
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "range": [
                      1578,
                      1583
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 36
                      },
                      "start": {
                        "column": 43,
                        "line": 36
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      1585,
                      1595
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 36
                      },
                      "start": {
                        "column": 50,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1578,
                    1595
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 36
                    },
                    "start": {
                      "column": 43,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      1597,
                      1605
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 36
                      },
                      "start": {
                        "column": 62,
                        "line": 36
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      1607,
                      1612
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 36
                      },
                      "start": {
                        "column": 72,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1597,
                    1612
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 36
                    },
                    "start": {
                      "column": 62,
                      "line": 36
                    }
                  }
                }
              ],
              "range": [
                1576,
                1614
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 36
                },
                "start": {
                  "column": 41,
                  "line": 36
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "range": [
                1541,
                1551
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 36
                },
                "start": {
                  "column": 6,
                  "line": 36
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1552,
                1566
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 36
                },
                "start": {
                  "column": 17,
                  "line": 36
                }
              }
            },
            "range": [
              1541,
              1566
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 36
              },
              "start": {
                "column": 6,
                "line": 36
              }
            }
          },
          "optional": false,
          "range": [
            1541,
            1615
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 36
            }
          }
        },
        "range": [
          1535,
          1615
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        1535,
        1616
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "uint16Array",
            "optional": false,
            "range": [
              1630,
              1641
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  1660,
                  1661
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 38
                  },
                  "start": {
                    "column": 36,
                    "line": 38
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "range": [
                1648,
                1659
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 38
                },
                "start": {
                  "column": 24,
                  "line": 38
                }
              }
            },
            "range": [
              1644,
              1662
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 38
              },
              "start": {
                "column": 20,
                "line": 38
              }
            }
          },
          "range": [
            1630,
            1662
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1624,
        1663
      ],
      "loc": {
        "end": {
          "column": 39,
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
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1664,
            1667
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 39
            },
            "start": {
              "column": 0,
              "line": 39
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "range": [
                1670,
                1681
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 39
                },
                "start": {
                  "column": 6,
                  "line": 39
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1682,
                1696
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 39
                },
                "start": {
                  "column": 18,
                  "line": 39
                }
              }
            },
            "range": [
              1670,
              1696
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 39
              },
              "start": {
                "column": 6,
                "line": 39
              }
            }
          },
          "optional": false,
          "range": [
            1670,
            1698
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        },
        "range": [
          1664,
          1698
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        1664,
        1699
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1706,
            1709
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1739,
                1746
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 40
                },
                "start": {
                  "column": 33,
                  "line": 40
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "range": [
                1712,
                1723
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 40
                },
                "start": {
                  "column": 6,
                  "line": 40
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1724,
                1738
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 40
                },
                "start": {
                  "column": 18,
                  "line": 40
                }
              }
            },
            "range": [
              1712,
              1738
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
              }
            }
          },
          "optional": false,
          "range": [
            1712,
            1747
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        },
        "range": [
          1706,
          1747
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        1706,
        1748
      ],
      "loc": {
        "end": {
          "column": 42,
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
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1755,
            1758
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1788,
                1795
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 41
                },
                "start": {
                  "column": 33,
                  "line": 41
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "range": [
                      1799,
                      1804
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 41
                      },
                      "start": {
                        "column": 44,
                        "line": 41
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      1806,
                      1816
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 41
                      },
                      "start": {
                        "column": 51,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1799,
                    1816
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 41
                    },
                    "start": {
                      "column": 44,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      1818,
                      1826
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 41
                      },
                      "start": {
                        "column": 63,
                        "line": 41
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      1828,
                      1833
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 41
                      },
                      "start": {
                        "column": 73,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1818,
                    1833
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 41
                    },
                    "start": {
                      "column": 63,
                      "line": 41
                    }
                  }
                }
              ],
              "range": [
                1797,
                1835
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 41
                },
                "start": {
                  "column": 42,
                  "line": 41
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "range": [
                1761,
                1772
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 41
                },
                "start": {
                  "column": 6,
                  "line": 41
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1773,
                1787
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 41
                },
                "start": {
                  "column": 18,
                  "line": 41
                }
              }
            },
            "range": [
              1761,
              1787
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 41
              },
              "start": {
                "column": 6,
                "line": 41
              }
            }
          },
          "optional": false,
          "range": [
            1761,
            1836
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 41
            },
            "start": {
              "column": 6,
              "line": 41
            }
          }
        },
        "range": [
          1755,
          1836
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        1755,
        1837
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "int32Array",
            "optional": false,
            "range": [
              1851,
              1861
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 43
              },
              "start": {
                "column": 6,
                "line": 43
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  1879,
                  1880
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 43
                  },
                  "start": {
                    "column": 34,
                    "line": 43
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "range": [
                1868,
                1878
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 43
                },
                "start": {
                  "column": 23,
                  "line": 43
                }
              }
            },
            "range": [
              1864,
              1881
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 43
              },
              "start": {
                "column": 19,
                "line": 43
              }
            }
          },
          "range": [
            1851,
            1881
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 43
            },
            "start": {
              "column": 6,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1845,
        1882
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1883,
            1886
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 44
            },
            "start": {
              "column": 0,
              "line": 44
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "range": [
                1889,
                1899
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 44
                },
                "start": {
                  "column": 6,
                  "line": 44
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1900,
                1914
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 44
                },
                "start": {
                  "column": 17,
                  "line": 44
                }
              }
            },
            "range": [
              1889,
              1914
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 44
              },
              "start": {
                "column": 6,
                "line": 44
              }
            }
          },
          "optional": false,
          "range": [
            1889,
            1916
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 44
            }
          }
        },
        "range": [
          1883,
          1916
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        1883,
        1917
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1924,
            1927
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 45
            },
            "start": {
              "column": 0,
              "line": 45
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1956,
                1963
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 45
                },
                "start": {
                  "column": 32,
                  "line": 45
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "range": [
                1930,
                1940
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 45
                },
                "start": {
                  "column": 6,
                  "line": 45
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1941,
                1955
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 45
                },
                "start": {
                  "column": 17,
                  "line": 45
                }
              }
            },
            "range": [
              1930,
              1955
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 45
              },
              "start": {
                "column": 6,
                "line": 45
              }
            }
          },
          "optional": false,
          "range": [
            1930,
            1964
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 45
            },
            "start": {
              "column": 6,
              "line": 45
            }
          }
        },
        "range": [
          1924,
          1964
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        1924,
        1965
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1972,
            1975
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 46
            },
            "start": {
              "column": 0,
              "line": 46
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                2004,
                2011
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 46
                },
                "start": {
                  "column": 32,
                  "line": 46
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "range": [
                      2015,
                      2020
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 46
                      },
                      "start": {
                        "column": 43,
                        "line": 46
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      2022,
                      2032
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 46
                      },
                      "start": {
                        "column": 50,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    2015,
                    2032
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 46
                    },
                    "start": {
                      "column": 43,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      2034,
                      2042
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 46
                      },
                      "start": {
                        "column": 62,
                        "line": 46
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      2044,
                      2049
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 46
                      },
                      "start": {
                        "column": 72,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    2034,
                    2049
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 46
                    },
                    "start": {
                      "column": 62,
                      "line": 46
                    }
                  }
                }
              ],
              "range": [
                2013,
                2051
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 46
                },
                "start": {
                  "column": 41,
                  "line": 46
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "range": [
                1978,
                1988
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 46
                },
                "start": {
                  "column": 6,
                  "line": 46
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                1989,
                2003
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 46
                },
                "start": {
                  "column": 17,
                  "line": 46
                }
              }
            },
            "range": [
              1978,
              2003
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 46
              },
              "start": {
                "column": 6,
                "line": 46
              }
            }
          },
          "optional": false,
          "range": [
            1978,
            2052
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 46
            },
            "start": {
              "column": 6,
              "line": 46
            }
          }
        },
        "range": [
          1972,
          2052
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 46
          }
        }
      },
      "range": [
        1972,
        2053
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
            "name": "uint32Array",
            "optional": false,
            "range": [
              2067,
              2078
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 48
              },
              "start": {
                "column": 6,
                "line": 48
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  2097,
                  2098
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 48
                  },
                  "start": {
                    "column": 36,
                    "line": 48
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "range": [
                2085,
                2096
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 48
                },
                "start": {
                  "column": 24,
                  "line": 48
                }
              }
            },
            "range": [
              2081,
              2099
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 48
              },
              "start": {
                "column": 20,
                "line": 48
              }
            }
          },
          "range": [
            2067,
            2099
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 48
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2061,
        2100
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            2101,
            2104
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 49
            },
            "start": {
              "column": 0,
              "line": 49
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "range": [
                2107,
                2118
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 49
                },
                "start": {
                  "column": 6,
                  "line": 49
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                2119,
                2133
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 49
                },
                "start": {
                  "column": 18,
                  "line": 49
                }
              }
            },
            "range": [
              2107,
              2133
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 49
              },
              "start": {
                "column": 6,
                "line": 49
              }
            }
          },
          "optional": false,
          "range": [
            2107,
            2135
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 49
            },
            "start": {
              "column": 6,
              "line": 49
            }
          }
        },
        "range": [
          2101,
          2135
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        2101,
        2136
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            2143,
            2146
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 50
            },
            "start": {
              "column": 0,
              "line": 50
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                2176,
                2183
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 50
                },
                "start": {
                  "column": 33,
                  "line": 50
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "range": [
                2149,
                2160
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 50
                },
                "start": {
                  "column": 6,
                  "line": 50
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                2161,
                2175
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 50
                },
                "start": {
                  "column": 18,
                  "line": 50
                }
              }
            },
            "range": [
              2149,
              2175
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 50
              },
              "start": {
                "column": 6,
                "line": 50
              }
            }
          },
          "optional": false,
          "range": [
            2149,
            2184
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 50
            },
            "start": {
              "column": 6,
              "line": 50
            }
          }
        },
        "range": [
          2143,
          2184
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        2143,
        2185
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            2192,
            2195
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 51
            },
            "start": {
              "column": 0,
              "line": 51
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                2225,
                2232
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 51
                },
                "start": {
                  "column": 33,
                  "line": 51
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "range": [
                      2236,
                      2241
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 51
                      },
                      "start": {
                        "column": 44,
                        "line": 51
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      2243,
                      2253
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 51
                      },
                      "start": {
                        "column": 51,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    2236,
                    2253
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 51
                    },
                    "start": {
                      "column": 44,
                      "line": 51
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      2255,
                      2263
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 51
                      },
                      "start": {
                        "column": 63,
                        "line": 51
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      2265,
                      2270
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 51
                      },
                      "start": {
                        "column": 73,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    2255,
                    2270
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 51
                    },
                    "start": {
                      "column": 63,
                      "line": 51
                    }
                  }
                }
              ],
              "range": [
                2234,
                2272
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 51
                },
                "start": {
                  "column": 42,
                  "line": 51
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "range": [
                2198,
                2209
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 51
                },
                "start": {
                  "column": 6,
                  "line": 51
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                2210,
                2224
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 51
                },
                "start": {
                  "column": 18,
                  "line": 51
                }
              }
            },
            "range": [
              2198,
              2224
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 51
              },
              "start": {
                "column": 6,
                "line": 51
              }
            }
          },
          "optional": false,
          "range": [
            2198,
            2273
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 51
            },
            "start": {
              "column": 6,
              "line": 51
            }
          }
        },
        "range": [
          2192,
          2273
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        2192,
        2274
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
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
            "name": "float32Array",
            "optional": false,
            "range": [
              2288,
              2300
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 53
              },
              "start": {
                "column": 6,
                "line": 53
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  2320,
                  2321
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 53
                  },
                  "start": {
                    "column": 38,
                    "line": 53
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "range": [
                2307,
                2319
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 53
                },
                "start": {
                  "column": 25,
                  "line": 53
                }
              }
            },
            "range": [
              2303,
              2322
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 53
              },
              "start": {
                "column": 21,
                "line": 53
              }
            }
          },
          "range": [
            2288,
            2322
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 53
            },
            "start": {
              "column": 6,
              "line": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2282,
        2323
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            2324,
            2327
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "range": [
                2330,
                2342
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 54
                },
                "start": {
                  "column": 6,
                  "line": 54
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                2343,
                2357
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 54
                },
                "start": {
                  "column": 19,
                  "line": 54
                }
              }
            },
            "range": [
              2330,
              2357
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 54
              },
              "start": {
                "column": 6,
                "line": 54
              }
            }
          },
          "optional": false,
          "range": [
            2330,
            2359
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 54
            },
            "start": {
              "column": 6,
              "line": 54
            }
          }
        },
        "range": [
          2324,
          2359
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        2324,
        2360
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            2367,
            2370
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 55
            },
            "start": {
              "column": 0,
              "line": 55
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                2401,
                2408
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 55
                },
                "start": {
                  "column": 34,
                  "line": 55
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "range": [
                2373,
                2385
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 55
                },
                "start": {
                  "column": 6,
                  "line": 55
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                2386,
                2400
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 55
                },
                "start": {
                  "column": 19,
                  "line": 55
                }
              }
            },
            "range": [
              2373,
              2400
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 55
              },
              "start": {
                "column": 6,
                "line": 55
              }
            }
          },
          "optional": false,
          "range": [
            2373,
            2409
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 55
            },
            "start": {
              "column": 6,
              "line": 55
            }
          }
        },
        "range": [
          2367,
          2409
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        2367,
        2410
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            2417,
            2420
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 56
            },
            "start": {
              "column": 0,
              "line": 56
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                2451,
                2458
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 56
                },
                "start": {
                  "column": 34,
                  "line": 56
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "range": [
                      2462,
                      2467
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 56
                      },
                      "start": {
                        "column": 45,
                        "line": 56
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      2469,
                      2479
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 56
                      },
                      "start": {
                        "column": 52,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    2462,
                    2479
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 56
                    },
                    "start": {
                      "column": 45,
                      "line": 56
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      2481,
                      2489
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 56
                      },
                      "start": {
                        "column": 64,
                        "line": 56
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      2491,
                      2496
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 56
                      },
                      "start": {
                        "column": 74,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    2481,
                    2496
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 56
                    },
                    "start": {
                      "column": 64,
                      "line": 56
                    }
                  }
                }
              ],
              "range": [
                2460,
                2498
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 56
                },
                "start": {
                  "column": 43,
                  "line": 56
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "range": [
                2423,
                2435
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 56
                },
                "start": {
                  "column": 6,
                  "line": 56
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                2436,
                2450
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 56
                },
                "start": {
                  "column": 19,
                  "line": 56
                }
              }
            },
            "range": [
              2423,
              2450
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 56
              },
              "start": {
                "column": 6,
                "line": 56
              }
            }
          },
          "optional": false,
          "range": [
            2423,
            2499
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 56
            },
            "start": {
              "column": 6,
              "line": 56
            }
          }
        },
        "range": [
          2417,
          2499
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 56
          }
        }
      },
      "range": [
        2417,
        2500
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
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
            "name": "float64Array",
            "optional": false,
            "range": [
              2514,
              2526
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 58
              },
              "start": {
                "column": 6,
                "line": 58
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  2546,
                  2547
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 58
                  },
                  "start": {
                    "column": 38,
                    "line": 58
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "range": [
                2533,
                2545
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 58
                },
                "start": {
                  "column": 25,
                  "line": 58
                }
              }
            },
            "range": [
              2529,
              2548
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 58
              },
              "start": {
                "column": 21,
                "line": 58
              }
            }
          },
          "range": [
            2514,
            2548
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 58
            },
            "start": {
              "column": 6,
              "line": 58
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2508,
        2549
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            2550,
            2553
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 59
            },
            "start": {
              "column": 0,
              "line": 59
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "range": [
                2556,
                2568
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 59
                },
                "start": {
                  "column": 6,
                  "line": 59
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                2569,
                2583
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 59
                },
                "start": {
                  "column": 19,
                  "line": 59
                }
              }
            },
            "range": [
              2556,
              2583
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 59
              },
              "start": {
                "column": 6,
                "line": 59
              }
            }
          },
          "optional": false,
          "range": [
            2556,
            2585
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 59
            },
            "start": {
              "column": 6,
              "line": 59
            }
          }
        },
        "range": [
          2550,
          2585
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 59
          },
          "start": {
            "column": 0,
            "line": 59
          }
        }
      },
      "range": [
        2550,
        2586
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            2593,
            2596
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 60
            },
            "start": {
              "column": 0,
              "line": 60
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                2627,
                2634
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 60
                },
                "start": {
                  "column": 34,
                  "line": 60
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "range": [
                2599,
                2611
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 60
                },
                "start": {
                  "column": 6,
                  "line": 60
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                2612,
                2626
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 60
                },
                "start": {
                  "column": 19,
                  "line": 60
                }
              }
            },
            "range": [
              2599,
              2626
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 60
              },
              "start": {
                "column": 6,
                "line": 60
              }
            }
          },
          "optional": false,
          "range": [
            2599,
            2635
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 60
            },
            "start": {
              "column": 6,
              "line": 60
            }
          }
        },
        "range": [
          2593,
          2635
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 60
          },
          "start": {
            "column": 0,
            "line": 60
          }
        }
      },
      "range": [
        2593,
        2636
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            2643,
            2646
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 61
            },
            "start": {
              "column": 0,
              "line": 61
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                2677,
                2684
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 61
                },
                "start": {
                  "column": 34,
                  "line": 61
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "range": [
                      2688,
                      2693
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 61
                      },
                      "start": {
                        "column": 45,
                        "line": 61
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'currency'",
                    "value": "currency",
                    "range": [
                      2695,
                      2705
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 61
                      },
                      "start": {
                        "column": 52,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    2688,
                    2705
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 61
                    },
                    "start": {
                      "column": 45,
                      "line": 61
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "range": [
                      2707,
                      2715
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 61
                      },
                      "start": {
                        "column": 64,
                        "line": 61
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "'EUR'",
                    "value": "EUR",
                    "range": [
                      2717,
                      2722
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 61
                      },
                      "start": {
                        "column": 74,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    2707,
                    2722
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 61
                    },
                    "start": {
                      "column": 64,
                      "line": 61
                    }
                  }
                }
              ],
              "range": [
                2686,
                2724
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 61
                },
                "start": {
                  "column": 43,
                  "line": 61
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "range": [
                2649,
                2661
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 61
                },
                "start": {
                  "column": 6,
                  "line": 61
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                2662,
                2676
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 61
                },
                "start": {
                  "column": 19,
                  "line": 61
                }
              }
            },
            "range": [
              2649,
              2676
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 61
              },
              "start": {
                "column": 6,
                "line": 61
              }
            }
          },
          "optional": false,
          "range": [
            2649,
            2725
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 61
            },
            "start": {
              "column": 6,
              "line": 61
            }
          }
        },
        "range": [
          2643,
          2725
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 61
          },
          "start": {
            "column": 0,
            "line": 61
          }
        }
      },
      "range": [
        2643,
        2726
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 62
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
