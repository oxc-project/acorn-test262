__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1287
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "range": [
          5,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                29,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              },
              "range": [
                33,
                40
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    35,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 1
                    },
                    "start": {
                      "column": 35,
                      "line": 1
                    }
                  }
                },
                "range": [
                  35,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 1
                  },
                  "start": {
                    "column": 35,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              26,
              40
            ],
            "loc": {
              "end": {
                "column": 40,
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
              "column": 46,
              "line": 1
            },
            "start": {
              "column": 42,
              "line": 1
            }
          },
          "range": [
            42,
            46
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
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
          }
        },
        "range": [
          22,
          46
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
          19
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
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          60,
          118
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                66,
                77
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                77,
                116
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  114,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 4
                  },
                  "start": {
                    "column": 52,
                    "line": 4
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      },
                      "range": [
                        86,
                        94
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          88,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 4
                          },
                          "start": {
                            "column": 26,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      85,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 23,
                        "line": 4
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    78,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 4
                        },
                        "start": {
                          "column": 42,
                          "line": 4
                        }
                      },
                      "range": [
                        104,
                        112
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          106,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 4
                          },
                          "start": {
                            "column": 44,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      103,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 4
                      },
                      "start": {
                        "column": 41,
                        "line": 4
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    96,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 4
                    },
                    "start": {
                      "column": 34,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              66,
              116
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          55,
          59
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        49,
        118
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          147,
          235
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                153,
                164
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                164,
                233
              ],
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            221,
                            222
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 9
                            },
                            "start": {
                              "column": 14,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            224,
                            225
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          215,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        215,
                        226
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      215,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                  205,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 56,
                    "line": 8
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
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
                          "column": 25,
                          "line": 8
                        },
                        "start": {
                          "column": 19,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    165,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
                      }
                    },
                    "range": [
                      177,
                      185
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        179,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 8
                        },
                        "start": {
                          "column": 30,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    176,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 8
                    },
                    "start": {
                      "column": 27,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 8
                        },
                        "start": {
                          "column": 46,
                          "line": 8
                        }
                      },
                      "range": [
                        195,
                        203
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          197,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 8
                          },
                          "start": {
                            "column": 48,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      194,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 8
                      },
                      "start": {
                        "column": 45,
                        "line": 8
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    187,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 8
                    },
                    "start": {
                      "column": 38,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              153,
              233
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 8
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
            "column": 27,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          126,
          133
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          142,
          146
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 7
          },
          "start": {
            "column": 22,
            "line": 7
          }
        }
      },
      "range": [
        120,
        235
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "name": "Printable",
            "optional": false,
            "range": [
              243,
              252
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  328,
                  427
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
                      "name": "message",
                      "optional": false,
                      "range": [
                        341,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        351,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 14
                        },
                        "start": {
                          "column": 21,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      334,
                      359
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
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
                      "name": "print",
                      "optional": false,
                      "range": [
                        364,
                        369
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
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
                        369,
                        425
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
                                  "name": "output",
                                  "optional": false,
                                  "range": [
                                    388,
                                    394
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 16
                                    }
                                  }
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          397,
                                          401
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
                                            "line": 16
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 16
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          402,
                                          403
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 16
                                          },
                                          "start": {
                                            "column": 28,
                                            "line": 16
                                          }
                                        }
                                      },
                                      "range": [
                                        397,
                                        403
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 29,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "\",\"",
                                      "value": ",",
                                      "range": [
                                        406,
                                        409
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      397,
                                      409
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        412,
                                        416
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 38,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "range": [
                                        417,
                                        418
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 43,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      412,
                                      418
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "range": [
                                    397,
                                    418
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  388,
                                  418
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 16
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const",
                            "range": [
                              382,
                              419
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 16
                              },
                              "start": {
                                "column": 8,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          372,
                          425
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 15
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
                          "column": 5,
                          "line": 17
                        },
                        "start": {
                          "column": 9,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      364,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 17
                      },
                      "start": {
                        "column": 4,
                        "line": 15
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 18
                  },
                  "start": {
                    "column": 91,
                    "line": 13
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "superClass",
                "optional": false,
                "range": [
                  317,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 13
                  },
                  "start": {
                    "column": 80,
                    "line": 13
                  }
                }
              },
              "range": [
                303,
                427
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 18
                },
                "start": {
                  "column": 66,
                  "line": 13
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
                "name": "superClass",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 13
                    },
                    "start": {
                      "column": 58,
                      "line": 13
                    }
                  },
                  "range": [
                    295,
                    298
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        297,
                        298
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 13
                        },
                        "start": {
                          "column": 60,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      297,
                      298
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 13
                      },
                      "start": {
                        "column": 60,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  285,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 13
                  },
                  "start": {
                    "column": 48,
                    "line": 13
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 13
                },
                "start": {
                  "column": 18,
                  "line": 13
                }
              },
              "range": [
                255,
                284
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        277,
                        283
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "range": [
                              278,
                              282
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 13
                              },
                              "start": {
                                "column": 41,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            278,
                            282
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 13
                            },
                            "start": {
                              "column": 41,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 13
                        },
                        "start": {
                          "column": 40,
                          "line": 13
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "range": [
                        266,
                        277
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 13
                        },
                        "start": {
                          "column": 29,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      266,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 13
                      },
                      "start": {
                        "column": 29,
                        "line": 13
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      256,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    256,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 13
                    },
                    "start": {
                      "column": 19,
                      "line": 13
                    }
                  }
                }
              ]
            },
            "range": [
              255,
              427
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 18,
                "line": 13
              }
            }
          },
          "range": [
            243,
            427
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        237,
        427
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 13
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
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                520,
                658
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
                    "name": "_tag",
                    "optional": false,
                    "range": [
                      530,
                      534
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
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
                        "column": 20,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    },
                    "range": [
                      534,
                      542
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        536,
                        542
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 22
                        },
                        "start": {
                          "column": 14,
                          "line": 22
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    530,
                    543
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
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
                      552,
                      563
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
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
                      563,
                      652
                    ],
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
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "range": [
                                    603,
                                    607
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 24
                                    }
                                  }
                                },
                                "range": [
                                  600,
                                  607
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 24
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "range": [
                                594,
                                599
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 24
                                },
                                "start": {
                                  "column": 12,
                                  "line": 24
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              594,
                              608
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 24
                              },
                              "start": {
                                "column": 12,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            594,
                            609
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 24
                            },
                            "start": {
                              "column": 12,
                              "line": 24
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
                                "type": "ThisExpression",
                                "range": [
                                  622,
                                  626
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 25
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_tag",
                                "optional": false,
                                "range": [
                                  627,
                                  631
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                622,
                                631
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 25
                                },
                                "start": {
                                  "column": 12,
                                  "line": 25
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"hello\"",
                              "value": "hello",
                              "range": [
                                634,
                                641
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 25
                                },
                                "start": {
                                  "column": 24,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              622,
                              641
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 25
                              },
                              "start": {
                                "column": 12,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            622,
                            642
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        580,
                        652
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 26
                        },
                        "start": {
                          "column": 36,
                          "line": 23
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "range": [
                            567,
                            571
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 23
                            },
                            "start": {
                              "column": 23,
                              "line": 23
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 23
                            },
                            "start": {
                              "column": 27,
                              "line": 23
                            }
                          },
                          "range": [
                            571,
                            578
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                573,
                                576
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 23
                                },
                                "start": {
                                  "column": 29,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              573,
                              578
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 23
                              },
                              "start": {
                                "column": 29,
                                "line": 23
                              }
                            }
                          }
                        },
                        "range": [
                          564,
                          578
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 23
                          },
                          "start": {
                            "column": 20,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 26
                      },
                      "start": {
                        "column": 19,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    552,
                    652
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 31,
                  "line": 21
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
                499,
                500
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 21
                },
                "start": {
                  "column": 10,
                  "line": 21
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "superClass",
              "optional": false,
              "range": [
                509,
                519
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 21
                },
                "start": {
                  "column": 20,
                  "line": 21
                }
              }
            },
            "range": [
              493,
              658
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                670,
                671
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "range": [
              663,
              672
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          487,
          674
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 58,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "range": [
          438,
          444
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "superClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 20
              },
              "start": {
                "column": 53,
                "line": 20
              }
            },
            "range": [
              482,
              485
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  484,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 20
                  },
                  "start": {
                    "column": 55,
                    "line": 20
                  }
                }
              },
              "range": [
                484,
                485
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 20
                },
                "start": {
                  "column": 55,
                  "line": 20
                }
              }
            }
          },
          "range": [
            472,
            485
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 20
            },
            "start": {
              "column": 43,
              "line": 20
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 20
          },
          "start": {
            "column": 15,
            "line": 20
          }
        },
        "range": [
          444,
          471
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  466,
                  470
                ],
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      467,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 20
                      },
                      "start": {
                        "column": 38,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 20
                  },
                  "start": {
                    "column": 37,
                    "line": 20
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "range": [
                  455,
                  466
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 20
                  },
                  "start": {
                    "column": 26,
                    "line": 20
                  }
                }
              },
              "range": [
                455,
                470
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 20
                },
                "start": {
                  "column": 26,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                445,
                446
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              445,
              470
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 20
              },
              "start": {
                "column": 16,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        429,
        674
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
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
            "name": "Thing1",
            "optional": false,
            "range": [
              682,
              688
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "range": [
                  698,
                  705
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 31
                  },
                  "start": {
                    "column": 22,
                    "line": 31
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tagged",
              "optional": false,
              "range": [
                691,
                697
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 31
                },
                "start": {
                  "column": 15,
                  "line": 31
                }
              }
            },
            "optional": false,
            "range": [
              691,
              706
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 31
              },
              "start": {
                "column": 15,
                "line": 31
              }
            }
          },
          "range": [
            682,
            706
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 31
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        676,
        707
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "Thing2",
            "optional": false,
            "range": [
              714,
              720
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived",
                    "optional": false,
                    "range": [
                      740,
                      747
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 32
                      },
                      "start": {
                        "column": 32,
                        "line": 32
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Printable",
                  "optional": false,
                  "range": [
                    730,
                    739
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 32
                    },
                    "start": {
                      "column": 22,
                      "line": 32
                    }
                  }
                },
                "optional": false,
                "range": [
                  730,
                  748
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 32
                  },
                  "start": {
                    "column": 22,
                    "line": 32
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tagged",
              "optional": false,
              "range": [
                723,
                729
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 32
                },
                "start": {
                  "column": 15,
                  "line": 32
                }
              }
            },
            "optional": false,
            "range": [
              723,
              749
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 32
              },
              "start": {
                "column": 15,
                "line": 32
              }
            }
          },
          "range": [
            714,
            749
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        708,
        750
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing2",
          "optional": false,
          "range": [
            751,
            757
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "range": [
            758,
            765
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 33
            },
            "start": {
              "column": 7,
              "line": 33
            }
          }
        },
        "range": [
          751,
          765
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        751,
        766
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "range": [
                    794,
                    799
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 36
                    },
                    "start": {
                      "column": 10,
                      "line": 36
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        813,
                        814
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 36
                        },
                        "start": {
                          "column": 29,
                          "line": 36
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        816,
                        817
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 36
                        },
                        "start": {
                          "column": 32,
                          "line": 36
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        819,
                        820
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 36
                        },
                        "start": {
                          "column": 35,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thing1",
                    "optional": false,
                    "range": [
                      806,
                      812
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 36
                      },
                      "start": {
                        "column": 22,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    802,
                    821
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 36
                    },
                    "start": {
                      "column": 18,
                      "line": 36
                    }
                  }
                },
                "range": [
                  794,
                  821
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 36
                  },
                  "start": {
                    "column": 10,
                    "line": 36
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              788,
              822
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  827,
                  832
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  833,
                  834
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 37
                  },
                  "start": {
                    "column": 10,
                    "line": 37
                  }
                }
              },
              "range": [
                827,
                834
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              827,
              835
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  840,
                  845
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_tag",
                "optional": false,
                "range": [
                  846,
                  850
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 38
                  },
                  "start": {
                    "column": 10,
                    "line": 38
                  }
                }
              },
              "range": [
                840,
                850
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              840,
              851
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          782,
          853
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 14,
            "line": 35
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          777,
          779
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 35
          }
        }
      },
      "params": [],
      "range": [
        768,
        853
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 35
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "range": [
                    881,
                    886
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 42
                    },
                    "start": {
                      "column": 10,
                      "line": 42
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        900,
                        901
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 42
                        },
                        "start": {
                          "column": 29,
                          "line": 42
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        903,
                        904
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 42
                        },
                        "start": {
                          "column": 32,
                          "line": 42
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        906,
                        907
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 42
                        },
                        "start": {
                          "column": 35,
                          "line": 42
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thing2",
                    "optional": false,
                    "range": [
                      893,
                      899
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 42
                      },
                      "start": {
                        "column": 22,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    889,
                    908
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 42
                    },
                    "start": {
                      "column": 18,
                      "line": 42
                    }
                  }
                },
                "range": [
                  881,
                  908
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 42
                  },
                  "start": {
                    "column": 10,
                    "line": 42
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              875,
              909
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  914,
                  919
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  920,
                  921
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 43
                  },
                  "start": {
                    "column": 10,
                    "line": 43
                  }
                }
              },
              "range": [
                914,
                921
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "range": [
              914,
              922
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  927,
                  932
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_tag",
                "optional": false,
                "range": [
                  933,
                  937
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 44
                  },
                  "start": {
                    "column": 10,
                    "line": 44
                  }
                }
              },
              "range": [
                927,
                937
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              927,
              938
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
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
                  "name": "thing",
                  "optional": false,
                  "range": [
                    943,
                    948
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 45
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "print",
                  "optional": false,
                  "range": [
                    949,
                    954
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 45
                    },
                    "start": {
                      "column": 10,
                      "line": 45
                    }
                  }
                },
                "range": [
                  943,
                  954
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              },
              "optional": false,
              "range": [
                943,
                956
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              943,
              957
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          869,
          959
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 14,
            "line": 41
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          864,
          866
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 41
          },
          "start": {
            "column": 9,
            "line": 41
          }
        }
      },
      "params": [],
      "range": [
        855,
        959
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          989,
          1122
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                995,
                1006
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
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
                1006,
                1079
              ],
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
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            1036,
                            1038
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 50
                            },
                            "start": {
                              "column": 14,
                              "line": 50
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "20",
                          "value": 20,
                          "range": [
                            1040,
                            1042
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 50
                            },
                            "start": {
                              "column": 18,
                              "line": 50
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "30",
                          "value": 30,
                          "range": [
                            1044,
                            1046
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 50
                            },
                            "start": {
                              "column": 22,
                              "line": 50
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          1030,
                          1035
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 50
                          },
                          "start": {
                            "column": 8,
                            "line": 50
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1030,
                        1047
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 50
                        },
                        "start": {
                          "column": 8,
                          "line": 50
                        }
                      }
                    },
                    "range": [
                      1030,
                      1048
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
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
                          "type": "ThisExpression",
                          "range": [
                            1057,
                            1061
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 51
                            },
                            "start": {
                              "column": 8,
                              "line": 51
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_tag",
                          "optional": false,
                          "range": [
                            1062,
                            1066
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 51
                            },
                            "start": {
                              "column": 13,
                              "line": 51
                            }
                          }
                        },
                        "range": [
                          1057,
                          1066
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 51
                          },
                          "start": {
                            "column": 8,
                            "line": 51
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "range": [
                          1069,
                          1072
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 51
                          },
                          "start": {
                            "column": 20,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1057,
                        1072
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 51
                        },
                        "start": {
                          "column": 8,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1057,
                      1073
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
                      }
                    }
                  }
                ],
                "range": [
                  1020,
                  1079
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 52
                  },
                  "start": {
                    "column": 29,
                    "line": 49
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 49
                      },
                      "start": {
                        "column": 19,
                        "line": 49
                      }
                    },
                    "range": [
                      1010,
                      1018
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1012,
                        1018
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 49
                        },
                        "start": {
                          "column": 21,
                          "line": 49
                        }
                      }
                    }
                  },
                  "range": [
                    1007,
                    1018
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 49
                    },
                    "start": {
                      "column": 16,
                      "line": 49
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 15,
                  "line": 49
                }
              }
            },
            "range": [
              995,
              1079
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 49
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
              "name": "test",
              "optional": false,
              "range": [
                1084,
                1088
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
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
                1088,
                1120
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1101,
                            1105
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 54
                            },
                            "start": {
                              "column": 8,
                              "line": 54
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "print",
                          "optional": false,
                          "range": [
                            1106,
                            1111
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 54
                            },
                            "start": {
                              "column": 13,
                              "line": 54
                            }
                          }
                        },
                        "range": [
                          1101,
                          1111
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 54
                          },
                          "start": {
                            "column": 8,
                            "line": 54
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1101,
                        1113
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 54
                        },
                        "start": {
                          "column": 8,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1101,
                      1114
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 54
                      },
                      "start": {
                        "column": 8,
                        "line": 54
                      }
                    }
                  }
                ],
                "range": [
                  1091,
                  1120
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 55
                  },
                  "start": {
                    "column": 11,
                    "line": 53
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
                  "column": 5,
                  "line": 55
                },
                "start": {
                  "column": 8,
                  "line": 53
                }
              }
            },
            "range": [
              1084,
              1120
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 28,
            "line": 48
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing3",
        "optional": false,
        "range": [
          967,
          973
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 48
          },
          "start": {
            "column": 6,
            "line": 48
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing2",
        "optional": false,
        "range": [
          982,
          988
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 48
          },
          "start": {
            "column": 21,
            "line": 48
          }
        }
      },
      "range": [
        961,
        1122
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 48
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
            "name": "Timestamped",
            "optional": false,
            "range": [
              1152,
              1163
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 60
              },
              "start": {
                "column": 6,
                "line": 60
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ClassExpression",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        1244,
                        1283
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
                            "name": "timestamp",
                            "optional": false,
                            "range": [
                              1254,
                              1263
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 62
                              },
                              "start": {
                                "column": 8,
                                "line": 62
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "value": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "range": [
                                1270,
                                1274
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 62
                                },
                                "start": {
                                  "column": 24,
                                  "line": 62
                                }
                              }
                            },
                            "range": [
                              1266,
                              1276
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 62
                              },
                              "start": {
                                "column": 20,
                                "line": 62
                              }
                            }
                          },
                          "range": [
                            1254,
                            1277
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 62
                            },
                            "start": {
                              "column": 8,
                              "line": 62
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 63
                        },
                        "start": {
                          "column": 30,
                          "line": 61
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": null,
                    "implements": [],
                    "superClass": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "range": [
                        1239,
                        1243
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 61
                        },
                        "start": {
                          "column": 25,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      1225,
                      1283
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 63
                      },
                      "start": {
                        "column": 11,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1218,
                    1284
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 63
                    },
                    "start": {
                      "column": 4,
                      "line": 61
                    }
                  }
                }
              ],
              "range": [
                1212,
                1286
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 64
                },
                "start": {
                  "column": 66,
                  "line": 60
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 60
                    },
                    "start": {
                      "column": 57,
                      "line": 60
                    }
                  },
                  "range": [
                    1203,
                    1207
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CT",
                      "optional": false,
                      "range": [
                        1205,
                        1207
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 60
                        },
                        "start": {
                          "column": 59,
                          "line": 60
                        }
                      }
                    },
                    "range": [
                      1205,
                      1207
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 60
                      },
                      "start": {
                        "column": 59,
                        "line": 60
                      }
                    }
                  }
                },
                "range": [
                  1199,
                  1207
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 60
                  },
                  "start": {
                    "column": 53,
                    "line": 60
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 60
                },
                "start": {
                  "column": 20,
                  "line": 60
                }
              },
              "range": [
                1166,
                1198
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1189,
                        1197
                      ],
                      "params": [
                        {
                          "type": "TSObjectKeyword",
                          "range": [
                            1190,
                            1196
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 60
                            },
                            "start": {
                              "column": 44,
                              "line": 60
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 60
                        },
                        "start": {
                          "column": 43,
                          "line": 60
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "range": [
                        1178,
                        1189
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 60
                        },
                        "start": {
                          "column": 32,
                          "line": 60
                        }
                      }
                    },
                    "range": [
                      1178,
                      1197
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 60
                      },
                      "start": {
                        "column": 32,
                        "line": 60
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CT",
                    "optional": false,
                    "range": [
                      1167,
                      1169
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 60
                      },
                      "start": {
                        "column": 21,
                        "line": 60
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1167,
                    1197
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 60
                    },
                    "start": {
                      "column": 21,
                      "line": 60
                    }
                  }
                }
              ]
            },
            "range": [
              1166,
              1286
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 64
              },
              "start": {
                "column": 20,
                "line": 60
              }
            }
          },
          "range": [
            1152,
            1286
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 64
            },
            "start": {
              "column": 6,
              "line": 60
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1146,
        1286
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 65
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
