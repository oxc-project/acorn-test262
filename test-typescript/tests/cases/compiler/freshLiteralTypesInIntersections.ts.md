__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    160
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
        "name": "func",
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
                "column": 57,
                "line": 3
              },
              "start": {
                "column": 54,
                "line": 3
              }
            },
            "range": [
              76,
              79
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  78,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 3
                  },
                  "start": {
                    "column": 56,
                    "line": 3
                  }
                }
              },
              "range": [
                78,
                79
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 3
                },
                "start": {
                  "column": 56,
                  "line": 3
                }
              }
            }
          },
          "range": [
            75,
            79
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 3
            },
            "start": {
              "column": 53,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 3
              },
              "start": {
                "column": 60,
                "line": 3
              }
            },
            "range": [
              82,
              87
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    84,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 3
                    },
                    "start": {
                      "column": 62,
                      "line": 3
                    }
                  }
                },
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 3
                  },
                  "start": {
                    "column": 62,
                    "line": 3
                  }
                }
              },
              "range": [
                84,
                87
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 3
                },
                "start": {
                  "column": 62,
                  "line": 3
                }
              }
            }
          },
          "range": [
            81,
            87
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 3
            },
            "start": {
              "column": 59,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 87,
            "line": 3
          },
          "start": {
            "column": 66,
            "line": 3
          }
        },
        "range": [
          88,
          109
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 3
                  },
                  "start": {
                    "column": 71,
                    "line": 3
                  }
                },
                "range": [
                  93,
                  100
                ],
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          95,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 3
                          },
                          "start": {
                            "column": 73,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        95,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 3
                        },
                        "start": {
                          "column": 73,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          99,
                          100
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 3
                          },
                          "start": {
                            "column": 77,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        99,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 3
                        },
                        "start": {
                          "column": 77,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    95,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 3
                    },
                    "start": {
                      "column": 73,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                91,
                100
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 3
                },
                "start": {
                  "column": 69,
                  "line": 3
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 87,
                "line": 3
              },
              "start": {
                "column": 80,
                "line": 3
              }
            },
            "range": [
              102,
              109
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                105,
                109
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 3
                },
                "start": {
                  "column": 83,
                  "line": 3
                }
              }
            }
          },
          "range": [
            90,
            109
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 3
            },
            "start": {
              "column": 68,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 3
          }
        },
        "range": [
          43,
          74
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                54,
                60
              ],
              "loc": {
                "end": {
                  "column": 38,
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
              "name": "A",
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
              60
            ],
            "loc": {
              "end": {
                "column": 38,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  72,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 3
                  },
                  "start": {
                    "column": 50,
                    "line": 3
                  }
                }
              },
              "range": [
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 3
                },
                "start": {
                  "column": 50,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                62,
                63
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 3
                },
                "start": {
                  "column": 40,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              62,
              73
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 3
              },
              "start": {
                "column": 40,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        110
      ],
      "loc": {
        "end": {
          "column": 88,
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
            "name": "q",
            "optional": false,
            "range": [
              117,
              118
            ],
            "loc": {
              "end": {
                "column": 7,
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
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "\"x\"",
                  "value": "x",
                  "range": [
                    126,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"x\"",
                        "value": "x",
                        "range": [
                          133,
                          136
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
                      "range": [
                        133,
                        136
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
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"y\"",
                        "value": "y",
                        "range": [
                          139,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 4
                          },
                          "start": {
                            "column": 28,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        139,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 28,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    133,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 22,
                      "line": 4
                    }
                  }
                },
                "range": [
                  126,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"x\"",
                    "value": "x",
                    "range": [
                      145,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 4
                      },
                      "start": {
                        "column": 34,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  144,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 4
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "range": [
                121,
                125
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "optional": false,
            "range": [
              121,
              150
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          },
          "range": [
            117,
            150
          ],
          "loc": {
            "end": {
              "column": 39,
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
        111,
        151
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"x\"",
            "value": "x",
            "range": [
              154,
              157
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "range": [
            152,
            153
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          152,
          158
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        152,
        159
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
