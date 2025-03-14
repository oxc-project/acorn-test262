__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    244
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
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    103,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    113,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  }
                },
                "range": [
                  103,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    126,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 4
                    },
                    "start": {
                      "column": 32,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    136,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 4
                    },
                    "start": {
                      "column": 42,
                      "line": 4
                    }
                  }
                },
                "range": [
                  126,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 4
                  },
                  "start": {
                    "column": 32,
                    "line": 4
                  }
                }
              },
              "range": [
                103,
                140
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            },
            "range": [
              96,
              141
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "range": [
          92,
          143
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 70,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDefined",
        "optional": false,
        "range": [
          31,
          40
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            },
            "range": [
              49,
              78
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      51,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 3
                      },
                      "start": {
                        "column": 29,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    51,
                    52
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    55,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 3
                    },
                    "start": {
                      "column": 33,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    67,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 3
                    },
                    "start": {
                      "column": 45,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSVoidKeyword",
                  "range": [
                    74,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 3
                    },
                    "start": {
                      "column": 52,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                51,
                78
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            }
          },
          "range": [
            44,
            78
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 3
            },
            "start": {
              "column": 22,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 3
          },
          "start": {
            "column": 57,
            "line": 3
          }
        },
        "range": [
          79,
          91
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              81,
              86
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 3
              },
              "start": {
                "column": 59,
                "line": 3
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 69,
                "line": 3
              },
              "start": {
                "column": 68,
                "line": 3
              }
            },
            "range": [
              90,
              91
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  90,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 3
                  },
                  "start": {
                    "column": 68,
                    "line": 3
                  }
                }
              },
              "range": [
                90,
                91
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 3
                },
                "start": {
                  "column": 68,
                  "line": 3
                }
              }
            }
          },
          "range": [
            81,
            91
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 3
            },
            "start": {
              "column": 59,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        },
        "range": [
          40,
          43
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
                41,
                42
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
            "out": false,
            "range": [
              41,
              42
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
          }
        ]
      },
      "range": [
        22,
        143
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              },
              "range": [
                162,
                182
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      164,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 7
                      },
                      "start": {
                        "column": 19,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      173,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 7
                      },
                      "start": {
                        "column": 28,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  164,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              159,
              182
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            159,
            182
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 7
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        145,
        183
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        221,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 10
                        },
                        "start": {
                          "column": 14,
                          "line": 10
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "range": [
                        225,
                        236
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 10
                        },
                        "start": {
                          "column": 18,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      221,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 10
                      },
                      "start": {
                        "column": 14,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    221,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 10
                    },
                    "start": {
                      "column": 14,
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    209,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
                    },
                    "start": {
                      "column": 2,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    217,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                },
                "range": [
                  209,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 10
                  },
                  "start": {
                    "column": 2,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                209,
                239
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
                }
              }
            },
            "range": [
              209,
              240
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          }
        ],
        "range": [
          205,
          243
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 20,
            "line": 9
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              199,
              202
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isDefined",
          "optional": false,
          "range": [
            189,
            198
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          189,
          203
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 9
          },
          "start": {
            "column": 4,
            "line": 9
          }
        }
      },
      "range": [
        185,
        243
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
