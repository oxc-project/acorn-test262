__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    731
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            },
            "range": [
              24,
              29
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    26,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 1
                    },
                    "start": {
                      "column": 26,
                      "line": 1
                    }
                  }
                },
                "range": [
                  26,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
                    "line": 1
                  }
                }
              },
              "range": [
                26,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            }
          },
          "range": [
            23,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 1
          },
          "start": {
            "column": 30,
            "line": 1
          }
        },
        "range": [
          30,
          33
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              32,
              33
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 32,
                "line": 1
              }
            }
          },
          "range": [
            32,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 32,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        },
        "range": [
          19,
          22
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
          }
        ]
      },
      "range": [
        0,
        34
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "neverArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              },
              "range": [
                50,
                59
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNeverKeyword",
                  "range": [
                    52,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                },
                "range": [
                  52,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 16,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              40,
              59
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              62,
              64
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          },
          "range": [
            40,
            64
          ],
          "loc": {
            "end": {
              "column": 28,
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
        36,
        65
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "a1",
            "optional": false,
            "range": [
              71,
              73
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  79,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
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
                76,
                78
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              76,
              82
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 9,
                "line": 5
              }
            }
          },
          "range": [
            71,
            82
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        67,
        83
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 5
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
            "name": "a2",
            "optional": false,
            "range": [
              98,
              100
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "neverArray",
                "optional": false,
                "range": [
                  106,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 12,
                    "line": 6
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
                103,
                105
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "optional": false,
            "range": [
              103,
              117
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
          "range": [
            98,
            117
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        94,
        118
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comparator",
        "optional": false,
        "range": [
          157,
          167
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 23,
                  "line": 10
                }
              },
              "range": [
                175,
                178
              ],
              "typeAnnotation": {
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
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 25,
                      "line": 10
                    }
                  }
                },
                "range": [
                  177,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 25,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              174,
              178
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 10
              },
              "start": {
                "column": 22,
                "line": 10
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 10
                },
                "start": {
                  "column": 29,
                  "line": 10
                }
              },
              "range": [
                181,
                184
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    183,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 10
                    },
                    "start": {
                      "column": 31,
                      "line": 10
                    }
                  }
                },
                "range": [
                  183,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 10
                  },
                  "start": {
                    "column": 31,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              180,
              184
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 10
              },
              "start": {
                "column": 28,
                "line": 10
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 43,
              "line": 10
            },
            "start": {
              "column": 34,
              "line": 10
            }
          },
          "range": [
            186,
            195
          ],
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "range": [
              189,
              195
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 10
              },
              "start": {
                "column": 37,
                "line": 10
              }
            }
          }
        },
        "range": [
          173,
          195
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 10
          },
          "start": {
            "column": 21,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 10
          }
        },
        "range": [
          167,
          170
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
                168,
                169
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 16,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              168,
              169
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        152,
        196
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          222,
          275
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "comparator",
              "optional": false,
              "range": [
                228,
                238
              ],
              "loc": {
                "end": {
                  "column": 14,
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
                  "column": 29,
                  "line": 13
                },
                "start": {
                  "column": 14,
                  "line": 13
                }
              },
              "range": [
                238,
                253
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    250,
                    253
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
                          251,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 13
                          },
                          "start": {
                            "column": 27,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        251,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 13
                        },
                        "start": {
                          "column": 27,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 13
                    },
                    "start": {
                      "column": 26,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Comparator",
                  "optional": false,
                  "range": [
                    240,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 13
                    },
                    "start": {
                      "column": 16,
                      "line": 13
                    }
                  }
                },
                "range": [
                  240,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 13
                  },
                  "start": {
                    "column": 16,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              228,
              254
            ],
            "loc": {
              "end": {
                "column": 30,
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
              "name": "nodes",
              "optional": false,
              "range": [
                259,
                264
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
                  "column": 18,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              },
              "range": [
                264,
                273
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    270,
                    273
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
                          271,
                          272
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 14
                          },
                          "start": {
                            "column": 16,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        271,
                        272
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 14
                    },
                    "start": {
                      "column": 15,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "range": [
                    266,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  266,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              259,
              273
            ],
            "loc": {
              "end": {
                "column": 18,
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
            "column": 24,
            "line": 12
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LinkedList",
        "optional": false,
        "range": [
          208,
          218
        ],
        "loc": {
          "end": {
            "column": 20,
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
            "column": 23,
            "line": 12
          },
          "start": {
            "column": 20,
            "line": 12
          }
        },
        "range": [
          218,
          221
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
                219,
                220
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 21,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              219,
              220
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 12
              },
              "start": {
                "column": 21,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        198,
        275
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
        "name": "Node",
        "optional": false,
        "range": [
          282,
          286
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    294,
                    299
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 17
                    },
                    "start": {
                      "column": 17,
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
                      "column": 25,
                      "line": 17
                    },
                    "start": {
                      "column": 22,
                      "line": 17
                    }
                  },
                  "range": [
                    299,
                    302
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        301,
                        302
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 17
                        },
                        "start": {
                          "column": 24,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      301,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 17
                      },
                      "start": {
                        "column": 24,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  294,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 17
                  },
                  "start": {
                    "column": 17,
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
                  "name": "next",
                  "optional": false,
                  "range": [
                    304,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 17
                    },
                    "start": {
                      "column": 27,
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
                      "column": 40,
                      "line": 17
                    },
                    "start": {
                      "column": 31,
                      "line": 17
                    }
                  },
                  "range": [
                    308,
                    317
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        314,
                        317
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
                              315,
                              316
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 17
                              },
                              "start": {
                                "column": 38,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            315,
                            316
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 17
                            },
                            "start": {
                              "column": 38,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 17
                        },
                        "start": {
                          "column": 37,
                          "line": 17
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "range": [
                        310,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 17
                        },
                        "start": {
                          "column": 33,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      310,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 17
                      },
                      "start": {
                        "column": 33,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  304,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 17
                  },
                  "start": {
                    "column": 27,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              292,
              319
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 17
              },
              "start": {
                "column": 15,
                "line": 17
              }
            }
          },
          {
            "type": "TSNullKeyword",
            "range": [
              322,
              326
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 17
              },
              "start": {
                "column": 45,
                "line": 17
              }
            }
          }
        ],
        "range": [
          292,
          326
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 17
          },
          "start": {
            "column": 15,
            "line": 17
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        },
        "range": [
          286,
          289
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
                287,
                288
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 17
                },
                "start": {
                  "column": 10,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              287,
              288
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 17
              },
              "start": {
                "column": 10,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        277,
        326
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
        "name": "compareNumbers",
        "optional": false,
        "range": [
          345,
          359
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 19
          },
          "start": {
            "column": 17,
            "line": 19
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
                "column": 41,
                "line": 19
              },
              "start": {
                "column": 33,
                "line": 19
              }
            },
            "range": [
              361,
              369
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                363,
                369
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 19
                },
                "start": {
                  "column": 35,
                  "line": 19
                }
              }
            }
          },
          "range": [
            360,
            369
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 19
            },
            "start": {
              "column": 32,
              "line": 19
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 19
              },
              "start": {
                "column": 44,
                "line": 19
              }
            },
            "range": [
              372,
              380
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                374,
                380
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 19
                },
                "start": {
                  "column": 46,
                  "line": 19
                }
              }
            }
          },
          "range": [
            371,
            380
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 19
            },
            "start": {
              "column": 43,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 19
          },
          "start": {
            "column": 53,
            "line": 19
          }
        },
        "range": [
          381,
          389
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            383,
            389
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 19
            },
            "start": {
              "column": 55,
              "line": 19
            }
          }
        }
      },
      "range": [
        328,
        390
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mkList",
        "optional": false,
        "range": [
          408,
          414
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 20
          },
          "start": {
            "column": 17,
            "line": 20
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 20
              },
              "start": {
                "column": 32,
                "line": 20
              }
            },
            "range": [
              423,
              428
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    425,
                    426
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 20
                    },
                    "start": {
                      "column": 34,
                      "line": 20
                    }
                  }
                },
                "range": [
                  425,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 20
                  },
                  "start": {
                    "column": 34,
                    "line": 20
                  }
                }
              },
              "range": [
                425,
                428
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 20
                },
                "start": {
                  "column": 34,
                  "line": 20
                }
              }
            }
          },
          "range": [
            418,
            428
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 20
            },
            "start": {
              "column": 27,
              "line": 20
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "comparator",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 20
              },
              "start": {
                "column": 49,
                "line": 20
              }
            },
            "range": [
              440,
              455
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  452,
                  455
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
                        453,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 20
                        },
                        "start": {
                          "column": 62,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      453,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 20
                      },
                      "start": {
                        "column": 62,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 20
                  },
                  "start": {
                    "column": 61,
                    "line": 20
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Comparator",
                "optional": false,
                "range": [
                  442,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 20
                  },
                  "start": {
                    "column": 51,
                    "line": 20
                  }
                }
              },
              "range": [
                442,
                455
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 20
                },
                "start": {
                  "column": 51,
                  "line": 20
                }
              }
            }
          },
          "range": [
            430,
            455
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 20
            },
            "start": {
              "column": 39,
              "line": 20
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 80,
            "line": 20
          },
          "start": {
            "column": 65,
            "line": 20
          }
        },
        "range": [
          456,
          471
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              468,
              471
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
                    469,
                    470
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 20
                    },
                    "start": {
                      "column": 78,
                      "line": 20
                    }
                  }
                },
                "range": [
                  469,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 20
                  },
                  "start": {
                    "column": 78,
                    "line": 20
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 20
              },
              "start": {
                "column": 77,
                "line": 20
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "LinkedList",
            "optional": false,
            "range": [
              458,
              468
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 20
              },
              "start": {
                "column": 67,
                "line": 20
              }
            }
          },
          "range": [
            458,
            471
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 20
            },
            "start": {
              "column": 67,
              "line": 20
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 20
          },
          "start": {
            "column": 23,
            "line": 20
          }
        },
        "range": [
          414,
          417
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
                415,
                416
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 20
                },
                "start": {
                  "column": 24,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              415,
              416
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 20
              },
              "start": {
                "column": 24,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        391,
        472
      ],
      "loc": {
        "end": {
          "column": 81,
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
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 22
                },
                "start": {
                  "column": 10,
                  "line": 22
                }
              },
              "range": [
                484,
                504
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    496,
                    504
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        497,
                        503
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 22
                        },
                        "start": {
                          "column": 23,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 22
                    },
                    "start": {
                      "column": 22,
                      "line": 22
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LinkedList",
                  "optional": false,
                  "range": [
                    486,
                    496
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                },
                "range": [
                  486,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 22
                  },
                  "start": {
                    "column": 12,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              480,
              504
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  514,
                  516
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 22
                  },
                  "start": {
                    "column": 40,
                    "line": 22
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "compareNumbers",
                "optional": false,
                "range": [
                  518,
                  532
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 22
                  },
                  "start": {
                    "column": 44,
                    "line": 22
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mkList",
              "optional": false,
              "range": [
                507,
                513
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 22
                },
                "start": {
                  "column": 33,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              507,
              533
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 22
              },
              "start": {
                "column": 33,
                "line": 22
              }
            }
          },
          "range": [
            480,
            533
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        474,
        534
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
          575,
          577
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 26
          },
          "start": {
            "column": 17,
            "line": 26
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "as1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 26
              },
              "start": {
                "column": 26,
                "line": 26
              }
            },
            "range": [
              584,
              589
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    586,
                    587
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 26
                    },
                    "start": {
                      "column": 28,
                      "line": 26
                    }
                  }
                },
                "range": [
                  586,
                  587
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 26
                  },
                  "start": {
                    "column": 28,
                    "line": 26
                  }
                }
              },
              "range": [
                586,
                589
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 26
                },
                "start": {
                  "column": 28,
                  "line": 26
                }
              }
            }
          },
          "range": [
            581,
            589
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 26
            },
            "start": {
              "column": 23,
              "line": 26
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "as2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 26
              },
              "start": {
                "column": 36,
                "line": 26
              }
            },
            "range": [
              594,
              599
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    596,
                    597
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 26
                    },
                    "start": {
                      "column": 38,
                      "line": 26
                    }
                  }
                },
                "range": [
                  596,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 26
                  },
                  "start": {
                    "column": 38,
                    "line": 26
                  }
                }
              },
              "range": [
                596,
                599
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 26
                },
                "start": {
                  "column": 38,
                  "line": 26
                }
              }
            }
          },
          "range": [
            591,
            599
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 26
            },
            "start": {
              "column": 33,
              "line": 26
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cmp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 72,
                "line": 26
              },
              "start": {
                "column": 46,
                "line": 26
              }
            },
            "range": [
              604,
              630
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 26
                      },
                      "start": {
                        "column": 51,
                        "line": 26
                      }
                    },
                    "range": [
                      609,
                      612
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          611,
                          612
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 26
                          },
                          "start": {
                            "column": 53,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        611,
                        612
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 26
                        },
                        "start": {
                          "column": 53,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    607,
                    612
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 26
                    },
                    "start": {
                      "column": 49,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 26
                      },
                      "start": {
                        "column": 58,
                        "line": 26
                      }
                    },
                    "range": [
                      616,
                      619
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          618,
                          619
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 26
                          },
                          "start": {
                            "column": 60,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        618,
                        619
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 26
                        },
                        "start": {
                          "column": 60,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    614,
                    619
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 26
                    },
                    "start": {
                      "column": 56,
                      "line": 26
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 26
                  },
                  "start": {
                    "column": 63,
                    "line": 26
                  }
                },
                "range": [
                  621,
                  630
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    624,
                    630
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 26
                    },
                    "start": {
                      "column": 66,
                      "line": 26
                    }
                  }
                }
              },
              "range": [
                606,
                630
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 26
                },
                "start": {
                  "column": 48,
                  "line": 26
                }
              }
            }
          },
          "range": [
            601,
            630
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 26
            },
            "start": {
              "column": 43,
              "line": 26
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 79,
            "line": 26
          },
          "start": {
            "column": 73,
            "line": 26
          }
        },
        "range": [
          631,
          637
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            633,
            637
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 26
            },
            "start": {
              "column": 75,
              "line": 26
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 26
          },
          "start": {
            "column": 19,
            "line": 26
          }
        },
        "range": [
          577,
          580
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                578,
                579
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 26
                },
                "start": {
                  "column": 20,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              578,
              579
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 26
              },
              "start": {
                "column": 20,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        558,
        638
      ],
      "loc": {
        "end": {
          "column": 80,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      654,
                      655
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 27
                      },
                      "start": {
                        "column": 15,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  653,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 27
                  },
                  "start": {
                    "column": 14,
                    "line": 27
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
                "name": "Array",
                "optional": false,
                "range": [
                  642,
                  647
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 27
                  },
                  "start": {
                    "column": 3,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "range": [
                  648,
                  652
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
                642,
                652
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 3,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              642,
              657
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 27
              },
              "start": {
                "column": 3,
                "line": 27
              }
            }
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              659,
              661
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 27
              },
              "start": {
                "column": 20,
                "line": 27
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "range": [
                  675,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 27
                  },
                  "start": {
                    "column": 36,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "range": [
                  680,
                  682
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 27
                  },
                  "start": {
                    "column": 41,
                    "line": 27
                  }
                }
              },
              "range": [
                675,
                682
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 27
                },
                "start": {
                  "column": 36,
                  "line": 27
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
                "name": "a1",
                "optional": false,
                "range": [
                  664,
                  666
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 27
                  },
                  "start": {
                    "column": 25,
                    "line": 27
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "range": [
                  668,
                  670
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 27
                  },
                  "start": {
                    "column": 29,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              663,
              682
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 27
              },
              "start": {
                "column": 24,
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
            639,
            641
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "range": [
          639,
          683
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        639,
        684
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  699,
                  701
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 28
                  },
                  "start": {
                    "column": 14,
                    "line": 28
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
                "name": "Array",
                "optional": false,
                "range": [
                  688,
                  693
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 28
                  },
                  "start": {
                    "column": 3,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "range": [
                  694,
                  698
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 28
                  },
                  "start": {
                    "column": 9,
                    "line": 28
                  }
                }
              },
              "range": [
                688,
                698
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 28
                },
                "start": {
                  "column": 3,
                  "line": 28
                }
              }
            },
            "optional": false,
            "range": [
              688,
              702
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 28
              },
              "start": {
                "column": 3,
                "line": 28
              }
            }
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  705,
                  706
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 28
                  },
                  "start": {
                    "column": 20,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              704,
              707
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 28
              },
              "start": {
                "column": 19,
                "line": 28
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "range": [
                  721,
                  723
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 28
                  },
                  "start": {
                    "column": 36,
                    "line": 28
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "range": [
                  726,
                  728
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 28
                  },
                  "start": {
                    "column": 41,
                    "line": 28
                  }
                }
              },
              "range": [
                721,
                728
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 28
                },
                "start": {
                  "column": 36,
                  "line": 28
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
                "name": "a1",
                "optional": false,
                "range": [
                  710,
                  712
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
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "range": [
                  714,
                  716
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 28
                  },
                  "start": {
                    "column": 29,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              709,
              728
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 28
              },
              "start": {
                "column": 24,
                "line": 28
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
            685,
            687
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          685,
          729
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        685,
        730
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
