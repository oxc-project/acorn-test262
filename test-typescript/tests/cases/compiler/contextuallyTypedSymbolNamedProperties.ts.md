__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    460
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
            "name": "A",
            "optional": false,
            "range": [
              29,
              30
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"A\"",
                "value": "A",
                "range": [
                  40,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                33,
                39
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              33,
              44
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "range": [
            29,
            44
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        23,
        45
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 3
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
            "name": "B",
            "optional": false,
            "range": [
              52,
              53
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"B\"",
                "value": "B",
                "range": [
                  63,
                  66
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                56,
                62
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "optional": false,
            "range": [
              56,
              67
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          },
          "range": [
            52,
            67
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        46,
        68
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "range": [
          75,
          81
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    91,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
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
                      "column": 11,
                      "line": 7
                    }
                  },
                  "range": [
                    95,
                    105
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        104,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 7
                        },
                        "start": {
                          "column": 20,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      97,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  91,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    107,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 7
                    },
                    "start": {
                      "column": 23,
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
                      "column": 35,
                      "line": 7
                    },
                    "start": {
                      "column": 27,
                      "line": 7
                    }
                  },
                  "range": [
                    111,
                    119
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      113,
                      119
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
                  }
                },
                "range": [
                  107,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              90,
              120
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    128,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 8
                    },
                    "start": {
                      "column": 7,
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
                      "column": 21,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  },
                  "range": [
                    132,
                    142
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        141,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 8
                        },
                        "start": {
                          "column": 20,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      134,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
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
                  128,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 7,
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
                  "name": "data",
                  "optional": false,
                  "range": [
                    144,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 8
                    },
                    "start": {
                      "column": 23,
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
                      "column": 35,
                      "line": 8
                    },
                    "start": {
                      "column": 27,
                      "line": 8
                    }
                  },
                  "range": [
                    148,
                    156
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      150,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 8
                      },
                      "start": {
                        "column": 29,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  144,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 35,
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
              127,
              157
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          }
        ],
        "range": [
          88,
          157
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 8
          },
          "start": {
            "column": 4,
            "line": 7
          }
        }
      },
      "range": [
        70,
        157
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 10
                },
                "start": {
                  "column": 16,
                  "line": 10
                }
              },
              "range": [
                175,
                183
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "range": [
                    177,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 10
                    },
                    "start": {
                      "column": 18,
                      "line": 10
                    }
                  }
                },
                "range": [
                  177,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              173,
              183
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 10
              },
              "start": {
                "column": 14,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            173,
            183
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 10
            },
            "start": {
              "column": 14,
              "line": 10
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        159,
        184
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
          203,
          204
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 12
              },
              "start": {
                "column": 62,
                "line": 12
              }
            },
            "range": [
              248,
              251
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  250,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 12
                  },
                  "start": {
                    "column": 64,
                    "line": 12
                  }
                }
              },
              "range": [
                250,
                251
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 12
                },
                "start": {
                  "column": 64,
                  "line": 12
                }
              }
            }
          },
          "range": [
            242,
            251
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 12
            },
            "start": {
              "column": 56,
              "line": 12
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 109,
                "line": 12
              },
              "start": {
                "column": 71,
                "line": 12
              }
            },
            "range": [
              257,
              295
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'type'",
                    "value": "type",
                    "range": [
                      269,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 12
                      },
                      "start": {
                        "column": 83,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    269,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 12
                    },
                    "start": {
                      "column": 83,
                      "line": 12
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
                      267,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 12
                      },
                      "start": {
                        "column": 81,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    267,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 12
                    },
                    "start": {
                      "column": 81,
                      "line": 12
                    }
                  }
                },
                "range": [
                  267,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 12
                  },
                  "start": {
                    "column": 81,
                    "line": 12
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  262,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 12
                  },
                  "start": {
                    "column": 76,
                    "line": 12
                  }
                }
              },
              "nameType": null,
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
                          "column": 98,
                          "line": 12
                        },
                        "start": {
                          "column": 95,
                          "line": 12
                        }
                      },
                      "range": [
                        281,
                        284
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            283,
                            284
                          ],
                          "loc": {
                            "end": {
                              "column": 98,
                              "line": 12
                            },
                            "start": {
                              "column": 97,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          283,
                          284
                        ],
                        "loc": {
                          "end": {
                            "column": 98,
                            "line": 12
                          },
                          "start": {
                            "column": 97,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      280,
                      284
                    ],
                    "loc": {
                      "end": {
                        "column": 98,
                        "line": 12
                      },
                      "start": {
                        "column": 94,
                        "line": 12
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 107,
                      "line": 12
                    },
                    "start": {
                      "column": 100,
                      "line": 12
                    }
                  },
                  "range": [
                    286,
                    293
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      289,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 107,
                        "line": 12
                      },
                      "start": {
                        "column": 103,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  279,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 107,
                    "line": 12
                  },
                  "start": {
                    "column": 93,
                    "line": 12
                  }
                }
              },
              "range": [
                259,
                295
              ],
              "loc": {
                "end": {
                  "column": 109,
                  "line": 12
                },
                "start": {
                  "column": 73,
                  "line": 12
                }
              }
            }
          },
          "range": [
            253,
            295
          ],
          "loc": {
            "end": {
              "column": 109,
              "line": 12
            },
            "start": {
              "column": 67,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 115,
            "line": 12
          },
          "start": {
            "column": 110,
            "line": 12
          }
        },
        "range": [
          296,
          301
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            298,
            301
          ],
          "loc": {
            "end": {
              "column": 115,
              "line": 12
            },
            "start": {
              "column": 112,
              "line": 12
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 12
          },
          "start": {
            "column": 18,
            "line": 12
          }
        },
        "range": [
          204,
          241
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      217,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
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
                        "column": 52,
                        "line": 12
                      },
                      "start": {
                        "column": 35,
                        "line": 12
                      }
                    },
                    "range": [
                      221,
                      238
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            223,
                            229
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 12
                            },
                            "start": {
                              "column": 37,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "TSSymbolKeyword",
                          "range": [
                            232,
                            238
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 12
                            },
                            "start": {
                              "column": 46,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        223,
                        238
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 12
                        },
                        "start": {
                          "column": 37,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    217,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
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
                215,
                240
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 12
                },
                "start": {
                  "column": 29,
                  "line": 12
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
                205,
                206
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 19,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              205,
              240
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 12
              },
              "start": {
                "column": 19,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        186,
        302
      ],
      "loc": {
        "end": {
          "column": 116,
          "line": 12
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
            "type": "Identifier",
            "decorators": [],
            "name": "ab",
            "optional": false,
            "range": [
              306,
              308
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    317,
                    318
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 15
                    },
                    "start": {
                      "column": 5,
                      "line": 15
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ap",
                            "optional": false,
                            "range": [
                              329,
                              331
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 15
                              },
                              "start": {
                                "column": 17,
                                "line": 15
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "description",
                            "optional": false,
                            "range": [
                              332,
                              343
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 15
                              },
                              "start": {
                                "column": 20,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            329,
                            343
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 15
                            },
                            "start": {
                              "column": 17,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          329,
                          343
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 15
                          },
                          "start": {
                            "column": 17,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      327,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
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
                      "name": "ap",
                      "optional": false,
                      "range": [
                        321,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 15
                        },
                        "start": {
                          "column": 9,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    321,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  }
                },
                "range": [
                  316,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    352,
                    353
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 16
                    },
                    "start": {
                      "column": 5,
                      "line": 16
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bp",
                            "optional": false,
                            "range": [
                              364,
                              366
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 16
                              },
                              "start": {
                                "column": 17,
                                "line": 16
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "description",
                            "optional": false,
                            "range": [
                              367,
                              378
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 16
                              },
                              "start": {
                                "column": 20,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            364,
                            378
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 16
                            },
                            "start": {
                              "column": 17,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          364,
                          378
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 16
                          },
                          "start": {
                            "column": 17,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "range": [
                      362,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 16
                      },
                      "start": {
                        "column": 15,
                        "line": 16
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
                      "name": "bp",
                      "optional": false,
                      "range": [
                        356,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 16
                        },
                        "start": {
                          "column": 9,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    356,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 16
                    },
                    "start": {
                      "column": 9,
                      "line": 16
                    }
                  }
                },
                "range": [
                  351,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              }
            ],
            "range": [
              310,
              383
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 14
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
            304,
            305
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "optional": false,
        "range": [
          304,
          384
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        304,
        384
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 14
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 19
                },
                "start": {
                  "column": 7,
                  "line": 19
                }
              },
              "range": [
                393,
                433
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sym",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 19
                            },
                            "start": {
                              "column": 15,
                              "line": 19
                            }
                          },
                          "range": [
                            401,
                            409
                          ],
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "range": [
                              403,
                              409
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 19
                              },
                              "start": {
                                "column": 17,
                                "line": 19
                              }
                            }
                          }
                        },
                        "range": [
                          398,
                          409
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 19
                          },
                          "start": {
                            "column": 12,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 19
                        },
                        "start": {
                          "column": 24,
                          "line": 19
                        }
                      },
                      "range": [
                        410,
                        431
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
                                  "column": 36,
                                  "line": 19
                                },
                                "start": {
                                  "column": 28,
                                  "line": 19
                                }
                              },
                              "range": [
                                414,
                                422
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  416,
                                  422
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 19
                                  }
                                }
                              }
                            },
                            "range": [
                              413,
                              422
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 19
                              },
                              "start": {
                                "column": 27,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 19
                            },
                            "start": {
                              "column": 38,
                              "line": 19
                            }
                          },
                          "range": [
                            424,
                            431
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              427,
                              431
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 19
                              },
                              "start": {
                                "column": 41,
                                "line": 19
                              }
                            }
                          }
                        },
                        "range": [
                          412,
                          431
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 19
                          },
                          "start": {
                            "column": 26,
                            "line": 19
                          }
                        }
                      }
                    },
                    "range": [
                      397,
                      431
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 19
                      },
                      "start": {
                        "column": 11,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  395,
                  433
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              392,
              433
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    439,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 19
                    },
                    "start": {
                      "column": 53,
                      "line": 19
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        448,
                        449
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 19
                        },
                        "start": {
                          "column": 62,
                          "line": 19
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
                        450,
                        456
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 19
                        },
                        "start": {
                          "column": 64,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      448,
                      456
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 19
                      },
                      "start": {
                        "column": 62,
                        "line": 19
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
                      "name": "s",
                      "optional": false,
                      "range": [
                        443,
                        444
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 19
                        },
                        "start": {
                          "column": 57,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "range": [
                    443,
                    456
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 19
                    },
                    "start": {
                      "column": 57,
                      "line": 19
                    }
                  }
                },
                "range": [
                  438,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 19
                  },
                  "start": {
                    "column": 52,
                    "line": 19
                  }
                }
              }
            ],
            "range": [
              436,
              458
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 19
              },
              "start": {
                "column": 50,
                "line": 19
              }
            }
          },
          "range": [
            392,
            458
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        386,
        459
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
