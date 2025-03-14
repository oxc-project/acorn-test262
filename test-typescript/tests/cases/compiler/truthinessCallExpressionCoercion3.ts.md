__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    50,
    272
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          62,
          84
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "always",
              "optional": false,
              "range": [
                68,
                74
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              },
              "range": [
                76,
                82
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  78,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "range": [
              68,
              82
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 12,
            "line": 2
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
          60,
          61
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        50,
        84
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "range": [
                      163,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    156,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                146,
                175
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 30,
                  "line": 7
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "range": [
                    125,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 7
                    },
                    "start": {
                      "column": 9,
                      "line": 7
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      135,
                      136
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
                    135,
                    136
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
                  125,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "always",
                "optional": false,
                "range": [
                  138,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 22,
                    "line": 7
                  }
                }
              },
              "range": [
                124,
                144
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "range": [
              120,
              175
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          114,
          177
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 28,
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
        "name": "f",
        "optional": false,
        "range": [
          95,
          96
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
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
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 17,
                "line": 6
              }
            },
            "range": [
              103,
              112
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                105,
                112
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            }
          },
          "range": [
            97,
            112
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 6
            },
            "start": {
              "column": 11,
              "line": 6
            }
          }
        }
      ],
      "range": [
        86,
        177
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 6
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "range": [
                      257,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    250,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                240,
                269
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 32,
                  "line": 12
                }
              }
            },
            "test": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "range": [
                    218,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      228,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 12
                      },
                      "start": {
                        "column": 20,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    228,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 20,
                      "line": 12
                    }
                  }
                },
                "range": [
                  218,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "always",
                "optional": false,
                "range": [
                  232,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 12
                  },
                  "start": {
                    "column": 24,
                    "line": 12
                  }
                }
              },
              "range": [
                216,
                238
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              212,
              269
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
        "range": [
          206,
          271
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 28,
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
        "name": "g",
        "optional": false,
        "range": [
          187,
          188
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
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 17,
                "line": 11
              }
            },
            "range": [
              195,
              204
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                197,
                204
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            }
          },
          "range": [
            189,
            204
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 11
            },
            "start": {
              "column": 11,
              "line": 11
            }
          }
        }
      ],
      "range": [
        178,
        271
      ],
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
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
