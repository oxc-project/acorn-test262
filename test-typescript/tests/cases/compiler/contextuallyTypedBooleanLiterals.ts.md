__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    528
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "range": [
          27,
          30
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
              "name": "get",
              "optional": false,
              "range": [
                42,
                45
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                45,
                54
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  },
                  "range": [
                    50,
                    54
                  ],
                  "typeAnnotation": {
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
                          "column": 16,
                          "line": 4
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      53,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  47,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              42,
              55
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "range": [
                60,
                63
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              },
              "range": [
                63,
                83
              ],
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
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      },
                      "range": [
                        71,
                        74
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            73,
                            74
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 5
                            },
                            "start": {
                              "column": 17,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          73,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 5
                          },
                          "start": {
                            "column": 17,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      66,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 10,
                        "line": 5
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 20,
                      "line": 5
                    }
                  },
                  "range": [
                    76,
                    83
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      79,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  65,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 5
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              60,
              83
            ],
            "loc": {
              "end": {
                "column": 27,
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
          36,
          85
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 8,
            "line": 3
          }
        },
        "range": [
          30,
          33
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
                31,
                32
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              31,
              32
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        85
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "box",
        "optional": false,
        "range": [
          104,
          107
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 8
          }
        }
      },
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
                "column": 32,
                "line": 8
              },
              "start": {
                "column": 29,
                "line": 8
              }
            },
            "range": [
              116,
              119
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  118,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
                    "line": 8
                  }
                }
              },
              "range": [
                118,
                119
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 8
                },
                "start": {
                  "column": 31,
                  "line": 8
                }
              }
            }
          },
          "range": [
            111,
            119
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 8
            },
            "start": {
              "column": 24,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 8
          },
          "start": {
            "column": 33,
            "line": 8
          }
        },
        "range": [
          120,
          128
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              125,
              128
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
                    126,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 8
                    },
                    "start": {
                      "column": 39,
                      "line": 8
                    }
                  }
                },
                "range": [
                  126,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 8
                  },
                  "start": {
                    "column": 39,
                    "line": 8
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 8
              },
              "start": {
                "column": 38,
                "line": 8
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "range": [
              122,
              125
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 8
              },
              "start": {
                "column": 35,
                "line": 8
              }
            }
          },
          "range": [
            122,
            128
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 8
            },
            "start": {
              "column": 35,
              "line": 8
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 8
          },
          "start": {
            "column": 20,
            "line": 8
          }
        },
        "range": [
          107,
          110
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
                108,
                109
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              108,
              109
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        87,
        129
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "bn1",
            "optional": false,
            "range": [
              137,
              140
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  147,
                  148
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
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "range": [
                143,
                146
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 10
                }
              }
            },
            "optional": false,
            "range": [
              143,
              149
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          },
          "range": [
            137,
            149
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        131,
        150
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "bn2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              },
              "range": [
                176,
                189
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    181,
                    189
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        182,
                        188
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "range": [
                    178,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 11
                    },
                    "start": {
                      "column": 11,
                      "line": 11
                    }
                  }
                },
                "range": [
                  178,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              173,
              189
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  196,
                  197
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "range": [
                192,
                195
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 11
                },
                "start": {
                  "column": 25,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              192,
              198
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 11
              },
              "start": {
                "column": 25,
                "line": 11
              }
            }
          },
          "range": [
            173,
            198
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 11
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
        167,
        199
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 11
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
            "name": "bb1",
            "optional": false,
            "range": [
              214,
              217
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  224,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 13
                  },
                  "start": {
                    "column": 16,
                    "line": 13
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "range": [
                220,
                223
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 12,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              220,
              230
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
            214,
            230
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        208,
        231
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "bb2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              },
              "range": [
                258,
                272
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    263,
                    272
                  ],
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "range": [
                        264,
                        271
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 14
                    },
                    "start": {
                      "column": 14,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "range": [
                    260,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  260,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 23,
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
              255,
              272
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  279,
                  284
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 14
                  },
                  "start": {
                    "column": 30,
                    "line": 14
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "range": [
                275,
                278
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 26,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              275,
              285
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 14
              },
              "start": {
                "column": 26,
                "line": 14
              }
            }
          },
          "range": [
            255,
            285
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        249,
        286
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          387,
          418
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 7,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              },
              "range": [
                393,
                396
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    395,
                    396
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
                "range": [
                  395,
                  396
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
              }
            },
            "range": [
              391,
              397
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                      "column": 11,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  },
                  "range": [
                    406,
                    409
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        408,
                        409
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 21
                        },
                        "start": {
                          "column": 10,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      408,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 21
                      },
                      "start": {
                        "column": 10,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  401,
                  409
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 21
                  },
                  "start": {
                    "column": 3,
                    "line": 21
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              },
              "range": [
                410,
                415
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  412,
                  415
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 21
                  },
                  "start": {
                    "column": 14,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              400,
              416
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Observable",
        "optional": false,
        "range": [
          373,
          383
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 18
          },
          "start": {
            "column": 20,
            "line": 18
          }
        },
        "range": [
          383,
          386
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
                384,
                385
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 21,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              384,
              385
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 21,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        363,
        418
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 18
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
        "name": "observable",
        "optional": false,
        "range": [
          437,
          447
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 24
          },
          "start": {
            "column": 17,
            "line": 24
          }
        }
      },
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
                "column": 39,
                "line": 24
              },
              "start": {
                "column": 36,
                "line": 24
              }
            },
            "range": [
              456,
              459
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  458,
                  459
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 24
                  },
                  "start": {
                    "column": 38,
                    "line": 24
                  }
                }
              },
              "range": [
                458,
                459
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 24
                },
                "start": {
                  "column": 38,
                  "line": 24
                }
              }
            }
          },
          "range": [
            451,
            459
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 24
            },
            "start": {
              "column": 31,
              "line": 24
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 55,
            "line": 24
          },
          "start": {
            "column": 40,
            "line": 24
          }
        },
        "range": [
          460,
          475
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              472,
              475
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
                    473,
                    474
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 24
                    },
                    "start": {
                      "column": 53,
                      "line": 24
                    }
                  }
                },
                "range": [
                  473,
                  474
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 24
                  },
                  "start": {
                    "column": 53,
                    "line": 24
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 24
              },
              "start": {
                "column": 52,
                "line": 24
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "range": [
              462,
              472
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 24
              },
              "start": {
                "column": 42,
                "line": 24
              }
            }
          },
          "range": [
            462,
            475
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 24
            },
            "start": {
              "column": 42,
              "line": 24
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 24
          },
          "start": {
            "column": 27,
            "line": 24
          }
        },
        "range": [
          447,
          450
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
                448,
                449
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 24
                },
                "start": {
                  "column": 28,
                  "line": 24
                }
              }
            },
            "out": false,
            "range": [
              448,
              449
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 24
              },
              "start": {
                "column": 28,
                "line": 24
              }
            }
          }
        ]
      },
      "range": [
        420,
        476
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
                  "column": 28,
                  "line": 26
                },
                "start": {
                  "column": 7,
                  "line": 26
                }
              },
              "range": [
                485,
                506
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    497,
                    506
                  ],
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "range": [
                        498,
                        505
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 26
                        },
                        "start": {
                          "column": 20,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 26
                    },
                    "start": {
                      "column": 19,
                      "line": 26
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "range": [
                    487,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 26
                    },
                    "start": {
                      "column": 9,
                      "line": 26
                    }
                  }
                },
                "range": [
                  487,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 26
                  },
                  "start": {
                    "column": 9,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              484,
              506
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  520,
                  525
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 26
                  },
                  "start": {
                    "column": 42,
                    "line": 26
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "observable",
              "optional": false,
              "range": [
                509,
                519
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 26
                },
                "start": {
                  "column": 31,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              509,
              526
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 26
              },
              "start": {
                "column": 31,
                "line": 26
              }
            }
          },
          "range": [
            484,
            526
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        478,
        527
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
