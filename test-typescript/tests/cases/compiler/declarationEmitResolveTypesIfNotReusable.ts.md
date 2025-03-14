__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    309
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
            "name": "u",
            "optional": false,
            "range": [
              6,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"X\"",
            "value": "X",
            "range": [
              10,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            6,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        14
      ],
      "loc": {
        "end": {
          "column": 14,
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
        "name": "A",
        "optional": false,
        "range": [
          20,
          21
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
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
                26,
                27
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 11,
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
                  "column": 58,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              },
              "range": [
                27,
                73
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
                      "name": "b",
                      "optional": false,
                      "range": [
                        31,
                        32
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 2
                        },
                        "start": {
                          "column": 16,
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
                          "column": 32,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      },
                      "range": [
                        33,
                        47
                      ],
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"value of b\"",
                          "value": "value of b",
                          "range": [
                            35,
                            47
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 2
                            },
                            "start": {
                              "column": 20,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          35,
                          47
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 2
                          },
                          "start": {
                            "column": 20,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      31,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 2
                      },
                      "start": {
                        "column": 16,
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
                      "name": "notNecessary",
                      "optional": false,
                      "range": [
                        49,
                        61
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 2
                        },
                        "start": {
                          "column": 34,
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
                          "column": 56,
                          "line": 2
                        },
                        "start": {
                          "column": 46,
                          "line": 2
                        }
                      },
                      "range": [
                        61,
                        71
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "u",
                          "optional": false,
                          "range": [
                            70,
                            71
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 2
                            },
                            "start": {
                              "column": 55,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          63,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 2
                          },
                          "start": {
                            "column": 48,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      49,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 2
                      },
                      "start": {
                        "column": 34,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  29,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              26,
              73
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "range": [
          24,
          74
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "range": [
        15,
        74
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "a",
            "optional": false,
            "range": [
              81,
              82
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
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      87,
                      88
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
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"value of a\"",
                    "value": "value of a",
                    "range": [
                      90,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    87,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "notNecessary",
                    "optional": false,
                    "range": [
                      104,
                      116
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 29,
                        "line": 3
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      118,
                      119
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
                    104,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                85,
                121
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  125,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 3
                  },
                  "start": {
                    "column": 50,
                    "line": 3
                  }
                }
              },
              "range": [
                125,
                130
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 3
                },
                "start": {
                  "column": 50,
                  "line": 3
                }
              }
            },
            "range": [
              85,
              130
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "range": [
            81,
            130
          ],
          "loc": {
            "end": {
              "column": 55,
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
        75,
        130
      ],
      "loc": {
        "end": {
          "column": 55,
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
        133,
        173
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
              "name": "o1",
              "optional": false,
              "range": [
                146,
                148
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  171,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 6
                  },
                  "start": {
                    "column": 38,
                    "line": 6
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 6
                      },
                      "start": {
                        "column": 20,
                        "line": 6
                      }
                    },
                    "range": [
                      153,
                      166
                    ],
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "'b'",
                          "value": "b",
                          "range": [
                            162,
                            165
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 29,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          162,
                          165
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 6
                          },
                          "start": {
                            "column": 29,
                            "line": 6
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'a'",
                            "value": "a",
                            "range": [
                              157,
                              160
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 6
                              },
                              "start": {
                                "column": 24,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            157,
                            160
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 6
                            },
                            "start": {
                              "column": 24,
                              "line": 6
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              155,
                              156
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 6
                              },
                              "start": {
                                "column": 22,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            155,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 6
                            },
                            "start": {
                              "column": 22,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          155,
                          161
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 6
                          },
                          "start": {
                            "column": 22,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        155,
                        166
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 6
                        },
                        "start": {
                          "column": 22,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    152,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 6
                    },
                    "start": {
                      "column": 19,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                151,
                173
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              }
            },
            "range": [
              146,
              173
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          140,
          173
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 40,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        175,
        219
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
              "name": "o2",
              "optional": false,
              "range": [
                188,
                190
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  217,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 8
                  },
                  "start": {
                    "column": 42,
                    "line": 8
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
                      }
                    },
                    "range": [
                      195,
                      212
                    ],
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "'a'",
                          "value": "a",
                          "range": [
                            208,
                            211
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 8
                            },
                            "start": {
                              "column": 33,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          208,
                          211
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 8
                          },
                          "start": {
                            "column": 33,
                            "line": 8
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            205,
                            206
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 8
                            },
                            "start": {
                              "column": 30,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          198,
                          206
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 8
                          },
                          "start": {
                            "column": 23,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        197,
                        212
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 8
                        },
                        "start": {
                          "column": 22,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    194,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 8
                    },
                    "start": {
                      "column": 19,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                193,
                219
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              }
            },
            "range": [
              188,
              219
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          182,
          219
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 44,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        220,
        263
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
              "name": "o3",
              "optional": false,
              "range": [
                233,
                235
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  261,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 9
                  },
                  "start": {
                    "column": 41,
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 9
                      },
                      "start": {
                        "column": 20,
                        "line": 9
                      }
                    },
                    "range": [
                      240,
                      256
                    ],
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "'a'",
                          "value": "a",
                          "range": [
                            252,
                            255
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 9
                            },
                            "start": {
                              "column": 32,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          252,
                          255
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 9
                          },
                          "start": {
                            "column": 32,
                            "line": 9
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            250,
                            251
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 9
                            },
                            "start": {
                              "column": 30,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          243,
                          251
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 9
                          },
                          "start": {
                            "column": 23,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        243,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 9
                        },
                        "start": {
                          "column": 23,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    239,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 9
                    },
                    "start": {
                      "column": 19,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                238,
                263
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 18,
                  "line": 9
                }
              }
            },
            "range": [
              233,
              263
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 9
              },
              "start": {
                "column": 13,
                "line": 9
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          227,
          263
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 43,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        265,
        308
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
              "name": "o4",
              "optional": false,
              "range": [
                278,
                280
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  306,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 11
                  },
                  "start": {
                    "column": 41,
                    "line": 11
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 11
                      },
                      "start": {
                        "column": 20,
                        "line": 11
                      }
                    },
                    "range": [
                      285,
                      301
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'a'",
                            "value": "a",
                            "range": [
                              296,
                              299
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 11
                              },
                              "start": {
                                "column": 31,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            296,
                            299
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 11
                            },
                            "start": {
                              "column": 31,
                              "line": 11
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              294,
                              295
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 11
                              },
                              "start": {
                                "column": 29,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            294,
                            295
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 11
                            },
                            "start": {
                              "column": 29,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          294,
                          300
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 11
                          },
                          "start": {
                            "column": 29,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        287,
                        301
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 11
                        },
                        "start": {
                          "column": 22,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    284,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 11
                    },
                    "start": {
                      "column": 19,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                283,
                308
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 11
                }
              }
            },
            "range": [
              278,
              308
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          272,
          308
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 43,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "module",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    53
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./decl'",
        "value": "./decl",
        "range": [
          20,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        28
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        30,
        53
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
              "name": "f",
              "optional": false,
              "range": [
                43,
                44
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "range": [
                      51,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 3
                      },
                      "start": {
                        "column": 21,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    48,
                    52
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 18,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                47,
                53
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
            "range": [
              43,
              53
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          37,
          53
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 23,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 23,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
