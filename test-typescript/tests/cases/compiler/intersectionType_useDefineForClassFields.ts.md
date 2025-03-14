__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    158
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSIntersectionType",
          "types": [
            {
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
                    32,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                "range": [
                  32,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                }
              },
              "range": [
                26,
                33
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                36,
                42
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            26,
            42
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 10,
              "line": 2
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            21,
            22
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 2
            },
            "start": {
              "column": 5,
              "line": 2
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            45,
            48
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 2
            },
            "start": {
              "column": 29,
              "line": 2
            }
          }
        },
        "range": [
          14,
          50
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
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
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        },
        "range": [
          8,
          11
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
                9,
                10
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        50
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
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
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  107,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  115,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 19,
                    "line": 6
                  }
                }
              },
              "range": [
                107,
                118
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              100,
              119
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
        "range": [
          94,
          121
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 42,
            "line": 5
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
          61,
          64
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 18,
                "line": 5
              }
            },
            "range": [
              70,
              73
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  72,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 5
                  }
                }
              },
              "range": [
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            }
          },
          "range": [
            68,
            73
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 5
          },
          "start": {
            "column": 22,
            "line": 5
          }
        },
        "range": [
          74,
          93
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
                    "column": 39,
                    "line": 5
                  },
                  "start": {
                    "column": 31,
                    "line": 5
                  }
                },
                "range": [
                  83,
                  91
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      88,
                      91
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
                            89,
                            90
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 5
                            },
                            "start": {
                              "column": 37,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          89,
                          90
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 5
                          },
                          "start": {
                            "column": 37,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 5
                      },
                      "start": {
                        "column": 36,
                        "line": 5
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      85,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 5
                      },
                      "start": {
                        "column": 33,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    85,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 5
                    },
                    "start": {
                      "column": 33,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                78,
                91
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            76,
            93
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        },
        "range": [
          64,
          67
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
                65,
                66
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              65,
              66
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        52,
        121
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          155,
          158
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 32,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "range": [
          129,
          132
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": {
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    147,
                    148
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    150,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 27,
                      "line": 9
                    }
                  }
                },
                "range": [
                  147,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              145,
              153
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 22,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "range": [
            141,
            144
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 9
            },
            "start": {
              "column": 18,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          141,
          154
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 9
          },
          "start": {
            "column": 18,
            "line": 9
          }
        }
      },
      "range": [
        123,
        158
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
