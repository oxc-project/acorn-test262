__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    21,
    178
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
        "name": "f",
        "optional": false,
        "range": [
          38,
          39
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 41,
                "line": 3
              }
            },
            "range": [
              62,
              65
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  64,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 43,
                    "line": 3
                  }
                }
              },
              "range": [
                64,
                65
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 43,
                  "line": 3
                }
              }
            }
          },
          "range": [
            58,
            65
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 3
            },
            "start": {
              "column": 37,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handlers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 107,
                "line": 3
              },
              "start": {
                "column": 54,
                "line": 3
              }
            },
            "range": [
              75,
              128
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      91,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 3
                      },
                      "start": {
                        "column": 70,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    91,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 3
                    },
                    "start": {
                      "column": 70,
                      "line": 3
                    }
                  }
                },
                "range": [
                  85,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 3
                  },
                  "start": {
                    "column": 64,
                    "line": 3
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  80,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 3
                  },
                  "start": {
                    "column": 59,
                    "line": 3
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 3
                        },
                        "start": {
                          "column": 80,
                          "line": 3
                        }
                      },
                      "range": [
                        101,
                        107
                      ],
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "range": [
                              105,
                              106
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 3
                              },
                              "start": {
                                "column": 84,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            105,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 85,
                              "line": 3
                            },
                            "start": {
                              "column": 84,
                              "line": 3
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              103,
                              104
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 3
                              },
                              "start": {
                                "column": 82,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            103,
                            104
                          ],
                          "loc": {
                            "end": {
                              "column": 83,
                              "line": 3
                            },
                            "start": {
                              "column": 82,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          103,
                          107
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 3
                          },
                          "start": {
                            "column": 82,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      96,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 3
                      },
                      "start": {
                        "column": 75,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 3
                        },
                        "start": {
                          "column": 92,
                          "line": 3
                        }
                      },
                      "range": [
                        113,
                        116
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "range": [
                            115,
                            116
                          ],
                          "loc": {
                            "end": {
                              "column": 95,
                              "line": 3
                            },
                            "start": {
                              "column": 94,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          115,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 95,
                            "line": 3
                          },
                          "start": {
                            "column": 94,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      109,
                      116
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 3
                      },
                      "start": {
                        "column": 88,
                        "line": 3
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 3
                    },
                    "start": {
                      "column": 97,
                      "line": 3
                    }
                  },
                  "range": [
                    118,
                    125
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      121,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 104,
                        "line": 3
                      },
                      "start": {
                        "column": 100,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  95,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 3
                  },
                  "start": {
                    "column": 74,
                    "line": 3
                  }
                }
              },
              "range": [
                77,
                128
              ],
              "loc": {
                "end": {
                  "column": 107,
                  "line": 3
                },
                "start": {
                  "column": 56,
                  "line": 3
                }
              }
            }
          },
          "range": [
            67,
            128
          ],
          "loc": {
            "end": {
              "column": 107,
              "line": 3
            },
            "start": {
              "column": 46,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 114,
            "line": 3
          },
          "start": {
            "column": 108,
            "line": 3
          }
        },
        "range": [
          129,
          135
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            131,
            135
          ],
          "loc": {
            "end": {
              "column": 114,
              "line": 3
            },
            "start": {
              "column": 110,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        },
        "range": [
          39,
          57
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                50,
                56
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
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
                40,
                41
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              40,
              56
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        21,
        136
      ],
      "loc": {
        "end": {
          "column": 115,
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
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    141,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    147,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "range": [
                  141,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              139,
              150
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "range": [
                    154,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
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
                    158,
                    173
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      171,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 4
                      },
                      "start": {
                        "column": 34,
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        159,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 4
                        },
                        "start": {
                          "column": 22,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        166,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
                    }
                  }
                },
                "range": [
                  154,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              152,
              175
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 15,
                "line": 4
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            137,
            138
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "range": [
          137,
          176
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        137,
        177
      ],
      "loc": {
        "end": {
          "column": 40,
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
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
