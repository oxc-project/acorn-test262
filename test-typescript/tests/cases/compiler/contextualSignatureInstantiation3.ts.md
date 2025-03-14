__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    530
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    74,
                    75
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
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "range": [
                    64,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    70,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                },
                "range": [
                  64,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "range": [
                64,
                76
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              57,
              77
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          51,
          79
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 51,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            },
            "range": [
              24,
              29
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    26,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 1
                    },
                    "start": {
                      "column": 26,
                      "line": 1
                    }
                  }
                },
                "range": [
                  26,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
                    "line": 1
                  }
                }
              },
              "range": [
                26,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            }
          },
          "range": [
            19,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 32,
                "line": 1
              }
            },
            "range": [
              32,
              45
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 1
                      },
                      "start": {
                        "column": 36,
                        "line": 1
                      }
                    },
                    "range": [
                      36,
                      39
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          38,
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 1
                          },
                          "start": {
                            "column": 38,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        38,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
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
                    35,
                    39
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 1
                    },
                    "start": {
                      "column": 35,
                      "line": 1
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 1
                  },
                  "start": {
                    "column": 41,
                    "line": 1
                  }
                },
                "range": [
                  41,
                  45
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      44,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 1
                      },
                      "start": {
                        "column": 44,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    44,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 1
                    },
                    "start": {
                      "column": 44,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                34,
                45
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              }
            }
          },
          "range": [
            31,
            45
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 1
            },
            "start": {
              "column": 31,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 51,
            "line": 1
          },
          "start": {
            "column": 46,
            "line": 1
          }
        },
        "range": [
          46,
          51
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                48,
                49
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 1
                },
                "start": {
                  "column": 48,
                  "line": 1
                }
              }
            },
            "range": [
              48,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 48,
                "line": 1
              }
            }
          },
          "range": [
            48,
            51
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 1
            },
            "start": {
              "column": 48,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          18
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
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
            "out": false,
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        79
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                121,
                122
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              114,
              123
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          108,
          125
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 27,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "identity",
        "optional": false,
        "range": [
          90,
          98
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 22,
                "line": 5
              }
            },
            "range": [
              103,
              106
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  105,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 5
                  }
                }
              },
              "range": [
                105,
                106
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              }
            }
          },
          "range": [
            102,
            106
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        },
        "range": [
          98,
          101
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                99,
                100
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              99,
              100
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 5
              },
              "start": {
                "column": 18,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        81,
        125
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    169,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                168,
                171
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              161,
              172
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          155,
          174
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 28,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "singleton",
        "optional": false,
        "range": [
          136,
          145
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 23,
                "line": 9
              }
            },
            "range": [
              150,
              153
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  152,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 9
                  },
                  "start": {
                    "column": 25,
                    "line": 9
                  }
                }
              },
              "range": [
                152,
                153
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 9
                },
                "start": {
                  "column": 25,
                  "line": 9
                }
              }
            }
          },
          "range": [
            149,
            153
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 9
            },
            "start": {
              "column": 22,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 9
          },
          "start": {
            "column": 18,
            "line": 9
          }
        },
        "range": [
          145,
          148
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                146,
                147
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
            "out": false,
            "range": [
              146,
              147
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
          }
        ]
      },
      "range": [
        127,
        174
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "xs",
            "optional": false,
            "range": [
              180,
              182
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
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
                  186,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  189,
                  190
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
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  192,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 13
                  },
                  "start": {
                    "column": 16,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              185,
              194
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          },
          "range": [
            180,
            194
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        176,
        195
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 13
        },
        "start": {
          "column": 0,
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 16
                },
                "start": {
                  "column": 6,
                  "line": 16
                }
              },
              "range": [
                256,
                266
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    258,
                    264
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "range": [
                  258,
                  266
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
              }
            },
            "range": [
              254,
              266
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            254,
            266
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        250,
        267
      ],
      "loc": {
        "end": {
          "column": 17,
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
            "name": "v1",
            "optional": false,
            "range": [
              272,
              274
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "identity",
                "optional": false,
                "range": [
                  284,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 17
                  },
                  "start": {
                    "column": 16,
                    "line": 17
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
                "name": "xs",
                "optional": false,
                "range": [
                  277,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  280,
                  283
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 17
                  }
                }
              },
              "range": [
                277,
                283
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "optional": false,
            "range": [
              277,
              293
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 17
              },
              "start": {
                "column": 9,
                "line": 17
              }
            }
          },
          "range": [
            272,
            293
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        268,
        294
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "v1",
            "optional": false,
            "range": [
              329,
              331
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "xs",
                "optional": false,
                "range": [
                  338,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 18
                  },
                  "start": {
                    "column": 13,
                    "line": 18
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "identity",
                "optional": false,
                "range": [
                  342,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 18
                  },
                  "start": {
                    "column": 17,
                    "line": 18
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                334,
                337
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              334,
              351
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            329,
            351
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        325,
        352
      ],
      "loc": {
        "end": {
          "column": 27,
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 20
                },
                "start": {
                  "column": 6,
                  "line": 20
                }
              },
              "range": [
                389,
                401
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      391,
                      397
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
                  "range": [
                    391,
                    399
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
                  391,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              387,
              401
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": null,
          "range": [
            387,
            401
          ],
          "loc": {
            "end": {
              "column": 18,
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
      "kind": "var",
      "range": [
        383,
        402
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "v2",
            "optional": false,
            "range": [
              416,
              418
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "singleton",
                "optional": false,
                "range": [
                  428,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 21
                  },
                  "start": {
                    "column": 16,
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
                "name": "xs",
                "optional": false,
                "range": [
                  421,
                  423
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  424,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 21
                  },
                  "start": {
                    "column": 12,
                    "line": 21
                  }
                }
              },
              "range": [
                421,
                427
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              421,
              438
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          },
          "range": [
            416,
            438
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        412,
        439
      ],
      "loc": {
        "end": {
          "column": 27,
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
            "name": "v2",
            "optional": false,
            "range": [
              475,
              477
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "xs",
                "optional": false,
                "range": [
                  484,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 22
                  },
                  "start": {
                    "column": 13,
                    "line": 22
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "singleton",
                "optional": false,
                "range": [
                  488,
                  497
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 22
                  },
                  "start": {
                    "column": 17,
                    "line": 22
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                480,
                483
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              480,
              498
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "range": [
            475,
            498
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        471,
        499
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
