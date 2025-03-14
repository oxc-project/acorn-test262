__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    282
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
            "name": "mappedObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              },
              "range": [
                38,
                74
              ],
              "typeAnnotation": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      47,
                      52
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
                    47,
                    52
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
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    42,
                    43
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
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        55,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 3
                        },
                        "start": {
                          "column": 33,
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              63,
                              64
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 3
                              },
                              "start": {
                                "column": 41,
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
                                "column": 50,
                                "line": 3
                              },
                              "start": {
                                "column": 42,
                                "line": 3
                              }
                            },
                            "range": [
                              64,
                              72
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                66,
                                72
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 3
                                },
                                "start": {
                                  "column": 44,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            63,
                            72
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 3
                            },
                            "start": {
                              "column": 41,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        62,
                        73
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 3
                        },
                        "start": {
                          "column": 40,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    55,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 3
                    },
                    "start": {
                      "column": 33,
                      "line": 3
                    }
                  }
                },
                "range": [
                  40,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              26,
              74
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    78,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 3
                    },
                    "start": {
                      "column": 56,
                      "line": 3
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          84,
                          85
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
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          87,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 3
                          },
                          "start": {
                            "column": 65,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        84,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
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
                    83,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 3
                    },
                    "start": {
                      "column": 61,
                      "line": 3
                    }
                  }
                },
                "range": [
                  78,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 3
                  },
                  "start": {
                    "column": 56,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              77,
              96
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 3
              },
              "start": {
                "column": 55,
                "line": 3
              }
            }
          },
          "range": [
            26,
            96
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        22,
        97
      ],
      "loc": {
        "end": {
          "column": 75,
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
        "name": "foo",
        "optional": false,
        "range": [
          115,
          118
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
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
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 25,
                "line": 4
              }
            },
            "range": [
              123,
              126
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  125,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 4
                  },
                  "start": {
                    "column": 27,
                    "line": 4
                  }
                }
              },
              "range": [
                125,
                126
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              }
            }
          },
          "range": [
            122,
            126
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 4
            },
            "start": {
              "column": 24,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 4
          },
          "start": {
            "column": 29,
            "line": 4
          }
        },
        "range": [
          127,
          137
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNullKeyword",
              "range": [
                129,
                133
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 31,
                  "line": 4
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  136,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 4
                  },
                  "start": {
                    "column": 38,
                    "line": 4
                  }
                }
              },
              "range": [
                136,
                137
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 4
                },
                "start": {
                  "column": 38,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            129,
            137
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 4
            },
            "start": {
              "column": 31,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 20,
            "line": 4
          }
        },
        "range": [
          118,
          121
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
                119,
                120
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              119,
              120
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 21,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        98,
        138
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
                  "name": "element",
                  "optional": false,
                  "range": [
                    188,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mappedObject",
                        "optional": false,
                        "range": [
                          202,
                          214
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 7
                          },
                          "start": {
                            "column": 22,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "range": [
                          215,
                          218
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 7
                          },
                          "start": {
                            "column": 35,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        202,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 7
                        },
                        "start": {
                          "column": 22,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      198,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 7
                      },
                      "start": {
                        "column": 18,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    198,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 18,
                      "line": 7
                    }
                  }
                },
                "range": [
                  188,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              182,
              221
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "range": [
                249,
                256
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "element",
                "optional": false,
                "range": [
                  228,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 6,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  239,
                  243
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
                228,
                243
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              }
            },
            "range": [
              224,
              256
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 8
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    265,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "range": [
                      269,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 10
                      },
                      "start": {
                        "column": 12,
                        "line": 10
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
                      277,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 10
                      },
                      "start": {
                        "column": 20,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    269,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                },
                "range": [
                  265,
                  278
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
            "declare": false,
            "kind": "const",
            "range": [
              259,
              279
            ],
            "loc": {
              "end": {
                "column": 22,
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
          178,
          281
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 38,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "range": [
          149,
          152
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
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
                "column": 36,
                "line": 6
              },
              "start": {
                "column": 33,
                "line": 6
              }
            },
            "range": [
              173,
              176
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  175,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 6
                  },
                  "start": {
                    "column": 35,
                    "line": 6
                  }
                }
              },
              "range": [
                175,
                176
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 6
                },
                "start": {
                  "column": 35,
                  "line": 6
                }
              }
            }
          },
          "range": [
            170,
            176
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 6
            },
            "start": {
              "column": 30,
              "line": 6
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        },
        "range": [
          152,
          169
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  163,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 23,
                    "line": 6
                  }
                }
              },
              "range": [
                163,
                168
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
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
                153,
                154
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              153,
              168
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        140,
        281
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 6
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
