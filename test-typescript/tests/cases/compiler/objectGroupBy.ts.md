__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    334
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
            "name": "basic",
            "optional": false,
            "range": [
              6,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      30,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 1
                      },
                      "start": {
                        "column": 30,
                        "line": 1
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
                        "column": 34,
                        "line": 1
                      },
                      "start": {
                        "column": 33,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "8",
                    "value": 8,
                    "range": [
                      36,
                      37
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 1
                      },
                      "start": {
                        "column": 36,
                        "line": 1
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
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 29,
                    "line": 1
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Literal",
                    "raw": "'large'",
                    "value": "large",
                    "range": [
                      63,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 1
                      },
                      "start": {
                        "column": 63,
                        "line": 1
                      }
                    }
                  },
                  "consequent": {
                    "type": "Literal",
                    "raw": "'small'",
                    "value": "small",
                    "range": [
                      53,
                      60
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 1
                      },
                      "start": {
                        "column": 53,
                        "line": 1
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        45,
                        46
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 1
                        },
                        "start": {
                          "column": 45,
                          "line": 1
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "5",
                      "value": 5,
                      "range": [
                        49,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 1
                        },
                        "start": {
                          "column": 49,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      45,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 1
                      },
                      "start": {
                        "column": 45,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    45,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 1
                    },
                    "start": {
                      "column": 45,
                      "line": 1
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      40,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 1
                      },
                      "start": {
                        "column": 40,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  40,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 1
                  },
                  "start": {
                    "column": 40,
                    "line": 1
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
                "name": "Object",
                "optional": false,
                "range": [
                  14,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 1
                  },
                  "start": {
                    "column": 14,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "range": [
                  21,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              },
              "range": [
                14,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              14,
              71
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "range": [
            6,
            71
          ],
          "loc": {
            "end": {
              "column": 71,
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
        72
      ],
      "loc": {
        "end": {
          "column": 72,
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
            "name": "chars",
            "optional": false,
            "range": [
              80,
              85
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'a string'",
                "value": "a string",
                "range": [
                  103,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    120,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 3
                    },
                    "start": {
                      "column": 46,
                      "line": 3
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      115,
                      116
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 41,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  115,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 3
                  },
                  "start": {
                    "column": 41,
                    "line": 3
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
                "name": "Object",
                "optional": false,
                "range": [
                  88,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "range": [
                  95,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              },
              "range": [
                88,
                102
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              88,
              122
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "range": [
            80,
            122
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        74,
        123
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Employee",
        "optional": false,
        "range": [
          130,
          138
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                143,
                147
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 5
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
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              },
              "range": [
                147,
                155
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  149,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 30,
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
              143,
              156
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 5
              },
              "start": {
                "column": 18,
                "line": 5
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "role",
              "optional": false,
              "range": [
                157,
                161
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 5
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
                  "column": 54,
                  "line": 5
                },
                "start": {
                  "column": 36,
                  "line": 5
                }
              },
              "range": [
                161,
                179
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'ic'",
                      "value": "ic",
                      "range": [
                        163,
                        167
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 5
                        },
                        "start": {
                          "column": 38,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      163,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 5
                      },
                      "start": {
                        "column": 38,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'manager'",
                      "value": "manager",
                      "range": [
                        170,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 5
                        },
                        "start": {
                          "column": 45,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      170,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 5
                      },
                      "start": {
                        "column": 45,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  163,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 5
                  },
                  "start": {
                    "column": 38,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              157,
              179
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 5
              },
              "start": {
                "column": 32,
                "line": 5
              }
            }
          }
        ],
        "range": [
          141,
          181
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 5
          }
        }
      },
      "range": [
        125,
        181
      ],
      "loc": {
        "end": {
          "column": 56,
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
            "name": "employees",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              },
              "range": [
                197,
                212
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    202,
                    212
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Employee",
                        "optional": false,
                        "range": [
                          203,
                          211
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 6
                          },
                          "start": {
                            "column": 21,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        203,
                        211
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 6
                        },
                        "start": {
                          "column": 21,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 6
                    },
                    "start": {
                      "column": 20,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "range": [
                    199,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
                    }
                  }
                },
                "range": [
                  199,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              188,
              212
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "range": [
                219,
                222
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 6
                },
                "start": {
                  "column": 37,
                  "line": 6
                }
              }
            },
            "range": [
              215,
              224
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 6
              },
              "start": {
                "column": 33,
                "line": 6
              }
            }
          },
          "range": [
            188,
            224
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        182,
        225
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "byRole",
            "optional": false,
            "range": [
              232,
              238
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "employees",
                "optional": false,
                "range": [
                  256,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 7
                  },
                  "start": {
                    "column": 30,
                    "line": 7
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      272,
                      273
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 7
                      },
                      "start": {
                        "column": 46,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "role",
                    "optional": false,
                    "range": [
                      274,
                      278
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
                    272,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 7
                    },
                    "start": {
                      "column": 46,
                      "line": 7
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      267,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 7
                      },
                      "start": {
                        "column": 41,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  267,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 7
                  },
                  "start": {
                    "column": 41,
                    "line": 7
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
                "name": "Object",
                "optional": false,
                "range": [
                  241,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "range": [
                  248,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 7
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              },
              "range": [
                241,
                255
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              241,
              279
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 7
              }
            }
          },
          "range": [
            232,
            279
          ],
          "loc": {
            "end": {
              "column": 53,
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
        226,
        280
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "byNonKey",
            "optional": false,
            "range": [
              288,
              296
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
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "employees",
                "optional": false,
                "range": [
                  314,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 9
                  },
                  "start": {
                    "column": 32,
                    "line": 9
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    330,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 9
                    },
                    "start": {
                      "column": 48,
                      "line": 9
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      325,
                      326
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 43,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  325,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 9
                  },
                  "start": {
                    "column": 43,
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
                "name": "Object",
                "optional": false,
                "range": [
                  299,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 23,
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
                "name": "groupBy",
                "optional": false,
                "range": [
                  306,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              },
              "range": [
                299,
                313
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 9
                },
                "start": {
                  "column": 17,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              299,
              332
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 9
              },
              "start": {
                "column": 17,
                "line": 9
              }
            }
          },
          "range": [
            288,
            332
          ],
          "loc": {
            "end": {
              "column": 50,
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
        282,
        333
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
