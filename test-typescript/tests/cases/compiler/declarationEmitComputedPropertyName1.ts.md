__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    413
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "create",
        "optional": false,
        "range": [
          74,
          80
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 3
          },
          "start": {
            "column": 39,
            "line": 3
          }
        },
        "range": [
          96,
          99
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              98,
              99
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
          "range": [
            98,
            99
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
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
          }
        },
        "range": [
          80,
          94
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                91,
                93
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
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
                81,
                82
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              81,
              93
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        57,
        100
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        102,
        279
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                115,
                116
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "range": [
                  119,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  125,
                  276
                ],
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "range": [
                            130,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 6
                            },
                            "start": {
                              "column": 2,
                              "line": 6
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
                              "column": 3,
                              "line": 12
                            },
                            "start": {
                              "column": 6,
                              "line": 6
                            }
                          },
                          "range": [
                            134,
                            251
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": true,
                                "key": {
                                  "type": "Literal",
                                  "raw": "\"a_b_c\"",
                                  "value": "a_b_c",
                                  "range": [
                                    143,
                                    150
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 12,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 5,
                                      "line": 7
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
                                      "column": 21,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 7
                                    }
                                  },
                                  "range": [
                                    151,
                                    159
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      153,
                                      159
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 7
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  142,
                                  160
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 4,
                                    "line": 7
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": true,
                                "key": {
                                  "type": "Literal",
                                  "raw": "\"sss\"",
                                  "value": "sss",
                                  "range": [
                                    166,
                                    171
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 10,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 5,
                                      "line": 8
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
                                      "column": 19,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 8
                                    }
                                  },
                                  "range": [
                                    172,
                                    180
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      174,
                                      180
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 8
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  165,
                                  181
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 4,
                                    "line": 8
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s_d",
                                  "optional": false,
                                  "range": [
                                    186,
                                    189
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 7,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 4,
                                      "line": 9
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
                                      "column": 15,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 7,
                                      "line": 9
                                    }
                                  },
                                  "range": [
                                    189,
                                    197
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      191,
                                      197
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 15,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 9,
                                        "line": 9
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  186,
                                  198
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 4,
                                    "line": 9
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "queryData",
                                  "optional": false,
                                  "range": [
                                    203,
                                    212
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 4,
                                      "line": 10
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
                                      "column": 22,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 10
                                    }
                                  },
                                  "range": [
                                    213,
                                    221
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      215,
                                      221
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 10
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  203,
                                  222
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 4,
                                    "line": 10
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": true,
                                "key": {
                                  "type": "Literal",
                                  "raw": "\"foo bar\"",
                                  "value": "foo bar",
                                  "range": [
                                    228,
                                    237
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 5,
                                      "line": 11
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
                                      "column": 23,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 11
                                    }
                                  },
                                  "range": [
                                    238,
                                    246
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      240,
                                      246
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 11
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  227,
                                  247
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 4,
                                    "line": 11
                                  }
                                }
                              }
                            ],
                            "range": [
                              136,
                              251
                            ],
                            "loc": {
                              "end": {
                                "column": 3,
                                "line": 12
                              },
                              "start": {
                                "column": 8,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          130,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 4,
                            "line": 12
                          },
                          "start": {
                            "column": 2,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": true,
                        "key": {
                          "type": "Literal",
                          "raw": "\"a_b_c\"",
                          "value": "a_b_c",
                          "range": [
                            256,
                            263
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 13
                            },
                            "start": {
                              "column": 3,
                              "line": 13
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
                              "column": 19,
                              "line": 13
                            },
                            "start": {
                              "column": 11,
                              "line": 13
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
                                "column": 19,
                                "line": 13
                              },
                              "start": {
                                "column": 13,
                                "line": 13
                              }
                            }
                          }
                        },
                        "range": [
                          255,
                          273
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
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
                      126,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 14
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 14
                  },
                  "start": {
                    "column": 23,
                    "line": 5
                  }
                }
              },
              "range": [
                119,
                278
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 14
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              }
            },
            "range": [
              115,
              278
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 14
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          109,
          279
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 5,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        281,
        412
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            304,
            412
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Literal",
                "raw": "\"a_b_c\"",
                "value": "a_b_c",
                "range": [
                  309,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 17
                  },
                  "start": {
                    "column": 3,
                    "line": 17
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
                    "column": 19,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                },
                "range": [
                  317,
                  325
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    319,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                }
              },
              "range": [
                308,
                326
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 17
                },
                "start": {
                  "column": 2,
                  "line": 17
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "range": [
                  329,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 18
                  },
                  "start": {
                    "column": 2,
                    "line": 18
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
                    "column": 3,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                },
                "range": [
                  335,
                  409
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "key": {
                        "type": "Literal",
                        "raw": "\"d_e_f\"",
                        "value": "d_e_f",
                        "range": [
                          344,
                          351
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 19
                          },
                          "start": {
                            "column": 5,
                            "line": 19
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
                            "column": 21,
                            "line": 19
                          },
                          "start": {
                            "column": 13,
                            "line": 19
                          }
                        },
                        "range": [
                          352,
                          360
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            354,
                            360
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 19
                            },
                            "start": {
                              "column": 15,
                              "line": 19
                            }
                          }
                        }
                      },
                      "range": [
                        343,
                        361
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 19
                        },
                        "start": {
                          "column": 4,
                          "line": 19
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          366,
                          371
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 20
                          },
                          "start": {
                            "column": 4,
                            "line": 20
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
                            "column": 17,
                            "line": 20
                          },
                          "start": {
                            "column": 9,
                            "line": 20
                          }
                        },
                        "range": [
                          371,
                          379
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            373,
                            379
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 20
                            },
                            "start": {
                              "column": 11,
                              "line": 20
                            }
                          }
                        }
                      },
                      "range": [
                        366,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 20
                        },
                        "start": {
                          "column": 4,
                          "line": 20
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "key": {
                        "type": "Literal",
                        "raw": "\"qwe rty\"",
                        "value": "qwe rty",
                        "range": [
                          386,
                          395
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 21
                          },
                          "start": {
                            "column": 5,
                            "line": 21
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
                            "column": 23,
                            "line": 21
                          },
                          "start": {
                            "column": 15,
                            "line": 21
                          }
                        },
                        "range": [
                          396,
                          404
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            398,
                            404
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 21
                            },
                            "start": {
                              "column": 17,
                              "line": 21
                            }
                          }
                        }
                      },
                      "range": [
                        385,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 21
                        },
                        "start": {
                          "column": 4,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    337,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 22
                    },
                    "start": {
                      "column": 10,
                      "line": 18
                    }
                  }
                }
              },
              "range": [
                329,
                410
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 22
                },
                "start": {
                  "column": 2,
                  "line": 18
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 23,
              "line": 16
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IData",
          "optional": false,
          "range": [
            298,
            303
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 16
            },
            "start": {
              "column": 17,
              "line": 16
            }
          }
        },
        "range": [
          288,
          412
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
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
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
