__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    320
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
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
        "type": "TSFunctionType",
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          },
          "range": [
            18,
            22
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "range": [
              21,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        },
        "range": [
          15,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        },
        "range": [
          9,
          12
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
                10,
                11
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              10,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        23
      ],
      "loc": {
        "end": {
          "column": 23,
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
        "name": "Mapped",
        "optional": false,
        "range": [
          30,
          36
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                56,
                57
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            },
            "range": [
              56,
              57
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          },
          "range": [
            50,
            57
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 3
            },
            "start": {
              "column": 25,
              "line": 3
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            45,
            46
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 20,
              "line": 3
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              64,
              70
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      67,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 3
                      },
                      "start": {
                        "column": 42,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    67,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 3
                    },
                    "start": {
                      "column": 42,
                      "line": 3
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      65,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 40,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    65,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 3
                    },
                    "start": {
                      "column": 40,
                      "line": 3
                    }
                  }
                },
                "range": [
                  65,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 40,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 39,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Func",
            "optional": false,
            "range": [
              60,
              64
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
          },
          "range": [
            60,
            70
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 3
            },
            "start": {
              "column": 35,
              "line": 3
            }
          }
        },
        "range": [
          42,
          72
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        },
        "range": [
          36,
          39
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
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              37,
              38
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        25,
        73
      ],
      "loc": {
        "end": {
          "column": 48,
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
        "name": "reproduce",
        "optional": false,
        "range": [
          92,
          101
        ],
        "loc": {
          "end": {
            "column": 26,
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
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            },
            "range": [
              109,
              117
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                111,
                117
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 36,
                  "line": 5
                }
              }
            }
          },
          "range": [
            102,
            117
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 5
            },
            "start": {
              "column": 27,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 5
          },
          "start": {
            "column": 43,
            "line": 5
          }
        },
        "range": [
          118,
          124
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            120,
            124
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 5
            },
            "start": {
              "column": 45,
              "line": 5
            }
          }
        }
      },
      "range": [
        75,
        125
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
        "name": "reproduce",
        "optional": false,
        "range": [
          143,
          152
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 6
              },
              "start": {
                "column": 37,
                "line": 6
              }
            },
            "range": [
              163,
              174
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  171,
                  174
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
                        172,
                        173
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 6
                        },
                        "start": {
                          "column": 46,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      172,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 6
                      },
                      "start": {
                        "column": 46,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 6
                  },
                  "start": {
                    "column": 45,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "range": [
                  165,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 6
                  },
                  "start": {
                    "column": 39,
                    "line": 6
                  }
                }
              },
              "range": [
                165,
                174
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 6
                },
                "start": {
                  "column": 39,
                  "line": 6
                }
              }
            }
          },
          "range": [
            156,
            174
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 6
            },
            "start": {
              "column": 30,
              "line": 6
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 6
          },
          "start": {
            "column": 49,
            "line": 6
          }
        },
        "range": [
          175,
          178
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              177,
              178
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 6
              },
              "start": {
                "column": 51,
                "line": 6
              }
            }
          },
          "range": [
            177,
            178
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 6
            },
            "start": {
              "column": 51,
              "line": 6
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 6
          },
          "start": {
            "column": 26,
            "line": 6
          }
        },
        "range": [
          152,
          155
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
                153,
                154
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 27,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              153,
              154
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 27,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        126,
        178
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "range": [
                    194,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 9
                    },
                    "start": {
                      "column": 2,
                      "line": 9
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
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "123",
                          "value": 123,
                          "range": [
                            217,
                            220
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 9
                            },
                            "start": {
                              "column": 25,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          210,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 9
                          },
                          "start": {
                            "column": 18,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      208,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 9
                      },
                      "start": {
                        "column": 16,
                        "line": 9
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    202,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 9
                    },
                    "start": {
                      "column": 10,
                      "line": 9
                    }
                  }
                },
                "range": [
                  194,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 2,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              190,
              224
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 8
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "reproduce",
          "optional": false,
          "range": [
            180,
            189
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
        "optional": false,
        "range": [
          180,
          225
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        180,
        226
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 10
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "range": [
                    242,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 13
                    },
                    "start": {
                      "column": 2,
                      "line": 13
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    246,
                    263
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "123",
                          "value": 123,
                          "range": [
                            258,
                            261
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 13
                            },
                            "start": {
                              "column": 18,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          251,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 13
                          },
                          "start": {
                            "column": 11,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "range": [
                      249,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 13
                      },
                      "start": {
                        "column": 9,
                        "line": 13
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
                      "column": 23,
                      "line": 13
                    },
                    "start": {
                      "column": 6,
                      "line": 13
                    }
                  }
                },
                "range": [
                  242,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 13
                  },
                  "start": {
                    "column": 2,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              238,
              265
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 14
              },
              "start": {
                "column": 10,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "reproduce",
          "optional": false,
          "range": [
            228,
            237
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
        "optional": false,
        "range": [
          228,
          266
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        228,
        267
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 14
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "range": [
                    283,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 17
                    },
                    "start": {
                      "column": 2,
                      "line": 17
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "123",
                          "value": 123,
                          "range": [
                            310,
                            313
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 17
                            },
                            "start": {
                              "column": 29,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          303,
                          313
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 17
                          },
                          "start": {
                            "column": 22,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      301,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 17
                      },
                      "start": {
                        "column": 20,
                        "line": 17
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    289,
                    315
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "range": [
                  283,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 17
                  },
                  "start": {
                    "column": 2,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              279,
              317
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 10,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "reproduce",
          "optional": false,
          "range": [
            269,
            278
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          269,
          318
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        269,
        319
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
