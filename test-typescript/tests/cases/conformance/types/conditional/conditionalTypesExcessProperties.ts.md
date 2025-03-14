__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    308
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Something",
        "optional": false,
        "range": [
          5,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
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
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "range": [
                    22,
                    26
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 1
                    },
                    "start": {
                      "column": 22,
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
                      "column": 34,
                      "line": 1
                    },
                    "start": {
                      "column": 26,
                      "line": 1
                    }
                  },
                  "range": [
                    26,
                    34
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      28,
                      34
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 1
                      },
                      "start": {
                        "column": 28,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  22,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              20,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
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
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 41,
                    "line": 1
                  }
                }
              },
              "range": [
                41,
                42
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 1
                },
                "start": {
                  "column": 41,
                  "line": 1
                }
              }
            },
            "extendsType": {
              "type": "TSObjectKeyword",
              "range": [
                51,
                57
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 1
                },
                "start": {
                  "column": 51,
                  "line": 1
                }
              }
            },
            "falseType": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "range": [
                      83,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 4
                      },
                      "start": {
                        "column": 4,
                        "line": 4
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    },
                    "range": [
                      87,
                      98
                    ],
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        89,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 4
                        },
                        "start": {
                          "column": 10,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    83,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                77,
                104
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "trueType": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "range": [
                      66,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 2
                      },
                      "start": {
                        "column": 4,
                        "line": 2
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
                        "column": 10,
                        "line": 2
                      },
                      "start": {
                        "column": 7,
                        "line": 2
                      }
                    },
                    "range": [
                      69,
                      72
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          71,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 2
                          },
                          "start": {
                            "column": 9,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        71,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 2
                        },
                        "start": {
                          "column": 9,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    66,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                60,
                74
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 60,
                  "line": 1
                }
              }
            },
            "range": [
              41,
              104
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 41,
                "line": 1
              }
            }
          }
        ],
        "range": [
          20,
          105
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 5
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        },
        "range": [
          14,
          17
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
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              15,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        106
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 5
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sa",
                "optional": false,
                "range": [
                  175,
                  177
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "range": [
                        182,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'hi'",
                      "value": "hi",
                      "range": [
                        188,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      182,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 8
                      },
                      "start": {
                        "column": 11,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "range": [
                        194,
                        197
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 8
                        },
                        "start": {
                          "column": 23,
                          "line": 8
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        199,
                        200
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 8
                        },
                        "start": {
                          "column": 28,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      194,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  180,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              },
              "range": [
                175,
                202
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              175,
              203
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 8
              },
              "start": {
                "column": 4,
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
                "name": "sa",
                "optional": false,
                "range": [
                  259,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "range": [
                        266,
                        270
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 9
                        },
                        "start": {
                          "column": 11,
                          "line": 9
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'bye'",
                      "value": "bye",
                      "range": [
                        272,
                        277
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 9
                        },
                        "start": {
                          "column": 17,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      266,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "range": [
                        279,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 9
                        },
                        "start": {
                          "column": 24,
                          "line": 9
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        284,
                        285
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 9
                        },
                        "start": {
                          "column": 29,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      279,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 9
                      },
                      "start": {
                        "column": 24,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "range": [
                        287,
                        290
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 9
                        },
                        "start": {
                          "column": 32,
                          "line": 9
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        292,
                        293
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 9
                        },
                        "start": {
                          "column": 37,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      287,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 9
                      },
                      "start": {
                        "column": 32,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  264,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              },
              "range": [
                259,
                295
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              259,
              295
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          169,
          307
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 61,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunc2",
        "optional": false,
        "range": [
          117,
          126
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
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
                "column": 41,
                "line": 7
              },
              "start": {
                "column": 38,
                "line": 7
              }
            },
            "range": [
              146,
              149
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  148,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 40,
                    "line": 7
                  }
                }
              },
              "range": [
                148,
                149
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 7
                },
                "start": {
                  "column": 40,
                  "line": 7
                }
              }
            }
          },
          "range": [
            145,
            149
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 7
            },
            "start": {
              "column": 37,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sa",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 7
              },
              "start": {
                "column": 45,
                "line": 7
              }
            },
            "range": [
              153,
              167
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  164,
                  167
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        165,
                        166
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 7
                        },
                        "start": {
                          "column": 57,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      165,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 7
                      },
                      "start": {
                        "column": 57,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 7
                  },
                  "start": {
                    "column": 56,
                    "line": 7
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "range": [
                  155,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 7
                  },
                  "start": {
                    "column": 47,
                    "line": 7
                  }
                }
              },
              "range": [
                155,
                167
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 7
                },
                "start": {
                  "column": 47,
                  "line": 7
                }
              }
            }
          },
          "range": [
            151,
            167
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 7
            },
            "start": {
              "column": 43,
              "line": 7
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 7
          },
          "start": {
            "column": 18,
            "line": 7
          }
        },
        "range": [
          126,
          144
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                137,
                143
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                127,
                128
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              127,
              143
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 7
              },
              "start": {
                "column": 19,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        108,
        307
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
