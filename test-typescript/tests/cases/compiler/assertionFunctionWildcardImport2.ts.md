__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    208
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "\"Must not be a nullable value\"",
                        "value": "Must not be a nullable value",
                        "range": [
                          136,
                          166
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 3
                          },
                          "start": {
                            "column": 24,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        130,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 3
                        },
                        "start": {
                          "column": 18,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      126,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 3
                      },
                      "start": {
                        "column": 14,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    120,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                110,
                174
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 43,
                  "line": 2
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    75,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    83,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                "range": [
                  75,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    96,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 2
                    },
                    "start": {
                      "column": 29,
                      "line": 2
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    104,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 2
                    },
                    "start": {
                      "column": 37,
                      "line": 2
                    }
                  }
                },
                "range": [
                  96,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 2
                  },
                  "start": {
                    "column": 29,
                    "line": 2
                  }
                }
              },
              "range": [
                75,
                108
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "range": [
              71,
              174
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          65,
          176
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 65,
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
        "name": "isNonNullable",
        "optional": false,
        "range": [
          9,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            },
            "range": [
              29,
              32
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  31,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 1
                  },
                  "start": {
                    "column": 31,
                    "line": 1
                  }
                }
              },
              "range": [
                31,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              }
            }
          },
          "range": [
            26,
            32
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 64,
            "line": 1
          },
          "start": {
            "column": 33,
            "line": 1
          }
        },
        "range": [
          33,
          64
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "range": [
              43,
              46
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 43,
                "line": 1
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 1
              },
              "start": {
                "column": 50,
                "line": 1
              }
            },
            "range": [
              50,
              64
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  61,
                  64
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        62,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 1
                        },
                        "start": {
                          "column": 62,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      62,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 1
                      },
                      "start": {
                        "column": 62,
                        "line": 1
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 1
                  },
                  "start": {
                    "column": 61,
                    "line": 1
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonNullable",
                "optional": false,
                "range": [
                  50,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              },
              "range": [
                50,
                64
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 1
                },
                "start": {
                  "column": 50,
                  "line": 1
                }
              }
            }
          },
          "range": [
            35,
            64
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 1
            },
            "start": {
              "column": 35,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        },
        "range": [
          22,
          25
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
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              23,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        176
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNonNullable",
            "optional": false,
            "range": [
              191,
              204
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNonNullable",
            "optional": false,
            "range": [
              191,
              204
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "range": [
            191,
            204
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "range": [
        178,
        207
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "module",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    131
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./asserts\"",
        "value": "./asserts",
        "range": [
          25,
          36
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "asserts",
            "optional": false,
            "range": [
              12,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    107,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 4
                    },
                    "start": {
                      "column": 26,
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
                  "name": "asserts",
                  "optional": false,
                  "range": [
                    85,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNonNullable",
                  "optional": false,
                  "range": [
                    93,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "range": [
                  85,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                85,
                111
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              85,
              112
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    117,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "trim",
                  "optional": false,
                  "range": [
                    121,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "range": [
                  117,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "range": [
                117,
                127
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              117,
              128
            ],
            "loc": {
              "end": {
                "column": 15,
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
          79,
          130
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 40,
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
        "name": "test",
        "optional": false,
        "range": [
          48,
          52
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            },
            "range": [
              56,
              71
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    58,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
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
                      "column": 32,
                      "line": 3
                    },
                    "start": {
                      "column": 28,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                58,
                71
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            }
          },
          "range": [
            53,
            71
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 3
          },
          "start": {
            "column": 33,
            "line": 3
          }
        },
        "range": [
          72,
          78
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            74,
            78
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 3
            },
            "start": {
              "column": 35,
              "line": 3
            }
          }
        }
      },
      "range": [
        39,
        130
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
