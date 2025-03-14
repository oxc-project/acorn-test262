__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    599
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fs",
        "optional": false,
        "range": [
          7,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'fs'",
          "value": "fs",
          "range": [
            20,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "range": [
          12,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
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
        26
      ],
      "loc": {
        "end": {
          "column": 26,
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
          190,
          192
        ],
        "loc": {
          "end": {
            "column": 165,
            "line": 2
          },
          "start": {
            "column": 163,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "readdir",
        "optional": false,
        "range": [
          36,
          43
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 21,
                "line": 2
              }
            },
            "range": [
              48,
              56
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                50,
                56
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            }
          },
          "range": [
            44,
            56
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "accept",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 80,
                "line": 2
              },
              "start": {
                "column": 37,
                "line": 2
              }
            },
            "range": [
              64,
              107
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stat",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 2
                      },
                      "start": {
                        "column": 44,
                        "line": 2
                      }
                    },
                    "range": [
                      71,
                      81
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fs",
                          "optional": false,
                          "range": [
                            73,
                            75
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 2
                            },
                            "start": {
                              "column": 46,
                              "line": 2
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Stats",
                          "optional": false,
                          "range": [
                            76,
                            81
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 2
                            },
                            "start": {
                              "column": 49,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          73,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 2
                          },
                          "start": {
                            "column": 46,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        73,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 2
                        },
                        "start": {
                          "column": 46,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    67,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 2
                    },
                    "start": {
                      "column": 40,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 2
                      },
                      "start": {
                        "column": 60,
                        "line": 2
                      }
                    },
                    "range": [
                      87,
                      95
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        89,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 2
                        },
                        "start": {
                          "column": 62,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    83,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 2
                    },
                    "start": {
                      "column": 56,
                      "line": 2
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 2
                  },
                  "start": {
                    "column": 70,
                    "line": 2
                  }
                },
                "range": [
                  97,
                  107
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    100,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 2
                    },
                    "start": {
                      "column": 73,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                66,
                107
              ],
              "loc": {
                "end": {
                  "column": 80,
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
            58,
            107
          ],
          "loc": {
            "end": {
              "column": 80,
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
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 160,
                "line": 2
              },
              "start": {
                "column": 90,
                "line": 2
              }
            },
            "range": [
              117,
              187
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 105,
                        "line": 2
                      },
                      "start": {
                        "column": 98,
                        "line": 2
                      }
                    },
                    "range": [
                      125,
                      132
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "range": [
                          127,
                          132
                        ],
                        "loc": {
                          "end": {
                            "column": 105,
                            "line": 2
                          },
                          "start": {
                            "column": 100,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        127,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 105,
                          "line": 2
                        },
                        "start": {
                          "column": 100,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    120,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 105,
                      "line": 2
                    },
                    "start": {
                      "column": 93,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "results",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 151,
                        "line": 2
                      },
                      "start": {
                        "column": 114,
                        "line": 2
                      }
                    },
                    "range": [
                      141,
                      178
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "range": [
                                145,
                                149
                              ],
                              "loc": {
                                "end": {
                                  "column": 122,
                                  "line": 2
                                },
                                "start": {
                                  "column": 118,
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
                                  "column": 130,
                                  "line": 2
                                },
                                "start": {
                                  "column": 122,
                                  "line": 2
                                }
                              },
                              "range": [
                                149,
                                157
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  151,
                                  157
                                ],
                                "loc": {
                                  "end": {
                                    "column": 130,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 124,
                                    "line": 2
                                  }
                                }
                              }
                            },
                            "range": [
                              145,
                              158
                            ],
                            "loc": {
                              "end": {
                                "column": 131,
                                "line": 2
                              },
                              "start": {
                                "column": 118,
                                "line": 2
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "stat",
                              "optional": false,
                              "range": [
                                159,
                                163
                              ],
                              "loc": {
                                "end": {
                                  "column": 136,
                                  "line": 2
                                },
                                "start": {
                                  "column": 132,
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
                                  "column": 146,
                                  "line": 2
                                },
                                "start": {
                                  "column": 136,
                                  "line": 2
                                }
                              },
                              "range": [
                                163,
                                173
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fs",
                                    "optional": false,
                                    "range": [
                                      165,
                                      167
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 140,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 138,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Stats",
                                    "optional": false,
                                    "range": [
                                      168,
                                      173
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 146,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 141,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "range": [
                                    165,
                                    173
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 146,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 138,
                                      "line": 2
                                    }
                                  }
                                },
                                "range": [
                                  165,
                                  173
                                ],
                                "loc": {
                                  "end": {
                                    "column": 146,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 138,
                                    "line": 2
                                  }
                                }
                              }
                            },
                            "range": [
                              159,
                              174
                            ],
                            "loc": {
                              "end": {
                                "column": 147,
                                "line": 2
                              },
                              "start": {
                                "column": 132,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "range": [
                          143,
                          176
                        ],
                        "loc": {
                          "end": {
                            "column": 149,
                            "line": 2
                          },
                          "start": {
                            "column": 116,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        143,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 151,
                          "line": 2
                        },
                        "start": {
                          "column": 116,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    134,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 151,
                      "line": 2
                    },
                    "start": {
                      "column": 107,
                      "line": 2
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 160,
                    "line": 2
                  },
                  "start": {
                    "column": 153,
                    "line": 2
                  }
                },
                "range": [
                  180,
                  187
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    183,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 160,
                      "line": 2
                    },
                    "start": {
                      "column": 156,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                119,
                187
              ],
              "loc": {
                "end": {
                  "column": 160,
                  "line": 2
                },
                "start": {
                  "column": 92,
                  "line": 2
                }
              }
            }
          },
          "range": [
            109,
            187
          ],
          "loc": {
            "end": {
              "column": 160,
              "line": 2
            },
            "start": {
              "column": 82,
              "line": 2
            }
          }
        }
      ],
      "range": [
        27,
        192
      ],
      "loc": {
        "end": {
          "column": 165,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
          228,
          230
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 4
          },
          "start": {
            "column": 34,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "join",
        "optional": false,
        "range": [
          203,
          207
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "paths",
            "optional": false,
            "range": [
              211,
              216
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            },
            "range": [
              216,
              226
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  218,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              },
              "range": [
                218,
                226
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            }
          },
          "range": [
            208,
            226
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        }
      ],
      "range": [
        194,
        230
      ],
      "loc": {
        "end": {
          "column": 36,
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "originalFilePath",
                  "optional": false,
                  "range": [
                    341,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 7
                    },
                    "start": {
                      "column": 16,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "ArrowFunctionExpression",
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
                              "name": "covFileDir",
                              "optional": false,
                              "range": [
                                390,
                                400
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 8
                                },
                                "start": {
                                  "column": 16,
                                  "line": 8
                                }
                              }
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "range": [
                                  408,
                                  419
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 8
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                402,
                                419
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 9
                                },
                                "start": {
                                  "column": 28,
                                  "line": 8
                                }
                              }
                            },
                            {
                              "type": "ArrowFunctionExpression",
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
                                          "type": "ArrowFunctionExpression",
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
                                                      "name": "fullPath",
                                                      "optional": false,
                                                      "range": [
                                                        521,
                                                        529
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 32,
                                                          "line": 11
                                                        },
                                                        "start": {
                                                          "column": 24,
                                                          "line": 11
                                                        }
                                                      }
                                                    },
                                                    "init": {
                                                      "type": "CallExpression",
                                                      "arguments": [
                                                        {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "IDoNotExist",
                                                          "optional": false,
                                                          "range": [
                                                            537,
                                                            548
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 51,
                                                              "line": 11
                                                            },
                                                            "start": {
                                                              "column": 40,
                                                              "line": 11
                                                            }
                                                          }
                                                        }
                                                      ],
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "join",
                                                        "optional": false,
                                                        "range": [
                                                          532,
                                                          536
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 39,
                                                            "line": 11
                                                          },
                                                          "start": {
                                                            "column": 35,
                                                            "line": 11
                                                          }
                                                        }
                                                      },
                                                      "optional": false,
                                                      "range": [
                                                        532,
                                                        549
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 52,
                                                          "line": 11
                                                        },
                                                        "start": {
                                                          "column": 35,
                                                          "line": 11
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      521,
                                                      549
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 52,
                                                        "line": 11
                                                      },
                                                      "start": {
                                                        "column": 24,
                                                        "line": 11
                                                      }
                                                    }
                                                  }
                                                ],
                                                "declare": false,
                                                "kind": "var",
                                                "range": [
                                                  517,
                                                  550
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 53,
                                                    "line": 11
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 11
                                                  }
                                                }
                                              }
                                            ],
                                            "range": [
                                              495,
                                              568
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 17,
                                                "line": 12
                                              },
                                              "start": {
                                                "column": 40,
                                                "line": 10
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
                                              "name": "file",
                                              "optional": false,
                                              "range": [
                                                486,
                                                490
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 35,
                                                  "line": 10
                                                },
                                                "start": {
                                                  "column": 31,
                                                  "line": 10
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            485,
                                            568
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 17,
                                              "line": 12
                                            },
                                            "start": {
                                              "column": 30,
                                              "line": 10
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
                                          "name": "files",
                                          "optional": false,
                                          "range": [
                                            471,
                                            476
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 21,
                                              "line": 10
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 10
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "forEach",
                                          "optional": false,
                                          "range": [
                                            477,
                                            484
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 29,
                                              "line": 10
                                            },
                                            "start": {
                                              "column": 22,
                                              "line": 10
                                            }
                                          }
                                        },
                                        "range": [
                                          471,
                                          484
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        471,
                                        570
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 19,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "range": [
                                      471,
                                      571
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 10
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  453,
                                  585
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 9
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
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 9
                                      }
                                    },
                                    "range": [
                                      428,
                                      435
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Error",
                                        "optional": false,
                                        "range": [
                                          430,
                                          435
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 25,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        430,
                                        435
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 9
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    423,
                                    435
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 9
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "files",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 9
                                      }
                                    },
                                    "range": [
                                      442,
                                      448
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSTypeLiteral",
                                        "members": [],
                                        "range": [
                                          444,
                                          446
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 34,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        444,
                                        448
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 9
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    437,
                                    448
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 9
                                    }
                                  }
                                }
                              ],
                              "range": [
                                422,
                                585
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 13
                                },
                                "start": {
                                  "column": 12,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "readdir",
                            "optional": false,
                            "range": [
                              382,
                              389
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 8
                              },
                              "start": {
                                "column": 8,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            382,
                            587
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          382,
                          588
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      365,
                      594
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 14
                      },
                      "start": {
                        "column": 40,
                        "line": 7
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    359,
                    594
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 34,
                      "line": 7
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
                  "name": "fs",
                  "optional": false,
                  "range": [
                    329,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "readFile",
                  "optional": false,
                  "range": [
                    332,
                    340
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                },
                "range": [
                  329,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                329,
                596
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "range": [
              329,
              597
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          323,
          599
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 91,
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
        "name": "instrumentFile",
        "optional": false,
        "range": [
          241,
          255
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "name": "covFileDir",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 6
              },
              "start": {
                "column": 34,
                "line": 6
              }
            },
            "range": [
              266,
              274
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                268,
                274
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 6
                },
                "start": {
                  "column": 36,
                  "line": 6
                }
              }
            }
          },
          "range": [
            256,
            274
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 6
            },
            "start": {
              "column": 24,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "covFileName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 6
              },
              "start": {
                "column": 55,
                "line": 6
              }
            },
            "range": [
              287,
              295
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                289,
                295
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 6
                },
                "start": {
                  "column": 57,
                  "line": 6
                }
              }
            }
          },
          "range": [
            276,
            295
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 6
            },
            "start": {
              "column": 44,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "originalFilePath",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 89,
                "line": 6
              },
              "start": {
                "column": 81,
                "line": 6
              }
            },
            "range": [
              313,
              321
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                315,
                321
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 6
                },
                "start": {
                  "column": 83,
                  "line": 6
                }
              }
            }
          },
          "range": [
            297,
            321
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 6
            },
            "start": {
              "column": 65,
              "line": 6
            }
          }
        }
      ],
      "range": [
        232,
        599
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
      "column": 1,
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
