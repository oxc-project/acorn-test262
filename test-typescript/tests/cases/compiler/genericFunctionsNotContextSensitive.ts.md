__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    198
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
            "name": "f",
            "optional": false,
            "range": [
              28,
              29
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "range": [
                94,
                95
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 3
                },
                "start": {
                  "column": 72,
                  "line": 3
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
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 3
                    },
                    "start": {
                      "column": 61,
                      "line": 3
                    }
                  },
                  "range": [
                    83,
                    86
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "range": [
                        85,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 3
                        },
                        "start": {
                          "column": 63,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      85,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 3
                      },
                      "start": {
                        "column": 63,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  82,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 3
                  },
                  "start": {
                    "column": 60,
                    "line": 3
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 68,
                  "line": 3
                },
                "start": {
                  "column": 65,
                  "line": 3
                }
              },
              "range": [
                87,
                90
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "range": [
                    89,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 3
                    },
                    "start": {
                      "column": 67,
                      "line": 3
                    }
                  }
                },
                "range": [
                  89,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 3
                  },
                  "start": {
                    "column": 67,
                    "line": 3
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 59,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              },
              "range": [
                32,
                81
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "range": [
                            47,
                            51
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 3
                            },
                            "start": {
                              "column": 25,
                              "line": 3
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 3
                            },
                            "start": {
                              "column": 29,
                              "line": 3
                            }
                          },
                          "range": [
                            51,
                            58
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                53,
                                56
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 3
                                },
                                "start": {
                                  "column": 31,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              53,
                              58
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 3
                              },
                              "start": {
                                "column": 31,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          44,
                          58
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 3
                          },
                          "start": {
                            "column": 22,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 3
                        },
                        "start": {
                          "column": 38,
                          "line": 3
                        }
                      },
                      "range": [
                        60,
                        80
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                  "column": 49,
                                  "line": 3
                                },
                                "start": {
                                  "column": 46,
                                  "line": 3
                                }
                              },
                              "range": [
                                68,
                                71
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "G",
                                  "optional": false,
                                  "range": [
                                    70,
                                    71
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 3
                                    }
                                  }
                                },
                                "range": [
                                  70,
                                  71
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 3
                                  }
                                }
                              }
                            },
                            "range": [
                              67,
                              71
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 3
                              },
                              "start": {
                                "column": 45,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 3
                            },
                            "start": {
                              "column": 51,
                              "line": 3
                            }
                          },
                          "range": [
                            73,
                            80
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              76,
                              80
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 3
                              },
                              "start": {
                                "column": 54,
                                "line": 3
                              }
                            }
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
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
                            63,
                            66
                          ],
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "const": false,
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "G",
                                "optional": false,
                                "range": [
                                  64,
                                  65
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 3
                                  }
                                }
                              },
                              "out": false,
                              "range": [
                                64,
                                65
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 3
                                },
                                "start": {
                                  "column": 42,
                                  "line": 3
                                }
                              }
                            }
                          ]
                        },
                        "range": [
                          63,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 3
                          },
                          "start": {
                            "column": 41,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      43,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 3
                      },
                      "start": {
                        "column": 21,
                        "line": 3
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
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
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
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
              32,
              95
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "range": [
            28,
            95
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        22,
        96
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
              104,
              105
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      144,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 5
                      },
                      "start": {
                        "column": 46,
                        "line": 5
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
                      "name": "_",
                      "optional": false,
                      "range": [
                        138,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 5
                        },
                        "start": {
                          "column": 40,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    138,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 5
                    },
                    "start": {
                      "column": 40,
                      "line": 5
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
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 5
                        },
                        "start": {
                          "column": 32,
                          "line": 5
                        }
                      },
                      "range": [
                        130,
                        133
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            132,
                            133
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 5
                            },
                            "start": {
                              "column": 34,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          132,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 5
                          },
                          "start": {
                            "column": 34,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      129,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 5
                      },
                      "start": {
                        "column": 31,
                        "line": 5
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  },
                  "range": [
                    110,
                    128
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSStringKeyword",
                        "range": [
                          121,
                          127
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 5
                          },
                          "start": {
                            "column": 23,
                            "line": 5
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
                          111,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 5
                          },
                          "start": {
                            "column": 13,
                            "line": 5
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        111,
                        127
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    }
                  ]
                },
                "range": [
                  110,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
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
                108,
                109
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              108,
              148
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          },
          "range": [
            104,
            148
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        98,
        149
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 5
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
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
