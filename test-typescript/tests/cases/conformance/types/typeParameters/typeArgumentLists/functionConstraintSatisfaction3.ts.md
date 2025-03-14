__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    65,
    795
  ],
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
                129,
                130
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 3
                },
                "start": {
                  "column": 64,
                  "line": 3
                }
              }
            },
            "range": [
              122,
              131
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 3
              },
              "start": {
                "column": 57,
                "line": 3
              }
            }
          }
        ],
        "range": [
          120,
          133
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 3
          },
          "start": {
            "column": 55,
            "line": 3
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
          74,
          77
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
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
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 47,
                "line": 3
              }
            },
            "range": [
              112,
              115
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  114,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 49,
                    "line": 3
                  }
                }
              },
              "range": [
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 49,
                  "line": 3
                }
              }
            }
          },
          "range": [
            111,
            115
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 3
            },
            "start": {
              "column": 46,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 54,
            "line": 3
          },
          "start": {
            "column": 51,
            "line": 3
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
                "column": 54,
                "line": 3
              },
              "start": {
                "column": 53,
                "line": 3
              }
            }
          },
          "range": [
            118,
            119
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 3
            },
            "start": {
              "column": 53,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 45,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          77,
          110
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
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
                        "column": 33,
                        "line": 3
                      },
                      "start": {
                        "column": 25,
                        "line": 3
                      }
                    },
                    "range": [
                      90,
                      98
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        92,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 3
                        },
                        "start": {
                          "column": 27,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    89,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                },
                "range": [
                  100,
                  109
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    103,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 3
                    },
                    "start": {
                      "column": 38,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                88,
                109
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 23,
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
                78,
                79
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
            "out": false,
            "range": [
              78,
              109
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        65,
        133
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          147,
          166
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              },
              "range": [
                155,
                163
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  157,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              153,
              164
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 12,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          145,
          146
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        135,
        166
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 8
                },
                "start": {
                  "column": 5,
                  "line": 8
                }
              },
              "range": [
                172,
                175
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    174,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 8
                    },
                    "start": {
                      "column": 7,
                      "line": 8
                    }
                  }
                },
                "range": [
                  174,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 8
                  },
                  "start": {
                    "column": 7,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              171,
              175
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            171,
            175
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        167,
        176
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          186,
          206
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
              "name": "foo",
              "optional": false,
              "range": [
                192,
                195
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 7,
                  "line": 11
                }
              },
              "range": [
                195,
                203
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  197,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              }
            },
            "value": null,
            "range": [
              192,
              204
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 8,
            "line": 10
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
          184,
          185
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        178,
        206
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                213,
                229
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      },
                      "range": [
                        219,
                        227
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          221,
                          227
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
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
                      217,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  215,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              212,
              229
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            212,
            229
          ],
          "loc": {
            "end": {
              "column": 21,
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
        208,
        230
      ],
      "loc": {
        "end": {
          "column": 22,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 15
                },
                "start": {
                  "column": 5,
                  "line": 15
                }
              },
              "range": [
                236,
                256
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      },
                      "range": [
                        246,
                        254
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          248,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 15
                          },
                          "start": {
                            "column": 17,
                            "line": 15
                          }
                        }
                      }
                    },
                    "range": [
                      240,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  238,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 15
                  },
                  "start": {
                    "column": 7,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              235,
              256
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            235,
            256
          ],
          "loc": {
            "end": {
              "column": 25,
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
        231,
        257
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 15
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 16
                },
                "start": {
                  "column": 5,
                  "line": 16
                }
              },
              "range": [
                263,
                292
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 11,
                          "line": 16
                        }
                      },
                      "range": [
                        269,
                        277
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          271,
                          277
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 16
                          },
                          "start": {
                            "column": 13,
                            "line": 16
                          }
                        }
                      }
                    },
                    "range": [
                      267,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          280,
                          281
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 16
                          },
                          "start": {
                            "column": 22,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 16
                        },
                        "start": {
                          "column": 24,
                          "line": 16
                        }
                      },
                      "range": [
                        282,
                        290
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          284,
                          290
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 16
                          },
                          "start": {
                            "column": 26,
                            "line": 16
                          }
                        }
                      }
                    },
                    "range": [
                      279,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 16
                      },
                      "start": {
                        "column": 21,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  265,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 16
                  },
                  "start": {
                    "column": 7,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              262,
              292
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            262,
            292
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        258,
        293
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "r1",
            "optional": false,
            "range": [
              299,
              301
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    315,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 18
                    },
                    "start": {
                      "column": 20,
                      "line": 18
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      309,
                      310
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 18
                      },
                      "start": {
                        "column": 14,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  308,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 18
                  },
                  "start": {
                    "column": 13,
                    "line": 18
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
                304,
                307
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              304,
              317
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            299,
            317
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        295,
        318
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
              323,
              325
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    347,
                    348
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 19
                    },
                    "start": {
                      "column": 28,
                      "line": 19
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 19
                        },
                        "start": {
                          "column": 15,
                          "line": 19
                        }
                      },
                      "range": [
                        334,
                        342
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          336,
                          342
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 19
                          },
                          "start": {
                            "column": 17,
                            "line": 19
                          }
                        }
                      }
                    },
                    "range": [
                      333,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 19
                      },
                      "start": {
                        "column": 14,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  332,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 19
                  },
                  "start": {
                    "column": 13,
                    "line": 19
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
                328,
                331
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              328,
              349
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 9,
                "line": 19
              }
            }
          },
          "range": [
            323,
            349
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        319,
        350
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "r3",
            "optional": false,
            "range": [
              355,
              357
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "FunctionExpression",
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
                          386,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 20
                          },
                          "start": {
                            "column": 35,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        379,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 20
                        },
                        "start": {
                          "column": 28,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    377,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 20
                    },
                    "start": {
                      "column": 26,
                      "line": 20
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
                    "range": [
                      374,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 20
                      },
                      "start": {
                        "column": 23,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  364,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 20
                  },
                  "start": {
                    "column": 13,
                    "line": 20
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
                360,
                363
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              360,
              390
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 20
              },
              "start": {
                "column": 9,
                "line": 20
              }
            }
          },
          "range": [
            355,
            390
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        351,
        391
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "r4",
            "optional": false,
            "range": [
              396,
              398
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "FunctionExpression",
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
                          435,
                          436
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 21
                          },
                          "start": {
                            "column": 43,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        428,
                        436
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 21
                        },
                        "start": {
                          "column": 36,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    426,
                    438
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 21
                    },
                    "start": {
                      "column": 34,
                      "line": 21
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
                          "column": 32,
                          "line": 21
                        },
                        "start": {
                          "column": 24,
                          "line": 21
                        }
                      },
                      "range": [
                        416,
                        424
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          418,
                          424
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 21
                          },
                          "start": {
                            "column": 26,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      415,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 21
                      },
                      "start": {
                        "column": 23,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  405,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 21
                  },
                  "start": {
                    "column": 13,
                    "line": 21
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
                401,
                404
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              401,
              439
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          },
          "range": [
            396,
            439
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        392,
        440
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 21
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
            "name": "r5",
            "optional": false,
            "range": [
              445,
              447
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  454,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 22
                  },
                  "start": {
                    "column": 13,
                    "line": 22
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
                450,
                453
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              450,
              456
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "range": [
            445,
            456
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        441,
        457
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "r8",
            "optional": false,
            "range": [
              462,
              464
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  471,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 23
                  },
                  "start": {
                    "column": 13,
                    "line": 23
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
                467,
                470
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              467,
              473
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
            462,
            473
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        458,
        474
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          492,
          510
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                      "column": 9,
                      "line": 26
                    },
                    "start": {
                      "column": 6,
                      "line": 26
                    }
                  },
                  "range": [
                    500,
                    503
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        502,
                        503
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      502,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  }
                },
                "range": [
                  499,
                  503
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 26
                  },
                  "start": {
                    "column": 5,
                    "line": 26
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
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
                504,
                507
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    506,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 26
                    },
                    "start": {
                      "column": 12,
                      "line": 26
                    }
                  }
                },
                "range": [
                  506,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              498,
              508
            ],
            "loc": {
              "end": {
                "column": 14,
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
            "column": 16,
            "line": 25
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "range": [
          486,
          488
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 25
          },
          "start": {
            "column": 10,
            "line": 25
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 25
          },
          "start": {
            "column": 12,
            "line": 25
          }
        },
        "range": [
          488,
          491
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
                489,
                490
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 25
                },
                "start": {
                  "column": 13,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              489,
              490
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 25
              },
              "start": {
                "column": 13,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        476,
        510
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 28
                },
                "start": {
                  "column": 6,
                  "line": 28
                }
              },
              "range": [
                517,
                529
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    521,
                    529
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        522,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 28
                        },
                        "start": {
                          "column": 11,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 28
                    },
                    "start": {
                      "column": 10,
                      "line": 28
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "range": [
                    519,
                    521
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                "range": [
                  519,
                  529
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              515,
              529
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": null,
          "range": [
            515,
            529
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        511,
        530
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          544,
          559
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
              "name": "foo",
              "optional": false,
              "range": [
                550,
                553
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 31
                },
                "start": {
                  "column": 7,
                  "line": 31
                }
              },
              "range": [
                553,
                556
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    555,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 31
                    },
                    "start": {
                      "column": 9,
                      "line": 31
                    }
                  }
                },
                "range": [
                  555,
                  556
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 31
                  },
                  "start": {
                    "column": 9,
                    "line": 31
                  }
                }
              }
            },
            "value": null,
            "range": [
              550,
              557
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 12,
            "line": 30
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          538,
          540
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 30
          },
          "start": {
            "column": 6,
            "line": 30
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 30
          },
          "start": {
            "column": 8,
            "line": 30
          }
        },
        "range": [
          540,
          543
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
                541,
                542
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "out": false,
            "range": [
              541,
              542
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 30
              },
              "start": {
                "column": 9,
                "line": 30
              }
            }
          }
        ]
      },
      "range": [
        532,
        559
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 30
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 34
                },
                "start": {
                  "column": 6,
                  "line": 34
                }
              },
              "range": [
                567,
                585
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 18,
                              "line": 34
                            },
                            "start": {
                              "column": 15,
                              "line": 34
                            }
                          },
                          "range": [
                            576,
                            579
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                578,
                                579
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 34
                                },
                                "start": {
                                  "column": 17,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              578,
                              579
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 34
                              },
                              "start": {
                                "column": 17,
                                "line": 34
                              }
                            }
                          }
                        },
                        "range": [
                          575,
                          579
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 34
                          },
                          "start": {
                            "column": 14,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 34
                        },
                        "start": {
                          "column": 19,
                          "line": 34
                        }
                      },
                      "range": [
                        580,
                        583
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            582,
                            583
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 34
                            },
                            "start": {
                              "column": 21,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          582,
                          583
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 34
                          },
                          "start": {
                            "column": 21,
                            "line": 34
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 34
                        },
                        "start": {
                          "column": 10,
                          "line": 34
                        }
                      },
                      "range": [
                        571,
                        574
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
                              572,
                              573
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 34
                              },
                              "start": {
                                "column": 11,
                                "line": 34
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            572,
                            573
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 34
                            },
                            "start": {
                              "column": 11,
                              "line": 34
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      571,
                      583
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 34
                      },
                      "start": {
                        "column": 10,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  569,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              565,
              585
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          "init": null,
          "range": [
            565,
            585
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        561,
        586
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 35
                },
                "start": {
                  "column": 6,
                  "line": 35
                }
              },
              "range": [
                593,
                615
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                              "column": 22,
                              "line": 35
                            },
                            "start": {
                              "column": 19,
                              "line": 35
                            }
                          },
                          "range": [
                            606,
                            609
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                608,
                                609
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 35
                                },
                                "start": {
                                  "column": 21,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              608,
                              609
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 35
                              },
                              "start": {
                                "column": 21,
                                "line": 35
                              }
                            }
                          }
                        },
                        "range": [
                          605,
                          609
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 35
                          },
                          "start": {
                            "column": 18,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 35
                        },
                        "start": {
                          "column": 23,
                          "line": 35
                        }
                      },
                      "range": [
                        610,
                        613
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            612,
                            613
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 35
                            },
                            "start": {
                              "column": 25,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          612,
                          613
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 35
                          },
                          "start": {
                            "column": 25,
                            "line": 35
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 35
                        },
                        "start": {
                          "column": 14,
                          "line": 35
                        }
                      },
                      "range": [
                        601,
                        604
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
                              602,
                              603
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 35
                              },
                              "start": {
                                "column": 15,
                                "line": 35
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            602,
                            603
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 35
                            },
                            "start": {
                              "column": 15,
                              "line": 35
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      597,
                      613
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 35
                      },
                      "start": {
                        "column": 10,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  595,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              591,
              615
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "init": null,
          "range": [
            591,
            615
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        587,
        616
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 36
                },
                "start": {
                  "column": 6,
                  "line": 36
                }
              },
              "range": [
                623,
                661
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 18,
                              "line": 36
                            },
                            "start": {
                              "column": 15,
                              "line": 36
                            }
                          },
                          "range": [
                            632,
                            635
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                634,
                                635
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 36
                                },
                                "start": {
                                  "column": 17,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              634,
                              635
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 36
                              },
                              "start": {
                                "column": 17,
                                "line": 36
                              }
                            }
                          }
                        },
                        "range": [
                          631,
                          635
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 36
                          },
                          "start": {
                            "column": 14,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 36
                        },
                        "start": {
                          "column": 19,
                          "line": 36
                        }
                      },
                      "range": [
                        636,
                        639
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            638,
                            639
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 36
                            },
                            "start": {
                              "column": 21,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          638,
                          639
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 36
                          },
                          "start": {
                            "column": 21,
                            "line": 36
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 36
                        },
                        "start": {
                          "column": 10,
                          "line": 36
                        }
                      },
                      "range": [
                        627,
                        630
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
                              628,
                              629
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 36
                              },
                              "start": {
                                "column": 11,
                                "line": 36
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            628,
                            629
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 36
                            },
                            "start": {
                              "column": 11,
                              "line": 36
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      627,
                      640
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 36
                      },
                      "start": {
                        "column": 10,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 32,
                              "line": 36
                            },
                            "start": {
                              "column": 29,
                              "line": 36
                            }
                          },
                          "range": [
                            646,
                            649
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                648,
                                649
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 36
                                },
                                "start": {
                                  "column": 31,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              648,
                              649
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 36
                              },
                              "start": {
                                "column": 31,
                                "line": 36
                              }
                            }
                          }
                        },
                        "range": [
                          645,
                          649
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 36
                          },
                          "start": {
                            "column": 28,
                            "line": 36
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
                              "column": 38,
                              "line": 36
                            },
                            "start": {
                              "column": 35,
                              "line": 36
                            }
                          },
                          "range": [
                            652,
                            655
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                654,
                                655
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 36
                                },
                                "start": {
                                  "column": 37,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              654,
                              655
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 36
                              },
                              "start": {
                                "column": 37,
                                "line": 36
                              }
                            }
                          }
                        },
                        "range": [
                          651,
                          655
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 36
                          },
                          "start": {
                            "column": 34,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 36
                        },
                        "start": {
                          "column": 39,
                          "line": 36
                        }
                      },
                      "range": [
                        656,
                        659
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            658,
                            659
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 36
                            },
                            "start": {
                              "column": 41,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          658,
                          659
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 36
                          },
                          "start": {
                            "column": 41,
                            "line": 36
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 36
                        },
                        "start": {
                          "column": 24,
                          "line": 36
                        }
                      },
                      "range": [
                        641,
                        644
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
                              642,
                              643
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 36
                              },
                              "start": {
                                "column": 25,
                                "line": 36
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            642,
                            643
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 36
                            },
                            "start": {
                              "column": 25,
                              "line": 36
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      641,
                      659
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 36
                      },
                      "start": {
                        "column": 24,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  625,
                  661
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              621,
              661
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "init": null,
          "range": [
            621,
            661
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        617,
        662
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "r9",
            "optional": false,
            "range": [
              668,
              670
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "FunctionExpression",
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
                          705,
                          706
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 38
                          },
                          "start": {
                            "column": 41,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        698,
                        707
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 38
                        },
                        "start": {
                          "column": 34,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "range": [
                    696,
                    709
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 38
                    },
                    "start": {
                      "column": 32,
                      "line": 38
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
                          "column": 30,
                          "line": 38
                        },
                        "start": {
                          "column": 27,
                          "line": 38
                        }
                      },
                      "range": [
                        691,
                        694
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            693,
                            694
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 38
                            },
                            "start": {
                              "column": 29,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          693,
                          694
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 38
                          },
                          "start": {
                            "column": 29,
                            "line": 38
                          }
                        }
                      }
                    },
                    "range": [
                      690,
                      694
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 38
                      },
                      "start": {
                        "column": 26,
                        "line": 38
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 38
                    },
                    "start": {
                      "column": 22,
                      "line": 38
                    }
                  },
                  "range": [
                    686,
                    689
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
                          687,
                          688
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 38
                          },
                          "start": {
                            "column": 23,
                            "line": 38
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        687,
                        688
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 38
                        },
                        "start": {
                          "column": 23,
                          "line": 38
                        }
                      }
                    }
                  ]
                },
                "range": [
                  677,
                  709
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 38
                  },
                  "start": {
                    "column": 13,
                    "line": 38
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
                673,
                676
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 38
                },
                "start": {
                  "column": 9,
                  "line": 38
                }
              }
            },
            "optional": false,
            "range": [
              673,
              710
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 38
              },
              "start": {
                "column": 9,
                "line": 38
              }
            }
          },
          "range": [
            668,
            710
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 38
            },
            "start": {
              "column": 4,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        664,
        711
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "r10",
            "optional": false,
            "range": [
              716,
              719
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    754,
                    755
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 39
                    },
                    "start": {
                      "column": 42,
                      "line": 39
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 39
                        },
                        "start": {
                          "column": 34,
                          "line": 39
                        }
                      },
                      "range": [
                        746,
                        749
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            748,
                            749
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 39
                            },
                            "start": {
                              "column": 36,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          748,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 39
                          },
                          "start": {
                            "column": 36,
                            "line": 39
                          }
                        }
                      }
                    },
                    "range": [
                      745,
                      749
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 39
                      },
                      "start": {
                        "column": 33,
                        "line": 39
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 39
                    },
                    "start": {
                      "column": 14,
                      "line": 39
                    }
                  },
                  "range": [
                    726,
                    744
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSStringKeyword",
                        "range": [
                          737,
                          743
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 39
                          },
                          "start": {
                            "column": 25,
                            "line": 39
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
                          727,
                          728
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 39
                          },
                          "start": {
                            "column": 15,
                            "line": 39
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        727,
                        743
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 39
                        },
                        "start": {
                          "column": 15,
                          "line": 39
                        }
                      }
                    }
                  ]
                },
                "range": [
                  726,
                  755
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 39
                  },
                  "start": {
                    "column": 14,
                    "line": 39
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
                722,
                725
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 39
                },
                "start": {
                  "column": 10,
                  "line": 39
                }
              }
            },
            "optional": false,
            "range": [
              722,
              756
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 39
              },
              "start": {
                "column": 10,
                "line": 39
              }
            }
          },
          "range": [
            716,
            756
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 39
            },
            "start": {
              "column": 4,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        712,
        757
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 39
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
            "name": "r12",
            "optional": false,
            "range": [
              762,
              765
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "range": [
                  772,
                  774
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 40
                  },
                  "start": {
                    "column": 14,
                    "line": 40
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
                768,
                771
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 40
                },
                "start": {
                  "column": 10,
                  "line": 40
                }
              }
            },
            "optional": false,
            "range": [
              768,
              775
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 40
              },
              "start": {
                "column": 10,
                "line": 40
              }
            }
          },
          "range": [
            762,
            775
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        758,
        776
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "r15",
            "optional": false,
            "range": [
              781,
              784
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "range": [
                  791,
                  793
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 41
                  },
                  "start": {
                    "column": 14,
                    "line": 41
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
                787,
                790
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 41
                },
                "start": {
                  "column": 10,
                  "line": 41
                }
              }
            },
            "optional": false,
            "range": [
              787,
              794
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 41
              },
              "start": {
                "column": 10,
                "line": 41
              }
            }
          },
          "range": [
            781,
            794
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 41
            },
            "start": {
              "column": 4,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        777,
        795
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 18,
      "line": 41
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
