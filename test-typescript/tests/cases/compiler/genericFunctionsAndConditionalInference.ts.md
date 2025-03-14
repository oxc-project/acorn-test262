__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1111
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "range": [
          5,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
                33,
                34
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            },
            "range": [
              33,
              34
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 33,
                "line": 1
              }
            }
          },
          "range": [
            27,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            22,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "range": [
                  39,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 1
                  },
                  "start": {
                    "column": 39,
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
                    "column": 50,
                    "line": 1
                  },
                  "start": {
                    "column": 44,
                    "line": 1
                  }
                },
                "range": [
                  44,
                  50
                ],
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        48,
                        49
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 1
                        },
                        "start": {
                          "column": 48,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      48,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 1
                      },
                      "start": {
                        "column": 48,
                        "line": 1
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
                        46,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 1
                        },
                        "start": {
                          "column": 46,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      46,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 1
                      },
                      "start": {
                        "column": 46,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    46,
                    50
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 1
                    },
                    "start": {
                      "column": 46,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                39,
                50
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            37,
            51
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 1
            },
            "start": {
              "column": 37,
              "line": 1
            }
          }
        },
        "range": [
          19,
          53
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          16
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
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        54
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
        "name": "unboxify",
        "optional": false,
        "range": [
          73,
          81
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 32,
                "line": 3
              }
            },
            "range": [
              88,
              101
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  98,
                  101
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
                        99,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 3
                        },
                        "start": {
                          "column": 43,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      99,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 3
                      },
                      "start": {
                        "column": 43,
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
                    "column": 42,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "range": [
                  90,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              },
              "range": [
                90,
                101
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 34,
                  "line": 3
                }
              }
            }
          },
          "range": [
            85,
            101
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 3
            },
            "start": {
              "column": 29,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 3
          },
          "start": {
            "column": 46,
            "line": 3
          }
        },
        "range": [
          102,
          105
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              104,
              105
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 3
              },
              "start": {
                "column": 48,
                "line": 3
              }
            }
          },
          "range": [
            104,
            105
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 3
            },
            "start": {
              "column": 48,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 3
          },
          "start": {
            "column": 25,
            "line": 3
          }
        },
        "range": [
          81,
          84
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
                82,
                83
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              82,
              83
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        56,
        106
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    192,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 20,
                      "line": 6
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "unboxify",
                "optional": false,
                "range": [
                  183,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                183,
                196
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              176,
              197
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          170,
          199
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 62,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          117,
          120
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 5
              },
              "start": {
                "column": 22,
                "line": 5
              }
            },
            "range": [
              130,
              168
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
                    "name": "u",
                    "optional": false,
                    "range": [
                      134,
                      135
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 5
                      },
                      "start": {
                        "column": 26,
                        "line": 5
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
                        "column": 41,
                        "line": 5
                      },
                      "start": {
                        "column": 27,
                        "line": 5
                      }
                    },
                    "range": [
                      135,
                      149
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
                            "name": "value",
                            "optional": false,
                            "range": [
                              139,
                              144
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 5
                              },
                              "start": {
                                "column": 31,
                                "line": 5
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
                                "column": 39,
                                "line": 5
                              },
                              "start": {
                                "column": 36,
                                "line": 5
                              }
                            },
                            "range": [
                              144,
                              147
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "range": [
                                  146,
                                  147
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                146,
                                147
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 5
                                },
                                "start": {
                                  "column": 38,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            139,
                            147
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 5
                            },
                            "start": {
                              "column": 31,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        137,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 5
                        },
                        "start": {
                          "column": 29,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    134,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 5
                    },
                    "start": {
                      "column": 26,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      151,
                      152
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
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 5
                      },
                      "start": {
                        "column": 44,
                        "line": 5
                      }
                    },
                    "range": [
                      152,
                      166
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
                            "name": "value",
                            "optional": false,
                            "range": [
                              156,
                              161
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 5
                              },
                              "start": {
                                "column": 48,
                                "line": 5
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
                                "line": 5
                              },
                              "start": {
                                "column": 53,
                                "line": 5
                              }
                            },
                            "range": [
                              161,
                              164
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "range": [
                                  163,
                                  164
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 55,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                163,
                                164
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 5
                                },
                                "start": {
                                  "column": 55,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            156,
                            164
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 5
                            },
                            "start": {
                              "column": 48,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        154,
                        166
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 5
                        },
                        "start": {
                          "column": 46,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    151,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 5
                    },
                    "start": {
                      "column": 43,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                132,
                168
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              }
            }
          },
          "range": [
            127,
            168
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 5
            },
            "start": {
              "column": 19,
              "line": 5
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        },
        "range": [
          120,
          126
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                121,
                122
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
            "out": false,
            "range": [
              121,
              122
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                124,
                125
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              124,
              125
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        108,
        199
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "qq",
            "optional": false,
            "range": [
              205,
              207
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
          "init": {
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
                      "name": "u",
                      "optional": false,
                      "range": [
                        216,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
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
                            "name": "value",
                            "optional": false,
                            "range": [
                              221,
                              226
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
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "10",
                            "value": 10,
                            "range": [
                              228,
                              230
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 9
                              },
                              "start": {
                                "column": 27,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            221,
                            230
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 9
                            },
                            "start": {
                              "column": 20,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        219,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 9
                        },
                        "start": {
                          "column": 18,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      216,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 9
                      },
                      "start": {
                        "column": 15,
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
                      "name": "v",
                      "optional": false,
                      "range": [
                        234,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 9
                        },
                        "start": {
                          "column": 33,
                          "line": 9
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
                            "name": "value",
                            "optional": false,
                            "range": [
                              239,
                              244
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 9
                              },
                              "start": {
                                "column": 38,
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
                            "raw": "'hello'",
                            "value": "hello",
                            "range": [
                              246,
                              253
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 9
                              },
                              "start": {
                                "column": 45,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            239,
                            253
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 9
                            },
                            "start": {
                              "column": 38,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        237,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 9
                        },
                        "start": {
                          "column": 36,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      234,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 9
                      },
                      "start": {
                        "column": 33,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  214,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 9
                  },
                  "start": {
                    "column": 13,
                    "line": 9
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
                210,
                213
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              210,
              257
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "range": [
            205,
            257
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        201,
        258
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          354,
          382
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "left",
              "optional": false,
              "range": [
                360,
                364
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 13
                },
                "start": {
                  "column": 4,
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
                  "column": 11,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              },
              "range": [
                364,
                367
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    366,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 13
                    },
                    "start": {
                      "column": 10,
                      "line": 13
                    }
                  }
                },
                "range": [
                  366,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              360,
              367
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "right",
              "optional": false,
              "range": [
                372,
                377
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                  "column": 12,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              },
              "range": [
                377,
                380
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    379,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  379,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              372,
              380
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 21,
            "line": 12
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Targets",
        "optional": false,
        "range": [
          343,
          350
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
          }
        },
        "range": [
          350,
          353
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                351,
                352
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 12
                },
                "start": {
                  "column": 18,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              351,
              352
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 12
              },
              "start": {
                "column": 18,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        333,
        382
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Target",
        "optional": false,
        "range": [
          388,
          394
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              410,
              415
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  411,
                  414
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 16
                  },
                  "start": {
                    "column": 28,
                    "line": 16
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 16
              },
              "start": {
                "column": 27,
                "line": 16
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Targets",
            "optional": false,
            "range": [
              403,
              410
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 16
              },
              "start": {
                "column": 20,
                "line": 16
              }
            }
          },
          "range": [
            403,
            415
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 16
            },
            "start": {
              "column": 20,
              "line": 16
            }
          }
        },
        "range": [
          397,
          415
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 16
          },
          "start": {
            "column": 14,
            "line": 16
          }
        }
      },
      "range": [
        383,
        415
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result",
        "optional": false,
        "range": [
          421,
          427
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "range": [
              462,
              463
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 17
              },
              "start": {
                "column": 46,
                "line": 17
              }
            }
          },
          "range": [
            462,
            463
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 17
            },
            "start": {
              "column": 46,
              "line": 17
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              458,
              461
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
                    459,
                    460
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 17
                    },
                    "start": {
                      "column": 43,
                      "line": 17
                    }
                  }
                },
                "range": [
                  459,
                  460
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 17
                  },
                  "start": {
                    "column": 43,
                    "line": 17
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 17
              },
              "start": {
                "column": 42,
                "line": 17
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Targets",
            "optional": false,
            "range": [
              451,
              458
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 17
              },
              "start": {
                "column": 35,
                "line": 17
              }
            }
          },
          "range": [
            451,
            461
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 17
            },
            "start": {
              "column": 35,
              "line": 17
            }
          }
        },
        "range": [
          451,
          464
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 17
          },
          "start": {
            "column": 35,
            "line": 17
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 17
          },
          "start": {
            "column": 11,
            "line": 17
          }
        },
        "range": [
          427,
          448
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
                "name": "Target",
                "optional": false,
                "range": [
                  438,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 17
                  },
                  "start": {
                    "column": 22,
                    "line": 17
                  }
                }
              },
              "range": [
                438,
                444
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 17
                },
                "start": {
                  "column": 22,
                  "line": 17
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "range": [
                428,
                429
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              428,
              444
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
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
              "name": "A",
              "optional": false,
              "range": [
                446,
                447
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 17
                },
                "start": {
                  "column": 30,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              446,
              447
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 30,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        416,
        464
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LR",
        "optional": false,
        "range": [
          471,
          473
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "range": [
                  501,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 19
                  },
                  "start": {
                    "column": 35,
                    "line": 19
                  }
                }
              },
              "range": [
                501,
                502
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 19
                },
                "start": {
                  "column": 35,
                  "line": 19
                }
              }
            }
          ],
          "range": [
            500,
            503
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 19
            },
            "start": {
              "column": 34,
              "line": 19
            }
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"left\"",
                "value": "left",
                "range": [
                  513,
                  519
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 19
                  },
                  "start": {
                    "column": 47,
                    "line": 19
                  }
                }
              },
              "range": [
                513,
                519
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 19
                },
                "start": {
                  "column": 47,
                  "line": 19
                }
              }
            }
          ],
          "range": [
            512,
            520
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 19
            },
            "start": {
              "column": 46,
              "line": 19
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "range": [
              527,
              528
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 19
              },
              "start": {
                "column": 61,
                "line": 19
              }
            }
          },
          "range": [
            527,
            528
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 19
            },
            "start": {
              "column": 61,
              "line": 19
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "range": [
              523,
              524
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
          },
          "range": [
            523,
            524
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
        },
        "range": [
          500,
          528
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 19
          },
          "start": {
            "column": 34,
            "line": 19
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 19
          }
        },
        "range": [
          473,
          497
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
                "name": "Target",
                "optional": false,
                "range": [
                  484,
                  490
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 19
                  },
                  "start": {
                    "column": 18,
                    "line": 19
                  }
                }
              },
              "range": [
                484,
                490
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 19
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "range": [
                474,
                475
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              474,
              490
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
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
              "name": "L",
              "optional": false,
              "range": [
                492,
                493
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 19
                },
                "start": {
                  "column": 26,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              492,
              493
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 19
              },
              "start": {
                "column": 26,
                "line": 19
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
              "name": "R",
              "optional": false,
              "range": [
                495,
                496
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 19
                },
                "start": {
                  "column": 29,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              495,
              496
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 29,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        466,
        528
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          562,
          768
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_f",
              "optional": false,
              "range": [
                568,
                570
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
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
                  "column": 9,
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 22
                }
              },
              "range": [
                570,
                573
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "range": [
                    572,
                    573
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "range": [
                  572,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              568,
              573
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "range": [
                578,
                581
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
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
                  "column": 26,
                  "line": 23
                },
                "start": {
                  "column": 7,
                  "line": 23
                }
              },
              "range": [
                581,
                600
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    589,
                    600
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "range": [
                          590,
                          591
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 23
                          },
                          "start": {
                            "column": 16,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        590,
                        591
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 23
                        },
                        "start": {
                          "column": 16,
                          "line": 23
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        593,
                        599
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 23
                        },
                        "start": {
                          "column": 19,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "range": [
                    583,
                    589
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 23
                    },
                    "start": {
                      "column": 9,
                      "line": 23
                    }
                  }
                },
                "range": [
                  583,
                  600
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              578,
              600
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "range": [
                605,
                608
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
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
                  "column": 26,
                  "line": 24
                },
                "start": {
                  "column": 7,
                  "line": 24
                }
              },
              "range": [
                608,
                627
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    616,
                    627
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "range": [
                          617,
                          618
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 24
                          },
                          "start": {
                            "column": 16,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        617,
                        618
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 24
                        },
                        "start": {
                          "column": 16,
                          "line": 24
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        620,
                        626
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 24
                        },
                        "start": {
                          "column": 19,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 24
                    },
                    "start": {
                      "column": 15,
                      "line": 24
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "range": [
                    610,
                    616
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 24
                    },
                    "start": {
                      "column": 9,
                      "line": 24
                    }
                  }
                },
                "range": [
                  610,
                  627
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 24
                  },
                  "start": {
                    "column": 9,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              605,
              627
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lr",
              "optional": false,
              "range": [
                632,
                634
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 28,
                      "line": 25
                    },
                    "start": {
                      "column": 14,
                      "line": 25
                    }
                  },
                  "range": [
                    642,
                    656
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        650,
                        656
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "range": [
                              651,
                              652
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 25
                              },
                              "start": {
                                "column": 23,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            651,
                            652
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 25
                            },
                            "start": {
                              "column": 23,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "range": [
                              654,
                              655
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 25
                              },
                              "start": {
                                "column": 26,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            654,
                            655
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 25
                            },
                            "start": {
                              "column": 26,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 25
                        },
                        "start": {
                          "column": 22,
                          "line": 25
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "range": [
                        644,
                        650
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 25
                        },
                        "start": {
                          "column": 16,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      644,
                      656
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 25
                      },
                      "start": {
                        "column": 16,
                        "line": 25
                      }
                    }
                  }
                },
                "range": [
                  641,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 25
                  },
                  "start": {
                    "column": 13,
                    "line": 25
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 25
                    },
                    "start": {
                      "column": 31,
                      "line": 25
                    }
                  },
                  "range": [
                    659,
                    673
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        667,
                        673
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "range": [
                              668,
                              669
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 25
                              },
                              "start": {
                                "column": 40,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            668,
                            669
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 25
                            },
                            "start": {
                              "column": 40,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "range": [
                              671,
                              672
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 25
                              },
                              "start": {
                                "column": 43,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            671,
                            672
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 25
                            },
                            "start": {
                              "column": 43,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 25
                        },
                        "start": {
                          "column": 39,
                          "line": 25
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "range": [
                        661,
                        667
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 25
                        },
                        "start": {
                          "column": 33,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      661,
                      673
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 25
                      },
                      "start": {
                        "column": 33,
                        "line": 25
                      }
                    }
                  }
                },
                "range": [
                  658,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 25
                  },
                  "start": {
                    "column": 30,
                    "line": 25
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 70,
                  "line": 25
                },
                "start": {
                  "column": 46,
                  "line": 25
                }
              },
              "range": [
                674,
                698
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    682,
                    698
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "range": [
                          683,
                          684
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 25
                          },
                          "start": {
                            "column": 55,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        683,
                        684
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 25
                        },
                        "start": {
                          "column": 55,
                          "line": 25
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          688,
                          697
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "range": [
                                689,
                                690
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 25
                                },
                                "start": {
                                  "column": 61,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              689,
                              690
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 25
                              },
                              "start": {
                                "column": 61,
                                "line": 25
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "range": [
                                692,
                                693
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 25
                                },
                                "start": {
                                  "column": 64,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              692,
                              693
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 25
                              },
                              "start": {
                                "column": 64,
                                "line": 25
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "range": [
                                695,
                                696
                              ],
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 25
                                },
                                "start": {
                                  "column": 67,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              695,
                              696
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 25
                              },
                              "start": {
                                "column": 67,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 25
                          },
                          "start": {
                            "column": 60,
                            "line": 25
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LR",
                        "optional": false,
                        "range": [
                          686,
                          688
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 25
                          },
                          "start": {
                            "column": 58,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        686,
                        697
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 25
                        },
                        "start": {
                          "column": 58,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 25
                    },
                    "start": {
                      "column": 54,
                      "line": 25
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "range": [
                    676,
                    682
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 25
                    },
                    "start": {
                      "column": 48,
                      "line": 25
                    }
                  }
                },
                "range": [
                  676,
                  698
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 25
                  },
                  "start": {
                    "column": 48,
                    "line": 25
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 25
                },
                "start": {
                  "column": 6,
                  "line": 25
                }
              },
              "range": [
                634,
                640
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      635,
                      636
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 25
                      },
                      "start": {
                        "column": 7,
                        "line": 25
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    635,
                    636
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 25
                    },
                    "start": {
                      "column": 7,
                      "line": 25
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
                    "name": "O",
                    "optional": false,
                    "range": [
                      638,
                      639
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 25
                      },
                      "start": {
                        "column": 10,
                        "line": 25
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    638,
                    639
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 25
                    },
                    "start": {
                      "column": 10,
                      "line": 25
                    }
                  }
                }
              ]
            },
            "range": [
              632,
              698
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dict",
              "optional": false,
              "range": [
                703,
                707
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
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
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              },
              "range": [
                707,
                766
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
                          "column": 50,
                          "line": 26
                        },
                        "start": {
                          "column": 15,
                          "line": 26
                        }
                      },
                      "range": [
                        714,
                        749
                      ],
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
                              "name": "P",
                              "optional": false,
                              "range": [
                                729,
                                730
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 26
                                },
                                "start": {
                                  "column": 30,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              729,
                              730
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 26
                              },
                              "start": {
                                "column": 30,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            723,
                            730
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 26
                            },
                            "start": {
                              "column": 24,
                              "line": 26
                            }
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "range": [
                            718,
                            719
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 26
                            },
                            "start": {
                              "column": 19,
                              "line": 26
                            }
                          }
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              739,
                              748
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "range": [
                                    740,
                                    741
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  740,
                                  741
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 26
                                  }
                                }
                              },
                              {
                                "type": "TSIndexedAccessType",
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "range": [
                                      745,
                                      746
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    745,
                                    746
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 46,
                                      "line": 26
                                    }
                                  }
                                },
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "range": [
                                      743,
                                      744
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    743,
                                    744
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  743,
                                  747
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 26
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 26
                              },
                              "start": {
                                "column": 40,
                                "line": 26
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Result",
                            "optional": false,
                            "range": [
                              733,
                              739
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 26
                              },
                              "start": {
                                "column": 34,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            733,
                            748
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 26
                            },
                            "start": {
                              "column": 34,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          716,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 26
                          },
                          "start": {
                            "column": 17,
                            "line": 26
                          }
                        }
                      }
                    },
                    "range": [
                      713,
                      749
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 26
                      },
                      "start": {
                        "column": 14,
                        "line": 26
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 26
                    },
                    "start": {
                      "column": 52,
                      "line": 26
                    }
                  },
                  "range": [
                    751,
                    766
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        760,
                        766
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "range": [
                              761,
                              762
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 26
                              },
                              "start": {
                                "column": 62,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            761,
                            762
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 26
                            },
                            "start": {
                              "column": 62,
                              "line": 26
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              764,
                              765
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 26
                              },
                              "start": {
                                "column": 65,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            764,
                            765
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 26
                            },
                            "start": {
                              "column": 65,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 26
                        },
                        "start": {
                          "column": 61,
                          "line": 26
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "range": [
                        754,
                        760
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 26
                        },
                        "start": {
                          "column": 55,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      754,
                      766
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 26
                      },
                      "start": {
                        "column": 55,
                        "line": 26
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  },
                  "range": [
                    709,
                    712
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          710,
                          711
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 26
                          },
                          "start": {
                            "column": 11,
                            "line": 26
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        710,
                        711
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 26
                        },
                        "start": {
                          "column": 11,
                          "line": 26
                        }
                      }
                    }
                  ]
                },
                "range": [
                  709,
                  766
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              703,
              766
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 32,
            "line": 21
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ops",
        "optional": false,
        "range": [
          540,
          543
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 21
          },
          "start": {
            "column": 13,
            "line": 21
          }
        },
        "range": [
          543,
          561
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
                "name": "Target",
                "optional": false,
                "range": [
                  554,
                  560
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 21
                  },
                  "start": {
                    "column": 24,
                    "line": 21
                  }
                }
              },
              "range": [
                554,
                560
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 21
                },
                "start": {
                  "column": 24,
                  "line": 21
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "range": [
                544,
                545
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 14,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              544,
              560
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 21
              },
              "start": {
                "column": 14,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        530,
        768
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "left",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 28
                },
                "start": {
                  "column": 10,
                  "line": 28
                }
              },
              "range": [
                779,
                792
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    784,
                    792
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"left\"",
                        "value": "left",
                        "range": [
                          785,
                          791
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 28
                          },
                          "start": {
                            "column": 16,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        785,
                        791
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 28
                        },
                        "start": {
                          "column": 16,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 28
                    },
                    "start": {
                      "column": 15,
                      "line": 28
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ops",
                  "optional": false,
                  "range": [
                    781,
                    784
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 28
                    },
                    "start": {
                      "column": 12,
                      "line": 28
                    }
                  }
                },
                "range": [
                  781,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 28
                  },
                  "start": {
                    "column": 12,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              775,
              792
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                795,
                797
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 28
                },
                "start": {
                  "column": 26,
                  "line": 28
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                801,
                804
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 28
                },
                "start": {
                  "column": 32,
                  "line": 28
                }
              }
            },
            "range": [
              795,
              804
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 28
              },
              "start": {
                "column": 26,
                "line": 28
              }
            }
          },
          "range": [
            775,
            804
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        769,
        804
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "right",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              },
              "range": [
                816,
                830
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    821,
                    830
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"right\"",
                        "value": "right",
                        "range": [
                          822,
                          829
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 29
                          },
                          "start": {
                            "column": 17,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        822,
                        829
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 29
                        },
                        "start": {
                          "column": 17,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 29
                    },
                    "start": {
                      "column": 16,
                      "line": 29
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ops",
                  "optional": false,
                  "range": [
                    818,
                    821
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 29
                    },
                    "start": {
                      "column": 13,
                      "line": 29
                    }
                  }
                },
                "range": [
                  818,
                  830
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 29
                  },
                  "start": {
                    "column": 13,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              811,
              830
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                833,
                835
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 29
                },
                "start": {
                  "column": 28,
                  "line": 29
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                839,
                842
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 29
                },
                "start": {
                  "column": 34,
                  "line": 29
                }
              }
            },
            "range": [
              833,
              842
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 29
              },
              "start": {
                "column": 28,
                "line": 29
              }
            }
          },
          "range": [
            811,
            842
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        805,
        842
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "ok",
            "optional": false,
            "range": [
              850,
              852
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lr",
                    "optional": false,
                    "range": [
                      891,
                      893
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 31
                      },
                      "start": {
                        "column": 47,
                        "line": 31
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "at",
                          "optional": false,
                          "range": [
                            901,
                            903
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 31
                            },
                            "start": {
                              "column": 57,
                              "line": 31
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "range": [
                            904,
                            907
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 31
                            },
                            "start": {
                              "column": 60,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          901,
                          907
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 31
                          },
                          "start": {
                            "column": 57,
                            "line": 31
                          }
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "at",
                          "optional": false,
                          "range": [
                            909,
                            911
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 31
                            },
                            "start": {
                              "column": 65,
                              "line": 31
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "num",
                          "optional": false,
                          "range": [
                            912,
                            915
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 31
                            },
                            "start": {
                              "column": 68,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          909,
                          915
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 31
                          },
                          "start": {
                            "column": 65,
                            "line": 31
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
                        "name": "at",
                        "optional": false,
                        "range": [
                          895,
                          897
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 31
                          },
                          "start": {
                            "column": 51,
                            "line": 31
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "lr",
                        "optional": false,
                        "range": [
                          898,
                          900
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 31
                          },
                          "start": {
                            "column": 54,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        895,
                        900
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 31
                        },
                        "start": {
                          "column": 51,
                          "line": 31
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      895,
                      916
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 31
                      },
                      "start": {
                        "column": 51,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    891,
                    916
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 31
                    },
                    "start": {
                      "column": 47,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                890,
                917
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 31
                },
                "start": {
                  "column": 46,
                  "line": 31
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
                "name": "at",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 31
                    },
                    "start": {
                      "column": 32,
                      "line": 31
                    }
                  },
                  "range": [
                    876,
                    884
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        881,
                        884
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "range": [
                              882,
                              883
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 31
                              },
                              "start": {
                                "column": 38,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            882,
                            883
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 31
                            },
                            "start": {
                              "column": 38,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 31
                        },
                        "start": {
                          "column": 37,
                          "line": 31
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ops",
                      "optional": false,
                      "range": [
                        878,
                        881
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 31
                        },
                        "start": {
                          "column": 34,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      878,
                      884
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 31
                      },
                      "start": {
                        "column": 34,
                        "line": 31
                      }
                    }
                  }
                },
                "range": [
                  874,
                  884
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 31
                  },
                  "start": {
                    "column": 30,
                    "line": 31
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              },
              "range": [
                855,
                873
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
                      "name": "Target",
                      "optional": false,
                      "range": [
                        866,
                        872
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 31
                        },
                        "start": {
                          "column": 22,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      866,
                      872
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 31
                      },
                      "start": {
                        "column": 22,
                        "line": 31
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "range": [
                      856,
                      857
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 31
                      },
                      "start": {
                        "column": 12,
                        "line": 31
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    856,
                    872
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 31
                    },
                    "start": {
                      "column": 12,
                      "line": 31
                    }
                  }
                }
              ]
            },
            "range": [
              855,
              918
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 31
              },
              "start": {
                "column": 11,
                "line": 31
              }
            }
          },
          "range": [
            850,
            918
          ],
          "loc": {
            "end": {
              "column": 74,
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
        844,
        918
      ],
      "loc": {
        "end": {
          "column": 74,
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
            "name": "orphaned",
            "optional": false,
            "range": [
              925,
              933
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "at",
                      "optional": false,
                      "range": [
                        981,
                        983
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 32
                        },
                        "start": {
                          "column": 62,
                          "line": 32
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ok",
                    "optional": false,
                    "range": [
                      978,
                      980
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 32
                      },
                      "start": {
                        "column": 59,
                        "line": 32
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    978,
                    984
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 32
                    },
                    "start": {
                      "column": 59,
                      "line": 32
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
                  "name": "at",
                  "optional": false,
                  "range": [
                    970,
                    972
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 32
                    },
                    "start": {
                      "column": 51,
                      "line": 32
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dict",
                  "optional": false,
                  "range": [
                    973,
                    977
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 32
                    },
                    "start": {
                      "column": 54,
                      "line": 32
                    }
                  }
                },
                "range": [
                  970,
                  977
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 32
                  },
                  "start": {
                    "column": 51,
                    "line": 32
                  }
                }
              },
              "optional": false,
              "range": [
                970,
                985
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 32
                },
                "start": {
                  "column": 51,
                  "line": 32
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
                "name": "at",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 32
                    },
                    "start": {
                      "column": 38,
                      "line": 32
                    }
                  },
                  "range": [
                    957,
                    965
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        962,
                        965
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "range": [
                              963,
                              964
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 32
                              },
                              "start": {
                                "column": 44,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            963,
                            964
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 32
                            },
                            "start": {
                              "column": 44,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 32
                        },
                        "start": {
                          "column": 43,
                          "line": 32
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ops",
                      "optional": false,
                      "range": [
                        959,
                        962
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 32
                        },
                        "start": {
                          "column": 40,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      959,
                      965
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 32
                      },
                      "start": {
                        "column": 40,
                        "line": 32
                      }
                    }
                  }
                },
                "range": [
                  955,
                  965
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 32
                  },
                  "start": {
                    "column": 36,
                    "line": 32
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 32
                },
                "start": {
                  "column": 17,
                  "line": 32
                }
              },
              "range": [
                936,
                954
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
                      "name": "Target",
                      "optional": false,
                      "range": [
                        947,
                        953
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 32
                        },
                        "start": {
                          "column": 28,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      947,
                      953
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 32
                      },
                      "start": {
                        "column": 28,
                        "line": 32
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "range": [
                      937,
                      938
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 32
                      },
                      "start": {
                        "column": 18,
                        "line": 32
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    937,
                    953
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 32
                    },
                    "start": {
                      "column": 18,
                      "line": 32
                    }
                  }
                }
              ]
            },
            "range": [
              936,
              985
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 32
              },
              "start": {
                "column": 17,
                "line": 32
              }
            }
          },
          "range": [
            925,
            985
          ],
          "loc": {
            "end": {
              "column": 66,
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
        919,
        985
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "leftOk",
            "optional": false,
            "range": [
              993,
              999
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "left",
                "optional": false,
                "range": [
                  1005,
                  1009
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 34
                  },
                  "start": {
                    "column": 18,
                    "line": 34
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "range": [
                1002,
                1004
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 34
                },
                "start": {
                  "column": 15,
                  "line": 34
                }
              }
            },
            "optional": false,
            "range": [
              1002,
              1010
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 34
              },
              "start": {
                "column": 15,
                "line": 34
              }
            }
          },
          "range": [
            993,
            1010
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 34
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        987,
        1010
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "leftOrphaned",
            "optional": false,
            "range": [
              1017,
              1029
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 35
              },
              "start": {
                "column": 6,
                "line": 35
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "left",
                "optional": false,
                "range": [
                  1041,
                  1045
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 35
                  },
                  "start": {
                    "column": 30,
                    "line": 35
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "orphaned",
              "optional": false,
              "range": [
                1032,
                1040
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 35
                },
                "start": {
                  "column": 21,
                  "line": 35
                }
              }
            },
            "optional": false,
            "range": [
              1032,
              1046
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 35
              },
              "start": {
                "column": 21,
                "line": 35
              }
            }
          },
          "range": [
            1017,
            1046
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1011,
        1046
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "rightOk",
            "optional": false,
            "range": [
              1054,
              1061
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "right",
                "optional": false,
                "range": [
                  1067,
                  1072
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 37
                  },
                  "start": {
                    "column": 19,
                    "line": 37
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "range": [
                1064,
                1066
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 37
                },
                "start": {
                  "column": 16,
                  "line": 37
                }
              }
            },
            "optional": false,
            "range": [
              1064,
              1073
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 37
              },
              "start": {
                "column": 16,
                "line": 37
              }
            }
          },
          "range": [
            1054,
            1073
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1048,
        1073
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
            "name": "rightOrphaned",
            "optional": false,
            "range": [
              1080,
              1093
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "right",
                "optional": false,
                "range": [
                  1105,
                  1110
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 38
                  },
                  "start": {
                    "column": 31,
                    "line": 38
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "orphaned",
              "optional": false,
              "range": [
                1096,
                1104
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 38
                },
                "start": {
                  "column": 22,
                  "line": 38
                }
              }
            },
            "optional": false,
            "range": [
              1096,
              1111
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 38
              },
              "start": {
                "column": 22,
                "line": 38
              }
            }
          },
          "range": [
            1080,
            1111
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1074,
        1111
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 37,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
