__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    16,
    689
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          26,
          54
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "'a'",
              "value": "a",
              "range": [
                36,
                39
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "range": [
              32,
              39
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                45,
                46
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "'b'",
              "value": "b",
              "range": [
                49,
                52
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              45,
              52
            ],
            "loc": {
              "end": {
                "column": 11,
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
            "column": 10,
            "line": 2
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Strs",
        "optional": false,
        "range": [
          21,
          25
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "range": [
        16,
        54
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestStrs",
        "optional": false,
        "range": [
          60,
          68
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Strs",
            "optional": false,
            "range": [
              81,
              85
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 6
              },
              "start": {
                "column": 26,
                "line": 6
              }
            }
          },
          "range": [
            81,
            85
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 6
            },
            "start": {
              "column": 26,
              "line": 6
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "range": [
            74,
            77
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 6
            },
            "start": {
              "column": 19,
              "line": 6
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            88,
            94
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 6
            },
            "start": {
              "column": 33,
              "line": 6
            }
          }
        },
        "range": [
          71,
          96
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 6
          },
          "start": {
            "column": 16,
            "line": 6
          }
        }
      },
      "range": [
        55,
        96
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 6
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              },
              "range": [
                104,
                114
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "range": [
                    106,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 9,
                      "line": 7
                    }
                  }
                },
                "range": [
                  106,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              103,
              114
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "range": [
                      124,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 5,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      129,
                      130
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 8
                      },
                      "start": {
                        "column": 10,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    124,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 8
                    },
                    "start": {
                      "column": 5,
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
                  "raw": "'xo'",
                  "value": "xo",
                  "range": [
                    133,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 14,
                      "line": 8
                    }
                  }
                },
                "range": [
                  123,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "range": [
                      144,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 9
                      },
                      "start": {
                        "column": 5,
                        "line": 9
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      149,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 9
                      },
                      "start": {
                        "column": 10,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    144,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 9
                    },
                    "start": {
                      "column": 5,
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
                  "raw": "'xe'",
                  "value": "xe",
                  "range": [
                    153,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                },
                "range": [
                  143,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              117,
              159
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 7
              }
            }
          },
          "range": [
            103,
            159
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        97,
        159
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
            "name": "ux",
            "optional": false,
            "range": [
              166,
              168
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "range": [
                      178,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 12
                      },
                      "start": {
                        "column": 5,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      183,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 12
                      },
                      "start": {
                        "column": 10,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    178,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 12
                    },
                    "start": {
                      "column": 5,
                      "line": 12
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'xo'",
                  "value": "xo",
                  "range": [
                    187,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 12
                    },
                    "start": {
                      "column": 14,
                      "line": 12
                    }
                  }
                },
                "range": [
                  177,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "range": [
                      198,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 13
                      },
                      "start": {
                        "column": 5,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      203,
                      204
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
                    198,
                    204
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 13
                    },
                    "start": {
                      "column": 5,
                      "line": 13
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'xe'",
                  "value": "xe",
                  "range": [
                    207,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 13
                    },
                    "start": {
                      "column": 14,
                      "line": 13
                    }
                  }
                },
                "range": [
                  197,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              171,
              213
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 14
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          },
          "range": [
            166,
            213
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        160,
        213
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 15
                },
                "start": {
                  "column": 7,
                  "line": 15
                }
              },
              "range": [
                221,
                231
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "range": [
                    223,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  }
                },
                "range": [
                  223,
                  231
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              220,
              231
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
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
                  "type": "Literal",
                  "raw": "'a'",
                  "value": "a",
                  "range": [
                    241,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
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
                  "type": "Literal",
                  "raw": "'yo'",
                  "value": "yo",
                  "range": [
                    247,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 16
                    },
                    "start": {
                      "column": 11,
                      "line": 16
                    }
                  }
                },
                "range": [
                  240,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "Literal",
                  "raw": "'b'",
                  "value": "b",
                  "range": [
                    258,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 17
                    },
                    "start": {
                      "column": 5,
                      "line": 17
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'ye'",
                  "value": "ye",
                  "range": [
                    264,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 17
                    },
                    "start": {
                      "column": 11,
                      "line": 17
                    }
                  }
                },
                "range": [
                  257,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              234,
              270
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 20,
                "line": 15
              }
            }
          },
          "range": [
            220,
            270
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        214,
        270
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 15
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
              277,
              278
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "'a'",
            "value": "a",
            "range": [
              281,
              284
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 19
              },
              "start": {
                "column": 10,
                "line": 19
              }
            }
          },
          "range": [
            277,
            284
          ],
          "loc": {
            "end": {
              "column": 13,
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
        271,
        285
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "b",
            "optional": false,
            "range": [
              292,
              293
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "'b'",
            "value": "b",
            "range": [
              296,
              299
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 20
              },
              "start": {
                "column": 10,
                "line": 20
              }
            }
          },
          "range": [
            292,
            299
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        286,
        300
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 20
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 21
                },
                "start": {
                  "column": 7,
                  "line": 21
                }
              },
              "range": [
                308,
                318
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "range": [
                    310,
                    318
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 21
                    },
                    "start": {
                      "column": 9,
                      "line": 21
                    }
                  }
                },
                "range": [
                  310,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              307,
              318
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    328,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 22
                    },
                    "start": {
                      "column": 5,
                      "line": 22
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'zo'",
                  "value": "zo",
                  "range": [
                    332,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 22
                    },
                    "start": {
                      "column": 9,
                      "line": 22
                    }
                  }
                },
                "range": [
                  327,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    343,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 23
                    },
                    "start": {
                      "column": 5,
                      "line": 23
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'ze'",
                  "value": "ze",
                  "range": [
                    347,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 23
                    },
                    "start": {
                      "column": 9,
                      "line": 23
                    }
                  }
                },
                "range": [
                  342,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              321,
              353
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 24
              },
              "start": {
                "column": 20,
                "line": 21
              }
            }
          },
          "range": [
            307,
            353
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        301,
        353
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
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
            "name": "uz",
            "optional": false,
            "range": [
              360,
              362
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    372,
                    373
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 26
                    },
                    "start": {
                      "column": 5,
                      "line": 26
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'zo'",
                  "value": "zo",
                  "range": [
                    376,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 26
                    },
                    "start": {
                      "column": 9,
                      "line": 26
                    }
                  }
                },
                "range": [
                  371,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    387,
                    388
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 27
                    },
                    "start": {
                      "column": 5,
                      "line": 27
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'ze'",
                  "value": "ze",
                  "range": [
                    391,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 27
                    },
                    "start": {
                      "column": 9,
                      "line": 27
                    }
                  }
                },
                "range": [
                  386,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              365,
              397
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 28
              },
              "start": {
                "column": 11,
                "line": 25
              }
            }
          },
          "range": [
            360,
            397
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        354,
        397
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          409,
          425
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                415,
                416
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              415,
              416
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                422,
                423
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              422,
              423
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 10,
            "line": 30
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nums",
        "optional": false,
        "range": [
          404,
          408
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 30
          },
          "start": {
            "column": 5,
            "line": 30
          }
        }
      },
      "range": [
        399,
        425
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestNums",
        "optional": false,
        "range": [
          431,
          439
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 34
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
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                444,
                445
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 34
                },
                "start": {
                  "column": 18,
                  "line": 34
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
                  "column": 27,
                  "line": 34
                },
                "start": {
                  "column": 19,
                  "line": 34
                }
              },
              "range": [
                445,
                453
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  447,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 34
                  },
                  "start": {
                    "column": 21,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              444,
              454
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 34
              },
              "start": {
                "column": 18,
                "line": 34
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                455,
                456
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 34
                },
                "start": {
                  "column": 29,
                  "line": 34
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
                  "column": 38,
                  "line": 34
                },
                "start": {
                  "column": 30,
                  "line": 34
                }
              },
              "range": [
                456,
                464
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  458,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 34
                  },
                  "start": {
                    "column": 32,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              455,
              464
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 34
              },
              "start": {
                "column": 29,
                "line": 34
              }
            }
          }
        ],
        "range": [
          442,
          466
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 34
          },
          "start": {
            "column": 16,
            "line": 34
          }
        }
      },
      "range": [
        426,
        466
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 35
                },
                "start": {
                  "column": 7,
                  "line": 35
                }
              },
              "range": [
                474,
                484
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestNums",
                  "optional": false,
                  "range": [
                    476,
                    484
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 35
                    },
                    "start": {
                      "column": 9,
                      "line": 35
                    }
                  }
                },
                "range": [
                  476,
                  484
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 35
                  },
                  "start": {
                    "column": 9,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              473,
              484
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 35
              },
              "start": {
                "column": 6,
                "line": 35
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "range": [
                      494,
                      498
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 36
                      },
                      "start": {
                        "column": 5,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      499,
                      500
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 36
                      },
                      "start": {
                        "column": 10,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    494,
                    500
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 36
                    },
                    "start": {
                      "column": 5,
                      "line": 36
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    503,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 36
                    },
                    "start": {
                      "column": 14,
                      "line": 36
                    }
                  }
                },
                "range": [
                  493,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "range": [
                      511,
                      515
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 37
                      },
                      "start": {
                        "column": 5,
                        "line": 37
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      516,
                      517
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
                    511,
                    517
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 37
                    },
                    "start": {
                      "column": 5,
                      "line": 37
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    520,
                    521
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 37
                    },
                    "start": {
                      "column": 14,
                      "line": 37
                    }
                  }
                },
                "range": [
                  510,
                  521
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              }
            ],
            "range": [
              487,
              523
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 38
              },
              "start": {
                "column": 20,
                "line": 35
              }
            }
          },
          "range": [
            473,
            523
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 38
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
        467,
        523
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
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
            "name": "un",
            "optional": false,
            "range": [
              530,
              532
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 39
              },
              "start": {
                "column": 6,
                "line": 39
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "range": [
                      542,
                      546
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 40
                      },
                      "start": {
                        "column": 5,
                        "line": 40
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      547,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 40
                      },
                      "start": {
                        "column": 10,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    542,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 40
                    },
                    "start": {
                      "column": 5,
                      "line": 40
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    551,
                    552
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 40
                    },
                    "start": {
                      "column": 14,
                      "line": 40
                    }
                  }
                },
                "range": [
                  541,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "range": [
                      559,
                      563
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 41
                      },
                      "start": {
                        "column": 5,
                        "line": 41
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      564,
                      565
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 41
                      },
                      "start": {
                        "column": 10,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    559,
                    565
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 41
                    },
                    "start": {
                      "column": 5,
                      "line": 41
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    568,
                    569
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 41
                    },
                    "start": {
                      "column": 14,
                      "line": 41
                    }
                  }
                },
                "range": [
                  558,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              }
            ],
            "range": [
              535,
              571
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 42
              },
              "start": {
                "column": 11,
                "line": 39
              }
            }
          },
          "range": [
            530,
            571
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        524,
        571
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 39
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
            "name": "an",
            "optional": false,
            "range": [
              578,
              580
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 43
              },
              "start": {
                "column": 6,
                "line": 43
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              583,
              584
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 43
              },
              "start": {
                "column": 11,
                "line": 43
              }
            }
          },
          "range": [
            578,
            584
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 43
            },
            "start": {
              "column": 6,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        572,
        585
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "bn",
            "optional": false,
            "range": [
              592,
              594
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 44
              },
              "start": {
                "column": 6,
                "line": 44
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              597,
              598
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 44
              },
              "start": {
                "column": 11,
                "line": 44
              }
            }
          },
          "range": [
            592,
            598
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        586,
        599
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 45
                },
                "start": {
                  "column": 7,
                  "line": 45
                }
              },
              "range": [
                607,
                617
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestNums",
                  "optional": false,
                  "range": [
                    609,
                    617
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 45
                    },
                    "start": {
                      "column": 9,
                      "line": 45
                    }
                  }
                },
                "range": [
                  609,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 45
                  },
                  "start": {
                    "column": 9,
                    "line": 45
                  }
                }
              }
            },
            "range": [
              606,
              617
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 45
              },
              "start": {
                "column": 6,
                "line": 45
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
                  "name": "an",
                  "optional": false,
                  "range": [
                    627,
                    629
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 46
                    },
                    "start": {
                      "column": 5,
                      "line": 46
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    632,
                    633
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 46
                    },
                    "start": {
                      "column": 10,
                      "line": 46
                    }
                  }
                },
                "range": [
                  626,
                  633
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bn",
                  "optional": false,
                  "range": [
                    640,
                    642
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 47
                    },
                    "start": {
                      "column": 5,
                      "line": 47
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "6",
                  "value": 6,
                  "range": [
                    645,
                    646
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 47
                    },
                    "start": {
                      "column": 10,
                      "line": 47
                    }
                  }
                },
                "range": [
                  639,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              }
            ],
            "range": [
              620,
              648
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 48
              },
              "start": {
                "column": 20,
                "line": 45
              }
            }
          },
          "range": [
            606,
            648
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 45
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        600,
        648
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 45
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
            "name": "um",
            "optional": false,
            "range": [
              655,
              657
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 49
              },
              "start": {
                "column": 6,
                "line": 49
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
                  "name": "an",
                  "optional": false,
                  "range": [
                    667,
                    669
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 50
                    },
                    "start": {
                      "column": 5,
                      "line": 50
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "7",
                  "value": 7,
                  "range": [
                    672,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 50
                    },
                    "start": {
                      "column": 10,
                      "line": 50
                    }
                  }
                },
                "range": [
                  666,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              },
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bn",
                  "optional": false,
                  "range": [
                    680,
                    682
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 51
                    },
                    "start": {
                      "column": 5,
                      "line": 51
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "8",
                  "value": 8,
                  "range": [
                    685,
                    686
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 51
                    },
                    "start": {
                      "column": 10,
                      "line": 51
                    }
                  }
                },
                "range": [
                  679,
                  686
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 51
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              }
            ],
            "range": [
              660,
              688
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 52
              },
              "start": {
                "column": 11,
                "line": 49
              }
            }
          },
          "range": [
            655,
            688
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 52
            },
            "start": {
              "column": 6,
              "line": 49
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        649,
        688
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 53
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
