__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    144
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                37,
                84
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      47,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
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
                        "column": 14,
                        "line": 3
                      },
                      "start": {
                        "column": 11,
                        "line": 3
                      }
                    },
                    "range": [
                      50,
                      53
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          52,
                          53
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 3
                          },
                          "start": {
                            "column": 13,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        52,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 3
                        },
                        "start": {
                          "column": 13,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    47,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "range": [
                      63,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
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
                        "column": 22,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    },
                    "range": [
                      69,
                      77
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        71,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    63,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "range": [
                28,
                33
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              },
              "range": [
                33,
                36
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
                      34,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    34,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                }
              ]
            },
            "range": [
              18,
              84
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ys",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 14,
                              "line": 8
                            }
                          },
                          "range": [
                            124,
                            129
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
                                  126,
                                  127
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                126,
                                127
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 8
                                },
                                "start": {
                                  "column": 16,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              126,
                              129
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 8
                              },
                              "start": {
                                "column": 16,
                                "line": 8
                              }
                            }
                          }
                        },
                        "range": [
                          122,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "range": [
                          132,
                          134
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 8
                          },
                          "start": {
                            "column": 22,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        122,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
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
                    118,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
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
                108,
                141
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 22,
                  "line": 7
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                99,
                102
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              },
              "range": [
                102,
                105
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      103,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    103,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                }
              ]
            },
            "range": [
              90,
              141
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
          12,
          143
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          11
        ],
        "decorators": [],
        "name": "test",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        143
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
