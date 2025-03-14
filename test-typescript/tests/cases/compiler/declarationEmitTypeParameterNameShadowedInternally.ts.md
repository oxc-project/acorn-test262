__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    98
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        97
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
              "name": "foo",
              "optional": false,
              "range": [
                13,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
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
                          "name": "inner",
                          "optional": false,
                          "range": [
                            42,
                            47
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 2
                            },
                            "start": {
                              "column": 7,
                              "line": 2
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    65,
                                    66
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 2
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    68,
                                    69
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 2
                                    }
                                  }
                                }
                              ],
                              "range": [
                                64,
                                70
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 2
                                },
                                "start": {
                                  "column": 29,
                                  "line": 2
                                }
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "range": [
                                  74,
                                  79
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 2
                                  }
                                }
                              },
                              "range": [
                                74,
                                79
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 2
                                },
                                "start": {
                                  "column": 39,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              64,
                              79
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 2
                              },
                              "start": {
                                "column": 29,
                                "line": 2
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 2
                                  }
                                },
                                "range": [
                                  56,
                                  59
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      58,
                                      59
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "range": [
                                    58,
                                    59
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 2
                                    }
                                  }
                                }
                              },
                              "range": [
                                55,
                                59
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 2
                                },
                                "start": {
                                  "column": 20,
                                  "line": 2
                                }
                              }
                            }
                          ],
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 2
                              },
                              "start": {
                                "column": 15,
                                "line": 2
                              }
                            },
                            "range": [
                              50,
                              54
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
                                    51,
                                    52
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
                                "out": false,
                                "range": [
                                  51,
                                  52
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
                              }
                            ]
                          },
                          "range": [
                            50,
                            79
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 2
                            },
                            "start": {
                              "column": 15,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          42,
                          79
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 2
                          },
                          "start": {
                            "column": 7,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      36,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 2
                      },
                      "start": {
                        "column": 1,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "range": [
                        89,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
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
                        "column": 14,
                        "line": 3
                      },
                      "start": {
                        "column": 1,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  33,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 1
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          27,
                          28
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 1
                          },
                          "start": {
                            "column": 27,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        27,
                        28
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 1
                        },
                        "start": {
                          "column": 27,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    24,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                },
                "range": [
                  19,
                  23
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
                        20,
                        21
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 1
                        },
                        "start": {
                          "column": 20,
                          "line": 1
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      20,
                      21
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 1
                      },
                      "start": {
                        "column": 20,
                        "line": 1
                      }
                    }
                  }
                ]
              },
              "range": [
                19,
                97
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              97
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          97
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
