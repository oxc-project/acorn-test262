__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    152
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          122
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                23,
                24
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                24,
                120
              ],
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
                        "type": "ThisExpression",
                        "range": [
                          108,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 3
                          },
                          "start": {
                            "column": 19,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        104,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      97,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  87,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 75,
                    "line": 2
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
                      }
                    },
                    "range": [
                      32,
                      45
                    ],
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 2
                          },
                          "start": {
                            "column": 29,
                            "line": 2
                          }
                        },
                        "range": [
                          41,
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
                                "column": 33,
                                "line": 2
                              },
                              "start": {
                                "column": 32,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            44,
                            45
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 2
                            },
                            "start": {
                              "column": 32,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        34,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 22,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    28,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strings",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 2
                      },
                      "start": {
                        "column": 42,
                        "line": 2
                      }
                    },
                    "range": [
                      54,
                      85
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TemplateStringsArray",
                            "optional": false,
                            "range": [
                              56,
                              76
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 2
                              },
                              "start": {
                                "column": 44,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            56,
                            76
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 2
                            },
                            "start": {
                              "column": 44,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            79,
                            85
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 2
                            },
                            "start": {
                              "column": 67,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "range": [
                        56,
                        85
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 2
                        },
                        "start": {
                          "column": 44,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    47,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 2
                    },
                    "start": {
                      "column": 35,
                      "line": 2
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                },
                "range": [
                  24,
                  27
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
                        25,
                        26
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 2
                        },
                        "start": {
                          "column": 13,
                          "line": 2
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      25,
                      26
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 2
                      },
                      "start": {
                        "column": 13,
                        "line": 2
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "range": [
              16,
              120
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
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
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 1
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
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        122
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
        "type": "TaggedTemplateExpression",
        "quasi": {
          "type": "TemplateLiteral",
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "test",
                "raw": "test"
              },
              "range": [
                129,
                135
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            129,
            135
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 7
            },
            "start": {
              "column": 5,
              "line": 7
            }
          }
        },
        "tag": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              124,
              127
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              128,
              129
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "range": [
            124,
            129
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "range": [
          124,
          135
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        124,
        136
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "quasi": {
          "type": "TemplateLiteral",
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "test",
                "raw": "test"
              },
              "range": [
                144,
                150
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              }
            }
          ],
          "range": [
            144,
            150
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 8
            },
            "start": {
              "column": 7,
              "line": 8
            }
          }
        },
        "tag": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              138,
              141
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 8
              },
              "start": {
                "column": 1,
                "line": 8
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              142,
              143
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 8
              },
              "start": {
                "column": 5,
                "line": 8
              }
            }
          },
          "range": [
            138,
            143
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 8
            },
            "start": {
              "column": 1,
              "line": 8
            }
          }
        },
        "range": [
          137,
          150
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        137,
        151
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
