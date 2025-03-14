__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    211
  ],
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
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              },
              "range": [
                77,
                82
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  79,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 26,
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
              68,
              82
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            68,
            82
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 12,
              "line": 2
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        56,
        83
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          94,
          148
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "range": [
                100,
                102
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null,
            "range": [
              100,
              102
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            130,
                            131
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 7
                            },
                            "start": {
                              "column": 26,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "x",
                          "range": [
                            132,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 7
                            },
                            "start": {
                              "column": 28,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          130,
                          134
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 7
                          },
                          "start": {
                            "column": 26,
                            "line": 7
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 7
                              },
                              "start": {
                                "column": 17,
                                "line": 7
                              }
                            },
                            "range": [
                              121,
                              125
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1",
                                "optional": false,
                                "range": [
                                  123,
                                  125
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                123,
                                125
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 7
                                },
                                "start": {
                                  "column": 19,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            120,
                            125
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 7
                            },
                            "start": {
                              "column": 16,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        119,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "decorator",
                    "optional": false,
                    "range": [
                      109,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 7
                      },
                      "start": {
                        "column": 5,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    109,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 7
                    },
                    "start": {
                      "column": 5,
                      "line": 7
                    }
                  }
                },
                "range": [
                  108,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                140,
                141
              ],
              "loc": {
                "end": {
                  "column": 5,
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
                141,
                146
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  144,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
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
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 5,
                  "line": 8
                }
              }
            },
            "range": [
              108,
              146
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 8
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
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          91,
          93
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        85,
        148
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          159,
          210
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "range": [
                165,
                167
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null,
            "range": [
              165,
              167
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
              "name": "y",
              "optional": false,
              "range": [
                173,
                174
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                174,
                208
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  206,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 14
                  },
                  "start": {
                    "column": 37,
                    "line": 14
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
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  197,
                                  198
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 14
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "x",
                                "range": [
                                  199,
                                  201
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                197,
                                201
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 14
                                },
                                "start": {
                                  "column": 28,
                                  "line": 14
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 14
                                    }
                                  },
                                  "range": [
                                    188,
                                    192
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C2",
                                      "optional": false,
                                      "range": [
                                        190,
                                        192
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 14
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 14
                                        }
                                      }
                                    },
                                    "range": [
                                      190,
                                      192
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 14
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  187,
                                  192
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 14
                                  }
                                }
                              }
                            ],
                            "range": [
                              186,
                              201
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 14
                              },
                              "start": {
                                "column": 17,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "decorator",
                          "optional": false,
                          "range": [
                            176,
                            185
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 14
                            },
                            "start": {
                              "column": 7,
                              "line": 14
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          176,
                          202
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 14
                          },
                          "start": {
                            "column": 7,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        175,
                        202
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 14
                        },
                        "start": {
                          "column": 6,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "name": "p",
                  "optional": false,
                  "range": [
                    203,
                    204
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 14
                    },
                    "start": {
                      "column": 34,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              }
            },
            "range": [
              173,
              208
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          156,
          158
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        150,
        210
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
