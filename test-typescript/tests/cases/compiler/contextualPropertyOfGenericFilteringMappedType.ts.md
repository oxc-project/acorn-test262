__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    586
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
        "name": "f1",
        "optional": false,
        "range": [
          17,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            },
            "range": [
              45,
              48
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  47,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              },
              "range": [
                47,
                48
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            }
          },
          "range": [
            41,
            48
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 2
            },
            "start": {
              "column": 2,
              "line": 2
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handlers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            },
            "range": [
              60,
              117
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      76,
                      77
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
                  "range": [
                    76,
                    77
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
                "range": [
                  70,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  65,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              },
              "nameType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    81,
                    82
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
                  81,
                  82
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
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 3
                        },
                        "start": {
                          "column": 41,
                          "line": 3
                        }
                      },
                      "range": [
                        91,
                        97
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
                              95,
                              96
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 3
                              },
                              "start": {
                                "column": 45,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            95,
                            96
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 3
                            },
                            "start": {
                              "column": 45,
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
                              93,
                              94
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
                            93,
                            94
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
                          93,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 3
                          },
                          "start": {
                            "column": 43,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      86,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 3
                      },
                      "start": {
                        "column": 36,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 3
                        },
                        "start": {
                          "column": 53,
                          "line": 3
                        }
                      },
                      "range": [
                        103,
                        106
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            105,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 3
                            },
                            "start": {
                              "column": 55,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          105,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 3
                          },
                          "start": {
                            "column": 55,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      99,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 3
                      },
                      "start": {
                        "column": 49,
                        "line": 3
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 3
                    },
                    "start": {
                      "column": 58,
                      "line": 3
                    }
                  },
                  "range": [
                    108,
                    115
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      111,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 3
                      },
                      "start": {
                        "column": 61,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  85,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              },
              "range": [
                62,
                117
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            }
          },
          "range": [
            52,
            117
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 3
            },
            "start": {
              "column": 2,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 1,
            "line": 4
          }
        },
        "range": [
          120,
          126
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            122,
            126
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 4
            },
            "start": {
              "column": 3,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        },
        "range": [
          19,
          37
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                30,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
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
                20,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "out": false,
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
          }
        ]
      },
      "range": [
        0,
        127
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    141,
                    144
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
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
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    146,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                },
                "range": [
                  141,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
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
                  "name": "bar",
                  "optional": false,
                  "range": [
                    153,
                    156
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    158,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 9
                    },
                    "start": {
                      "column": 9,
                      "line": 9
                    }
                  }
                },
                "range": [
                  153,
                  160
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
              }
            ],
            "range": [
              135,
              165
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 10
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    175,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
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
                    "body": [],
                    "range": [
                      196,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 12
                      },
                      "start": {
                        "column": 25,
                        "line": 12
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        181,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 10,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        188,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 12
                        },
                        "start": {
                          "column": 17,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    180,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "range": [
                  175,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    204,
                    207
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
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
                    "body": [],
                    "range": [
                      225,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 13
                      },
                      "start": {
                        "column": 25,
                        "line": 13
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        210,
                        215
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 10,
                          "line": 13
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        217,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 13
                        },
                        "start": {
                          "column": 17,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    209,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                },
                "range": [
                  204,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 27,
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
              169,
              232
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "range": [
            129,
            131
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          129,
          235
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
      },
      "range": [
        129,
        236
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 6
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
        "name": "f2",
        "optional": false,
        "range": [
          255,
          257
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 17
          },
          "start": {
            "column": 17,
            "line": 17
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 9,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            },
            "range": [
              283,
              286
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  285,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "range": [
                285,
                286
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            }
          },
          "range": [
            279,
            286
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 18
            },
            "start": {
              "column": 2,
              "line": 18
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handlers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 97,
                "line": 19
              },
              "start": {
                "column": 10,
                "line": 19
              }
            },
            "range": [
              298,
              385
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      314,
                      315
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
                  "range": [
                    314,
                    315
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
                "range": [
                  308,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 19
                  },
                  "start": {
                    "column": 20,
                    "line": 19
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  303,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 19
                  },
                  "start": {
                    "column": 15,
                    "line": 19
                  }
                }
              },
              "nameType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        321,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 19
                        },
                        "start": {
                          "column": 33,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      321,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 19
                      },
                      "start": {
                        "column": 33,
                        "line": 19
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
                        319,
                        320
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 19
                        },
                        "start": {
                          "column": 31,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      319,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 19
                      },
                      "start": {
                        "column": 31,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    319,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 19
                    },
                    "start": {
                      "column": 31,
                      "line": 19
                    }
                  }
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "range": [
                    332,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 19
                    },
                    "start": {
                      "column": 44,
                      "line": 19
                    }
                  }
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    345,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 19
                    },
                    "start": {
                      "column": 57,
                      "line": 19
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      341,
                      342
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
                  "range": [
                    341,
                    342
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
                "range": [
                  319,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 19
                  },
                  "start": {
                    "column": 31,
                    "line": 19
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 19
                        },
                        "start": {
                          "column": 71,
                          "line": 19
                        }
                      },
                      "range": [
                        359,
                        365
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
                              363,
                              364
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 19
                              },
                              "start": {
                                "column": 75,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            363,
                            364
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 19
                            },
                            "start": {
                              "column": 75,
                              "line": 19
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
                              361,
                              362
                            ],
                            "loc": {
                              "end": {
                                "column": 74,
                                "line": 19
                              },
                              "start": {
                                "column": 73,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            361,
                            362
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 19
                            },
                            "start": {
                              "column": 73,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          361,
                          365
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 19
                          },
                          "start": {
                            "column": 73,
                            "line": 19
                          }
                        }
                      }
                    },
                    "range": [
                      354,
                      365
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 19
                      },
                      "start": {
                        "column": 66,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 19
                        },
                        "start": {
                          "column": 83,
                          "line": 19
                        }
                      },
                      "range": [
                        371,
                        374
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            373,
                            374
                          ],
                          "loc": {
                            "end": {
                              "column": 86,
                              "line": 19
                            },
                            "start": {
                              "column": 85,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          373,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 19
                          },
                          "start": {
                            "column": 85,
                            "line": 19
                          }
                        }
                      }
                    },
                    "range": [
                      367,
                      374
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 19
                      },
                      "start": {
                        "column": 79,
                        "line": 19
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 19
                    },
                    "start": {
                      "column": 88,
                      "line": 19
                    }
                  },
                  "range": [
                    376,
                    383
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      379,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 19
                      },
                      "start": {
                        "column": 91,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  353,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 19
                  },
                  "start": {
                    "column": 65,
                    "line": 19
                  }
                }
              },
              "range": [
                300,
                385
              ],
              "loc": {
                "end": {
                  "column": 97,
                  "line": 19
                },
                "start": {
                  "column": 12,
                  "line": 19
                }
              }
            }
          },
          "range": [
            290,
            385
          ],
          "loc": {
            "end": {
              "column": 97,
              "line": 19
            },
            "start": {
              "column": 2,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 1,
            "line": 20
          }
        },
        "range": [
          388,
          394
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            390,
            394
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 20
            },
            "start": {
              "column": 3,
              "line": 20
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 17
          },
          "start": {
            "column": 19,
            "line": 17
          }
        },
        "range": [
          257,
          275
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                268,
                274
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 17
                },
                "start": {
                  "column": 30,
                  "line": 17
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
                258,
                259
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 17
                },
                "start": {
                  "column": 20,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              258,
              274
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 17
              },
              "start": {
                "column": 20,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        238,
        395
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 17
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    409,
                    412
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    414,
                    415
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 24
                    },
                    "start": {
                      "column": 9,
                      "line": 24
                    }
                  }
                },
                "range": [
                  409,
                  415
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 24
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    421,
                    424
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 25
                    },
                    "start": {
                      "column": 4,
                      "line": 25
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    426,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 25
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  }
                },
                "range": [
                  421,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              }
            ],
            "range": [
              403,
              433
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 23
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
                  "name": "bar",
                  "optional": false,
                  "range": [
                    443,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 28
                    },
                    "start": {
                      "column": 4,
                      "line": 28
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
                    "body": [],
                    "range": [
                      464,
                      466
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 28
                      },
                      "start": {
                        "column": 25,
                        "line": 28
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        449,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 28
                        },
                        "start": {
                          "column": 10,
                          "line": 28
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        456,
                        459
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 28
                        },
                        "start": {
                          "column": 17,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "range": [
                    448,
                    466
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 28
                    },
                    "start": {
                      "column": 9,
                      "line": 28
                    }
                  }
                },
                "range": [
                  443,
                  466
                ],
                "loc": {
                  "end": {
                    "column": 27,
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
              437,
              471
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 27
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "range": [
            397,
            399
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          397,
          474
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        397,
        475
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 22
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    489,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 34
                    },
                    "start": {
                      "column": 4,
                      "line": 34
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    494,
                    495
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 34
                    },
                    "start": {
                      "column": 9,
                      "line": 34
                    }
                  }
                },
                "range": [
                  489,
                  495
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    501,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 35
                    },
                    "start": {
                      "column": 4,
                      "line": 35
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    506,
                    508
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
                "range": [
                  501,
                  508
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 35
                  },
                  "start": {
                    "column": 4,
                    "line": 35
                  }
                }
              }
            ],
            "range": [
              483,
              513
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 33
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    523,
                    526
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 38
                    },
                    "start": {
                      "column": 4,
                      "line": 38
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
                    "body": [],
                    "range": [
                      544,
                      576
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 40
                      },
                      "start": {
                        "column": 25,
                        "line": 38
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        529,
                        534
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 38
                        },
                        "start": {
                          "column": 10,
                          "line": 38
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        536,
                        539
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 38
                        },
                        "start": {
                          "column": 17,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "range": [
                    528,
                    576
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 40
                    },
                    "start": {
                      "column": 9,
                      "line": 38
                    }
                  }
                },
                "range": [
                  523,
                  576
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              }
            ],
            "range": [
              517,
              581
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 41
              },
              "start": {
                "column": 2,
                "line": 37
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "range": [
            477,
            479
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "optional": false,
        "range": [
          477,
          584
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        477,
        585
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
