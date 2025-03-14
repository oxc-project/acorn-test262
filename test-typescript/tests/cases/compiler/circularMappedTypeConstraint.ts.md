__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    165
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
        "name": "foo2",
        "optional": false,
        "range": [
          39,
          43
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
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
                "column": 103,
                "line": 3
              },
              "start": {
                "column": 100,
                "line": 3
              }
            },
            "range": [
              122,
              125
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  124,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 103,
                    "line": 3
                  },
                  "start": {
                    "column": 102,
                    "line": 3
                  }
                }
              },
              "range": [
                124,
                125
              ],
              "loc": {
                "end": {
                  "column": 103,
                  "line": 3
                },
                "start": {
                  "column": 102,
                  "line": 3
                }
              }
            }
          },
          "range": [
            121,
            125
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 3
            },
            "start": {
              "column": 99,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 107,
            "line": 3
          },
          "start": {
            "column": 104,
            "line": 3
          }
        },
        "range": [
          126,
          129
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              128,
              129
            ],
            "loc": {
              "end": {
                "column": 107,
                "line": 3
              },
              "start": {
                "column": 106,
                "line": 3
              }
            }
          },
          "range": [
            128,
            129
          ],
          "loc": {
            "end": {
              "column": 107,
              "line": 3
            },
            "start": {
              "column": 106,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 98,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 3
          }
        },
        "range": [
          43,
          120
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
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
                          68,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 3
                          },
                          "start": {
                            "column": 46,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        68,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 3
                        },
                        "start": {
                          "column": 46,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      62,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 3
                      },
                      "start": {
                        "column": 40,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      72,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 3
                      },
                      "start": {
                        "column": 50,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  62,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 3
                  },
                  "start": {
                    "column": 40,
                    "line": 3
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  57,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              },
              "nameType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    92,
                    95
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          93,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 3
                          },
                          "start": {
                            "column": 71,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        93,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 3
                        },
                        "start": {
                          "column": 71,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 3
                    },
                    "start": {
                      "column": 70,
                      "line": 3
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Capitalize",
                  "optional": false,
                  "range": [
                    82,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 3
                    },
                    "start": {
                      "column": 60,
                      "line": 3
                    }
                  }
                },
                "range": [
                  82,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 3
                  },
                  "start": {
                    "column": 60,
                    "line": 3
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    98,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 3
                    },
                    "start": {
                      "column": 76,
                      "line": 3
                    }
                  }
                },
                "range": [
                  98,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 3
                  },
                  "start": {
                    "column": 76,
                    "line": 3
                  }
                }
              },
              "range": [
                54,
                101
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 3
                },
                "start": {
                  "column": 32,
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
                44,
                45
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              44,
              101
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                113,
                119
              ],
              "loc": {
                "end": {
                  "column": 97,
                  "line": 3
                },
                "start": {
                  "column": 91,
                  "line": 3
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
                103,
                104
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 3
                },
                "start": {
                  "column": 81,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              103,
              119
            ],
            "loc": {
              "end": {
                "column": 97,
                "line": 3
              },
              "start": {
                "column": 81,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        130
      ],
      "loc": {
        "end": {
          "column": 108,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        131,
        164
      ],
      "attributes": [],
      "declaration": {
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
                144,
                146
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
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
                        "name": "A",
                        "optional": false,
                        "range": [
                          155,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 4
                          },
                          "start": {
                            "column": 24,
                            "line": 4
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          158,
                          161
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 4
                          },
                          "start": {
                            "column": 27,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        155,
                        161
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    154,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "range": [
                  149,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                149,
                163
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "range": [
              144,
              163
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          138,
          164
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 33,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
