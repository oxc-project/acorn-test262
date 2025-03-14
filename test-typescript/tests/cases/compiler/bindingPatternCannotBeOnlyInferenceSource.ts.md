__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1102
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
        "name": "f",
        "optional": false,
        "range": [
          17,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        },
        "range": [
          23,
          26
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              25,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          },
          "range": [
            25,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        },
        "range": [
          18,
          21
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
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              19,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
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
            "type": "ObjectPattern",
            "decorators": [],
            "optional": false,
            "properties": [],
            "range": [
              34,
              36
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                39,
                40
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
            "range": [
              39,
              42
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          },
          "range": [
            34,
            42
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        28,
        43
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "type": "ObjectPattern",
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "range": [
                    94,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "range": [
                    94,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "range": [
                  94,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              92,
              98
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                101,
                102
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
            "optional": false,
            "range": [
              101,
              104
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          },
          "range": [
            92,
            104
          ],
          "loc": {
            "end": {
              "column": 18,
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
        86,
        105
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [],
            "optional": false,
            "range": [
              123,
              125
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                128,
                129
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "optional": false,
            "range": [
              128,
              131
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          },
          "range": [
            123,
            131
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        117,
        132
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e1",
                "optional": false,
                "range": [
                  155,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e2",
                "optional": false,
                "range": [
                  159,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              }
            ],
            "optional": false,
            "range": [
              154,
              162
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                165,
                166
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
            "optional": false,
            "range": [
              165,
              168
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 5
              },
              "start": {
                "column": 17,
                "line": 5
              }
            }
          },
          "range": [
            154,
            168
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        148,
        169
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dispatch",
        "optional": false,
        "range": [
          206,
          214
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 8
                    },
                    "start": {
                      "column": 84,
                      "line": 8
                    }
                  },
                  "range": [
                    285,
                    288
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
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
                          "column": 87,
                          "line": 8
                        },
                        "start": {
                          "column": 86,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      287,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 8
                      },
                      "start": {
                        "column": 86,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  279,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 8
                  },
                  "start": {
                    "column": 78,
                    "line": 8
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 91,
                  "line": 8
                },
                "start": {
                  "column": 88,
                  "line": 8
                }
              },
              "range": [
                289,
                292
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    291,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 8
                    },
                    "start": {
                      "column": 90,
                      "line": 8
                    }
                  }
                },
                "range": [
                  291,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 8
                  },
                  "start": {
                    "column": 90,
                    "line": 8
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 77,
                  "line": 8
                },
                "start": {
                  "column": 64,
                  "line": 8
                }
              },
              "range": [
                265,
                278
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
                      "name": "A",
                      "optional": false,
                      "range": [
                        276,
                        277
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 8
                        },
                        "start": {
                          "column": 75,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      276,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 8
                      },
                      "start": {
                        "column": 75,
                        "line": 8
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
                      266,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 8
                      },
                      "start": {
                        "column": 65,
                        "line": 8
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    266,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 8
                    },
                    "start": {
                      "column": 65,
                      "line": 8
                    }
                  }
                }
              ]
            },
            "range": [
              265,
              292
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 8
              },
              "start": {
                "column": 64,
                "line": 8
              }
            }
          }
        ],
        "range": [
          263,
          294
        ],
        "loc": {
          "end": {
            "column": 93,
            "line": 8
          },
          "start": {
            "column": 62,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 59,
            "line": 8
          },
          "start": {
            "column": 13,
            "line": 8
          }
        },
        "range": [
          214,
          260
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      221,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
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
                        "line": 8
                      },
                      "start": {
                        "column": 24,
                        "line": 8
                      }
                    },
                    "range": [
                      225,
                      230
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        227,
                        230
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 8
                        },
                        "start": {
                          "column": 26,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    221,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extraProps",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 8
                          },
                          "start": {
                            "column": 42,
                            "line": 8
                          }
                        },
                        "range": [
                          243,
                          251
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            245,
                            251
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 8
                            },
                            "start": {
                              "column": 44,
                              "line": 8
                            }
                          }
                        }
                      },
                      "range": [
                        233,
                        251
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 8
                        },
                        "start": {
                          "column": 32,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 8
                      },
                      "start": {
                        "column": 51,
                        "line": 8
                      }
                    },
                    "range": [
                      252,
                      257
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        254,
                        257
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 8
                        },
                        "start": {
                          "column": 53,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    232,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 8
                    },
                    "start": {
                      "column": 31,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                219,
                259
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                215,
                216
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              215,
              259
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        201,
        295
      ],
      "loc": {
        "end": {
          "column": 94,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFuncs",
        "optional": false,
        "range": [
          301,
          307
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 9
                    },
                    "start": {
                      "column": 29,
                      "line": 9
                    }
                  },
                  "range": [
                    325,
                    333
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      327,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 9
                      },
                      "start": {
                        "column": 31,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  322,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 9
                  },
                  "start": {
                    "column": 26,
                    "line": 9
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 59,
                  "line": 9
                },
                "start": {
                  "column": 38,
                  "line": 9
                }
              },
              "range": [
                334,
                355
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "range": [
                        340,
                        341
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 9
                        },
                        "start": {
                          "column": 44,
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
                          "column": 50,
                          "line": 9
                        },
                        "start": {
                          "column": 45,
                          "line": 9
                        }
                      },
                      "range": [
                        341,
                        346
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          343,
                          346
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 9
                          },
                          "start": {
                            "column": 47,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      337,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 9
                      },
                      "start": {
                        "column": 41,
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
                      "column": 52,
                      "line": 9
                    }
                  },
                  "range": [
                    348,
                    355
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      351,
                      355
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 9
                      },
                      "start": {
                        "column": 55,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  336,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 9
                  },
                  "start": {
                    "column": 40,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              312,
              355
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 9
              },
              "start": {
                "column": 16,
                "line": 9
              }
            }
          }
        ],
        "range": [
          310,
          357
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 9
          },
          "start": {
            "column": 14,
            "line": 9
          }
        }
      },
      "range": [
        296,
        358
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDestructuring",
        "optional": false,
        "range": [
          364,
          378
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
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
                424,
                425
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 10
                },
                "start": {
                  "column": 65,
                  "line": 10
                }
              }
            },
            "range": [
              424,
              425
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 10
              },
              "start": {
                "column": 65,
                "line": 10
              }
            }
          },
          "range": [
            418,
            425
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 10
            },
            "start": {
              "column": 59,
              "line": 10
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "range": [
            411,
            414
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 10
            },
            "start": {
              "column": 52,
              "line": 10
            }
          }
        },
        "nameType": null,
        "optional": true,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "range": [
                  433,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 10
                  },
                  "start": {
                    "column": 74,
                    "line": 10
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 10
                  },
                  "start": {
                    "column": 75,
                    "line": 10
                  }
                },
                "range": [
                  434,
                  454
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      446,
                      454
                    ],
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "range": [
                              449,
                              452
                            ],
                            "loc": {
                              "end": {
                                "column": 93,
                                "line": 10
                              },
                              "start": {
                                "column": 90,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            449,
                            452
                          ],
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 10
                            },
                            "start": {
                              "column": 90,
                              "line": 10
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
                              447,
                              448
                            ],
                            "loc": {
                              "end": {
                                "column": 89,
                                "line": 10
                              },
                              "start": {
                                "column": 88,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            447,
                            448
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 10
                            },
                            "start": {
                              "column": 88,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          447,
                          453
                        ],
                        "loc": {
                          "end": {
                            "column": 94,
                            "line": 10
                          },
                          "start": {
                            "column": 88,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 10
                      },
                      "start": {
                        "column": 87,
                        "line": 10
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "range": [
                      436,
                      446
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 10
                      },
                      "start": {
                        "column": 77,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    436,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 10
                    },
                    "start": {
                      "column": 77,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                430,
                454
              ],
              "loc": {
                "end": {
                  "column": 95,
                  "line": 10
                },
                "start": {
                  "column": 71,
                  "line": 10
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 104,
                "line": 10
              },
              "start": {
                "column": 97,
                "line": 10
              }
            },
            "range": [
              456,
              463
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                459,
                463
              ],
              "loc": {
                "end": {
                  "column": 104,
                  "line": 10
                },
                "start": {
                  "column": 100,
                  "line": 10
                }
              }
            }
          },
          "range": [
            429,
            463
          ],
          "loc": {
            "end": {
              "column": 104,
              "line": 10
            },
            "start": {
              "column": 70,
              "line": 10
            }
          }
        },
        "range": [
          399,
          465
        ],
        "loc": {
          "end": {
            "column": 106,
            "line": 10
          },
          "start": {
            "column": 40,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 10
          },
          "start": {
            "column": 19,
            "line": 10
          }
        },
        "range": [
          378,
          396
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
                "name": "IFuncs",
                "optional": false,
                "range": [
                  389,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 30,
                    "line": 10
                  }
                }
              },
              "range": [
                389,
                395
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 30,
                  "line": 10
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
                379,
                380
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 20,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              379,
              395
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        359,
        466
      ],
      "loc": {
        "end": {
          "column": 107,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Destructuring",
        "optional": false,
        "range": [
          472,
          485
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "dispatch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 92,
                  "line": 11
                },
                "start": {
                  "column": 77,
                  "line": 11
                }
              },
              "range": [
                544,
                559
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    554,
                    559
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        555,
                        558
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 11
                        },
                        "start": {
                          "column": 88,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 11
                    },
                    "start": {
                      "column": 87,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dispatch",
                  "optional": false,
                  "range": [
                    546,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 11
                    },
                    "start": {
                      "column": 79,
                      "line": 11
                    }
                  }
                },
                "range": [
                  546,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 11
                  },
                  "start": {
                    "column": 79,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              536,
              559
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 11
              },
              "start": {
                "column": 69,
                "line": 11
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "funcs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 102,
                  "line": 11
                },
                "start": {
                  "column": 99,
                  "line": 11
                }
              },
              "range": [
                566,
                569
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    568,
                    569
                  ],
                  "loc": {
                    "end": {
                      "column": 102,
                      "line": 11
                    },
                    "start": {
                      "column": 101,
                      "line": 11
                    }
                  }
                },
                "range": [
                  568,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 11
                  },
                  "start": {
                    "column": 101,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              561,
              569
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 11
              },
              "start": {
                "column": 94,
                "line": 11
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 108,
              "line": 11
            },
            "start": {
              "column": 104,
              "line": 11
            }
          },
          "range": [
            571,
            575
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                574,
                575
              ],
              "loc": {
                "end": {
                  "column": 108,
                  "line": 11
                },
                "start": {
                  "column": 107,
                  "line": 11
                }
              }
            },
            "range": [
              574,
              575
            ],
            "loc": {
              "end": {
                "column": 108,
                "line": 11
              },
              "start": {
                "column": 107,
                "line": 11
              }
            }
          }
        },
        "range": [
          535,
          575
        ],
        "loc": {
          "end": {
            "column": 108,
            "line": 11
          },
          "start": {
            "column": 68,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 11
          },
          "start": {
            "column": 18,
            "line": 11
          }
        },
        "range": [
          485,
          532
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
                "name": "IFuncs",
                "optional": false,
                "range": [
                  496,
                  502
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
                496,
                502
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                486,
                487
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              486,
              502
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 19,
                "line": 11
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  528,
                  531
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
                        529,
                        530
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 11
                        },
                        "start": {
                          "column": 62,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      529,
                      530
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 11
                      },
                      "start": {
                        "column": 62,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 11
                  },
                  "start": {
                    "column": 61,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDestructuring",
                "optional": false,
                "range": [
                  514,
                  528
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 11
                  },
                  "start": {
                    "column": 47,
                    "line": 11
                  }
                }
              },
              "range": [
                514,
                531
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 11
                },
                "start": {
                  "column": 47,
                  "line": 11
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
                504,
                505
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 11
                },
                "start": {
                  "column": 37,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              504,
              531
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 11
              },
              "start": {
                "column": 37,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        467,
        576
      ],
      "loc": {
        "end": {
          "column": 109,
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
            "name": "funcs1",
            "optional": false,
            "range": [
              583,
              589
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funcA",
                  "optional": false,
                  "range": [
                    598,
                    603
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
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
                      627,
                      629
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 13
                      },
                      "start": {
                        "column": 33,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 13
                          },
                          "start": {
                            "column": 13,
                            "line": 13
                          }
                        },
                        "range": [
                          607,
                          616
                        ],
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "range": [
                            609,
                            616
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 13
                            },
                            "start": {
                              "column": 15,
                              "line": 13
                            }
                          }
                        }
                      },
                      "range": [
                        606,
                        616
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
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 23,
                        "line": 13
                      }
                    },
                    "range": [
                      617,
                      623
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        619,
                        623
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 13
                        },
                        "start": {
                          "column": 25,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    605,
                    629
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  }
                },
                "range": [
                  598,
                  629
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funcB",
                  "optional": false,
                  "range": [
                    635,
                    640
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
                      675,
                      677
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 14
                      },
                      "start": {
                        "column": 44,
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 14
                          },
                          "start": {
                            "column": 13,
                            "line": 14
                          }
                        },
                        "range": [
                          644,
                          652
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            646,
                            652
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 14
                            },
                            "start": {
                              "column": 15,
                              "line": 14
                            }
                          }
                        }
                      },
                      "range": [
                        643,
                        652
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 14
                        },
                        "start": {
                          "column": 12,
                          "line": 14
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 14
                          },
                          "start": {
                            "column": 25,
                            "line": 14
                          }
                        },
                        "range": [
                          656,
                          664
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            658,
                            664
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
                        }
                      },
                      "range": [
                        654,
                        664
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 14
                        },
                        "start": {
                          "column": 23,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 14
                      },
                      "start": {
                        "column": 34,
                        "line": 14
                      }
                    },
                    "range": [
                      665,
                      671
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        667,
                        671
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 14
                        },
                        "start": {
                          "column": 36,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    642,
                    677
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  635,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
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
                  "name": "funcC",
                  "optional": false,
                  "range": [
                    683,
                    688
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
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
                      737,
                      739
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 15
                      },
                      "start": {
                        "column": 58,
                        "line": 15
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 15
                          },
                          "start": {
                            "column": 13,
                            "line": 15
                          }
                        },
                        "range": [
                          692,
                          700
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            694,
                            700
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 15
                            },
                            "start": {
                              "column": 15,
                              "line": 15
                            }
                          }
                        }
                      },
                      "range": [
                        691,
                        700
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 15
                        },
                        "start": {
                          "column": 12,
                          "line": 15
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cc",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 15
                          },
                          "start": {
                            "column": 25,
                            "line": 15
                          }
                        },
                        "range": [
                          704,
                          712
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            706,
                            712
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 15
                            },
                            "start": {
                              "column": 27,
                              "line": 15
                            }
                          }
                        }
                      },
                      "range": [
                        702,
                        712
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 15
                        },
                        "start": {
                          "column": 23,
                          "line": 15
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ccc",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 15
                          },
                          "start": {
                            "column": 38,
                            "line": 15
                          }
                        },
                        "range": [
                          717,
                          726
                        ],
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "range": [
                            719,
                            726
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 15
                            },
                            "start": {
                              "column": 40,
                              "line": 15
                            }
                          }
                        }
                      },
                      "range": [
                        714,
                        726
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 15
                        },
                        "start": {
                          "column": 35,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 15
                      },
                      "start": {
                        "column": 48,
                        "line": 15
                      }
                    },
                    "range": [
                      727,
                      733
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        729,
                        733
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 15
                        },
                        "start": {
                          "column": 50,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    690,
                    739
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
                    }
                  }
                },
                "range": [
                  683,
                  739
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              592,
              742
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 16
              },
              "start": {
                "column": 15,
                "line": 12
              }
            }
          },
          "range": [
            583,
            742
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        577,
        743
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 16
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
        "name": "TFuncs1",
        "optional": false,
        "range": [
          749,
          756
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "funcs1",
          "optional": false,
          "range": [
            766,
            772
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 17
            },
            "start": {
              "column": 22,
              "line": 17
            }
          }
        },
        "range": [
          759,
          772
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 17
          },
          "start": {
            "column": 15,
            "line": 17
          }
        }
      },
      "range": [
        744,
        773
      ],
      "loc": {
        "end": {
          "column": 29,
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
        "name": "useReduxDispatch1",
        "optional": false,
        "range": [
          791,
          808
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 18
          },
          "start": {
            "column": 17,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "destructuring",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 110,
                "line": 18
              },
              "start": {
                "column": 83,
                "line": 18
              }
            },
            "range": [
              857,
              884
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  872,
                  884
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TFuncs1",
                      "optional": false,
                      "range": [
                        873,
                        880
                      ],
                      "loc": {
                        "end": {
                          "column": 106,
                          "line": 18
                        },
                        "start": {
                          "column": 99,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      873,
                      880
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 18
                      },
                      "start": {
                        "column": 99,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        882,
                        883
                      ],
                      "loc": {
                        "end": {
                          "column": 109,
                          "line": 18
                        },
                        "start": {
                          "column": 108,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      882,
                      883
                    ],
                    "loc": {
                      "end": {
                        "column": 109,
                        "line": 18
                      },
                      "start": {
                        "column": 108,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 110,
                    "line": 18
                  },
                  "start": {
                    "column": 98,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Destructuring",
                "optional": false,
                "range": [
                  859,
                  872
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 18
                  },
                  "start": {
                    "column": 85,
                    "line": 18
                  }
                }
              },
              "range": [
                859,
                884
              ],
              "loc": {
                "end": {
                  "column": 110,
                  "line": 18
                },
                "start": {
                  "column": 85,
                  "line": 18
                }
              }
            }
          },
          "range": [
            844,
            884
          ],
          "loc": {
            "end": {
              "column": 110,
              "line": 18
            },
            "start": {
              "column": 70,
              "line": 18
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 114,
            "line": 18
          },
          "start": {
            "column": 111,
            "line": 18
          }
        },
        "range": [
          885,
          888
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              887,
              888
            ],
            "loc": {
              "end": {
                "column": 114,
                "line": 18
              },
              "start": {
                "column": 113,
                "line": 18
              }
            }
          },
          "range": [
            887,
            888
          ],
          "loc": {
            "end": {
              "column": 114,
              "line": 18
            },
            "start": {
              "column": 113,
              "line": 18
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 69,
            "line": 18
          },
          "start": {
            "column": 34,
            "line": 18
          }
        },
        "range": [
          808,
          843
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  833,
                  842
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TFuncs1",
                      "optional": false,
                      "range": [
                        834,
                        841
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 18
                        },
                        "start": {
                          "column": 60,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      834,
                      841
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 18
                      },
                      "start": {
                        "column": 60,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 18
                  },
                  "start": {
                    "column": 59,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDestructuring",
                "optional": false,
                "range": [
                  819,
                  833
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 18
                  },
                  "start": {
                    "column": 45,
                    "line": 18
                  }
                }
              },
              "range": [
                819,
                842
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 18
                },
                "start": {
                  "column": 45,
                  "line": 18
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
                809,
                810
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 18
                },
                "start": {
                  "column": 35,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              809,
              842
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 18
              },
              "start": {
                "column": 35,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        774,
        889
      ],
      "loc": {
        "end": {
          "column": 115,
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
            "type": "ObjectPattern",
            "decorators": [],
            "optional": false,
            "properties": [],
            "range": [
              896,
              898
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 19
              },
              "start": {
                "column": 6,
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
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcA",
                        "optional": false,
                        "range": [
                          945,
                          950
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 21
                          },
                          "start": {
                            "column": 8,
                            "line": 21
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
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "range": [
                                      975,
                                      976
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 21
                                      }
                                    }
                                  },
                                  "range": [
                                    972,
                                    976
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 21
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
                                  "name": "f",
                                  "optional": false,
                                  "range": [
                                    964,
                                    965
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 21
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcA",
                                  "optional": false,
                                  "range": [
                                    966,
                                    971
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 21
                                    }
                                  }
                                },
                                "range": [
                                  964,
                                  971
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 21
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                964,
                                977
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 21
                                },
                                "start": {
                                  "column": 27,
                                  "line": 21
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "range": [
                              962,
                              963
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 21
                              },
                              "start": {
                                "column": 25,
                                "line": 21
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            962,
                            978
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 21
                            },
                            "start": {
                              "column": 25,
                              "line": 21
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "range": [
                                956,
                                957
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 21
                                },
                                "start": {
                                  "column": 19,
                                  "line": 21
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "range": [
                              953,
                              957
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 21
                              },
                              "start": {
                                "column": 16,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "range": [
                          952,
                          978
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 21
                          },
                          "start": {
                            "column": 15,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        945,
                        978
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcB",
                        "optional": false,
                        "range": [
                          1014,
                          1019
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 22
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
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "range": [
                                      1044,
                                      1045
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "range": [
                                    1041,
                                    1045
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 22
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
                                  "name": "f",
                                  "optional": false,
                                  "range": [
                                    1033,
                                    1034
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 22
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcB",
                                  "optional": false,
                                  "range": [
                                    1035,
                                    1040
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 22
                                    }
                                  }
                                },
                                "range": [
                                  1033,
                                  1040
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 22
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1033,
                                1046
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 22
                                },
                                "start": {
                                  "column": 27,
                                  "line": 22
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "range": [
                              1031,
                              1032
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 22
                              },
                              "start": {
                                "column": 25,
                                "line": 22
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1031,
                            1047
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 22
                            },
                            "start": {
                              "column": 25,
                              "line": 22
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "range": [
                                1025,
                                1026
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 22
                                },
                                "start": {
                                  "column": 19,
                                  "line": 22
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "range": [
                              1022,
                              1026
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 22
                              },
                              "start": {
                                "column": 16,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "range": [
                          1021,
                          1047
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 22
                          },
                          "start": {
                            "column": 15,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        1014,
                        1047
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcC",
                        "optional": false,
                        "range": [
                          1057,
                          1062
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
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
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "p",
                                    "optional": false,
                                    "range": [
                                      1087,
                                      1088
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    1084,
                                    1088
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 23
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
                                  "name": "f",
                                  "optional": false,
                                  "range": [
                                    1076,
                                    1077
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 23
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "funcC",
                                  "optional": false,
                                  "range": [
                                    1078,
                                    1083
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 23
                                    }
                                  }
                                },
                                "range": [
                                  1076,
                                  1083
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 23
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1076,
                                1089
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 23
                                },
                                "start": {
                                  "column": 27,
                                  "line": 23
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "range": [
                              1074,
                              1075
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 23
                              },
                              "start": {
                                "column": 25,
                                "line": 23
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1074,
                            1090
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 23
                            },
                            "start": {
                              "column": 25,
                              "line": 23
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "range": [
                                1068,
                                1069
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 23
                                },
                                "start": {
                                  "column": 19,
                                  "line": 23
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "range": [
                              1065,
                              1069
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 23
                              },
                              "start": {
                                "column": 16,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "range": [
                          1064,
                          1090
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 23
                          },
                          "start": {
                            "column": 15,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        1057,
                        1090
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "range": [
                    935,
                    1097
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 24
                    },
                    "start": {
                      "column": 15,
                      "line": 20
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
                    "name": "d",
                    "optional": false,
                    "range": [
                      925,
                      926
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 20
                      },
                      "start": {
                        "column": 5,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      928,
                      929
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  924,
                  1098
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useReduxDispatch1",
              "optional": false,
              "range": [
                901,
                918
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              901,
              1100
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 25
              },
              "start": {
                "column": 11,
                "line": 19
              }
            }
          },
          "range": [
            896,
            1100
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 25
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
        890,
        1101
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
