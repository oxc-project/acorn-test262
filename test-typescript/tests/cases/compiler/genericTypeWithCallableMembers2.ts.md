__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    228
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
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  60,
                  61
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
                60,
                63
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
              53,
              64
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          47,
          113
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 47,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          9,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 42,
                "line": 1
              }
            },
            "range": [
              42,
              45
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
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
                    "column": 45,
                    "line": 1
                  },
                  "start": {
                    "column": 44,
                    "line": 1
                  }
                }
              },
              "range": [
                44,
                45
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 44,
                  "line": 1
                }
              }
            }
          },
          "range": [
            41,
            45
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 1
            },
            "start": {
              "column": 41,
              "line": 1
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          40
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 1
                      },
                      "start": {
                        "column": 28,
                        "line": 1
                      }
                    },
                    "range": [
                      28,
                      36
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        30,
                        36
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 1
                        },
                        "start": {
                          "column": 30,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    26,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 1
                    },
                    "start": {
                      "column": 26,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                24,
                39
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
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
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              14,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        113
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
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  184,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              },
              "range": [
                180,
                187
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              173,
              188
            ],
            "loc": {
              "end": {
                "column": 19,
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
          167,
          228
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 51,
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
        "name": "foo2",
        "optional": false,
        "range": [
          125,
          129
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 5
              },
              "start": {
                "column": 46,
                "line": 5
              }
            },
            "range": [
              162,
              165
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  164,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 5
                  },
                  "start": {
                    "column": 48,
                    "line": 5
                  }
                }
              },
              "range": [
                164,
                165
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 5
                },
                "start": {
                  "column": 48,
                  "line": 5
                }
              }
            }
          },
          "range": [
            161,
            165
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 5
            },
            "start": {
              "column": 45,
              "line": 5
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 5
          },
          "start": {
            "column": 13,
            "line": 5
          }
        },
        "range": [
          129,
          160
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 5
                      },
                      "start": {
                        "column": 32,
                        "line": 5
                      }
                    },
                    "range": [
                      148,
                      156
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        150,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 5
                        },
                        "start": {
                          "column": 34,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    142,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
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
                140,
                159
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
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
                130,
                131
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              130,
              159
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        116,
        228
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
