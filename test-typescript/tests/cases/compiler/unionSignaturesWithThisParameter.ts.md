__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    168
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "range": [
                    162,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor",
                "optional": false,
                "range": [
                  157,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
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
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              153,
              165
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          147,
          167
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 18,
                "line": 3
              }
            },
            "range": [
              40,
              139
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 4
                              },
                              "start": {
                                "column": 9,
                                "line": 4
                              }
                            },
                            "range": [
                              53,
                              57
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "range": [
                                55,
                                57
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 4
                                },
                                "start": {
                                  "column": 11,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            49,
                            57
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 4
                            },
                            "start": {
                              "column": 5,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 4
                              },
                              "start": {
                                "column": 16,
                                "line": 4
                              }
                            },
                            "range": [
                              60,
                              63
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  62,
                                  63
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                62,
                                63
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 4
                                },
                                "start": {
                                  "column": 18,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            59,
                            63
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 4
                            },
                            "start": {
                              "column": 15,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 4
                          },
                          "start": {
                            "column": 20,
                            "line": 4
                          }
                        },
                        "range": [
                          64,
                          70
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            66,
                            70
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 4
                            },
                            "start": {
                              "column": 22,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        48,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 4
                        },
                        "start": {
                          "column": 4,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 5
                              },
                              "start": {
                                "column": 9,
                                "line": 5
                              }
                            },
                            "range": [
                              81,
                              84
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  83,
                                  84
                                ],
                                "loc": {
                                  "end": {
                                    "column": 12,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                83,
                                84
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 5
                                },
                                "start": {
                                  "column": 11,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            80,
                            84
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 5
                          },
                          "start": {
                            "column": 13,
                            "line": 5
                          }
                        },
                        "range": [
                          85,
                          91
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            87,
                            91
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 5
                            },
                            "start": {
                              "column": 15,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        76,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
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
                    42,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 6
                    },
                    "start": {
                      "column": 20,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 7
                              },
                              "start": {
                                "column": 6,
                                "line": 7
                              }
                            },
                            "range": [
                              105,
                              108
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  107,
                                  108
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                107,
                                108
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 7
                                },
                                "start": {
                                  "column": 8,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            104,
                            108
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 7
                            },
                            "start": {
                              "column": 5,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 7
                          },
                          "start": {
                            "column": 10,
                            "line": 7
                          }
                        },
                        "range": [
                          109,
                          115
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            111,
                            115
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        103,
                        116
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 7
                        },
                        "start": {
                          "column": 4,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 8
                              },
                              "start": {
                                "column": 9,
                                "line": 8
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
                                    "column": 12,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                128,
                                129
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 8
                                },
                                "start": {
                                  "column": 11,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "range": [
                            125,
                            129
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 8
                          },
                          "start": {
                            "column": 13,
                            "line": 8
                          }
                        },
                        "range": [
                          130,
                          136
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            132,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 15,
                              "line": 8
                            }
                          }
                        }
                      },
                      "range": [
                        121,
                        137
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 8
                        },
                        "start": {
                          "column": 4,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    97,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                42,
                139
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            }
          },
          "range": [
            36,
            139
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 7,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            },
            "range": [
              142,
              145
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  144,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 9
                  },
                  "start": {
                    "column": 6,
                    "line": 9
                  }
                }
              },
              "range": [
                144,
                145
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 9
                }
              }
            }
          },
          "range": [
            141,
            145
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 9
            },
            "start": {
              "column": 3,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        },
        "range": [
          32,
          35
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
                33,
                34
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              33,
              34
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        167
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
