__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    287
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          24,
          54
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                36,
                51
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructable",
                  "optional": false,
                  "range": [
                    38,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  38,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              30,
              52
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 24,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructable",
        "optional": false,
        "range": [
          10,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        54
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          90,
          286
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                96,
                107
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                107,
                156
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  153,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 6
                  },
                  "start": {
                    "column": 61,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 6
                        },
                        "start": {
                          "column": 27,
                          "line": 6
                        }
                      },
                      "range": [
                        119,
                        122
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            121,
                            122
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 6
                            },
                            "start": {
                              "column": 29,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          121,
                          122
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 6
                          },
                          "start": {
                            "column": 29,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      115,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 6
                      },
                      "start": {
                        "column": 23,
                        "line": 6
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    108,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 6
                        },
                        "start": {
                          "column": 44,
                          "line": 6
                        }
                      },
                      "range": [
                        136,
                        151
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Constructable",
                          "optional": false,
                          "range": [
                            138,
                            151
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 6
                            },
                            "start": {
                              "column": 46,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          138,
                          151
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 6
                          },
                          "start": {
                            "column": 46,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      131,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 6
                      },
                      "start": {
                        "column": 39,
                        "line": 6
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    124,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 6
                    },
                    "start": {
                      "column": 32,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              96,
              156
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "range": [
                161,
                167
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                167,
                284
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
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
                            184,
                            185
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                192,
                                196
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
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "range": [
                                197,
                                201
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 8
                                },
                                "start": {
                                  "column": 25,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              192,
                              201
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 8
                              },
                              "start": {
                                "column": 20,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            188,
                            203
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          184,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      180,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            229,
                            231
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                238,
                                242
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 9
                                },
                                "start": {
                                  "column": 21,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data2",
                              "optional": false,
                              "range": [
                                243,
                                248
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 9
                                },
                                "start": {
                                  "column": 26,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              238,
                              248
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 9
                              },
                              "start": {
                                "column": 21,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            234,
                            250
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          229,
                          250
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      225,
                      251
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  170,
                  284
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 7
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "range": [
              161,
              284
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 33,
            "line": 5
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
          63,
          64
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        },
        "range": [
          64,
          89
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
                "name": "Constructable",
                "optional": false,
                "range": [
                  75,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 18,
                    "line": 5
                  }
                }
              },
              "range": [
                75,
                88
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 5
                },
                "start": {
                  "column": 18,
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
                65,
                66
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              65,
              88
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        57,
        286
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
