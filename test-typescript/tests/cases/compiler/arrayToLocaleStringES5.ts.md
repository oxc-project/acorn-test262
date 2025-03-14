__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2681
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
            128,
            131
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
                153,
                160
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
                      164,
                      169
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
                      171,
                      181
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
                    164,
                    181
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
                      183,
                      191
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
                      193,
                      198
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
                    183,
                    198
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
                162,
                200
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
                134,
                137
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
                138,
                152
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
              134,
              152
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
            134,
            201
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
          128,
          201
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
        128,
        202
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
                234,
                251
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
                        245,
                        249
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
                      245,
                      249
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
                    245,
                    251
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
                  236,
                  251
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
              229,
              251
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
                    259,
                    263
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
                  255,
                  265
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
                    271,
                    275
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
                  267,
                  277
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
              254,
              278
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
            229,
            278
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
        223,
        279
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
            280,
            283
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
                286,
                291
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
                292,
                306
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
              286,
              306
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
            286,
            308
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
          280,
          308
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
        280,
        309
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
            316,
            319
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
                343,
                347
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
                322,
                327
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
                328,
                342
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
              322,
              342
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
            322,
            348
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
          316,
          348
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
        316,
        349
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
            369,
            372
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
                396,
                400
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
                      404,
                      412
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
                      414,
                      419
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
                    404,
                    419
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
                402,
                421
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
                375,
                380
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
                381,
                395
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
              375,
              395
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
            375,
            422
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
          369,
          422
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
        369,
        423
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
            "name": "int8Array",
            "optional": false,
            "range": [
              450,
              459
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
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
                  476,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 32,
                    "line": 12
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
                466,
                475
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 12
                },
                "start": {
                  "column": 22,
                  "line": 12
                }
              }
            },
            "range": [
              462,
              478
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 12
              },
              "start": {
                "column": 18,
                "line": 12
              }
            }
          },
          "range": [
            450,
            478
          ],
          "loc": {
            "end": {
              "column": 34,
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
        444,
        479
      ],
      "loc": {
        "end": {
          "column": 35,
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
            480,
            483
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
              "name": "int8Array",
              "optional": false,
              "range": [
                486,
                495
              ],
              "loc": {
                "end": {
                  "column": 15,
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
                496,
                510
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 16,
                  "line": 13
                }
              }
            },
            "range": [
              486,
              510
            ],
            "loc": {
              "end": {
                "column": 30,
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
            486,
            512
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        },
        "range": [
          480,
          512
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        480,
        513
      ],
      "loc": {
        "end": {
          "column": 33,
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
            520,
            523
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
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                551,
                558
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 14
                },
                "start": {
                  "column": 31,
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
              "name": "int8Array",
              "optional": false,
              "range": [
                526,
                535
              ],
              "loc": {
                "end": {
                  "column": 15,
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
                536,
                550
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 14
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              }
            },
            "range": [
              526,
              550
            ],
            "loc": {
              "end": {
                "column": 30,
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
            526,
            559
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        },
        "range": [
          520,
          559
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        520,
        560
      ],
      "loc": {
        "end": {
          "column": 40,
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
            580,
            583
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
              "raw": "'en-US'",
              "value": "en-US",
              "range": [
                611,
                618
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 15
                },
                "start": {
                  "column": 31,
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
                      622,
                      627
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 15
                      },
                      "start": {
                        "column": 42,
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
                      629,
                      639
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 15
                      },
                      "start": {
                        "column": 49,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    622,
                    639
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 15
                    },
                    "start": {
                      "column": 42,
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
                      641,
                      649
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 15
                      },
                      "start": {
                        "column": 61,
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
                      651,
                      656
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 15
                      },
                      "start": {
                        "column": 71,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    641,
                    656
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 15
                    },
                    "start": {
                      "column": 61,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                620,
                658
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 15
                },
                "start": {
                  "column": 40,
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
              "name": "int8Array",
              "optional": false,
              "range": [
                586,
                595
              ],
              "loc": {
                "end": {
                  "column": 15,
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
                596,
                610
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            },
            "range": [
              586,
              610
            ],
            "loc": {
              "end": {
                "column": 30,
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
            586,
            659
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        },
        "range": [
          580,
          659
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        580,
        660
      ],
      "loc": {
        "end": {
          "column": 80,
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
            "name": "uint8Array",
            "optional": false,
            "range": [
              687,
              697
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
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
                  715,
                  716
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 17
                  },
                  "start": {
                    "column": 34,
                    "line": 17
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
                704,
                714
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 17
                },
                "start": {
                  "column": 23,
                  "line": 17
                }
              }
            },
            "range": [
              700,
              717
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 17
              },
              "start": {
                "column": 19,
                "line": 17
              }
            }
          },
          "range": [
            687,
            717
          ],
          "loc": {
            "end": {
              "column": 36,
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
        681,
        718
      ],
      "loc": {
        "end": {
          "column": 37,
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
            719,
            722
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
              "name": "uint8Array",
              "optional": false,
              "range": [
                725,
                735
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                736,
                750
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            },
            "range": [
              725,
              750
            ],
            "loc": {
              "end": {
                "column": 31,
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
            725,
            752
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        },
        "range": [
          719,
          752
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        719,
        753
      ],
      "loc": {
        "end": {
          "column": 34,
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
            760,
            763
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
                792,
                799
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 19
                },
                "start": {
                  "column": 32,
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
              "name": "uint8Array",
              "optional": false,
              "range": [
                766,
                776
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                777,
                791
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 19
                },
                "start": {
                  "column": 17,
                  "line": 19
                }
              }
            },
            "range": [
              766,
              791
            ],
            "loc": {
              "end": {
                "column": 31,
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
            766,
            800
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        },
        "range": [
          760,
          800
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        760,
        801
      ],
      "loc": {
        "end": {
          "column": 41,
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
            821,
            824
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
                  "column": 39,
                  "line": 20
                },
                "start": {
                  "column": 32,
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
                        "column": 48,
                        "line": 20
                      },
                      "start": {
                        "column": 43,
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
                        "column": 60,
                        "line": 20
                      },
                      "start": {
                        "column": 50,
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
                      "column": 60,
                      "line": 20
                    },
                    "start": {
                      "column": 43,
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
                        "column": 70,
                        "line": 20
                      },
                      "start": {
                        "column": 62,
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
                        "column": 77,
                        "line": 20
                      },
                      "start": {
                        "column": 72,
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
                      "column": 77,
                      "line": 20
                    },
                    "start": {
                      "column": 62,
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
                  "column": 79,
                  "line": 20
                },
                "start": {
                  "column": 41,
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
              "name": "uint8Array",
              "optional": false,
              "range": [
                827,
                837
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                  "column": 31,
                  "line": 20
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              }
            },
            "range": [
              827,
              852
            ],
            "loc": {
              "end": {
                "column": 31,
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
            827,
            901
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        },
        "range": [
          821,
          901
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        821,
        902
      ],
      "loc": {
        "end": {
          "column": 81,
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
            "name": "uint8ClampedArray",
            "optional": false,
            "range": [
              929,
              946
            ],
            "loc": {
              "end": {
                "column": 23,
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
                  971,
                  972
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 22
                  },
                  "start": {
                    "column": 48,
                    "line": 22
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
                953,
                970
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 22
                },
                "start": {
                  "column": 30,
                  "line": 22
                }
              }
            },
            "range": [
              949,
              973
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 22
              },
              "start": {
                "column": 26,
                "line": 22
              }
            }
          },
          "range": [
            929,
            973
          ],
          "loc": {
            "end": {
              "column": 50,
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
        923,
        974
      ],
      "loc": {
        "end": {
          "column": 51,
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
            975,
            978
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
              "name": "uint8ClampedArray",
              "optional": false,
              "range": [
                981,
                998
              ],
              "loc": {
                "end": {
                  "column": 23,
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
                999,
                1013
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 23
                },
                "start": {
                  "column": 24,
                  "line": 23
                }
              }
            },
            "range": [
              981,
              1013
            ],
            "loc": {
              "end": {
                "column": 38,
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
            981,
            1015
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        },
        "range": [
          975,
          1015
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        975,
        1016
      ],
      "loc": {
        "end": {
          "column": 41,
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
            1023,
            1026
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
                1062,
                1069
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 24
                },
                "start": {
                  "column": 39,
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
              "name": "uint8ClampedArray",
              "optional": false,
              "range": [
                1029,
                1046
              ],
              "loc": {
                "end": {
                  "column": 23,
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
                1047,
                1061
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 24
                },
                "start": {
                  "column": 24,
                  "line": 24
                }
              }
            },
            "range": [
              1029,
              1061
            ],
            "loc": {
              "end": {
                "column": 38,
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
            1029,
            1070
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        },
        "range": [
          1023,
          1070
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        1023,
        1071
      ],
      "loc": {
        "end": {
          "column": 48,
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
            1091,
            1094
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
                1130,
                1137
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 25
                },
                "start": {
                  "column": 39,
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
                      1141,
                      1146
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 25
                      },
                      "start": {
                        "column": 50,
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
                      1148,
                      1158
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 25
                      },
                      "start": {
                        "column": 57,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    1141,
                    1158
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 25
                    },
                    "start": {
                      "column": 50,
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
                      1160,
                      1168
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 25
                      },
                      "start": {
                        "column": 69,
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
                      1170,
                      1175
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 25
                      },
                      "start": {
                        "column": 79,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    1160,
                    1175
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 25
                    },
                    "start": {
                      "column": 69,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                1139,
                1177
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 25
                },
                "start": {
                  "column": 48,
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
              "name": "uint8ClampedArray",
              "optional": false,
              "range": [
                1097,
                1114
              ],
              "loc": {
                "end": {
                  "column": 23,
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
                1115,
                1129
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 25
                },
                "start": {
                  "column": 24,
                  "line": 25
                }
              }
            },
            "range": [
              1097,
              1129
            ],
            "loc": {
              "end": {
                "column": 38,
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
            1097,
            1178
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        },
        "range": [
          1091,
          1178
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        1091,
        1179
      ],
      "loc": {
        "end": {
          "column": 88,
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
            "name": "int16Array",
            "optional": false,
            "range": [
              1206,
              1216
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
                  1234,
                  1235
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
              "name": "Int16Array",
              "optional": false,
              "range": [
                1223,
                1233
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
              1219,
              1236
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
            1206,
            1236
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
        1200,
        1237
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
            1238,
            1241
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
              "name": "int16Array",
              "optional": false,
              "range": [
                1244,
                1254
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
                1255,
                1269
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
              1244,
              1269
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
            1244,
            1271
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
          1238,
          1271
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
        1238,
        1272
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
            1279,
            1282
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
                1311,
                1318
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
              "name": "int16Array",
              "optional": false,
              "range": [
                1285,
                1295
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
                1296,
                1310
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
              1285,
              1310
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
            1285,
            1319
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
          1279,
          1319
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
        1279,
        1320
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
            1340,
            1343
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
                1372,
                1379
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
                      1383,
                      1388
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
                      1390,
                      1400
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
                    1383,
                    1400
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
                      1402,
                      1410
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
                      1412,
                      1417
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
                    1402,
                    1417
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
                1381,
                1419
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
              "name": "int16Array",
              "optional": false,
              "range": [
                1346,
                1356
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
                1357,
                1371
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
              1346,
              1371
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
            1346,
            1420
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
          1340,
          1420
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
        1340,
        1421
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
            "name": "uint16Array",
            "optional": false,
            "range": [
              1448,
              1459
            ],
            "loc": {
              "end": {
                "column": 17,
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
                  1478,
                  1479
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 32
                  },
                  "start": {
                    "column": 36,
                    "line": 32
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
                1466,
                1477
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 32
                },
                "start": {
                  "column": 24,
                  "line": 32
                }
              }
            },
            "range": [
              1462,
              1480
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 32
              },
              "start": {
                "column": 20,
                "line": 32
              }
            }
          },
          "range": [
            1448,
            1480
          ],
          "loc": {
            "end": {
              "column": 38,
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
        1442,
        1481
      ],
      "loc": {
        "end": {
          "column": 39,
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
            1482,
            1485
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
              "name": "uint16Array",
              "optional": false,
              "range": [
                1488,
                1499
              ],
              "loc": {
                "end": {
                  "column": 17,
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
                1500,
                1514
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 33
                },
                "start": {
                  "column": 18,
                  "line": 33
                }
              }
            },
            "range": [
              1488,
              1514
            ],
            "loc": {
              "end": {
                "column": 32,
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
            1488,
            1516
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        },
        "range": [
          1482,
          1516
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        1482,
        1517
      ],
      "loc": {
        "end": {
          "column": 35,
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
            1524,
            1527
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
                1557,
                1564
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 34
                },
                "start": {
                  "column": 33,
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
              "name": "uint16Array",
              "optional": false,
              "range": [
                1530,
                1541
              ],
              "loc": {
                "end": {
                  "column": 17,
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
                1542,
                1556
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 34
                },
                "start": {
                  "column": 18,
                  "line": 34
                }
              }
            },
            "range": [
              1530,
              1556
            ],
            "loc": {
              "end": {
                "column": 32,
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
            1530,
            1565
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 34
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        },
        "range": [
          1524,
          1565
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        1524,
        1566
      ],
      "loc": {
        "end": {
          "column": 42,
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
            1586,
            1589
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
                1619,
                1626
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 35
                },
                "start": {
                  "column": 33,
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
                      1630,
                      1635
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 35
                      },
                      "start": {
                        "column": 44,
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
                      1637,
                      1647
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 35
                      },
                      "start": {
                        "column": 51,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    1630,
                    1647
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 35
                    },
                    "start": {
                      "column": 44,
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
                      1649,
                      1657
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 35
                      },
                      "start": {
                        "column": 63,
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
                      1659,
                      1664
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 35
                      },
                      "start": {
                        "column": 73,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    1649,
                    1664
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 35
                    },
                    "start": {
                      "column": 63,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                1628,
                1666
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 35
                },
                "start": {
                  "column": 42,
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
              "name": "uint16Array",
              "optional": false,
              "range": [
                1592,
                1603
              ],
              "loc": {
                "end": {
                  "column": 17,
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
                1604,
                1618
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 35
                },
                "start": {
                  "column": 18,
                  "line": 35
                }
              }
            },
            "range": [
              1592,
              1618
            ],
            "loc": {
              "end": {
                "column": 32,
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
            1592,
            1667
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        },
        "range": [
          1586,
          1667
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        1586,
        1668
      ],
      "loc": {
        "end": {
          "column": 82,
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
            "name": "int32Array",
            "optional": false,
            "range": [
              1695,
              1705
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
                  1723,
                  1724
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
              "name": "Int32Array",
              "optional": false,
              "range": [
                1712,
                1722
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
              1708,
              1725
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
            1695,
            1725
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
        1689,
        1726
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
            1727,
            1730
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
              "name": "int32Array",
              "optional": false,
              "range": [
                1733,
                1743
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
                1744,
                1758
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
              1733,
              1758
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
            1733,
            1760
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
          1727,
          1760
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
        1727,
        1761
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
            1768,
            1771
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
                1800,
                1807
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
              "name": "int32Array",
              "optional": false,
              "range": [
                1774,
                1784
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
                1785,
                1799
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
              1774,
              1799
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
            1774,
            1808
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
          1768,
          1808
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
        1768,
        1809
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
            1829,
            1832
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
                1861,
                1868
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
                      1872,
                      1877
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
                      1879,
                      1889
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
                    1872,
                    1889
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
                      1891,
                      1899
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
                      1901,
                      1906
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
                    1891,
                    1906
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
                1870,
                1908
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
              "name": "int32Array",
              "optional": false,
              "range": [
                1835,
                1845
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
                1846,
                1860
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
              1835,
              1860
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
            1835,
            1909
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
          1829,
          1909
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
        1829,
        1910
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
            "name": "uint32Array",
            "optional": false,
            "range": [
              1937,
              1948
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
                  1967,
                  1968
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
              "name": "Uint32Array",
              "optional": false,
              "range": [
                1955,
                1966
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
              1951,
              1969
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
            1937,
            1969
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
        1931,
        1970
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
            1971,
            1974
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
              "name": "uint32Array",
              "optional": false,
              "range": [
                1977,
                1988
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
                1989,
                2003
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
              1977,
              2003
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
            1977,
            2005
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
          1971,
          2005
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
        1971,
        2006
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
            2013,
            2016
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
                2046,
                2053
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
              "name": "uint32Array",
              "optional": false,
              "range": [
                2019,
                2030
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
                2031,
                2045
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
              2019,
              2045
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
            2019,
            2054
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
          2013,
          2054
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
        2013,
        2055
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
            2075,
            2078
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
                2108,
                2115
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
                      2119,
                      2124
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
                      2126,
                      2136
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
                    2119,
                    2136
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
                      2138,
                      2146
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
                      2148,
                      2153
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
                    2138,
                    2153
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
                2117,
                2155
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
              "name": "uint32Array",
              "optional": false,
              "range": [
                2081,
                2092
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
                2093,
                2107
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
              2081,
              2107
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
            2081,
            2156
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
          2075,
          2156
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
        2075,
        2157
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
            "name": "float32Array",
            "optional": false,
            "range": [
              2184,
              2196
            ],
            "loc": {
              "end": {
                "column": 18,
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
                  2216,
                  2217
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 47
                  },
                  "start": {
                    "column": 38,
                    "line": 47
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
                2203,
                2215
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 47
                },
                "start": {
                  "column": 25,
                  "line": 47
                }
              }
            },
            "range": [
              2199,
              2218
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 47
              },
              "start": {
                "column": 21,
                "line": 47
              }
            }
          },
          "range": [
            2184,
            2218
          ],
          "loc": {
            "end": {
              "column": 40,
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
        2178,
        2219
      ],
      "loc": {
        "end": {
          "column": 41,
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
            2220,
            2223
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
              "name": "float32Array",
              "optional": false,
              "range": [
                2226,
                2238
              ],
              "loc": {
                "end": {
                  "column": 18,
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
                2239,
                2253
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 48
                },
                "start": {
                  "column": 19,
                  "line": 48
                }
              }
            },
            "range": [
              2226,
              2253
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
          "optional": false,
          "range": [
            2226,
            2255
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 48
            }
          }
        },
        "range": [
          2220,
          2255
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        2220,
        2256
      ],
      "loc": {
        "end": {
          "column": 36,
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
            2263,
            2266
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
                2297,
                2304
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 49
                },
                "start": {
                  "column": 34,
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
              "name": "float32Array",
              "optional": false,
              "range": [
                2269,
                2281
              ],
              "loc": {
                "end": {
                  "column": 18,
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
                2282,
                2296
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 49
                },
                "start": {
                  "column": 19,
                  "line": 49
                }
              }
            },
            "range": [
              2269,
              2296
            ],
            "loc": {
              "end": {
                "column": 33,
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
            2269,
            2305
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 49
            },
            "start": {
              "column": 6,
              "line": 49
            }
          }
        },
        "range": [
          2263,
          2305
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        2263,
        2306
      ],
      "loc": {
        "end": {
          "column": 43,
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
            2326,
            2329
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
                2360,
                2367
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 50
                },
                "start": {
                  "column": 34,
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
                      2371,
                      2376
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 50
                      },
                      "start": {
                        "column": 45,
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
                      2378,
                      2388
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 50
                      },
                      "start": {
                        "column": 52,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    2371,
                    2388
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 50
                    },
                    "start": {
                      "column": 45,
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
                      2390,
                      2398
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 50
                      },
                      "start": {
                        "column": 64,
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
                      2400,
                      2405
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 50
                      },
                      "start": {
                        "column": 74,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    2390,
                    2405
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 50
                    },
                    "start": {
                      "column": 64,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                2369,
                2407
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 50
                },
                "start": {
                  "column": 43,
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
              "name": "float32Array",
              "optional": false,
              "range": [
                2332,
                2344
              ],
              "loc": {
                "end": {
                  "column": 18,
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
                2345,
                2359
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 50
                },
                "start": {
                  "column": 19,
                  "line": 50
                }
              }
            },
            "range": [
              2332,
              2359
            ],
            "loc": {
              "end": {
                "column": 33,
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
            2332,
            2408
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 50
            },
            "start": {
              "column": 6,
              "line": 50
            }
          }
        },
        "range": [
          2326,
          2408
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        2326,
        2409
      ],
      "loc": {
        "end": {
          "column": 83,
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
            "name": "float64Array",
            "optional": false,
            "range": [
              2436,
              2448
            ],
            "loc": {
              "end": {
                "column": 18,
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
                  2468,
                  2469
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 52
                  },
                  "start": {
                    "column": 38,
                    "line": 52
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
                2455,
                2467
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 52
                },
                "start": {
                  "column": 25,
                  "line": 52
                }
              }
            },
            "range": [
              2451,
              2470
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 52
              },
              "start": {
                "column": 21,
                "line": 52
              }
            }
          },
          "range": [
            2436,
            2470
          ],
          "loc": {
            "end": {
              "column": 40,
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
        2430,
        2471
      ],
      "loc": {
        "end": {
          "column": 41,
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
            2472,
            2475
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
              "name": "float64Array",
              "optional": false,
              "range": [
                2478,
                2490
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
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "range": [
                2491,
                2505
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 53
                },
                "start": {
                  "column": 19,
                  "line": 53
                }
              }
            },
            "range": [
              2478,
              2505
            ],
            "loc": {
              "end": {
                "column": 33,
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
            2478,
            2507
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 53
            },
            "start": {
              "column": 6,
              "line": 53
            }
          }
        },
        "range": [
          2472,
          2507
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
      "range": [
        2472,
        2508
      ],
      "loc": {
        "end": {
          "column": 36,
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
            2515,
            2518
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
                2549,
                2556
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 54
                },
                "start": {
                  "column": 34,
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
              "name": "float64Array",
              "optional": false,
              "range": [
                2521,
                2533
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
                2534,
                2548
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
              2521,
              2548
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
            2521,
            2557
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 54
            },
            "start": {
              "column": 6,
              "line": 54
            }
          }
        },
        "range": [
          2515,
          2557
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
      "range": [
        2515,
        2558
      ],
      "loc": {
        "end": {
          "column": 43,
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
            2578,
            2581
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
                2612,
                2619
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
                      2623,
                      2628
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 55
                      },
                      "start": {
                        "column": 45,
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
                      2630,
                      2640
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 55
                      },
                      "start": {
                        "column": 52,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    2623,
                    2640
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 55
                    },
                    "start": {
                      "column": 45,
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
                      2642,
                      2650
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 55
                      },
                      "start": {
                        "column": 64,
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
                      2652,
                      2657
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 55
                      },
                      "start": {
                        "column": 74,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    2642,
                    2657
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 55
                    },
                    "start": {
                      "column": 64,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                2621,
                2659
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 55
                },
                "start": {
                  "column": 43,
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
              "name": "float64Array",
              "optional": false,
              "range": [
                2584,
                2596
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
                2597,
                2611
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
              2584,
              2611
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
            2584,
            2660
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 55
            },
            "start": {
              "column": 6,
              "line": 55
            }
          }
        },
        "range": [
          2578,
          2660
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
      "range": [
        2578,
        2661
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 56
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
