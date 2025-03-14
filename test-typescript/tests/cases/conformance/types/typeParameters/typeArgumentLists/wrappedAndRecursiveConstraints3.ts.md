__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    327
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          61,
          219
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                67,
                78
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                78,
                88
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  85,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 22,
                    "line": 4
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 4
                      },
                      "start": {
                        "column": 17,
                        "line": 4
                      }
                    },
                    "range": [
                      80,
                      83
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
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
                            "column": 20,
                            "line": 4
                          },
                          "start": {
                            "column": 19,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        82,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 4
                        },
                        "start": {
                          "column": 19,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    79,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              67,
              88
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
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
                93,
                96
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                96,
                217
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              179,
                              180
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 7
                              },
                              "start": {
                                "column": 19,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            172,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        158,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 40,
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
                      "name": "bar",
                      "optional": false,
                      "range": [
                        135,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 6
                        },
                        "start": {
                          "column": 17,
                          "line": 6
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
                              "column": 38,
                              "line": 6
                            },
                            "start": {
                              "column": 35,
                              "line": 6
                            }
                          },
                          "range": [
                            153,
                            156
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "range": [
                                155,
                                156
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 6
                                },
                                "start": {
                                  "column": 37,
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
                                "column": 38,
                                "line": 6
                              },
                              "start": {
                                "column": 37,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          152,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 6
                          },
                          "start": {
                            "column": 34,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
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
                        138,
                        151
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
                              "name": "U",
                              "optional": false,
                              "range": [
                                149,
                                150
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 6
                                },
                                "start": {
                                  "column": 31,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              149,
                              150
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 6
                              },
                              "start": {
                                "column": 31,
                                "line": 6
                              }
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              139,
                              140
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 6
                              },
                              "start": {
                                "column": 21,
                                "line": 6
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            139,
                            150
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 21,
                              "line": 6
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      126,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        207,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      200,
                      211
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  116,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 5
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 5
                      },
                      "start": {
                        "column": 22,
                        "line": 5
                      }
                    },
                    "range": [
                      111,
                      114
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          113,
                          114
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
                        113,
                        114
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
                  },
                  "range": [
                    110,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 21,
                      "line": 5
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                },
                "range": [
                  96,
                  109
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
                        "name": "T",
                        "optional": false,
                        "range": [
                          107,
                          108
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 5
                          },
                          "start": {
                            "column": 18,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        107,
                        108
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 5
                        },
                        "start": {
                          "column": 18,
                          "line": 5
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        97,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      97,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              }
            },
            "range": [
              93,
              217
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 38,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
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
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        },
        "range": [
          30,
          60
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
                    "name": "length",
                    "optional": false,
                    "range": [
                      43,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 20,
                        "line": 3
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
                        "column": 34,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
                        "line": 3
                      }
                    },
                    "range": [
                      49,
                      57
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        51,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 3
                        },
                        "start": {
                          "column": 28,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    43,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 3
                    },
                    "start": {
                      "column": 20,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                41,
                59
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
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
                31,
                32
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              31,
              59
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        23,
        219
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "name": "c",
            "optional": false,
            "range": [
              225,
              226
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "NewExpression",
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
                      "name": "length",
                      "optional": false,
                      "range": [
                        237,
                        243
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 13
                        },
                        "start": {
                          "column": 16,
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
                      "raw": "2",
                      "value": 2,
                      "range": [
                        245,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 13
                        },
                        "start": {
                          "column": 24,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      237,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 16,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  235,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 13
                  },
                  "start": {
                    "column": 14,
                    "line": 13
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                233,
                234
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 12,
                  "line": 13
                }
              }
            },
            "range": [
              229,
              249
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          },
          "range": [
            225,
            249
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        221,
        250
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "r",
            "optional": false,
            "range": [
              255,
              256
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                      "name": "length",
                      "optional": false,
                      "range": [
                        267,
                        273
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 14
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
                        275,
                        276
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 14
                        },
                        "start": {
                          "column": 24,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      267,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 16,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "charAt",
                      "optional": false,
                      "range": [
                        278,
                        284
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 14
                        },
                        "start": {
                          "column": 27,
                          "line": 14
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
                            "directive": "",
                            "expression": {
                              "type": "Literal",
                              "raw": "''",
                              "value": "",
                              "range": [
                                303,
                                305
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 14
                                },
                                "start": {
                                  "column": 52,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              303,
                              305
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 14
                              },
                              "start": {
                                "column": 52,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          301,
                          307
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 14
                          },
                          "start": {
                            "column": 50,
                            "line": 14
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 14
                              },
                              "start": {
                                "column": 37,
                                "line": 14
                              }
                            },
                            "range": [
                              288,
                              296
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                290,
                                296
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 14
                                },
                                "start": {
                                  "column": 39,
                                  "line": 14
                                }
                              }
                            }
                          },
                          "range": [
                            287,
                            296
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 14
                            },
                            "start": {
                              "column": 36,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        286,
                        307
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 14
                        },
                        "start": {
                          "column": 35,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      278,
                      307
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 14
                      },
                      "start": {
                        "column": 27,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  265,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 14
                  },
                  "start": {
                    "column": 14,
                    "line": 14
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
                "name": "c",
                "optional": false,
                "range": [
                  259,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  261,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              },
              "range": [
                259,
                264
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              259,
              310
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          },
          "range": [
            255,
            310
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        251,
        311
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 14
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
            "name": "r2",
            "optional": false,
            "range": [
              316,
              318
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  323,
                  325
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "range": [
                321,
                322
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              321,
              326
            ],
            "loc": {
              "end": {
                "column": 14,
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
            326
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        312,
        327
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 15,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
