__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    177
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
        "name": "test",
        "optional": false,
        "range": [
          17,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
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
            "column": 45,
            "line": 1
          },
          "start": {
            "column": 39,
            "line": 1
          }
        },
        "range": [
          39,
          45
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
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
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 21,
            "line": 1
          }
        },
        "range": [
          21,
          37
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                22,
                23
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              22,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
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
                  35,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 1
                  },
                  "start": {
                    "column": 35,
                    "line": 1
                  }
                }
              },
              "range": [
                35,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 35,
                  "line": 1
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
            "out": false,
            "range": [
              25,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        46
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            48,
            52
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            52,
            74
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      54,
                      55
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
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    },
                    "range": [
                      56,
                      64
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        58,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 3
                        },
                        "start": {
                          "column": 10,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    54,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 6,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                53,
                65
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              }
            },
            {
              "type": "TSObjectKeyword",
              "range": [
                67,
                73
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "range": [
          48,
          76
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        48,
        77
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            78,
            82
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            82,
            104
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      84,
                      85
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
                  "optional": true,
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
                        "column": 8,
                        "line": 4
                      }
                    },
                    "range": [
                      86,
                      94
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        88,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 4
                        },
                        "start": {
                          "column": 10,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    84,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 6,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                83,
                95
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              }
            },
            {
              "type": "TSBigIntKeyword",
              "range": [
                97,
                103
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "range": [
          78,
          106
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        78,
        107
      ],
      "loc": {
        "end": {
          "column": 29,
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
