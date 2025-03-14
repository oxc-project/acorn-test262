__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    666
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P",
        "optional": false,
        "range": [
          5,
          6
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [],
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
          {
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
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 1
                    },
                    "start": {
                      "column": 21,
                      "line": 1
                    }
                  },
                  "range": [
                    21,
                    29
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      23,
                      29
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 1
                      },
                      "start": {
                        "column": 23,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  17,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              15,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          }
        ],
        "range": [
          9,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
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
        33,
        59
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
              "name": "vLet",
              "optional": false,
              "range": [
                44,
                48
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    54,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  }
                },
                "range": [
                  54,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    52,
                    53
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
                "range": [
                  52,
                  53
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
              "range": [
                51,
                59
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "range": [
              44,
              59
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          40,
          59
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
    {
      "type": "ExportNamedDeclaration",
      "range": [
        60,
        90
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
              "name": "vConst",
              "optional": false,
              "range": [
                73,
                79
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "init": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    85,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
                      "line": 4
                    }
                  }
                },
                "range": [
                  85,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 25,
                    "line": 4
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    83,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                },
                "range": [
                  83,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              },
              "range": [
                82,
                90
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            },
            "range": [
              73,
              90
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          67,
          90
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 4
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
          "column": 30,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        92,
        127
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            125,
            127
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 6
            },
            "start": {
              "column": 33,
              "line": 6
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            108,
            110
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 6
            },
            "start": {
              "column": 16,
              "line": 6
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                111,
                112
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "optional": false,
            "right": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    118,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 6
                    },
                    "start": {
                      "column": 26,
                      "line": 6
                    }
                  }
                },
                "range": [
                  118,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 6
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    116,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 24,
                      "line": 6
                    }
                  }
                },
                "range": [
                  116,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 24,
                    "line": 6
                  }
                }
              },
              "range": [
                115,
                123
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            },
            "range": [
              111,
              123
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 6
              },
              "start": {
                "column": 19,
                "line": 6
              }
            }
          }
        ],
        "range": [
          99,
          127
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 35,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        129,
        201
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            199,
            201
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 8
            },
            "start": {
              "column": 70,
              "line": 8
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fnWithRequiredDefaultParam",
          "optional": false,
          "range": [
            145,
            171
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 8
            },
            "start": {
              "column": 16,
              "line": 8
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                172,
                173
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 8
                },
                "start": {
                  "column": 43,
                  "line": 8
                }
              }
            },
            "optional": false,
            "right": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    179,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 8
                    },
                    "start": {
                      "column": 50,
                      "line": 8
                    }
                  }
                },
                "range": [
                  179,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 8
                  },
                  "start": {
                    "column": 50,
                    "line": 8
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    177,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 8
                    },
                    "start": {
                      "column": 48,
                      "line": 8
                    }
                  }
                },
                "range": [
                  177,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 8
                  },
                  "start": {
                    "column": 48,
                    "line": 8
                  }
                }
              },
              "range": [
                176,
                184
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 8
                },
                "start": {
                  "column": 47,
                  "line": 8
                }
              }
            },
            "range": [
              172,
              184
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 8
              },
              "start": {
                "column": 43,
                "line": 8
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "req",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 68,
                  "line": 8
                },
                "start": {
                  "column": 60,
                  "line": 8
                }
              },
              "range": [
                189,
                197
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  191,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 8
                  },
                  "start": {
                    "column": 62,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              186,
              197
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 8
              },
              "start": {
                "column": 57,
                "line": 8
              }
            }
          }
        ],
        "range": [
          136,
          201
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 72,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        203,
        487
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            218,
            487
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "field",
                "optional": false,
                "range": [
                  224,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TSTypeAssertion",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      235,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    235,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      233,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 11
                      },
                      "start": {
                        "column": 13,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    233,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                },
                "range": [
                  232,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              },
              "range": [
                224,
                240
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
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
                "name": "optField",
                "optional": false,
                "range": [
                  245,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "optional": true,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TSTypeAssertion",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      260,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 19,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    260,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 12
                    },
                    "start": {
                      "column": 19,
                      "line": 12
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      258,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 12
                      },
                      "start": {
                        "column": 17,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    258,
                    259
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 12
                    },
                    "start": {
                      "column": 17,
                      "line": 12
                    }
                  }
                },
                "range": [
                  257,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 12
                  },
                  "start": {
                    "column": 16,
                    "line": 12
                  }
                }
              },
              "range": [
                245,
                265
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                "name": "roFiled",
                "optional": false,
                "range": [
                  279,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 13
                  },
                  "start": {
                    "column": 13,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "TSTypeAssertion",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      292,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 13
                      },
                      "start": {
                        "column": 26,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    292,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 13
                    },
                    "start": {
                      "column": 26,
                      "line": 13
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      290,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 24,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    290,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 13
                    },
                    "start": {
                      "column": 24,
                      "line": 13
                    }
                  }
                },
                "range": [
                  289,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 13
                  },
                  "start": {
                    "column": 23,
                    "line": 13
                  }
                }
              },
              "range": [
                270,
                298
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                "name": "method",
                "optional": false,
                "range": [
                  303,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  309,
                  326
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    324,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 14
                    },
                    "start": {
                      "column": 25,
                      "line": 14
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "range": [
                        310,
                        311
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "TSTypeAssertion",
                      "expression": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            317,
                            321
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 14
                            },
                            "start": {
                              "column": 18,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          317,
                          322
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 14
                          },
                          "start": {
                            "column": 18,
                            "line": 14
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            315,
                            316
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 14
                            },
                            "start": {
                              "column": 16,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          315,
                          316
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 14
                          },
                          "start": {
                            "column": 16,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        314,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      310,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 14
                      },
                      "start": {
                        "column": 11,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              },
              "range": [
                303,
                326
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                "name": "methodWithRequiredDefault",
                "optional": false,
                "range": [
                  331,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  356,
                  386
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    384,
                    386
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 15
                    },
                    "start": {
                      "column": 57,
                      "line": 15
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "range": [
                        357,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 15
                        },
                        "start": {
                          "column": 30,
                          "line": 15
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "TSTypeAssertion",
                      "expression": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            364,
                            368
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 15
                            },
                            "start": {
                              "column": 37,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          364,
                          369
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 15
                          },
                          "start": {
                            "column": 37,
                            "line": 15
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            362,
                            363
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 15
                            },
                            "start": {
                              "column": 35,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          362,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 15
                          },
                          "start": {
                            "column": 35,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        361,
                        369
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 15
                        },
                        "start": {
                          "column": 34,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      357,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 15
                      },
                      "start": {
                        "column": 30,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "req",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 15
                        },
                        "start": {
                          "column": 47,
                          "line": 15
                        }
                      },
                      "range": [
                        374,
                        382
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          376,
                          382
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 15
                          },
                          "start": {
                            "column": 49,
                            "line": 15
                          }
                        }
                      }
                    },
                    "range": [
                      371,
                      382
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 15
                      },
                      "start": {
                        "column": 44,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 15
                  },
                  "start": {
                    "column": 29,
                    "line": 15
                  }
                }
              },
              "range": [
                331,
                386
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 15
                },
                "start": {
                  "column": 4,
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
                "range": [
                  392,
                  403
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  403,
                  435
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    433,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 17
                    },
                    "start": {
                      "column": 45,
                      "line": 17
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ctorField",
                        "optional": false,
                        "range": [
                          411,
                          420
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 17
                          },
                          "start": {
                            "column": 23,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "TSTypeAssertion",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "raw": "null",
                            "value": null,
                            "range": [
                              426,
                              430
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 17
                              },
                              "start": {
                                "column": 38,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            426,
                            431
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 17
                            },
                            "start": {
                              "column": 38,
                              "line": 17
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              424,
                              425
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 17
                              },
                              "start": {
                                "column": 36,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            424,
                            425
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 17
                            },
                            "start": {
                              "column": 36,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          423,
                          431
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 17
                          },
                          "start": {
                            "column": 35,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        411,
                        431
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 17
                        },
                        "start": {
                          "column": 23,
                          "line": 17
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "range": [
                      404,
                      431
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 17
                      },
                      "start": {
                        "column": 16,
                        "line": 17
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 17
                  },
                  "start": {
                    "column": 15,
                    "line": 17
                  }
                }
              },
              "range": [
                392,
                435
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
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
                "name": "x",
                "optional": false,
                "range": [
                  445,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
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
                  446,
                  468
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSTypeAssertion",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "raw": "null",
                            "value": null,
                            "range": [
                              461,
                              465
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 19
                              },
                              "start": {
                                "column": 24,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            461,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 19
                            },
                            "start": {
                              "column": 24,
                              "line": 19
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              459,
                              460
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 19
                              },
                              "start": {
                                "column": 22,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            459,
                            460
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 19
                            },
                            "start": {
                              "column": 22,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          458,
                          466
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 19
                          },
                          "start": {
                            "column": 21,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        451,
                        466
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 19
                        },
                        "start": {
                          "column": 14,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "range": [
                    449,
                    468
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 19
                    },
                    "start": {
                      "column": 12,
                      "line": 19
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
                    "column": 31,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              },
              "range": [
                441,
                468
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 19
                },
                "start": {
                  "column": 4,
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
                "name": "x",
                "optional": false,
                "range": [
                  477,
                  478
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
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
                  478,
                  485
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    482,
                    485
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 13,
                      "line": 20
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
                    "name": "v",
                    "optional": false,
                    "range": [
                      479,
                      480
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 20
                      },
                      "start": {
                        "column": 10,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 20
                  },
                  "start": {
                    "column": 9,
                    "line": 20
                  }
                }
              },
              "range": [
                473,
                485
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
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 15,
              "line": 10
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            216,
            217
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 13,
              "line": 10
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          210,
          487
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
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
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSTypeAssertion",
        "expression": {
          "type": "TSNonNullExpression",
          "expression": {
            "type": "Literal",
            "raw": "null",
            "value": null,
            "range": [
              507,
              511
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 23
              },
              "start": {
                "column": 18,
                "line": 23
              }
            }
          },
          "range": [
            507,
            512
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 23
            },
            "start": {
              "column": 18,
              "line": 23
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              505,
              506
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 23
              },
              "start": {
                "column": 16,
                "line": 23
              }
            }
          },
          "range": [
            505,
            506
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 23
            },
            "start": {
              "column": 16,
              "line": 23
            }
          }
        },
        "range": [
          504,
          512
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 23
          },
          "start": {
            "column": 15,
            "line": 23
          }
        }
      },
      "exportKind": "value",
      "range": [
        489,
        513
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        582,
        666
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            664,
            666
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 26
            },
            "start": {
              "column": 82,
              "line": 26
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fnWithPartialAnnotationOnDefaultparam",
          "optional": false,
          "range": [
            598,
            635
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 26
            },
            "start": {
              "column": 16,
              "line": 26
            }
          }
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 26
                  },
                  "start": {
                    "column": 55,
                    "line": 26
                  }
                },
                "range": [
                  637,
                  640
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      639,
                      640
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 26
                      },
                      "start": {
                        "column": 57,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    639,
                    640
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 26
                    },
                    "start": {
                      "column": 57,
                      "line": 26
                    }
                  }
                }
              },
              "range": [
                636,
                640
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 26
                },
                "start": {
                  "column": 54,
                  "line": 26
                }
              }
            },
            "optional": false,
            "right": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    646,
                    650
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 26
                    },
                    "start": {
                      "column": 64,
                      "line": 26
                    }
                  }
                },
                "range": [
                  646,
                  651
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 26
                  },
                  "start": {
                    "column": 64,
                    "line": 26
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    644,
                    645
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 26
                    },
                    "start": {
                      "column": 62,
                      "line": 26
                    }
                  }
                },
                "range": [
                  644,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 26
                  },
                  "start": {
                    "column": 62,
                    "line": 26
                  }
                }
              },
              "range": [
                643,
                651
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 26
                },
                "start": {
                  "column": 61,
                  "line": 26
                }
              }
            },
            "range": [
              636,
              651
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 26
              },
              "start": {
                "column": 54,
                "line": 26
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 80,
                  "line": 26
                },
                "start": {
                  "column": 72,
                  "line": 26
                }
              },
              "range": [
                654,
                662
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  656,
                  662
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 26
                  },
                  "start": {
                    "column": 74,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              653,
              662
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 26
              },
              "start": {
                "column": 71,
                "line": 26
              }
            }
          }
        ],
        "range": [
          589,
          666
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 26
          },
          "start": {
            "column": 7,
            "line": 26
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 84,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 84,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
