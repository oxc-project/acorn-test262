__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    840
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
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                14
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        9,
                        10
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 1
                        },
                        "start": {
                          "column": 9,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      9,
                      10
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 1
                      },
                      "start": {
                        "column": 9,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        13,
                        14
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 1
                        },
                        "start": {
                          "column": 13,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      13,
                      14
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 1
                      },
                      "start": {
                        "column": 13,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  9,
                  14
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
              6,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                35,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 35,
                  "line": 1
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "range": [
                    17,
                    21
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 1
                    },
                    "start": {
                      "column": 17,
                      "line": 1
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "range": [
                    22,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 22,
                      "line": 1
                    }
                  }
                },
                "range": [
                  17,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "range": [
                17,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "range": [
              17,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          },
          "range": [
            6,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
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
        37
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert",
        "optional": false,
        "range": [
          55,
          61
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 2
              },
              "start": {
                "column": 25,
                "line": 2
              }
            },
            "range": [
              63,
              71
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                65,
                71
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              }
            }
          },
          "range": [
            62,
            71
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 2
            },
            "start": {
              "column": 24,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 50,
            "line": 2
          },
          "start": {
            "column": 34,
            "line": 2
          }
        },
        "range": [
          72,
          88
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "range": [
              82,
              83
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 2
              },
              "start": {
                "column": 44,
                "line": 2
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 2
              },
              "start": {
                "column": 49,
                "line": 2
              }
            },
            "range": [
              87,
              88
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  87,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 2
                  },
                  "start": {
                    "column": 49,
                    "line": 2
                  }
                }
              },
              "range": [
                87,
                88
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 2
                },
                "start": {
                  "column": 49,
                  "line": 2
                }
              }
            }
          },
          "range": [
            74,
            88
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 2
            },
            "start": {
              "column": 36,
              "line": 2
            }
          }
        }
      },
      "range": [
        38,
        89
      ],
      "loc": {
        "end": {
          "column": 51,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              97,
              98
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 3
              },
              "start": {
                "column": 7,
                "line": 3
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assert",
          "optional": false,
          "range": [
            90,
            96
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          90,
          99
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        90,
        100
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        101,
        169
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
              "name": "o",
              "optional": false,
              "range": [
                112,
                113
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      123,
                      124
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 5
                      },
                      "start": {
                        "column": 5,
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      127,
                      128
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
                  "range": [
                    122,
                    128
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
                }
              ],
              "range": [
                116,
                169
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              112,
              169
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          108,
          169
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
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
                  "column": 10,
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 9
                }
              },
              "range": [
                179,
                182
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    181,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 9
                    },
                    "start": {
                      "column": 9,
                      "line": 9
                    }
                  }
                },
                "range": [
                  181,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              178,
              182
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              185,
              186
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 13,
                "line": 9
              }
            }
          },
          "range": [
            178,
            186
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        172,
        186
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        187,
        246
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
              "name": "o2",
              "optional": false,
              "range": [
                198,
                200
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      210,
                      211
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 11
                      },
                      "start": {
                        "column": 5,
                        "line": 11
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
                      214,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    209,
                    215
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
                }
              ],
              "range": [
                203,
                246
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 12
                },
                "start": {
                  "column": 16,
                  "line": 10
                }
              }
            },
            "range": [
              198,
              246
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 12
              },
              "start": {
                "column": 11,
                "line": 10
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          194,
          246
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        267,
        293
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
              "name": "o3",
              "optional": false,
              "range": [
                278,
                280
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      286,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 15
                      },
                      "start": {
                        "column": 19,
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      290,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 15
                      },
                      "start": {
                        "column": 23,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    285,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 15
                    },
                    "start": {
                      "column": 18,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                283,
                293
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 15
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            },
            "range": [
              278,
              293
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 15
              },
              "start": {
                "column": 11,
                "line": 15
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          274,
          293
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 26,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        294,
        322
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
              "name": "o31",
              "optional": false,
              "range": [
                305,
                308
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        315,
                        316
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 16
                        },
                        "start": {
                          "column": 21,
                          "line": 16
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      314,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
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
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      319,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 16
                      },
                      "start": {
                        "column": 25,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    313,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 16
                    },
                    "start": {
                      "column": 19,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                311,
                322
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
                }
              }
            },
            "range": [
              305,
              322
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 16
              },
              "start": {
                "column": 11,
                "line": 16
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          301,
          322
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 28,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        324,
        353
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
              "name": "o32",
              "optional": false,
              "range": [
                335,
                338
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        344,
                        345
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 18
                        },
                        "start": {
                          "column": 20,
                          "line": 18
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        346,
                        347
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 18
                        },
                        "start": {
                          "column": 22,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      344,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 18
                      },
                      "start": {
                        "column": 20,
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      350,
                      351
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
                  "range": [
                    343,
                    351
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
                }
              ],
              "range": [
                341,
                353
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            },
            "range": [
              335,
              353
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 18
              },
              "start": {
                "column": 11,
                "line": 18
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          331,
          353
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 18
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 29,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "u",
            "optional": false,
            "range": [
              376,
              377
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                380,
                386
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              380,
              388
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            376,
            388
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        372,
        389
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        390,
        457
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
              "name": "o4",
              "optional": false,
              "range": [
                401,
                403
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      413,
                      414
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 22
                      },
                      "start": {
                        "column": 5,
                        "line": 22
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
                      417,
                      418
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    412,
                    418
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
                }
              ],
              "range": [
                406,
                457
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 23
                },
                "start": {
                  "column": 16,
                  "line": 21
                }
              }
            },
            "range": [
              401,
              457
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 21
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          397,
          457
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 21
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        459,
        512
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
              "name": "o5",
              "optional": false,
              "range": [
                470,
                472
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 25
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "range": [
                        482,
                        488
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 26
                        },
                        "start": {
                          "column": 5,
                          "line": 26
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      482,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 26
                      },
                      "start": {
                        "column": 5,
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      493,
                      494
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 26
                      },
                      "start": {
                        "column": 16,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    481,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 26
                    },
                    "start": {
                      "column": 4,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                475,
                512
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 27
                },
                "start": {
                  "column": 16,
                  "line": 25
                }
              }
            },
            "range": [
              470,
              512
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 27
              },
              "start": {
                "column": 11,
                "line": 25
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          466,
          512
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
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
            "name": "uu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              },
              "range": [
                522,
                537
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    531,
                    537
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 29
                    },
                    "start": {
                      "column": 17,
                      "line": 29
                    }
                  }
                },
                "range": [
                  524,
                  537
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 29
                  },
                  "start": {
                    "column": 10,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              520,
              537
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
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                540,
                546
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 29
                },
                "start": {
                  "column": 26,
                  "line": 29
                }
              }
            },
            "optional": false,
            "range": [
              540,
              548
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 29
              },
              "start": {
                "column": 26,
                "line": 29
              }
            }
          },
          "range": [
            520,
            548
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        514,
        549
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        550,
        598
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
              "name": "o6",
              "optional": false,
              "range": [
                561,
                563
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
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "uu",
                    "optional": false,
                    "range": [
                      574,
                      576
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 31
                      },
                      "start": {
                        "column": 5,
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      579,
                      580
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 31
                      },
                      "start": {
                        "column": 10,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    573,
                    580
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 31
                    },
                    "start": {
                      "column": 4,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                567,
                598
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 32
                },
                "start": {
                  "column": 17,
                  "line": 30
                }
              }
            },
            "range": [
              561,
              598
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 32
              },
              "start": {
                "column": 11,
                "line": 30
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          557,
          598
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 7,
            "line": 30
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 30
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
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                629,
                630
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 35
                },
                "start": {
                  "column": 28,
                  "line": 35
                }
              }
            },
            "range": [
              622,
              631
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 35
              },
              "start": {
                "column": 21,
                "line": 35
              }
            }
          }
        ],
        "range": [
          620,
          633
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 35
          },
          "start": {
            "column": 19,
            "line": 35
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
          610,
          613
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 35
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 18,
            "line": 35
          },
          "start": {
            "column": 15,
            "line": 35
          }
        },
        "range": [
          616,
          619
        ],
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              618,
              619
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
            618,
            619
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
        }
      },
      "range": [
        601,
        633
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        634,
        685
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
              "name": "o7",
              "optional": false,
              "range": [
                645,
                647
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
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        657,
                        660
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 37
                        },
                        "start": {
                          "column": 5,
                          "line": 37
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      657,
                      662
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 37
                      },
                      "start": {
                        "column": 5,
                        "line": 37
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
                      665,
                      666
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 37
                      },
                      "start": {
                        "column": 13,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    656,
                    666
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 37
                    },
                    "start": {
                      "column": 4,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                650,
                684
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 38
                },
                "start": {
                  "column": 16,
                  "line": 36
                }
              }
            },
            "range": [
              645,
              684
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 38
              },
              "start": {
                "column": 11,
                "line": 36
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          641,
          685
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 38
          },
          "start": {
            "column": 7,
            "line": 36
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 38
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
            "name": "E",
            "optional": false,
            "range": [
              691,
              692
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      697,
                      698
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 40
                      },
                      "start": {
                        "column": 10,
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      700,
                      701
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 40
                      },
                      "start": {
                        "column": 13,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    697,
                    701
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 40
                    },
                    "start": {
                      "column": 10,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                695,
                703
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 40
                },
                "start": {
                  "column": 8,
                  "line": 40
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  707,
                  712
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 40
                  },
                  "start": {
                    "column": 20,
                    "line": 40
                  }
                }
              },
              "range": [
                707,
                712
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 40
                },
                "start": {
                  "column": 20,
                  "line": 40
                }
              }
            },
            "range": [
              695,
              712
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 40
              },
              "start": {
                "column": 8,
                "line": 40
              }
            }
          },
          "range": [
            691,
            712
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        687,
        712
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        713,
        757
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
              "name": "o8",
              "optional": false,
              "range": [
                726,
                728
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 41
                },
                "start": {
                  "column": 13,
                  "line": 41
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        738,
                        739
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 42
                        },
                        "start": {
                          "column": 5,
                          "line": 42
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        740,
                        741
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 42
                        },
                        "start": {
                          "column": 7,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      738,
                      741
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 42
                      },
                      "start": {
                        "column": 5,
                        "line": 42
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
                      744,
                      745
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 42
                      },
                      "start": {
                        "column": 11,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    737,
                    745
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                731,
                757
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 43
                },
                "start": {
                  "column": 18,
                  "line": 41
                }
              }
            },
            "range": [
              726,
              757
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 43
              },
              "start": {
                "column": 13,
                "line": 41
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          720,
          757
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 7,
            "line": 41
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 41
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
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        784,
                        785
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 45
                        },
                        "start": {
                          "column": 25,
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
                      "raw": "0",
                      "value": 0,
                      "range": [
                        787,
                        788
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 45
                        },
                        "start": {
                          "column": 28,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      784,
                      788
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 45
                      },
                      "start": {
                        "column": 25,
                        "line": 45
                      }
                    }
                  }
                ],
                "range": [
                  782,
                  790
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 45
                  },
                  "start": {
                    "column": 23,
                    "line": 45
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    794,
                    799
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 45
                    },
                    "start": {
                      "column": 35,
                      "line": 45
                    }
                  }
                },
                "range": [
                  794,
                  799
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 45
                  },
                  "start": {
                    "column": 35,
                    "line": 45
                  }
                }
              },
              "range": [
                782,
                799
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 45
                },
                "start": {
                  "column": 23,
                  "line": 45
                }
              }
            },
            "range": [
              775,
              799
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 45
              },
              "start": {
                "column": 16,
                "line": 45
              }
            }
          }
        ],
        "range": [
          773,
          801
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 45
          },
          "start": {
            "column": 14,
            "line": 45
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "range": [
          768,
          770
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 45
          },
          "start": {
            "column": 9,
            "line": 45
          }
        }
      },
      "params": [],
      "range": [
        759,
        801
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        802,
        839
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
              "name": "o9",
              "optional": false,
              "range": [
                815,
                817
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 46
                },
                "start": {
                  "column": 13,
                  "line": 46
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ns",
                        "optional": false,
                        "range": [
                          827,
                          829
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 47
                          },
                          "start": {
                            "column": 5,
                            "line": 47
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        827,
                        831
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 47
                        },
                        "start": {
                          "column": 5,
                          "line": 47
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        832,
                        833
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 47
                        },
                        "start": {
                          "column": 10,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      827,
                      833
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 47
                      },
                      "start": {
                        "column": 5,
                        "line": 47
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
                      836,
                      837
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 47
                      },
                      "start": {
                        "column": 14,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    826,
                    837
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                820,
                839
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 48
                },
                "start": {
                  "column": 18,
                  "line": 46
                }
              }
            },
            "range": [
              815,
              839
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 48
              },
              "start": {
                "column": 13,
                "line": 46
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          809,
          839
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 7,
            "line": 46
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 49
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
