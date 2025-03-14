__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    4,
    261
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          29,
          64
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "compareTo",
              "optional": false,
              "range": [
                38,
                47
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 22,
                      "line": 2
                    }
                  },
                  "range": [
                    53,
                    56
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        55,
                        56
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 2
                        },
                        "start": {
                          "column": 24,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      55,
                      56
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  48,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              38,
              58
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 7,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 3
          },
          "start": {
            "column": 29,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IComparable",
        "optional": false,
        "range": [
          14,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        },
        "range": [
          25,
          28
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
            "out": false,
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
          }
        ]
      },
      "range": [
        4,
        64
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 3
        },
        "start": {
          "column": 4,
          "line": 1
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
        "name": "sort",
        "optional": false,
        "range": [
          87,
          91
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
                "column": 64,
                "line": 5
              },
              "start": {
                "column": 59,
                "line": 5
              }
            },
            "range": [
              125,
              130
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    127,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 5
                    },
                    "start": {
                      "column": 61,
                      "line": 5
                    }
                  }
                },
                "range": [
                  127,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 5
                  },
                  "start": {
                    "column": 61,
                    "line": 5
                  }
                }
              },
              "range": [
                127,
                130
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 5
                },
                "start": {
                  "column": 61,
                  "line": 5
                }
              }
            }
          },
          "range": [
            120,
            130
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 5
            },
            "start": {
              "column": 54,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 70,
            "line": 5
          },
          "start": {
            "column": 65,
            "line": 5
          }
        },
        "range": [
          131,
          136
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                133,
                134
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 5
                },
                "start": {
                  "column": 67,
                  "line": 5
                }
              }
            },
            "range": [
              133,
              134
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 5
              },
              "start": {
                "column": 67,
                "line": 5
              }
            }
          },
          "range": [
            133,
            136
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 5
            },
            "start": {
              "column": 67,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 53,
            "line": 5
          },
          "start": {
            "column": 25,
            "line": 5
          }
        },
        "range": [
          91,
          119
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
                  113,
                  118
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      114,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 5
                      },
                      "start": {
                        "column": 48,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 5
                  },
                  "start": {
                    "column": 47,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IComparable",
                "optional": false,
                "range": [
                  102,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 36,
                    "line": 5
                  }
                }
              },
              "range": [
                102,
                118
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 5
                },
                "start": {
                  "column": 36,
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
                92,
                93
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              92,
              118
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 5
              },
              "start": {
                "column": 26,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        70,
        137
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 5
        },
        "start": {
          "column": 4,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          198,
          205
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 5,
            "line": 8
          },
          "start": {
            "column": 59,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IComparable",
            "optional": false,
            "range": [
              178,
              189
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 7
              },
              "start": {
                "column": 39,
                "line": 7
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              189,
              197
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  190,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 7
                  },
                  "start": {
                    "column": 51,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 7
              },
              "start": {
                "column": 50,
                "line": 7
              }
            }
          },
          "range": [
            178,
            197
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 7
            },
            "start": {
              "column": 39,
              "line": 7
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringComparable",
        "optional": false,
        "range": [
          153,
          169
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 7
          },
          "start": {
            "column": 14,
            "line": 7
          }
        }
      },
      "range": [
        143,
        205
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 8
        },
        "start": {
          "column": 4,
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
            "name": "sc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              },
              "range": [
                217,
                237
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringComparable",
                    "optional": false,
                    "range": [
                      219,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 10
                      },
                      "start": {
                        "column": 12,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    219,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                },
                "range": [
                  219,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 10
                  },
                  "start": {
                    "column": 12,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              215,
              237
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            215,
            237
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 10
            },
            "start": {
              "column": 8,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        211,
        238
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 10
        },
        "start": {
          "column": 4,
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
            "name": "x",
            "optional": false,
            "range": [
              248,
              249
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 12
              },
              "start": {
                "column": 8,
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
                "name": "sc",
                "optional": false,
                "range": [
                  257,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "sort",
              "optional": false,
              "range": [
                252,
                256
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              252,
              260
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 12,
                "line": 12
              }
            }
          },
          "range": [
            248,
            260
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 12
            },
            "start": {
              "column": 8,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        244,
        261
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 12
        },
        "start": {
          "column": 4,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 21,
      "line": 12
    },
    "start": {
      "column": 4,
      "line": 1
    }
  },
  "hashbang": null
}
```
