__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    673
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotPromise",
        "optional": false,
        "range": [
          5,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              21,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          },
          "range": [
            21,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              39,
              48
            ],
            "params": [
              {
                "type": "TSUnknownKeyword",
                "range": [
                  40,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 1
                  },
                  "start": {
                    "column": 40,
                    "line": 1
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 1
              },
              "start": {
                "column": 39,
                "line": 1
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thenable",
            "optional": false,
            "range": [
              31,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 31,
                "line": 1
              }
            }
          },
          "range": [
            31,
            48
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 1
            },
            "start": {
              "column": 31,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                59,
                60
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
            "range": [
              59,
              60
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
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                80,
                89
              ],
              "params": [
                {
                  "type": "TSUnknownKeyword",
                  "range": [
                    81,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PromiseLike",
              "optional": false,
              "range": [
                69,
                80
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "range": [
              69,
              89
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "falseType": {
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
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              104,
              105
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "range": [
              94,
              99
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "range": [
            59,
            105
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              53,
              54
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "range": [
            53,
            54
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "range": [
          21,
          105
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 5
          },
          "start": {
            "column": 21,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        },
        "range": [
          15,
          18
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
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        106
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 5
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
        "name": "Receiver",
        "optional": false,
        "range": [
          113,
          121
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
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
                  "column": 40,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              },
              "range": [
                133,
                148
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    145,
                    148
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
                          146,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 7
                          },
                          "start": {
                            "column": 38,
                            "line": 7
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
                          "line": 7
                        },
                        "start": {
                          "column": 38,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 37,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NotPromise",
                  "optional": false,
                  "range": [
                    135,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 7
                    },
                    "start": {
                      "column": 27,
                      "line": 7
                    }
                  }
                },
                "range": [
                  135,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 7
                  },
                  "start": {
                    "column": 27,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              128,
              148
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 49,
              "line": 7
            },
            "start": {
              "column": 42,
              "line": 7
            }
          },
          "range": [
            150,
            157
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              153,
              157
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 7
              },
              "start": {
                "column": 45,
                "line": 7
              }
            }
          }
        },
        "range": [
          127,
          157
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 7
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
          121,
          124
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
                122,
                123
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
              122,
              123
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
        108,
        158
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          178,
          673
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                182,
                186
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
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
                186,
                205
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  203,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 10
                  },
                  "start": {
                    "column": 23,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "column": 21,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    },
                    "range": [
                      188,
                      201
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          198,
                          201
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
                                199,
                                200
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 10
                                },
                                "start": {
                                  "column": 19,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              199,
                              200
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 10
                              },
                              "start": {
                                "column": 19,
                                "line": 10
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 10
                          },
                          "start": {
                            "column": 18,
                            "line": 10
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Receiver",
                        "optional": false,
                        "range": [
                          190,
                          198
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 10
                          },
                          "start": {
                            "column": 10,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        190,
                        201
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 10
                        },
                        "start": {
                          "column": 10,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    187,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 7,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
                }
              }
            },
            "range": [
              182,
              205
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handleResolve",
              "optional": false,
              "range": [
                217,
                230
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 12
                },
                "start": {
                  "column": 10,
                  "line": 12
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
                230,
                565
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
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
                                "name": "result",
                                "optional": false,
                                "range": [
                                  538,
                                  544
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 18
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "range": [
                                  546,
                                  553
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 18
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  518,
                                  522
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 18
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolvePromise",
                                "optional": false,
                                "range": [
                                  523,
                                  537
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                518,
                                537
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 18
                                },
                                "start": {
                                  "column": 6,
                                  "line": 18
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              518,
                              554
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 18
                              },
                              "start": {
                                "column": 6,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            518,
                            555
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 18
                            },
                            "start": {
                              "column": 6,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        380,
                        561
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 19
                        },
                        "start": {
                          "column": 36,
                          "line": 16
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "instanceof",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "range": [
                          352,
                          358
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thenable",
                        "optional": false,
                        "range": [
                          370,
                          378
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 16
                          },
                          "start": {
                            "column": 26,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        352,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      348,
                      561
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 19
                      },
                      "start": {
                        "column": 4,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  342,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 13
                      },
                      "start": {
                        "column": 10,
                        "line": 13
                      }
                    },
                    "range": [
                      251,
                      304
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              263,
                              272
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TResult",
                                  "optional": false,
                                  "range": [
                                    264,
                                    271
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  264,
                                  271
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 13
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 13
                              },
                              "start": {
                                "column": 22,
                                "line": 13
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NotPromise",
                            "optional": false,
                            "range": [
                              253,
                              263
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 13
                              },
                              "start": {
                                "column": 12,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            253,
                            272
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              283,
                              304
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    294,
                                    303
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "TResult",
                                        "optional": false,
                                        "range": [
                                          295,
                                          302
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 61,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 54,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "range": [
                                        295,
                                        302
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 61,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 54,
                                          "line": 13
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 53,
                                      "line": 13
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "NotPromise",
                                  "optional": false,
                                  "range": [
                                    284,
                                    294
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  284,
                                  303
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 13
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 13
                              },
                              "start": {
                                "column": 42,
                                "line": 13
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "range": [
                              275,
                              283
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 13
                              },
                              "start": {
                                "column": 34,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            275,
                            304
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 13
                            },
                            "start": {
                              "column": 34,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        253,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 13
                        },
                        "start": {
                          "column": 12,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    245,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 14
                      },
                      "start": {
                        "column": 11,
                        "line": 14
                      }
                    },
                    "range": [
                      317,
                      336
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          327,
                          336
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "range": [
                                328,
                                335
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 14
                                },
                                "start": {
                                  "column": 22,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              328,
                              335
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 14
                              },
                              "start": {
                                "column": 22,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 14
                          },
                          "start": {
                            "column": 21,
                            "line": 14
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Receiver",
                        "optional": false,
                        "range": [
                          319,
                          327
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 14
                          },
                          "start": {
                            "column": 13,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        319,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    310,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 12
                  },
                  "start": {
                    "column": 23,
                    "line": 12
                  }
                },
                "range": [
                  230,
                  239
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "range": [
                        231,
                        238
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 12
                        },
                        "start": {
                          "column": 24,
                          "line": 12
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      231,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 12
                      },
                      "start": {
                        "column": 24,
                        "line": 12
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 20
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              }
            },
            "range": [
              209,
              565
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolvePromise",
              "optional": false,
              "range": [
                577,
                591
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 22
                },
                "start": {
                  "column": 10,
                  "line": 22
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
                591,
                671
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  669,
                  671
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 23
                      },
                      "start": {
                        "column": 10,
                        "line": 23
                      }
                    },
                    "range": [
                      612,
                      631
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          622,
                          631
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "range": [
                                623,
                                630
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 23
                                },
                                "start": {
                                  "column": 21,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              623,
                              630
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 23
                              },
                              "start": {
                                "column": 21,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 23
                          },
                          "start": {
                            "column": 20,
                            "line": 23
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thenable",
                        "optional": false,
                        "range": [
                          614,
                          622
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 23
                          },
                          "start": {
                            "column": 12,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        614,
                        631
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 23
                        },
                        "start": {
                          "column": 12,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    606,
                    631
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 23
                    },
                    "start": {
                      "column": 4,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 24
                      },
                      "start": {
                        "column": 11,
                        "line": 24
                      }
                    },
                    "range": [
                      644,
                      663
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          654,
                          663
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "range": [
                                655,
                                662
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 24
                                },
                                "start": {
                                  "column": 22,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              655,
                              662
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 24
                              },
                              "start": {
                                "column": 22,
                                "line": 24
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 24
                          },
                          "start": {
                            "column": 21,
                            "line": 24
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Receiver",
                        "optional": false,
                        "range": [
                          646,
                          654
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 24
                          },
                          "start": {
                            "column": 13,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        646,
                        663
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 24
                        },
                        "start": {
                          "column": 13,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    637,
                    663
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 24
                    },
                    "start": {
                      "column": 4,
                      "line": 24
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 22
                  },
                  "start": {
                    "column": 24,
                    "line": 22
                  }
                },
                "range": [
                  591,
                  600
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "range": [
                        592,
                        599
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 22
                        },
                        "start": {
                          "column": 25,
                          "line": 22
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      592,
                      599
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 22
                      },
                      "start": {
                        "column": 25,
                        "line": 22
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 6,
                  "line": 25
                },
                "start": {
                  "column": 24,
                  "line": 22
                }
              }
            },
            "range": [
              569,
              671
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 18,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thenable",
        "optional": false,
        "range": [
          166,
          174
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 9
          },
          "start": {
            "column": 14,
            "line": 9
          }
        },
        "range": [
          174,
          177
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
                175,
                176
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
            "out": false,
            "range": [
              175,
              176
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
          }
        ]
      },
      "range": [
        160,
        673
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
