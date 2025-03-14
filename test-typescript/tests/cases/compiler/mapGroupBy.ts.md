__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    322
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
                      27,
                      28
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 1
                      },
                      "start": {
                        "column": 27,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
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
                    "raw": "8",
                    "value": 8,
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
                  }
                ],
                "range": [
                  26,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
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
                      60,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 1
                      },
                      "start": {
                        "column": 60,
                        "line": 1
                      }
                    }
                  },
                  "consequent": {
                    "type": "Literal",
                    "raw": "'small'",
                    "value": "small",
                    "range": [
                      50,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 1
                      },
                      "start": {
                        "column": 50,
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
                        42,
                        43
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 1
                        },
                        "start": {
                          "column": 42,
                          "line": 1
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "5",
                      "value": 5,
                      "range": [
                        46,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 1
                        },
                        "start": {
                          "column": 46,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      42,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 1
                      },
                      "start": {
                        "column": 42,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    42,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 1
                    },
                    "start": {
                      "column": 42,
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
                      37,
                      38
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 1
                      },
                      "start": {
                        "column": 37,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  37,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 1
                  },
                  "start": {
                    "column": 37,
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
                "name": "Map",
                "optional": false,
                "range": [
                  14,
                  17
                ],
                "loc": {
                  "end": {
                    "column": 17,
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
                  18,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              },
              "range": [
                14,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
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
              68
            ],
            "loc": {
              "end": {
                "column": 68,
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
            68
          ],
          "loc": {
            "end": {
              "column": 68,
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
        69
      ],
      "loc": {
        "end": {
          "column": 69,
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
              77,
              82
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
                  97,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
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
                    114,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 3
                    },
                    "start": {
                      "column": 43,
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
                      109,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 3
                      },
                      "start": {
                        "column": 38,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  109,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 38,
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
                "name": "Map",
                "optional": false,
                "range": [
                  85,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 17,
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
                  89,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              },
              "range": [
                85,
                96
              ],
              "loc": {
                "end": {
                  "column": 25,
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
              85,
              116
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "range": [
            77,
            116
          ],
          "loc": {
            "end": {
              "column": 45,
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
        71,
        117
      ],
      "loc": {
        "end": {
          "column": 46,
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
          124,
          132
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
                137,
                141
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
                141,
                149
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  143,
                  149
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
              137,
              150
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
                151,
                155
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
                155,
                173
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
                        157,
                        161
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
                      157,
                      161
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
                        164,
                        173
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
                      164,
                      173
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
                  157,
                  173
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
              151,
              173
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
          135,
          175
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
        119,
        175
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
                191,
                206
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    196,
                    206
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
                          197,
                          205
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
                        197,
                        205
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
                    193,
                    196
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
                  193,
                  206
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
              182,
              206
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
                213,
                216
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
              209,
              218
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
            182,
            218
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
        176,
        219
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
              226,
              232
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
                  247,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 7
                  },
                  "start": {
                    "column": 27,
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
                      263,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 7
                      },
                      "start": {
                        "column": 43,
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
                      265,
                      269
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 7
                      },
                      "start": {
                        "column": 45,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    263,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 7
                    },
                    "start": {
                      "column": 43,
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
                      258,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 7
                      },
                      "start": {
                        "column": 38,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  258,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 7
                  },
                  "start": {
                    "column": 38,
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
                "name": "Map",
                "optional": false,
                "range": [
                  235,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
                  239,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              },
              "range": [
                235,
                246
              ],
              "loc": {
                "end": {
                  "column": 26,
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
              235,
              270
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 7
              }
            }
          },
          "range": [
            226,
            270
          ],
          "loc": {
            "end": {
              "column": 50,
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
        220,
        271
      ],
      "loc": {
        "end": {
          "column": 51,
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
              279,
              287
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
                  302,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 9
                  },
                  "start": {
                    "column": 29,
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
                    318,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 9
                    },
                    "start": {
                      "column": 45,
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
                      313,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 9
                      },
                      "start": {
                        "column": 40,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  313,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 9
                  },
                  "start": {
                    "column": 40,
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
                "name": "Map",
                "optional": false,
                "range": [
                  290,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
                  294,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 21,
                    "line": 9
                  }
                }
              },
              "range": [
                290,
                301
              ],
              "loc": {
                "end": {
                  "column": 28,
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
              290,
              320
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 9
              },
              "start": {
                "column": 17,
                "line": 9
              }
            }
          },
          "range": [
            279,
            320
          ],
          "loc": {
            "end": {
              "column": 47,
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
        273,
        321
      ],
      "loc": {
        "end": {
          "column": 48,
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
