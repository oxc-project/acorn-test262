__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    38
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        37
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            35,
            37
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 35,
              "line": 1
            }
          }
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Observable",
          "optional": false,
          "range": [
            21,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 31,
              "line": 1
            }
          },
          "range": [
            31,
            34
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
              "out": false,
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
            }
          ]
        },
        "range": [
          7,
          37
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 2
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
    233
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./observable'",
        "value": "./observable",
        "range": [
          27,
          41
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 1
          },
          "start": {
            "column": 27,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
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
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        42
      ],
      "loc": {
        "end": {
          "column": 42,
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
        "body": [],
        "range": [
          86,
          88
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 3
          },
          "start": {
            "column": 42,
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
        "name": "whatever",
        "optional": false,
        "range": [
          53,
          61
        ],
        "loc": {
          "end": {
            "column": 17,
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            },
            "range": [
              63,
              68
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                65,
                68
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            }
          },
          "range": [
            62,
            68
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 18,
              "line": 3
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
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            },
            "range": [
              71,
              76
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                73,
                76
              ],
              "loc": {
                "end": {
                  "column": 32,
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
            70,
            76
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 3
            },
            "start": {
              "column": 26,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 3
              }
            },
            "range": [
              79,
              84
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                81,
                84
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 3
                },
                "start": {
                  "column": 37,
                  "line": 3
                }
              }
            }
          },
          "range": [
            78,
            84
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 3
            },
            "start": {
              "column": 34,
              "line": 3
            }
          }
        }
      ],
      "range": [
        44,
        88
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          101,
          232
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                107,
                110
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                110,
                230
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          218,
                          222
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        218,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      211,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  201,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 26,
                    "line": 9
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
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "whatever",
                        "optional": false,
                        "range": [
                          121,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 7
                          },
                          "start": {
                            "column": 9,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        120,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 7
                      },
                      "start": {
                        "column": 22,
                        "line": 7
                      }
                    },
                    "range": [
                      134,
                      142
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        136,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 7
                        },
                        "start": {
                          "column": 24,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    130,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 7
                    },
                    "start": {
                      "column": 18,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "whatever",
                        "optional": false,
                        "range": [
                          153,
                          161
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 8
                          },
                          "start": {
                            "column": 9,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        152,
                        161
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "name": "arg2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 8
                      },
                      "start": {
                        "column": 22,
                        "line": 8
                      }
                    },
                    "range": [
                      166,
                      174
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        168,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 8
                        },
                        "start": {
                          "column": 24,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    162,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 8
                    },
                    "start": {
                      "column": 18,
                      "line": 8
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 9
                  },
                  "start": {
                    "column": 5,
                    "line": 9
                  }
                },
                "range": [
                  180,
                  200
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      192,
                      200
                    ],
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          193,
                          199
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 9
                          },
                          "start": {
                            "column": 18,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 9
                      },
                      "start": {
                        "column": 17,
                        "line": 9
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Observable",
                    "optional": false,
                    "range": [
                      182,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 9
                      },
                      "start": {
                        "column": 7,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    182,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 7,
                      "line": 9
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              }
            },
            "range": [
              107,
              230
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 11,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          96,
          100
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        90,
        232
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
