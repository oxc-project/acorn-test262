__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    205
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          14,
          52
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                17,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
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
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              },
              "range": [
                20,
                28
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  22,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              17,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                30,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
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
                  "column": 48,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              },
              "range": [
                33,
                48
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "range": [
                      35,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 1
                      },
                      "start": {
                        "column": 35,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      44,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 1
                      },
                      "start": {
                        "column": 44,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  35,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 1
                  },
                  "start": {
                    "column": 35,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              30,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 30,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          10,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
        52
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "a",
            "optional": false,
            "range": [
              58,
              59
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "range": [
                    66,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 4
                    },
                    "start": {
                      "column": 2,
                      "line": 4
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    70,
                    125
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      122,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 4
                      },
                      "start": {
                        "column": 58,
                        "line": 4
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 4
                          },
                          "start": {
                            "column": 30,
                            "line": 4
                          }
                        },
                        "range": [
                          94,
                          97
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              96,
                              97
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 4
                              },
                              "start": {
                                "column": 32,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            96,
                            97
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 4
                            },
                            "start": {
                              "column": 32,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        93,
                        97
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 4
                          },
                          "start": {
                            "column": 38,
                            "line": 4
                          }
                        },
                        "range": [
                          102,
                          119
                        ],
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSIndexedAccessType",
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "range": [
                                    108,
                                    109
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  108,
                                  109
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 4
                                  }
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Bar",
                                  "optional": false,
                                  "range": [
                                    104,
                                    107
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  104,
                                  107
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                104,
                                110
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 4
                                },
                                "start": {
                                  "column": 40,
                                  "line": 4
                                }
                              }
                            },
                            {
                              "type": "TSNullKeyword",
                              "range": [
                                115,
                                119
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 4
                                },
                                "start": {
                                  "column": 51,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "range": [
                            104,
                            119
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 4
                            },
                            "start": {
                              "column": 40,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        100,
                        119
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 4
                        },
                        "start": {
                          "column": 36,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 4
                      },
                      "start": {
                        "column": 6,
                        "line": 4
                      }
                    },
                    "range": [
                      70,
                      91
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "constraint": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar",
                              "optional": false,
                              "range": [
                                87,
                                90
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 4
                                },
                                "start": {
                                  "column": 23,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              87,
                              90
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 4
                              },
                              "start": {
                                "column": 23,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            81,
                            90
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
                              "line": 4
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            71,
                            72
                          ],
                          "loc": {
                            "end": {
                              "column": 8,
                              "line": 4
                            },
                            "start": {
                              "column": 7,
                              "line": 4
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          71,
                          90
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 4
                          },
                          "start": {
                            "column": 7,
                            "line": 4
                          }
                        }
                      }
                    ]
                  },
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 4
                    },
                    "start": {
                      "column": 6,
                      "line": 4
                    }
                  }
                },
                "range": [
                  66,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 4
                  },
                  "start": {
                    "column": 2,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              62,
              127
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            58,
            127
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        54,
        128
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
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
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"bar\"",
            "value": "bar",
            "range": [
              136,
              141
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 6
              },
              "start": {
                "column": 7,
                "line": 6
              }
            }
          },
          {
            "type": "Literal",
            "raw": "null",
            "value": null,
            "range": [
              143,
              147
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              129,
              130
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "range": [
              131,
              135
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          "range": [
            129,
            135
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          129,
          148
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        129,
        149
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
