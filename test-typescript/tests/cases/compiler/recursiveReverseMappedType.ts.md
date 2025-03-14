__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    298
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recur",
        "optional": false,
        "range": [
          27,
          32
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  44,
                  45
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
              "range": [
                44,
                45
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
            "extendsType": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  55,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              "range": [
                55,
                64
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "falseType": {
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
                      87,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 4
                      },
                      "start": {
                        "column": 47,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    87,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 4
                    },
                    "start": {
                      "column": 47,
                      "line": 4
                    }
                  }
                },
                "range": [
                  81,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 4
                  },
                  "start": {
                    "column": 41,
                    "line": 4
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  76,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 4
                  },
                  "start": {
                    "column": 36,
                    "line": 4
                  }
                }
              },
              "nameType": null,
              "optional": true,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    97,
                    103
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
                            100,
                            101
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 4
                            },
                            "start": {
                              "column": 60,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          100,
                          101
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 4
                          },
                          "start": {
                            "column": 60,
                            "line": 4
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
                            98,
                            99
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 4
                            },
                            "start": {
                              "column": 58,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          98,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 4
                          },
                          "start": {
                            "column": 58,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        98,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 4
                        },
                        "start": {
                          "column": 58,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 4
                    },
                    "start": {
                      "column": 57,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recur",
                  "optional": false,
                  "range": [
                    92,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 4
                    },
                    "start": {
                      "column": 52,
                      "line": 4
                    }
                  }
                },
                "range": [
                  92,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 4
                  },
                  "start": {
                    "column": 52,
                    "line": 4
                  }
                }
              },
              "range": [
                73,
                105
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              }
            },
            "trueType": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                68,
                70
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 28,
                  "line": 4
                }
              }
            },
            "range": [
              44,
              105
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'marker'",
                  "value": "marker",
                  "range": [
                    111,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 5
                    },
                    "start": {
                      "column": 5,
                      "line": 5
                    }
                  }
                },
                "range": [
                  111,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 5
                  },
                  "start": {
                    "column": 5,
                    "line": 5
                  }
                }
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        129,
                        132
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
                              130,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 5
                              },
                              "start": {
                                "column": 24,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            130,
                            131
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 5
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
                          "column": 26,
                          "line": 5
                        },
                        "start": {
                          "column": 23,
                          "line": 5
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Recur",
                      "optional": false,
                      "range": [
                        124,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 18,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      124,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 5
                      },
                      "start": {
                        "column": 18,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    124,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 18,
                      "line": 5
                    }
                  }
                },
                "range": [
                  121,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              110,
              135
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          38,
          135
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        },
        "range": [
          32,
          35
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
                33,
                34
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              33,
              34
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        136
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 5
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
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "'marker'",
                  "value": "marker",
                  "range": [
                    194,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "range": [
                      207,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 25,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    204,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 22,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                193,
                209
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              186,
              210
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          180,
          212
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 42,
            "line": 7
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
          147,
          151
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            },
            "range": [
              156,
              168
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    163,
                    166
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
                          164,
                          165
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 7
                          },
                          "start": {
                            "column": 26,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        164,
                        165
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 7
                        },
                        "start": {
                          "column": 26,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 7
                    },
                    "start": {
                      "column": 25,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recur",
                  "optional": false,
                  "range": [
                    158,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 7
                    },
                    "start": {
                      "column": 20,
                      "line": 7
                    }
                  }
                },
                "range": [
                  158,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 20,
                    "line": 7
                  }
                }
              },
              "range": [
                158,
                168
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              }
            }
          },
          "range": [
            155,
            168
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 7
            },
            "start": {
              "column": 17,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 7
          },
          "start": {
            "column": 31,
            "line": 7
          }
        },
        "range": [
          169,
          179
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              176,
              179
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
                    177,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 39,
                      "line": 7
                    }
                  }
                },
                "range": [
                  177,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 7
                  },
                  "start": {
                    "column": 39,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 7
              },
              "start": {
                "column": 38,
                "line": 7
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Recur",
            "optional": false,
            "range": [
              171,
              176
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 7
              },
              "start": {
                "column": 33,
                "line": 7
              }
            }
          },
          "range": [
            171,
            179
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 7
            },
            "start": {
              "column": 33,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 7
          },
          "start": {
            "column": 13,
            "line": 7
          }
        },
        "range": [
          151,
          154
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
                152,
                153
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              152,
              153
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        138,
        212
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    },
                    "range": [
                      262,
                      284
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              269,
                              272
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
                                    270,
                                    271
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
                                "range": [
                                  270,
                                  271
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
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 12
                              },
                              "start": {
                                "column": 18,
                                "line": 12
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Recur",
                            "optional": false,
                            "range": [
                              264,
                              269
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 12
                              },
                              "start": {
                                "column": 13,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            264,
                            272
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 12
                            },
                            "start": {
                              "column": 13,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            275,
                            284
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 12
                            },
                            "start": {
                              "column": 24,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        264,
                        284
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    261,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "range": [
                        292,
                        293
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 12
                        },
                        "start": {
                          "column": 41,
                          "line": 12
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
                      287,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 12
                      },
                      "start": {
                        "column": 36,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    287,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 12
                    },
                    "start": {
                      "column": 36,
                      "line": 12
                    }
                  }
                },
                "range": [
                  261,
                  294
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              255,
              295
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          249,
          297
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 35,
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
        "name": "a",
        "optional": false,
        "range": [
          223,
          224
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 15,
                "line": 11
              }
            },
            "range": [
              229,
              241
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    236,
                    239
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
                          237,
                          238
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 11
                          },
                          "start": {
                            "column": 23,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        237,
                        238
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 11
                        },
                        "start": {
                          "column": 23,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 11
                    },
                    "start": {
                      "column": 22,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recur",
                  "optional": false,
                  "range": [
                    231,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 11
                    },
                    "start": {
                      "column": 17,
                      "line": 11
                    }
                  }
                },
                "range": [
                  231,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 11
                  },
                  "start": {
                    "column": 17,
                    "line": 11
                  }
                }
              },
              "range": [
                231,
                241
              ],
              "loc": {
                "end": {
                  "column": 27,
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
            228,
            241
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 11
          },
          "start": {
            "column": 28,
            "line": 11
          }
        },
        "range": [
          242,
          248
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            244,
            248
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 11
            },
            "start": {
              "column": 30,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        },
        "range": [
          224,
          227
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
                225,
                226
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              225,
              226
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        214,
        297
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
