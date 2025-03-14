__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    272
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          17,
          38
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "range": [
                23,
                26
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                26,
                35
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  28,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              23,
              36
            ],
            "loc": {
              "end": {
                "column": 17,
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
            "column": 17,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IProps",
        "optional": false,
        "range": [
          10,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
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
        38
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
          50,
          271
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mine",
              "optional": false,
              "range": [
                56,
                60
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              },
              "range": [
                60,
                68
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  62,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                71,
                73
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "range": [
              56,
              74
            ],
            "loc": {
              "end": {
                "column": 22,
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
              "name": "myMethod",
              "optional": false,
              "range": [
                80,
                88
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                88,
                269
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
                          "type": "ObjectPattern",
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "one",
                                "optional": false,
                                "range": [
                                  118,
                                  121
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 9
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "one",
                                "optional": false,
                                "range": [
                                  118,
                                  121
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                118,
                                121
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 9
                                },
                                "start": {
                                  "column": 16,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "range": [
                            116,
                            123
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 9
                            },
                            "start": {
                              "column": 14,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            126,
                            127
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
                        "range": [
                          116,
                          127
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      110,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "SwitchStatement",
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "consequent": [
                          {
                            "type": "BreakStatement",
                            "label": null,
                            "range": [
                              191,
                              197
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 12
                              },
                              "start": {
                                "column": 16,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "range": [
                            170,
                            173
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 11
                            },
                            "start": {
                              "column": 17,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          165,
                          197
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 12
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "consequent": [
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
                                    239,
                                    240
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 14
                                    }
                                  }
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      243,
                                      247
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mine",
                                    "optional": false,
                                    "range": [
                                      248,
                                      252
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "range": [
                                    243,
                                    252
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 14
                                    }
                                  }
                                },
                                "range": [
                                  239,
                                  252
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 14
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "let",
                            "range": [
                              235,
                              253
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 14
                              },
                              "start": {
                                "column": 16,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "test": null,
                        "range": [
                          210,
                          253
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "discriminant": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        145,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      137,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  100,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              },
              "declare": false,
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
                        "column": 22,
                        "line": 8
                      },
                      "start": {
                        "column": 14,
                        "line": 8
                      }
                    },
                    "range": [
                      90,
                      98
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IProps",
                        "optional": false,
                        "range": [
                          92,
                          98
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 8
                          },
                          "start": {
                            "column": 16,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        92,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
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
                    89,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "range": [
              80,
              269
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          46,
          49
        ],
        "loc": {
          "end": {
            "column": 9,
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
      "range": [
        40,
        271
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
