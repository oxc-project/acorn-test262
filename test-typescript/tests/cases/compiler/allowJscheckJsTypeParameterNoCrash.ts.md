__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    211
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          30,
          79
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "watch",
              "optional": false,
              "range": [
                36,
                41
              ],
              "loc": {
                "end": {
                  "column": 9,
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
                  "column": 44,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                41,
                76
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    49,
                    76
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        50,
                        56
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          70,
                          75
                        ],
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              71,
                              74
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 2
                              },
                              "start": {
                                "column": 39,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 2
                          },
                          "start": {
                            "column": 38,
                            "line": 2
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WatchHandler",
                        "optional": false,
                        "range": [
                          58,
                          70
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 2
                          },
                          "start": {
                            "column": 26,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        58,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 2
                        },
                        "start": {
                          "column": 26,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    43,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "range": [
                  43,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              36,
              77
            ],
            "loc": {
              "end": {
                "column": 45,
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
            "column": 30,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentOptions",
        "optional": false,
        "range": [
          10,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 26,
            "line": 1
          }
        },
        "range": [
          26,
          29
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
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
            "out": false,
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
        ]
      },
      "range": [
        0,
        79
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WatchHandler",
        "optional": false,
        "range": [
          85,
          97
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              },
              "range": [
                107,
                110
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    109,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 29,
                      "line": 4
                    }
                  }
                },
                "range": [
                  109,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 29,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              104,
              110
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 24,
                "line": 4
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 39,
              "line": 4
            },
            "start": {
              "column": 32,
              "line": 4
            }
          },
          "range": [
            112,
            119
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              115,
              119
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 4
              },
              "start": {
                "column": 35,
                "line": 4
              }
            }
          }
        },
        "range": [
          103,
          119
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 4
          },
          "start": {
            "column": 23,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        },
        "range": [
          97,
          100
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
                98,
                99
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              98,
              99
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 18,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        80,
        120
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
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extend",
        "optional": false,
        "range": [
          138,
          144
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 5
              },
              "start": {
                "column": 31,
                "line": 5
              }
            },
            "range": [
              152,
              174
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  170,
                  174
                ],
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      171,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 5
                      },
                      "start": {
                        "column": 50,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 5
                  },
                  "start": {
                    "column": 49,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentOptions",
                "optional": false,
                "range": [
                  154,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 5
                  },
                  "start": {
                    "column": 33,
                    "line": 5
                  }
                }
              },
              "range": [
                154,
                174
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 5
                },
                "start": {
                  "column": 33,
                  "line": 5
                }
              }
            }
          },
          "range": [
            145,
            174
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 60,
            "line": 5
          },
          "start": {
            "column": 54,
            "line": 5
          }
        },
        "range": [
          175,
          181
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            177,
            181
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 5
            },
            "start": {
              "column": 56,
              "line": 5
            }
          }
        }
      },
      "range": [
        121,
        182
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        183,
        211
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
              "name": "vextend",
              "optional": false,
              "range": [
                194,
                201
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "range": [
                204,
                210
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 21,
                  "line": 6
                }
              }
            },
            "range": [
              194,
              210
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 6
              },
              "start": {
                "column": 11,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          190,
          211
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 28,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 28,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
