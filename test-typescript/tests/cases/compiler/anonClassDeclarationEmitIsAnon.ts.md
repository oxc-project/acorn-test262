__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    333
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        126
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    65,
                    124
                  ],
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          75,
                          78
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
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          78,
                          118
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "range": [
                                  102,
                                  107
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                95,
                                108
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 4
                                },
                                "start": {
                                  "column": 12,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "range": [
                            81,
                            118
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 5
                            },
                            "start": {
                              "column": 14,
                              "line": 3
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
                            "column": 9,
                            "line": 5
                          },
                          "start": {
                            "column": 11,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        75,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 25,
                      "line": 2
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Wrapped",
                  "optional": false,
                  "range": [
                    57,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  51,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "range": [
                44,
                124
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            38,
            126
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 38,
              "line": 1
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapClass",
          "optional": false,
          "range": [
            16,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              },
              "range": [
                31,
                36
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  33,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 1
                  },
                  "start": {
                    "column": 33,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              26,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          }
        ],
        "range": [
          7,
          126
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
        128,
        188
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "range": [
            140,
            151
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 9
            },
            "start": {
              "column": 12,
              "line": 9
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  170,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 9
                  },
                  "start": {
                    "column": 42,
                    "line": 9
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 9
                  },
                  "start": {
                    "column": 46,
                    "line": 9
                  }
                },
                "range": [
                  174,
                  181
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      176,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 9
                      },
                      "start": {
                        "column": 48,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    176,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 9
                    },
                    "start": {
                      "column": 48,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                167,
                181
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 9
                },
                "start": {
                  "column": 39,
                  "line": 9
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 9
              },
              "start": {
                "column": 55,
                "line": 9
              }
            },
            "range": [
              183,
              187
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  186,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 9
                  },
                  "start": {
                    "column": 58,
                    "line": 9
                  }
                }
              },
              "range": [
                186,
                187
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 9
                },
                "start": {
                  "column": 58,
                  "line": 9
                }
              }
            }
          },
          "range": [
            162,
            187
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 9
            },
            "start": {
              "column": 34,
              "line": 9
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 31,
              "line": 9
            },
            "start": {
              "column": 23,
              "line": 9
            }
          },
          "range": [
            151,
            159
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  156,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 28,
                    "line": 9
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
                  152,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              },
              "out": false,
              "range": [
                152,
                158
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              }
            }
          ]
        },
        "range": [
          135,
          188
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 60,
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
        190,
        332
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    290,
                    329
                  ],
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "timestamp",
                        "optional": false,
                        "range": [
                          300,
                          309
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "value": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "range": [
                              312,
                              316
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 13
                              },
                              "start": {
                                "column": 20,
                                "line": 13
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "now",
                            "optional": false,
                            "range": [
                              317,
                              320
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 13
                              },
                              "start": {
                                "column": 25,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            312,
                            320
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 13
                            },
                            "start": {
                              "column": 20,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          312,
                          322
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 13
                          },
                          "start": {
                            "column": 20,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        300,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 30,
                      "line": 12
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": null,
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    285,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 12
                    },
                    "start": {
                      "column": 25,
                      "line": 12
                    }
                  }
                },
                "range": [
                  271,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "range": [
                264,
                330
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            }
          ],
          "range": [
            258,
            332
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 68,
              "line": 11
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Timestamped",
          "optional": false,
          "range": [
            206,
            217
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 11
            },
            "start": {
              "column": 16,
              "line": 11
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 11
                },
                "start": {
                  "column": 59,
                  "line": 11
                }
              },
              "range": [
                249,
                256
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TBase",
                  "optional": false,
                  "range": [
                    251,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 11
                    },
                    "start": {
                      "column": 61,
                      "line": 11
                    }
                  }
                },
                "range": [
                  251,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 11
                  },
                  "start": {
                    "column": 61,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              245,
              256
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 11
              },
              "start": {
                "column": 55,
                "line": 11
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 54,
              "line": 11
            },
            "start": {
              "column": 27,
              "line": 11
            }
          },
          "range": [
            217,
            244
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
                  "name": "Constructor",
                  "optional": false,
                  "range": [
                    232,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 11
                    },
                    "start": {
                      "column": 42,
                      "line": 11
                    }
                  }
                },
                "range": [
                  232,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 11
                  },
                  "start": {
                    "column": 42,
                    "line": 11
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBase",
                "optional": false,
                "range": [
                  218,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 28,
                    "line": 11
                  }
                }
              },
              "out": false,
              "range": [
                218,
                243
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 11
                },
                "start": {
                  "column": 28,
                  "line": 11
                }
              }
            }
          ]
        },
        "range": [
          197,
          332
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
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
          "column": 1,
          "line": 15
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
      "line": 16
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
    268
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./wrapClass\"",
        "value": "./wrapClass",
        "range": [
          39,
          52
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 1
          },
          "start": {
            "column": 39,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "wrapClass",
            "optional": false,
            "range": [
              9,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "wrapClass",
            "optional": false,
            "range": [
              9,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Timestamped",
            "optional": false,
            "range": [
              20,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Timestamped",
            "optional": false,
            "range": [
              20,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          "range": [
            20,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        53
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              80,
              81
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 3
              },
              "start": {
                "column": 25,
                "line": 3
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapClass",
          "optional": false,
          "range": [
            70,
            79
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          70,
          82
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
      "exportKind": "value",
      "range": [
        55,
        83
      ],
      "loc": {
        "end": {
          "column": 28,
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
        101,
        137
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            119,
            137
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "range": [
                  125,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  132,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "range": [
                125,
                135
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 18,
              "line": 6
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "User",
          "optional": false,
          "range": [
            114,
            118
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 6
            },
            "start": {
              "column": 13,
              "line": 6
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          108,
          137
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
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
          "column": 1,
          "line": 8
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
        167,
        268
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            222,
            268
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  228,
                  239
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  239,
                  266
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Super",
                          "range": [
                            252,
                            257
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          252,
                          259
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        252,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    242,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 18,
                      "line": 12
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
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 12
                  }
                }
              },
              "range": [
                228,
                266
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 12
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
              "column": 55,
              "line": 11
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TimestampedUser",
          "optional": false,
          "range": [
            180,
            195
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "User",
              "optional": false,
              "range": [
                216,
                220
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 11
                },
                "start": {
                  "column": 49,
                  "line": 11
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Timestamped",
            "optional": false,
            "range": [
              204,
              215
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 11
              },
              "start": {
                "column": 37,
                "line": 11
              }
            }
          },
          "optional": false,
          "range": [
            204,
            221
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 11
            },
            "start": {
              "column": 37,
              "line": 11
            }
          }
        },
        "range": [
          174,
          268
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
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
          "column": 1,
          "line": 15
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
