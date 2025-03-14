__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    235
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
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                23
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    14,
                    23
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 1
                    },
                    "start": {
                      "column": 14,
                      "line": 1
                    }
                  }
                },
                "range": [
                  7,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 7,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
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
            23
          ],
          "loc": {
            "end": {
              "column": 23,
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
      "kind": "var",
      "range": [
        0,
        24
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          33,
          38
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                35,
                36
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "range": [
              35,
              36
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          31,
          32
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "range": [
        26,
        38
      ],
      "loc": {
        "end": {
          "column": 12,
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
          "name": "E",
          "optional": false,
          "range": [
            39,
            40
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            43,
            44
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "range": [
          39,
          44
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        39,
        45
      ],
      "loc": {
        "end": {
          "column": 6,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "range": [
              46,
              47
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 5
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
              48,
              49
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          },
          "range": [
            46,
            49
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
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            52,
            53
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        },
        "range": [
          46,
          53
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        46,
        54
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          64,
          79
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
              "name": "foo",
              "optional": false,
              "range": [
                66,
                69
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              },
              "range": [
                69,
                77
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  71,
                  77
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
              }
            },
            "value": null,
            "range": [
              66,
              77
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 10,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 7
          },
          "start": {
            "column": 8,
            "line": 7
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
          62,
          63
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        56,
        79
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 8
                },
                "start": {
                  "column": 5,
                  "line": 8
                }
              },
              "range": [
                85,
                88
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    87,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 8
                    },
                    "start": {
                      "column": 7,
                      "line": 8
                    }
                  }
                },
                "range": [
                  87,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 8
                  },
                  "start": {
                    "column": 7,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              84,
              88
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            84,
            88
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        80,
        89
      ],
      "loc": {
        "end": {
          "column": 9,
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
          "name": "C",
          "optional": false,
          "range": [
            90,
            91
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            94,
            95
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "range": [
          90,
          95
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        90,
        96
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          110,
          125
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                112,
                115
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
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
                  "column": 25,
                  "line": 11
                },
                "start": {
                  "column": 17,
                  "line": 11
                }
              },
              "range": [
                115,
                123
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  117,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 11
                  },
                  "start": {
                    "column": 19,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              112,
              123
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 11
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          108,
          109
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "range": [
        98,
        125
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 12
                },
                "start": {
                  "column": 5,
                  "line": 12
                }
              },
              "range": [
                131,
                134
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    133,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 12
                    },
                    "start": {
                      "column": 7,
                      "line": 12
                    }
                  }
                },
                "range": [
                  133,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              130,
              134
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            130,
            134
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        126,
        135
      ],
      "loc": {
        "end": {
          "column": 9,
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
          "name": "g",
          "optional": false,
          "range": [
            136,
            137
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            140,
            141
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "range": [
          136,
          141
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        136,
        142
      ],
      "loc": {
        "end": {
          "column": 6,
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
          "name": "I",
          "optional": false,
          "range": [
            143,
            144
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            147,
            148
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "range": [
          143,
          148
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        143,
        149
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              162,
              179
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      173,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 16
                      },
                      "start": {
                        "column": 22,
                        "line": 16
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      177,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 16
                      },
                      "start": {
                        "column": 26,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    173,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 16
                    },
                    "start": {
                      "column": 22,
                      "line": 16
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                169,
                179
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 16
                },
                "start": {
                  "column": 18,
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
                "column": 11,
                "line": 16
              }
            }
          }
        ],
        "range": [
          160,
          181
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          158,
          159
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "kind": "module",
      "range": [
        151,
        181
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
          "name": "M",
          "optional": false,
          "range": [
            182,
            183
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            186,
            187
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "range": [
          182,
          187
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        182,
        188
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          210,
          213
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 19
          },
          "start": {
            "column": 20,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "range": [
          199,
          200
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 18,
                "line": 19
              },
              "start": {
                "column": 15,
                "line": 19
              }
            },
            "range": [
              205,
              208
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  207,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 19
                  },
                  "start": {
                    "column": 17,
                    "line": 19
                  }
                }
              },
              "range": [
                207,
                208
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 19
                },
                "start": {
                  "column": 17,
                  "line": 19
                }
              }
            }
          },
          "range": [
            204,
            208
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 19
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 19
          },
          "start": {
            "column": 10,
            "line": 19
          }
        },
        "range": [
          200,
          203
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
                201,
                202
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              201,
              202
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 19
              },
              "start": {
                "column": 11,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        190,
        213
      ],
      "loc": {
        "end": {
          "column": 23,
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
          "name": "i",
          "optional": false,
          "range": [
            228,
            229
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            232,
            233
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        "range": [
          228,
          233
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        228,
        234
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 7,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
