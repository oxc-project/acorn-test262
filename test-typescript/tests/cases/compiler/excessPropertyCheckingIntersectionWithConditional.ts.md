__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    188
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "range": [
            14,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "range": [
            24,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "range": [
            50,
            57
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 1
            },
            "start": {
              "column": 50,
              "line": 1
            }
          }
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  36,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 1
                  },
                  "start": {
                    "column": 36,
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
                    "column": 45,
                    "line": 1
                  },
                  "start": {
                    "column": 37,
                    "line": 1
                  }
                },
                "range": [
                  37,
                  45
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    39,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 1
                    },
                    "start": {
                      "column": 39,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                36,
                45
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 36,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            34,
            47
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 1
            },
            "start": {
              "column": 34,
              "line": 1
            }
          }
        },
        "range": [
          14,
          57
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        },
        "range": [
          8,
          11
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                9,
                10
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        57
      ],
      "loc": {
        "end": {
          "column": 57,
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
            "name": "createDefaultExample",
            "optional": false,
            "range": [
              64,
              84
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            134,
                            135
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
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            137,
                            138
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 3
                            },
                            "start": {
                              "column": 14,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          134,
                          138
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 3
                          },
                          "start": {
                            "column": 11,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            140,
                            141
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
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            143,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 3
                            },
                            "start": {
                              "column": 20,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          140,
                          144
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 3
                          },
                          "start": {
                            "column": 17,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      132,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 9,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    125,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 3
                    },
                    "start": {
                      "column": 2,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                121,
                188
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 4
                },
                "start": {
                  "column": 63,
                  "line": 2
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
                      "column": 38,
                      "line": 2
                    },
                    "start": {
                      "column": 35,
                      "line": 2
                    }
                  },
                  "range": [
                    93,
                    96
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        95,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 2
                        },
                        "start": {
                          "column": 37,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      95,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 2
                      },
                      "start": {
                        "column": 37,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  92,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 34,
                    "line": 2
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 59,
                  "line": 2
                },
                "start": {
                  "column": 39,
                  "line": 2
                }
              },
              "range": [
                97,
                117
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        102,
                        105
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              103,
                              104
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 2
                              },
                              "start": {
                                "column": 45,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            103,
                            104
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 2
                            },
                            "start": {
                              "column": 45,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 2
                        },
                        "start": {
                          "column": 44,
                          "line": 2
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        99,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 2
                        },
                        "start": {
                          "column": 41,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      99,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 2
                      },
                      "start": {
                        "column": 41,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            110,
                            111
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 2
                            },
                            "start": {
                              "column": 52,
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
                              "column": 56,
                              "line": 2
                            },
                            "start": {
                              "column": 53,
                              "line": 2
                            }
                          },
                          "range": [
                            111,
                            114
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "range": [
                                113,
                                114
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 2
                                },
                                "start": {
                                  "column": 55,
                                  "line": 2
                                }
                              }
                            },
                            "range": [
                              113,
                              114
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 2
                              },
                              "start": {
                                "column": 55,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          110,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 2
                          },
                          "start": {
                            "column": 52,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      108,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 2
                      },
                      "start": {
                        "column": 50,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  99,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
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
                87,
                91
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      88,
                      89
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
                  "out": false,
                  "range": [
                    88,
                    89
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
                }
              ]
            },
            "range": [
              87,
              188
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 4
              },
              "start": {
                "column": 29,
                "line": 2
              }
            }
          },
          "range": [
            64,
            188
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        58,
        188
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
