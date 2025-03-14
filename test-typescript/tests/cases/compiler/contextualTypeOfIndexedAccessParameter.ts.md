__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    306
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "range": [
          5,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"a\"",
              "value": "a",
              "range": [
                12,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "range": [
              12,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"b\"",
              "value": "b",
              "range": [
                18,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            },
            "range": [
              18,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          }
        ],
        "range": [
          12,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionsForKey",
        "optional": false,
        "range": [
          29,
          42
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    47,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 3
                    },
                    "start": {
                      "column": 23,
                      "line": 3
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
                      "column": 55,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
                    }
                  },
                  "range": [
                    48,
                    79
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            52,
                            54
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 3
                            },
                            "start": {
                              "column": 28,
                              "line": 3
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
                              "column": 53,
                              "line": 3
                            },
                            "start": {
                              "column": 30,
                              "line": 3
                            }
                          },
                          "range": [
                            54,
                            77
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "p",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 3
                                    }
                                  },
                                  "range": [
                                    58,
                                    66
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      60,
                                      66
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 3
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  57,
                                  66
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
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 3
                                },
                                "start": {
                                  "column": 44,
                                  "line": 3
                                }
                              },
                              "range": [
                                68,
                                77
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  71,
                                  77
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 3
                                  }
                                }
                              }
                            },
                            "range": [
                              56,
                              77
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 3
                              },
                              "start": {
                                "column": 32,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          52,
                          77
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
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
                      50,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  47,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              45,
              81
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    86,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 3
                    },
                    "start": {
                      "column": 62,
                      "line": 3
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
                      "column": 67,
                      "line": 3
                    },
                    "start": {
                      "column": 63,
                      "line": 3
                    }
                  },
                  "range": [
                    87,
                    91
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      89,
                      91
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 3
                      },
                      "start": {
                        "column": 65,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  86,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 3
                  },
                  "start": {
                    "column": 62,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              84,
              93
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 3
              },
              "start": {
                "column": 60,
                "line": 3
              }
            }
          }
        ],
        "range": [
          45,
          93
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 3
          }
        }
      },
      "range": [
        24,
        94
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          113,
          114
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 5
              },
              "start": {
                "column": 38,
                "line": 5
              }
            },
            "range": [
              134,
              137
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  136,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 40,
                    "line": 5
                  }
                }
              },
              "range": [
                136,
                137
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 5
                },
                "start": {
                  "column": 40,
                  "line": 5
                }
              }
            }
          },
          "range": [
            131,
            137
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
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 68,
                "line": 5
              },
              "start": {
                "column": 50,
                "line": 5
              }
            },
            "range": [
              146,
              164
            ],
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    162,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 5
                    },
                    "start": {
                      "column": 66,
                      "line": 5
                    }
                  }
                },
                "range": [
                  162,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 5
                  },
                  "start": {
                    "column": 66,
                    "line": 5
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionsForKey",
                  "optional": false,
                  "range": [
                    148,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 5
                    },
                    "start": {
                      "column": 52,
                      "line": 5
                    }
                  }
                },
                "range": [
                  148,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 5
                  },
                  "start": {
                    "column": 52,
                    "line": 5
                  }
                }
              },
              "range": [
                148,
                164
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 5
                },
                "start": {
                  "column": 52,
                  "line": 5
                }
              }
            }
          },
          "range": [
            139,
            164
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 5
            },
            "start": {
              "column": 43,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 75,
            "line": 5
          },
          "start": {
            "column": 69,
            "line": 5
          }
        },
        "range": [
          165,
          171
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            167,
            171
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 5
            },
            "start": {
              "column": 71,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 5
          },
          "start": {
            "column": 18,
            "line": 5
          }
        },
        "range": [
          114,
          130
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keys",
                "optional": false,
                "range": [
                  125,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 5
                  },
                  "start": {
                    "column": 29,
                    "line": 5
                  }
                }
              },
              "range": [
                125,
                129
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                115,
                116
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              115,
              129
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 5
              },
              "start": {
                "column": 19,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        96,
        172
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"a\"",
            "value": "a",
            "range": [
              176,
              179
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "range": [
                    187,
                    189
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "range": [
                      196,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
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
                      "name": "p",
                      "optional": false,
                      "range": [
                        191,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    191,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "range": [
                  187,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
              181,
              200
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 7,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            174,
            175
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          174,
          201
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
      },
      "range": [
        174,
        202
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
                "name": "x",
                "optional": false,
                "range": [
                  297,
                  298
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  301,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              "range": [
                297,
                302
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              297,
              303
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          291,
          305
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 75,
            "line": 12
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          213,
          214
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
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
                "column": 62,
                "line": 12
              },
              "start": {
                "column": 26,
                "line": 12
              }
            },
            "range": [
              242,
              278
            ],
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    276,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 12
                    },
                    "start": {
                      "column": 60,
                      "line": 12
                    }
                  }
                },
                "range": [
                  276,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 12
                  },
                  "start": {
                    "column": 60,
                    "line": 12
                  }
                }
              },
              "objectType": {
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            247,
                            248
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 12
                            },
                            "start": {
                              "column": 31,
                              "line": 12
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
                              "column": 40,
                              "line": 12
                            },
                            "start": {
                              "column": 32,
                              "line": 12
                            }
                          },
                          "range": [
                            248,
                            256
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              250,
                              256
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 12
                              },
                              "start": {
                                "column": 34,
                                "line": 12
                              }
                            }
                          }
                        },
                        "range": [
                          247,
                          256
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 12
                          },
                          "start": {
                            "column": 31,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      245,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 12
                      },
                      "start": {
                        "column": 29,
                        "line": 12
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
                          "name": "b",
                          "optional": false,
                          "range": [
                            263,
                            264
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 12
                            },
                            "start": {
                              "column": 47,
                              "line": 12
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
                              "column": 56,
                              "line": 12
                            },
                            "start": {
                              "column": 48,
                              "line": 12
                            }
                          },
                          "range": [
                            264,
                            272
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              266,
                              272
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 12
                              },
                              "start": {
                                "column": 50,
                                "line": 12
                              }
                            }
                          }
                        },
                        "range": [
                          263,
                          272
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 12
                          },
                          "start": {
                            "column": 47,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      261,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 12
                      },
                      "start": {
                        "column": 45,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  245,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 12
                  },
                  "start": {
                    "column": 29,
                    "line": 12
                  }
                }
              },
              "range": [
                244,
                278
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 12
                },
                "start": {
                  "column": 28,
                  "line": 12
                }
              }
            }
          },
          "range": [
            241,
            278
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 12
            },
            "start": {
              "column": 25,
              "line": 12
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
                "column": 73,
                "line": 12
              },
              "start": {
                "column": 65,
                "line": 12
              }
            },
            "range": [
              281,
              289
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                283,
                289
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 12
                },
                "start": {
                  "column": 67,
                  "line": 12
                }
              }
            }
          },
          "range": [
            280,
            289
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 12
            },
            "start": {
              "column": 64,
              "line": 12
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 11
          }
        },
        "range": [
          214,
          240
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      230,
                      233
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 12
                      },
                      "start": {
                        "column": 14,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    230,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 14,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"b\"",
                    "value": "b",
                    "range": [
                      236,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 20,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    236,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 20,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                230,
                239
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                220,
                221
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              220,
              239
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        204,
        305
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
