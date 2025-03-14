__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3392
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
              "raw": "'de'",
              "value": "de",
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
                      513,
                      518
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 14
                      },
                      "start": {
                        "column": 35,
                        "line": 14
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
                      520,
                      530
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 14
                      },
                      "start": {
                        "column": 42,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    513,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 14
                    },
                    "start": {
                      "column": 35,
                      "line": 14
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
                      532,
                      540
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 14
                      },
                      "start": {
                        "column": 54,
                        "line": 14
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
                      542,
                      547
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 14
                      },
                      "start": {
                        "column": 64,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    532,
                    547
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 14
                    },
                    "start": {
                      "column": 54,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                511,
                549
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 14
                },
                "start": {
                  "column": 33,
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
            550
          ],
          "loc": {
            "end": {
              "column": 72,
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
          550
        ],
        "loc": {
          "end": {
            "column": 72,
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
        551
      ],
      "loc": {
        "end": {
          "column": 73,
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
            558,
            561
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
                619,
                623
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 15
                },
                "start": {
                  "column": 61,
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
                    "name": "currency",
                    "optional": false,
                    "range": [
                      627,
                      635
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 15
                      },
                      "start": {
                        "column": 69,
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
                      637,
                      642
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 15
                      },
                      "start": {
                        "column": 79,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    627,
                    642
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 15
                    },
                    "start": {
                      "column": 69,
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
                    "name": "style",
                    "optional": false,
                    "range": [
                      644,
                      649
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 15
                      },
                      "start": {
                        "column": 86,
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
                      651,
                      661
                    ],
                    "loc": {
                      "end": {
                        "column": 103,
                        "line": 15
                      },
                      "start": {
                        "column": 93,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    644,
                    661
                  ],
                  "loc": {
                    "end": {
                      "column": 103,
                      "line": 15
                    },
                    "start": {
                      "column": 86,
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
                    "name": "timeZone",
                    "optional": false,
                    "range": [
                      663,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 113,
                        "line": 15
                      },
                      "start": {
                        "column": 105,
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
                    "raw": "'UTC'",
                    "value": "UTC",
                    "range": [
                      673,
                      678
                    ],
                    "loc": {
                      "end": {
                        "column": 120,
                        "line": 15
                      },
                      "start": {
                        "column": 115,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    663,
                    678
                  ],
                  "loc": {
                    "end": {
                      "column": 120,
                      "line": 15
                    },
                    "start": {
                      "column": 105,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                625,
                680
              ],
              "loc": {
                "end": {
                  "column": 122,
                  "line": 15
                },
                "start": {
                  "column": 67,
                  "line": 15
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
                  565,
                  570
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 15
                  },
                  "start": {
                    "column": 7,
                    "line": 15
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    587,
                    602
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            588,
                            594
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 15
                            },
                            "start": {
                              "column": 30,
                              "line": 15
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
                              597,
                              601
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 15
                              },
                              "start": {
                                "column": 39,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            597,
                            601
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 15
                            },
                            "start": {
                              "column": 39,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        588,
                        601
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 15
                        },
                        "start": {
                          "column": 30,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 15
                    },
                    "start": {
                      "column": 29,
                      "line": 15
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "range": [
                    574,
                    587
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 15
                    },
                    "start": {
                      "column": 16,
                      "line": 15
                    }
                  }
                },
                "range": [
                  574,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 15
                  },
                  "start": {
                    "column": 16,
                    "line": 15
                  }
                }
              },
              "range": [
                565,
                602
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 15
                },
                "start": {
                  "column": 7,
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
                604,
                618
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 15
                },
                "start": {
                  "column": 46,
                  "line": 15
                }
              }
            },
            "range": [
              564,
              618
            ],
            "loc": {
              "end": {
                "column": 60,
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
            564,
            681
          ],
          "loc": {
            "end": {
              "column": 123,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        },
        "range": [
          558,
          681
        ],
        "loc": {
          "end": {
            "column": 123,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        558,
        682
      ],
      "loc": {
        "end": {
          "column": 124,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "bigInts",
            "optional": false,
            "range": [
              696,
              703
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      714,
                      715
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 17
                      },
                      "start": {
                        "column": 24,
                        "line": 17
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "range": [
                    707,
                    713
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 17
                    },
                    "start": {
                      "column": 17,
                      "line": 17
                    }
                  }
                },
                "optional": false,
                "range": [
                  707,
                  716
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 17
                  },
                  "start": {
                    "column": 17,
                    "line": 17
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      725,
                      726
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 17
                      },
                      "start": {
                        "column": 35,
                        "line": 17
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "range": [
                    718,
                    724
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 17
                    },
                    "start": {
                      "column": 28,
                      "line": 17
                    }
                  }
                },
                "optional": false,
                "range": [
                  718,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 17
                  },
                  "start": {
                    "column": 28,
                    "line": 17
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      736,
                      737
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 17
                      },
                      "start": {
                        "column": 46,
                        "line": 17
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "range": [
                    729,
                    735
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 17
                    },
                    "start": {
                      "column": 39,
                      "line": 17
                    }
                  }
                },
                "optional": false,
                "range": [
                  729,
                  738
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 17
                  },
                  "start": {
                    "column": 39,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              706,
              739
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 17
              },
              "start": {
                "column": 16,
                "line": 17
              }
            }
          },
          "range": [
            696,
            739
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        690,
        740
      ],
      "loc": {
        "end": {
          "column": 50,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            741,
            744
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
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
              "name": "bigInts",
              "optional": false,
              "range": [
                747,
                754
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 6,
                  "line": 18
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
                755,
                769
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 18
                },
                "start": {
                  "column": 14,
                  "line": 18
                }
              }
            },
            "range": [
              747,
              769
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "optional": false,
          "range": [
            747,
            771
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        },
        "range": [
          741,
          771
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        741,
        772
      ],
      "loc": {
        "end": {
          "column": 31,
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
            779,
            782
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
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                808,
                815
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 19
                },
                "start": {
                  "column": 29,
                  "line": 19
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
              "name": "bigInts",
              "optional": false,
              "range": [
                785,
                792
              ],
              "loc": {
                "end": {
                  "column": 13,
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
                793,
                807
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              }
            },
            "range": [
              785,
              807
            ],
            "loc": {
              "end": {
                "column": 28,
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
            785,
            816
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        },
        "range": [
          779,
          816
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        779,
        817
      ],
      "loc": {
        "end": {
          "column": 38,
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
            824,
            827
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
                853,
                860
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 20
                },
                "start": {
                  "column": 29,
                  "line": 20
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
                      864,
                      869
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 20
                      },
                      "start": {
                        "column": 40,
                        "line": 20
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
                      871,
                      881
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 20
                      },
                      "start": {
                        "column": 47,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    864,
                    881
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 20
                    },
                    "start": {
                      "column": 40,
                      "line": 20
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
                      883,
                      891
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 20
                      },
                      "start": {
                        "column": 59,
                        "line": 20
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
                      893,
                      898
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 20
                      },
                      "start": {
                        "column": 69,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    883,
                    898
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 20
                    },
                    "start": {
                      "column": 59,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                862,
                900
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 20
                },
                "start": {
                  "column": 38,
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
              "name": "bigInts",
              "optional": false,
              "range": [
                830,
                837
              ],
              "loc": {
                "end": {
                  "column": 13,
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
                838,
                852
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              }
            },
            "range": [
              830,
              852
            ],
            "loc": {
              "end": {
                "column": 28,
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
            830,
            901
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        },
        "range": [
          824,
          901
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        824,
        902
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 20
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
            "name": "int8Array",
            "optional": false,
            "range": [
              916,
              925
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
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
                  942,
                  943
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 22
                  },
                  "start": {
                    "column": 32,
                    "line": 22
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
                932,
                941
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 22
                },
                "start": {
                  "column": 22,
                  "line": 22
                }
              }
            },
            "range": [
              928,
              944
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 22
              },
              "start": {
                "column": 18,
                "line": 22
              }
            }
          },
          "range": [
            916,
            944
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        910,
        945
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            946,
            949
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
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
                952,
                961
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 23
                },
                "start": {
                  "column": 6,
                  "line": 23
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
                962,
                976
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 23
                },
                "start": {
                  "column": 16,
                  "line": 23
                }
              }
            },
            "range": [
              952,
              976
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "optional": false,
          "range": [
            952,
            978
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        },
        "range": [
          946,
          978
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        946,
        979
      ],
      "loc": {
        "end": {
          "column": 33,
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
            986,
            989
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
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1017,
                1024
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 24
                },
                "start": {
                  "column": 31,
                  "line": 24
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
                992,
                1001
              ],
              "loc": {
                "end": {
                  "column": 15,
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
                1002,
                1016
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 24
                },
                "start": {
                  "column": 16,
                  "line": 24
                }
              }
            },
            "range": [
              992,
              1016
            ],
            "loc": {
              "end": {
                "column": 30,
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
            992,
            1025
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        },
        "range": [
          986,
          1025
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        986,
        1026
      ],
      "loc": {
        "end": {
          "column": 40,
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
            1033,
            1036
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
                1064,
                1071
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 25
                },
                "start": {
                  "column": 31,
                  "line": 25
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
                      1075,
                      1080
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 25
                      },
                      "start": {
                        "column": 42,
                        "line": 25
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
                      1082,
                      1092
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 25
                      },
                      "start": {
                        "column": 49,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    1075,
                    1092
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 25
                    },
                    "start": {
                      "column": 42,
                      "line": 25
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
                      1094,
                      1102
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 25
                      },
                      "start": {
                        "column": 61,
                        "line": 25
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
                      1104,
                      1109
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 25
                      },
                      "start": {
                        "column": 71,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    1094,
                    1109
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 25
                    },
                    "start": {
                      "column": 61,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                1073,
                1111
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 25
                },
                "start": {
                  "column": 40,
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
              "name": "int8Array",
              "optional": false,
              "range": [
                1039,
                1048
              ],
              "loc": {
                "end": {
                  "column": 15,
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
                1049,
                1063
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 25
                },
                "start": {
                  "column": 16,
                  "line": 25
                }
              }
            },
            "range": [
              1039,
              1063
            ],
            "loc": {
              "end": {
                "column": 30,
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
            1039,
            1112
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        },
        "range": [
          1033,
          1112
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        1033,
        1113
      ],
      "loc": {
        "end": {
          "column": 80,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
              1127,
              1137
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
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
                  1155,
                  1156
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 27
                  },
                  "start": {
                    "column": 34,
                    "line": 27
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
                1144,
                1154
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 27
                },
                "start": {
                  "column": 23,
                  "line": 27
                }
              }
            },
            "range": [
              1140,
              1157
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 27
              },
              "start": {
                "column": 19,
                "line": 27
              }
            }
          },
          "range": [
            1127,
            1157
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1121,
        1158
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            1159,
            1162
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
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
                1165,
                1175
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 28
                },
                "start": {
                  "column": 6,
                  "line": 28
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
                1176,
                1190
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 28
                },
                "start": {
                  "column": 17,
                  "line": 28
                }
              }
            },
            "range": [
              1165,
              1190
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
              }
            }
          },
          "optional": false,
          "range": [
            1165,
            1192
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        },
        "range": [
          1159,
          1192
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        1159,
        1193
      ],
      "loc": {
        "end": {
          "column": 34,
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
            1200,
            1203
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
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1232,
                1239
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 29
                },
                "start": {
                  "column": 32,
                  "line": 29
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
                1206,
                1216
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                1217,
                1231
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 29
                },
                "start": {
                  "column": 17,
                  "line": 29
                }
              }
            },
            "range": [
              1206,
              1231
            ],
            "loc": {
              "end": {
                "column": 31,
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
            1206,
            1240
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
          1200,
          1240
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
        1200,
        1241
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
            1248,
            1251
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
                1280,
                1287
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 30
                },
                "start": {
                  "column": 32,
                  "line": 30
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
                      1291,
                      1296
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 30
                      },
                      "start": {
                        "column": 43,
                        "line": 30
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
                      1298,
                      1308
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 30
                      },
                      "start": {
                        "column": 50,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    1291,
                    1308
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 30
                    },
                    "start": {
                      "column": 43,
                      "line": 30
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
                      1310,
                      1318
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 30
                      },
                      "start": {
                        "column": 62,
                        "line": 30
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
                      1320,
                      1325
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 30
                      },
                      "start": {
                        "column": 72,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    1310,
                    1325
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 30
                    },
                    "start": {
                      "column": 62,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                1289,
                1327
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 30
                },
                "start": {
                  "column": 41,
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
              "name": "uint8Array",
              "optional": false,
              "range": [
                1254,
                1264
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                1265,
                1279
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 30
                },
                "start": {
                  "column": 17,
                  "line": 30
                }
              }
            },
            "range": [
              1254,
              1279
            ],
            "loc": {
              "end": {
                "column": 31,
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
            1254,
            1328
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        },
        "range": [
          1248,
          1328
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        1248,
        1329
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
              1343,
              1360
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
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
                  1385,
                  1386
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 32
                  },
                  "start": {
                    "column": 48,
                    "line": 32
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
                1367,
                1384
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 32
                },
                "start": {
                  "column": 30,
                  "line": 32
                }
              }
            },
            "range": [
              1363,
              1387
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 32
              },
              "start": {
                "column": 26,
                "line": 32
              }
            }
          },
          "range": [
            1343,
            1387
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1337,
        1388
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            1389,
            1392
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
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
                1395,
                1412
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 33
                },
                "start": {
                  "column": 6,
                  "line": 33
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
                1413,
                1427
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 33
                },
                "start": {
                  "column": 24,
                  "line": 33
                }
              }
            },
            "range": [
              1395,
              1427
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "optional": false,
          "range": [
            1395,
            1429
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        },
        "range": [
          1389,
          1429
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        1389,
        1430
      ],
      "loc": {
        "end": {
          "column": 41,
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
            1437,
            1440
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
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1476,
                1483
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 34
                },
                "start": {
                  "column": 39,
                  "line": 34
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
                1443,
                1460
              ],
              "loc": {
                "end": {
                  "column": 23,
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
                1461,
                1475
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 34
                },
                "start": {
                  "column": 24,
                  "line": 34
                }
              }
            },
            "range": [
              1443,
              1475
            ],
            "loc": {
              "end": {
                "column": 38,
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
            1443,
            1484
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 34
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        },
        "range": [
          1437,
          1484
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        1437,
        1485
      ],
      "loc": {
        "end": {
          "column": 48,
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
            1492,
            1495
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
                1531,
                1538
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 35
                },
                "start": {
                  "column": 39,
                  "line": 35
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
                      1542,
                      1547
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 35
                      },
                      "start": {
                        "column": 50,
                        "line": 35
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
                      1549,
                      1559
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 35
                      },
                      "start": {
                        "column": 57,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    1542,
                    1559
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 35
                    },
                    "start": {
                      "column": 50,
                      "line": 35
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
                      1561,
                      1569
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 35
                      },
                      "start": {
                        "column": 69,
                        "line": 35
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
                      1571,
                      1576
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 35
                      },
                      "start": {
                        "column": 79,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    1561,
                    1576
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 35
                    },
                    "start": {
                      "column": 69,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                1540,
                1578
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 35
                },
                "start": {
                  "column": 48,
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
              "name": "uint8ClampedArray",
              "optional": false,
              "range": [
                1498,
                1515
              ],
              "loc": {
                "end": {
                  "column": 23,
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
                1516,
                1530
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 35
                },
                "start": {
                  "column": 24,
                  "line": 35
                }
              }
            },
            "range": [
              1498,
              1530
            ],
            "loc": {
              "end": {
                "column": 38,
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
            1498,
            1579
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        },
        "range": [
          1492,
          1579
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        1492,
        1580
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
              1594,
              1604
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
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
                  1622,
                  1623
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 37
                  },
                  "start": {
                    "column": 34,
                    "line": 37
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
                1611,
                1621
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 37
                },
                "start": {
                  "column": 23,
                  "line": 37
                }
              }
            },
            "range": [
              1607,
              1624
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 37
              },
              "start": {
                "column": 19,
                "line": 37
              }
            }
          },
          "range": [
            1594,
            1624
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1588,
        1625
      ],
      "loc": {
        "end": {
          "column": 37,
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
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1626,
            1629
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
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
                1632,
                1642
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 38
                },
                "start": {
                  "column": 6,
                  "line": 38
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
                1643,
                1657
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 38
                },
                "start": {
                  "column": 17,
                  "line": 38
                }
              }
            },
            "range": [
              1632,
              1657
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
              }
            }
          },
          "optional": false,
          "range": [
            1632,
            1659
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        },
        "range": [
          1626,
          1659
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        1626,
        1660
      ],
      "loc": {
        "end": {
          "column": 34,
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
            1667,
            1670
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
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1699,
                1706
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 39
                },
                "start": {
                  "column": 32,
                  "line": 39
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
                1673,
                1683
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                1684,
                1698
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 39
                },
                "start": {
                  "column": 17,
                  "line": 39
                }
              }
            },
            "range": [
              1673,
              1698
            ],
            "loc": {
              "end": {
                "column": 31,
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
            1673,
            1707
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        },
        "range": [
          1667,
          1707
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        1667,
        1708
      ],
      "loc": {
        "end": {
          "column": 41,
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
            1715,
            1718
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
                1747,
                1754
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 40
                },
                "start": {
                  "column": 32,
                  "line": 40
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
                      1758,
                      1763
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 40
                      },
                      "start": {
                        "column": 43,
                        "line": 40
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
                      1765,
                      1775
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 40
                      },
                      "start": {
                        "column": 50,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    1758,
                    1775
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 40
                    },
                    "start": {
                      "column": 43,
                      "line": 40
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
                      1777,
                      1785
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 40
                      },
                      "start": {
                        "column": 62,
                        "line": 40
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
                      1787,
                      1792
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 40
                      },
                      "start": {
                        "column": 72,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    1777,
                    1792
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 40
                    },
                    "start": {
                      "column": 62,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                1756,
                1794
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 40
                },
                "start": {
                  "column": 41,
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
              "name": "int16Array",
              "optional": false,
              "range": [
                1721,
                1731
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                1732,
                1746
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 40
                },
                "start": {
                  "column": 17,
                  "line": 40
                }
              }
            },
            "range": [
              1721,
              1746
            ],
            "loc": {
              "end": {
                "column": 31,
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
            1721,
            1795
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        },
        "range": [
          1715,
          1795
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        1715,
        1796
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
              1810,
              1821
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
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
                  1840,
                  1841
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 42
                  },
                  "start": {
                    "column": 36,
                    "line": 42
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
                1828,
                1839
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 42
                },
                "start": {
                  "column": 24,
                  "line": 42
                }
              }
            },
            "range": [
              1824,
              1842
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 42
              },
              "start": {
                "column": 20,
                "line": 42
              }
            }
          },
          "range": [
            1810,
            1842
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1804,
        1843
      ],
      "loc": {
        "end": {
          "column": 39,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            1844,
            1847
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
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
                1850,
                1861
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 43
                },
                "start": {
                  "column": 6,
                  "line": 43
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
                1862,
                1876
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 43
                },
                "start": {
                  "column": 18,
                  "line": 43
                }
              }
            },
            "range": [
              1850,
              1876
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 43
              },
              "start": {
                "column": 6,
                "line": 43
              }
            }
          },
          "optional": false,
          "range": [
            1850,
            1878
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 43
            },
            "start": {
              "column": 6,
              "line": 43
            }
          }
        },
        "range": [
          1844,
          1878
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        1844,
        1879
      ],
      "loc": {
        "end": {
          "column": 35,
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
            1886,
            1889
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
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                1919,
                1926
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 44
                },
                "start": {
                  "column": 33,
                  "line": 44
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
                1892,
                1903
              ],
              "loc": {
                "end": {
                  "column": 17,
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
                1904,
                1918
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 44
                },
                "start": {
                  "column": 18,
                  "line": 44
                }
              }
            },
            "range": [
              1892,
              1918
            ],
            "loc": {
              "end": {
                "column": 32,
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
            1892,
            1927
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 44
            }
          }
        },
        "range": [
          1886,
          1927
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        1886,
        1928
      ],
      "loc": {
        "end": {
          "column": 42,
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
            1935,
            1938
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
                1968,
                1975
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 45
                },
                "start": {
                  "column": 33,
                  "line": 45
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
                      1979,
                      1984
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 45
                      },
                      "start": {
                        "column": 44,
                        "line": 45
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
                      1986,
                      1996
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 45
                      },
                      "start": {
                        "column": 51,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1979,
                    1996
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 45
                    },
                    "start": {
                      "column": 44,
                      "line": 45
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
                      1998,
                      2006
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 45
                      },
                      "start": {
                        "column": 63,
                        "line": 45
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
                      2008,
                      2013
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 45
                      },
                      "start": {
                        "column": 73,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1998,
                    2013
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 45
                    },
                    "start": {
                      "column": 63,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                1977,
                2015
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 45
                },
                "start": {
                  "column": 42,
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
              "name": "uint16Array",
              "optional": false,
              "range": [
                1941,
                1952
              ],
              "loc": {
                "end": {
                  "column": 17,
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
                1953,
                1967
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 45
                },
                "start": {
                  "column": 18,
                  "line": 45
                }
              }
            },
            "range": [
              1941,
              1967
            ],
            "loc": {
              "end": {
                "column": 32,
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
            1941,
            2016
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 45
            },
            "start": {
              "column": 6,
              "line": 45
            }
          }
        },
        "range": [
          1935,
          2016
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        1935,
        2017
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
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
              2031,
              2041
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 47
              },
              "start": {
                "column": 6,
                "line": 47
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
                  2059,
                  2060
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 47
                  },
                  "start": {
                    "column": 34,
                    "line": 47
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
                2048,
                2058
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 47
                },
                "start": {
                  "column": 23,
                  "line": 47
                }
              }
            },
            "range": [
              2044,
              2061
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 47
              },
              "start": {
                "column": 19,
                "line": 47
              }
            }
          },
          "range": [
            2031,
            2061
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 47
            },
            "start": {
              "column": 6,
              "line": 47
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2025,
        2062
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
            2063,
            2066
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 48
            },
            "start": {
              "column": 0,
              "line": 48
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
                2069,
                2079
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 48
                },
                "start": {
                  "column": 6,
                  "line": 48
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
                2080,
                2094
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 48
                },
                "start": {
                  "column": 17,
                  "line": 48
                }
              }
            },
            "range": [
              2069,
              2094
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 48
              },
              "start": {
                "column": 6,
                "line": 48
              }
            }
          },
          "optional": false,
          "range": [
            2069,
            2096
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 48
            }
          }
        },
        "range": [
          2063,
          2096
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        2063,
        2097
      ],
      "loc": {
        "end": {
          "column": 34,
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
            2104,
            2107
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
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                2136,
                2143
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 49
                },
                "start": {
                  "column": 32,
                  "line": 49
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
                2110,
                2120
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                2121,
                2135
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 49
                },
                "start": {
                  "column": 17,
                  "line": 49
                }
              }
            },
            "range": [
              2110,
              2135
            ],
            "loc": {
              "end": {
                "column": 31,
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
            2110,
            2144
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 49
            },
            "start": {
              "column": 6,
              "line": 49
            }
          }
        },
        "range": [
          2104,
          2144
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        2104,
        2145
      ],
      "loc": {
        "end": {
          "column": 41,
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
            2152,
            2155
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
                2184,
                2191
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 50
                },
                "start": {
                  "column": 32,
                  "line": 50
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
                      2195,
                      2200
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 50
                      },
                      "start": {
                        "column": 43,
                        "line": 50
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
                      2202,
                      2212
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 50
                      },
                      "start": {
                        "column": 50,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    2195,
                    2212
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 50
                    },
                    "start": {
                      "column": 43,
                      "line": 50
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
                      2214,
                      2222
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 50
                      },
                      "start": {
                        "column": 62,
                        "line": 50
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
                      2224,
                      2229
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 50
                      },
                      "start": {
                        "column": 72,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    2214,
                    2229
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 50
                    },
                    "start": {
                      "column": 62,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                2193,
                2231
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 50
                },
                "start": {
                  "column": 41,
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
              "name": "int32Array",
              "optional": false,
              "range": [
                2158,
                2168
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                2169,
                2183
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 50
                },
                "start": {
                  "column": 17,
                  "line": 50
                }
              }
            },
            "range": [
              2158,
              2183
            ],
            "loc": {
              "end": {
                "column": 31,
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
            2158,
            2232
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 50
            },
            "start": {
              "column": 6,
              "line": 50
            }
          }
        },
        "range": [
          2152,
          2232
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        2152,
        2233
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
              2247,
              2258
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 52
              },
              "start": {
                "column": 6,
                "line": 52
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
                  2277,
                  2278
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 52
                  },
                  "start": {
                    "column": 36,
                    "line": 52
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
                2265,
                2276
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 52
                },
                "start": {
                  "column": 24,
                  "line": 52
                }
              }
            },
            "range": [
              2261,
              2279
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 52
              },
              "start": {
                "column": 20,
                "line": 52
              }
            }
          },
          "range": [
            2247,
            2279
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 52
            },
            "start": {
              "column": 6,
              "line": 52
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2241,
        2280
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
            2281,
            2284
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
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
                2287,
                2298
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 53
                },
                "start": {
                  "column": 6,
                  "line": 53
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
                2299,
                2313
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 53
                },
                "start": {
                  "column": 18,
                  "line": 53
                }
              }
            },
            "range": [
              2287,
              2313
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 53
              },
              "start": {
                "column": 6,
                "line": 53
              }
            }
          },
          "optional": false,
          "range": [
            2287,
            2315
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 53
            },
            "start": {
              "column": 6,
              "line": 53
            }
          }
        },
        "range": [
          2281,
          2315
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        2281,
        2316
      ],
      "loc": {
        "end": {
          "column": 35,
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
            2323,
            2326
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
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                2356,
                2363
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 54
                },
                "start": {
                  "column": 33,
                  "line": 54
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
                2329,
                2340
              ],
              "loc": {
                "end": {
                  "column": 17,
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
                2341,
                2355
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 54
                },
                "start": {
                  "column": 18,
                  "line": 54
                }
              }
            },
            "range": [
              2329,
              2355
            ],
            "loc": {
              "end": {
                "column": 32,
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
            2329,
            2364
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 54
            },
            "start": {
              "column": 6,
              "line": 54
            }
          }
        },
        "range": [
          2323,
          2364
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        2323,
        2365
      ],
      "loc": {
        "end": {
          "column": 42,
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
            2372,
            2375
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
                2405,
                2412
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 55
                },
                "start": {
                  "column": 33,
                  "line": 55
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
                      2416,
                      2421
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 55
                      },
                      "start": {
                        "column": 44,
                        "line": 55
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
                      2423,
                      2433
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 55
                      },
                      "start": {
                        "column": 51,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    2416,
                    2433
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 55
                    },
                    "start": {
                      "column": 44,
                      "line": 55
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
                      2435,
                      2443
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 55
                      },
                      "start": {
                        "column": 63,
                        "line": 55
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
                      2445,
                      2450
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 55
                      },
                      "start": {
                        "column": 73,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    2435,
                    2450
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 55
                    },
                    "start": {
                      "column": 63,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                2414,
                2452
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 55
                },
                "start": {
                  "column": 42,
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
              "name": "uint32Array",
              "optional": false,
              "range": [
                2378,
                2389
              ],
              "loc": {
                "end": {
                  "column": 17,
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
                2390,
                2404
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 55
                },
                "start": {
                  "column": 18,
                  "line": 55
                }
              }
            },
            "range": [
              2378,
              2404
            ],
            "loc": {
              "end": {
                "column": 32,
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
            2378,
            2453
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 55
            },
            "start": {
              "column": 6,
              "line": 55
            }
          }
        },
        "range": [
          2372,
          2453
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        2372,
        2454
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 55
        },
        "start": {
          "column": 0,
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
            "name": "float32Array",
            "optional": false,
            "range": [
              2468,
              2480
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 57
              },
              "start": {
                "column": 6,
                "line": 57
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
                  2500,
                  2501
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 57
                  },
                  "start": {
                    "column": 38,
                    "line": 57
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
                2487,
                2499
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 57
                },
                "start": {
                  "column": 25,
                  "line": 57
                }
              }
            },
            "range": [
              2483,
              2502
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 57
              },
              "start": {
                "column": 21,
                "line": 57
              }
            }
          },
          "range": [
            2468,
            2502
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 57
            },
            "start": {
              "column": 6,
              "line": 57
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2462,
        2503
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
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
            2504,
            2507
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 58
            },
            "start": {
              "column": 0,
              "line": 58
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
                2510,
                2522
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
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                2523,
                2537
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 58
                },
                "start": {
                  "column": 19,
                  "line": 58
                }
              }
            },
            "range": [
              2510,
              2537
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 58
              },
              "start": {
                "column": 6,
                "line": 58
              }
            }
          },
          "optional": false,
          "range": [
            2510,
            2539
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 58
            },
            "start": {
              "column": 6,
              "line": 58
            }
          }
        },
        "range": [
          2504,
          2539
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 58
          },
          "start": {
            "column": 0,
            "line": 58
          }
        }
      },
      "range": [
        2504,
        2540
      ],
      "loc": {
        "end": {
          "column": 36,
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
            2547,
            2550
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
          "arguments": [
            {
              "type": "Literal",
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                2581,
                2588
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 59
                },
                "start": {
                  "column": 34,
                  "line": 59
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
                2553,
                2565
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
                2566,
                2580
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
              2553,
              2580
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
            2553,
            2589
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 59
            },
            "start": {
              "column": 6,
              "line": 59
            }
          }
        },
        "range": [
          2547,
          2589
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 59
          },
          "start": {
            "column": 0,
            "line": 59
          }
        }
      },
      "range": [
        2547,
        2590
      ],
      "loc": {
        "end": {
          "column": 43,
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
            2597,
            2600
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
                2631,
                2638
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
                      2642,
                      2647
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 60
                      },
                      "start": {
                        "column": 45,
                        "line": 60
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
                      2649,
                      2659
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 60
                      },
                      "start": {
                        "column": 52,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    2642,
                    2659
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 60
                    },
                    "start": {
                      "column": 45,
                      "line": 60
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
                      2661,
                      2669
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 60
                      },
                      "start": {
                        "column": 64,
                        "line": 60
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
                      2671,
                      2676
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 60
                      },
                      "start": {
                        "column": 74,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    2661,
                    2676
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 60
                    },
                    "start": {
                      "column": 64,
                      "line": 60
                    }
                  }
                }
              ],
              "range": [
                2640,
                2678
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 60
                },
                "start": {
                  "column": 43,
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
              "name": "float32Array",
              "optional": false,
              "range": [
                2603,
                2615
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
                2616,
                2630
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
              2603,
              2630
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
            2603,
            2679
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 60
            },
            "start": {
              "column": 6,
              "line": 60
            }
          }
        },
        "range": [
          2597,
          2679
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 60
          },
          "start": {
            "column": 0,
            "line": 60
          }
        }
      },
      "range": [
        2597,
        2680
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
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
              2694,
              2706
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 62
              },
              "start": {
                "column": 6,
                "line": 62
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
                  2726,
                  2727
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 62
                  },
                  "start": {
                    "column": 38,
                    "line": 62
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
                2713,
                2725
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 62
                },
                "start": {
                  "column": 25,
                  "line": 62
                }
              }
            },
            "range": [
              2709,
              2728
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 62
              },
              "start": {
                "column": 21,
                "line": 62
              }
            }
          },
          "range": [
            2694,
            2728
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 62
            },
            "start": {
              "column": 6,
              "line": 62
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2688,
        2729
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
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
            2730,
            2733
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 63
            },
            "start": {
              "column": 0,
              "line": 63
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
                2736,
                2748
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 63
                },
                "start": {
                  "column": 6,
                  "line": 63
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
                2749,
                2763
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 63
                },
                "start": {
                  "column": 19,
                  "line": 63
                }
              }
            },
            "range": [
              2736,
              2763
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 63
              },
              "start": {
                "column": 6,
                "line": 63
              }
            }
          },
          "optional": false,
          "range": [
            2736,
            2765
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 63
            },
            "start": {
              "column": 6,
              "line": 63
            }
          }
        },
        "range": [
          2730,
          2765
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 63
          },
          "start": {
            "column": 0,
            "line": 63
          }
        }
      },
      "range": [
        2730,
        2766
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
            2773,
            2776
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 64
            },
            "start": {
              "column": 0,
              "line": 64
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
                2807,
                2814
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 64
                },
                "start": {
                  "column": 34,
                  "line": 64
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
                2779,
                2791
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 64
                },
                "start": {
                  "column": 6,
                  "line": 64
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
                2792,
                2806
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 64
                },
                "start": {
                  "column": 19,
                  "line": 64
                }
              }
            },
            "range": [
              2779,
              2806
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 64
              },
              "start": {
                "column": 6,
                "line": 64
              }
            }
          },
          "optional": false,
          "range": [
            2779,
            2815
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 64
            },
            "start": {
              "column": 6,
              "line": 64
            }
          }
        },
        "range": [
          2773,
          2815
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 64
          },
          "start": {
            "column": 0,
            "line": 64
          }
        }
      },
      "range": [
        2773,
        2816
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
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
            2823,
            2826
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 65
            },
            "start": {
              "column": 0,
              "line": 65
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
                2857,
                2864
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 65
                },
                "start": {
                  "column": 34,
                  "line": 65
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
                      2868,
                      2873
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 65
                      },
                      "start": {
                        "column": 45,
                        "line": 65
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
                      2875,
                      2885
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 65
                      },
                      "start": {
                        "column": 52,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    2868,
                    2885
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 65
                    },
                    "start": {
                      "column": 45,
                      "line": 65
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
                      2887,
                      2895
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 65
                      },
                      "start": {
                        "column": 64,
                        "line": 65
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
                      2897,
                      2902
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 65
                      },
                      "start": {
                        "column": 74,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    2887,
                    2902
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 65
                    },
                    "start": {
                      "column": 64,
                      "line": 65
                    }
                  }
                }
              ],
              "range": [
                2866,
                2904
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 65
                },
                "start": {
                  "column": 43,
                  "line": 65
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
                2829,
                2841
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 65
                },
                "start": {
                  "column": 6,
                  "line": 65
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
                2842,
                2856
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 65
                },
                "start": {
                  "column": 19,
                  "line": 65
                }
              }
            },
            "range": [
              2829,
              2856
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 65
              },
              "start": {
                "column": 6,
                "line": 65
              }
            }
          },
          "optional": false,
          "range": [
            2829,
            2905
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 65
            },
            "start": {
              "column": 6,
              "line": 65
            }
          }
        },
        "range": [
          2823,
          2905
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 65
          },
          "start": {
            "column": 0,
            "line": 65
          }
        }
      },
      "range": [
        2823,
        2906
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
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
            "name": "bigInt64Array",
            "optional": false,
            "range": [
              2920,
              2933
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 67
              },
              "start": {
                "column": 6,
                "line": 67
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
                  2954,
                  2955
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 67
                  },
                  "start": {
                    "column": 40,
                    "line": 67
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "range": [
                2940,
                2953
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 67
                },
                "start": {
                  "column": 26,
                  "line": 67
                }
              }
            },
            "range": [
              2936,
              2956
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 67
              },
              "start": {
                "column": 22,
                "line": 67
              }
            }
          },
          "range": [
            2920,
            2956
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 67
            },
            "start": {
              "column": 6,
              "line": 67
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2914,
        2957
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
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
            2958,
            2961
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 68
            },
            "start": {
              "column": 0,
              "line": 68
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
              "name": "bigInt64Array",
              "optional": false,
              "range": [
                2964,
                2977
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 68
                },
                "start": {
                  "column": 6,
                  "line": 68
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
                2978,
                2992
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 68
                },
                "start": {
                  "column": 20,
                  "line": 68
                }
              }
            },
            "range": [
              2964,
              2992
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 68
              },
              "start": {
                "column": 6,
                "line": 68
              }
            }
          },
          "optional": false,
          "range": [
            2964,
            2994
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 68
            },
            "start": {
              "column": 6,
              "line": 68
            }
          }
        },
        "range": [
          2958,
          2994
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 68
          },
          "start": {
            "column": 0,
            "line": 68
          }
        }
      },
      "range": [
        2958,
        2995
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
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
            3002,
            3005
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 69
            },
            "start": {
              "column": 0,
              "line": 69
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
                3037,
                3044
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 69
                },
                "start": {
                  "column": 35,
                  "line": 69
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
              "name": "bigInt64Array",
              "optional": false,
              "range": [
                3008,
                3021
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 69
                },
                "start": {
                  "column": 6,
                  "line": 69
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
                3022,
                3036
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 69
                },
                "start": {
                  "column": 20,
                  "line": 69
                }
              }
            },
            "range": [
              3008,
              3036
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 69
              },
              "start": {
                "column": 6,
                "line": 69
              }
            }
          },
          "optional": false,
          "range": [
            3008,
            3045
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 69
            },
            "start": {
              "column": 6,
              "line": 69
            }
          }
        },
        "range": [
          3002,
          3045
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 69
          },
          "start": {
            "column": 0,
            "line": 69
          }
        }
      },
      "range": [
        3002,
        3046
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
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
            3053,
            3056
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 70
            },
            "start": {
              "column": 0,
              "line": 70
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
                3088,
                3095
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 70
                },
                "start": {
                  "column": 35,
                  "line": 70
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
                      3099,
                      3104
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 70
                      },
                      "start": {
                        "column": 46,
                        "line": 70
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
                      3106,
                      3116
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 70
                      },
                      "start": {
                        "column": 53,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    3099,
                    3116
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 70
                    },
                    "start": {
                      "column": 46,
                      "line": 70
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
                      3118,
                      3126
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 70
                      },
                      "start": {
                        "column": 65,
                        "line": 70
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
                      3128,
                      3133
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 70
                      },
                      "start": {
                        "column": 75,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    3118,
                    3133
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 70
                    },
                    "start": {
                      "column": 65,
                      "line": 70
                    }
                  }
                }
              ],
              "range": [
                3097,
                3135
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 70
                },
                "start": {
                  "column": 44,
                  "line": 70
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
              "name": "bigInt64Array",
              "optional": false,
              "range": [
                3059,
                3072
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 70
                },
                "start": {
                  "column": 6,
                  "line": 70
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
                3073,
                3087
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 70
                },
                "start": {
                  "column": 20,
                  "line": 70
                }
              }
            },
            "range": [
              3059,
              3087
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 70
              },
              "start": {
                "column": 6,
                "line": 70
              }
            }
          },
          "optional": false,
          "range": [
            3059,
            3136
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 70
            },
            "start": {
              "column": 6,
              "line": 70
            }
          }
        },
        "range": [
          3053,
          3136
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 70
          },
          "start": {
            "column": 0,
            "line": 70
          }
        }
      },
      "range": [
        3053,
        3137
      ],
      "loc": {
        "end": {
          "column": 84,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
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
            "name": "bigIntUint64Array",
            "optional": false,
            "range": [
              3151,
              3168
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 72
              },
              "start": {
                "column": 6,
                "line": 72
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
                  3190,
                  3191
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 72
                  },
                  "start": {
                    "column": 45,
                    "line": 72
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "range": [
                3175,
                3189
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 72
                },
                "start": {
                  "column": 30,
                  "line": 72
                }
              }
            },
            "range": [
              3171,
              3192
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 72
              },
              "start": {
                "column": 26,
                "line": 72
              }
            }
          },
          "range": [
            3151,
            3192
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 72
            },
            "start": {
              "column": 6,
              "line": 72
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3145,
        3193
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
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
            3194,
            3197
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 73
            },
            "start": {
              "column": 0,
              "line": 73
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
              "name": "bigIntUint64Array",
              "optional": false,
              "range": [
                3200,
                3217
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 73
                },
                "start": {
                  "column": 6,
                  "line": 73
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
                3218,
                3232
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 73
                },
                "start": {
                  "column": 24,
                  "line": 73
                }
              }
            },
            "range": [
              3200,
              3232
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 73
              },
              "start": {
                "column": 6,
                "line": 73
              }
            }
          },
          "optional": false,
          "range": [
            3200,
            3234
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 73
            },
            "start": {
              "column": 6,
              "line": 73
            }
          }
        },
        "range": [
          3194,
          3234
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 73
          },
          "start": {
            "column": 0,
            "line": 73
          }
        }
      },
      "range": [
        3194,
        3235
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
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
            3242,
            3245
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 74
            },
            "start": {
              "column": 0,
              "line": 74
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
                3281,
                3288
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 74
                },
                "start": {
                  "column": 39,
                  "line": 74
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
              "name": "bigIntUint64Array",
              "optional": false,
              "range": [
                3248,
                3265
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 74
                },
                "start": {
                  "column": 6,
                  "line": 74
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
                3266,
                3280
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 74
                },
                "start": {
                  "column": 24,
                  "line": 74
                }
              }
            },
            "range": [
              3248,
              3280
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 74
              },
              "start": {
                "column": 6,
                "line": 74
              }
            }
          },
          "optional": false,
          "range": [
            3248,
            3289
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 74
            },
            "start": {
              "column": 6,
              "line": 74
            }
          }
        },
        "range": [
          3242,
          3289
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 74
          },
          "start": {
            "column": 0,
            "line": 74
          }
        }
      },
      "range": [
        3242,
        3290
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
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
            3297,
            3300
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 75
            },
            "start": {
              "column": 0,
              "line": 75
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
                3336,
                3343
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 75
                },
                "start": {
                  "column": 39,
                  "line": 75
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
                      3347,
                      3352
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 75
                      },
                      "start": {
                        "column": 50,
                        "line": 75
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
                      3354,
                      3364
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 75
                      },
                      "start": {
                        "column": 57,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    3347,
                    3364
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 75
                    },
                    "start": {
                      "column": 50,
                      "line": 75
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
                      3366,
                      3374
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 75
                      },
                      "start": {
                        "column": 69,
                        "line": 75
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
                      3376,
                      3381
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 75
                      },
                      "start": {
                        "column": 79,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    3366,
                    3381
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 75
                    },
                    "start": {
                      "column": 69,
                      "line": 75
                    }
                  }
                }
              ],
              "range": [
                3345,
                3383
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 75
                },
                "start": {
                  "column": 48,
                  "line": 75
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
              "name": "bigIntUint64Array",
              "optional": false,
              "range": [
                3303,
                3320
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 75
                },
                "start": {
                  "column": 6,
                  "line": 75
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
                3321,
                3335
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 75
                },
                "start": {
                  "column": 24,
                  "line": 75
                }
              }
            },
            "range": [
              3303,
              3335
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 75
              },
              "start": {
                "column": 6,
                "line": 75
              }
            }
          },
          "optional": false,
          "range": [
            3303,
            3384
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 75
            },
            "start": {
              "column": 6,
              "line": 75
            }
          }
        },
        "range": [
          3297,
          3384
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 75
          },
          "start": {
            "column": 0,
            "line": 75
          }
        }
      },
      "range": [
        3297,
        3385
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 76
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
