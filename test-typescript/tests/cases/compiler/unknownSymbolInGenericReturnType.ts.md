__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    268
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          267
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "range": [
                31,
                37
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                37,
                265
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
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
                          "name": "result",
                          "optional": false,
                          "range": [
                            97,
                            103
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "values",
                                "optional": false,
                                "range": [
                                  116,
                                  122
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 3
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "range": [
                                  123,
                                  129
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
                              },
                              "range": [
                                116,
                                129
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 3
                                },
                                "start": {
                                  "column": 31,
                                  "line": 3
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "range": [
                              110,
                              115
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 3
                              },
                              "start": {
                                "column": 25,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            106,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 3
                            },
                            "start": {
                              "column": 21,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          97,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      93,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "range": [
                                  196,
                                  202
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 6
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "range": [
                                  203,
                                  204
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
                              "range": [
                                196,
                                205
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 6
                                },
                                "start": {
                                  "column": 12,
                                  "line": 6
                                }
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "values",
                                    "optional": false,
                                    "range": [
                                      213,
                                      219
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "range": [
                                      220,
                                      221
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    213,
                                    222
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 6
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "func",
                                "optional": false,
                                "range": [
                                  208,
                                  212
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 6
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                208,
                                223
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 6
                                },
                                "start": {
                                  "column": 24,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              196,
                              223
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 6
                              },
                              "start": {
                                "column": 12,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            196,
                            224
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        182,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 7
                        },
                        "start": {
                          "column": 48,
                          "line": 5
                        }
                      }
                    },
                    "init": {
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "range": [
                              151,
                              152
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 5
                              },
                              "start": {
                                "column": 17,
                                "line": 5
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              155,
                              156
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 5
                              },
                              "start": {
                                "column": 21,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            151,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 5
                            },
                            "start": {
                              "column": 17,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        147,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "range": [
                          158,
                          159
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
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "values",
                          "optional": false,
                          "range": [
                            162,
                            168
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 5
                            },
                            "start": {
                              "column": 28,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            169,
                            175
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 5
                            },
                            "start": {
                              "column": 35,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          162,
                          175
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 5
                          },
                          "start": {
                            "column": 28,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        158,
                        175
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 5
                        },
                        "start": {
                          "column": 24,
                          "line": 5
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "range": [
                          177,
                          178
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 5
                          },
                          "start": {
                            "column": 43,
                            "line": 5
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        177,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 5
                        },
                        "start": {
                          "column": 43,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      142,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "range": [
                        252,
                        258
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      245,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  83,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 70,
                    "line": 2
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
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 2
                      },
                      "start": {
                        "column": 37,
                        "line": 2
                      }
                    },
                    "range": [
                      50,
                      55
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
                            52,
                            53
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 2
                            },
                            "start": {
                              "column": 39,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          52,
                          53
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 2
                          },
                          "start": {
                            "column": 39,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        52,
                        55
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 2
                        },
                        "start": {
                          "column": 39,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    44,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 2
                    },
                    "start": {
                      "column": 31,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 2
                      },
                      "start": {
                        "column": 48,
                        "line": 2
                      }
                    },
                    "range": [
                      61,
                      74
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 2
                              },
                              "start": {
                                "column": 52,
                                "line": 2
                              }
                            },
                            "range": [
                              65,
                              68
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  67,
                                  68
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 2
                                  }
                                }
                              },
                              "range": [
                                67,
                                68
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 2
                                },
                                "start": {
                                  "column": 54,
                                  "line": 2
                                }
                              }
                            }
                          },
                          "range": [
                            64,
                            68
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 2
                            },
                            "start": {
                              "column": 51,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 2
                          },
                          "start": {
                            "column": 57,
                            "line": 2
                          }
                        },
                        "range": [
                          70,
                          74
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              73,
                              74
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 2
                              },
                              "start": {
                                "column": 60,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            73,
                            74
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 2
                            },
                            "start": {
                              "column": 60,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        63,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 2
                        },
                        "start": {
                          "column": 50,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    57,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 2
                    },
                    "start": {
                      "column": 44,
                      "line": 2
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 2
                  },
                  "start": {
                    "column": 62,
                    "line": 2
                  }
                },
                "range": [
                  75,
                  82
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      77,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 2
                      },
                      "start": {
                        "column": 64,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    77,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 2
                    },
                    "start": {
                      "column": 64,
                      "line": 2
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                },
                "range": [
                  37,
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
                        38,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 2
                        },
                        "start": {
                          "column": 25,
                          "line": 2
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      38,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
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
                      "name": "S",
                      "optional": false,
                      "range": [
                        41,
                        42
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 2
                        },
                        "start": {
                          "column": 28,
                          "line": 2
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
                        "column": 29,
                        "line": 2
                      },
                      "start": {
                        "column": 28,
                        "line": 2
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            "range": [
              17,
              265
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Linq",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        267
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 1
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
      "line": 1
    }
  },
  "hashbang": null
}
```
