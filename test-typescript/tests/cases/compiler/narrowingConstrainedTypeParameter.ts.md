__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    343
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          36,
          57
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                42,
                46
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              },
              "range": [
                46,
                54
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  48,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              42,
              55
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
            "column": 14,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pet",
        "optional": false,
        "range": [
          32,
          35
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        22,
        57
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
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
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pet",
                    "optional": false,
                    "range": [
                      116,
                      119
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 8
                      },
                      "start": {
                        "column": 18,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "range": [
                      120,
                      124
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 22,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    116,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 18,
                      "line": 8
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  109,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  129,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
                    "line": 8
                  }
                }
              },
              "range": [
                109,
                137
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              102,
              138
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          96,
          140
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 37,
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
        "name": "isPet",
        "optional": false,
        "range": [
          68,
          73
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pet",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
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
                  "column": 23,
                  "line": 7
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              }
            }
          },
          "range": [
            74,
            82
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 7
            },
            "start": {
              "column": 15,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 36,
            "line": 7
          },
          "start": {
            "column": 24,
            "line": 7
          }
        },
        "range": [
          83,
          95
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "pet",
            "optional": false,
            "range": [
              85,
              88
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 7
              },
              "start": {
                "column": 33,
                "line": 7
              }
            },
            "range": [
              92,
              95
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pet",
                "optional": false,
                "range": [
                  92,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                }
              },
              "range": [
                92,
                95
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 7
                },
                "start": {
                  "column": 33,
                  "line": 7
                }
              }
            }
          },
          "range": [
            85,
            95
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 7
            },
            "start": {
              "column": 26,
              "line": 7
            }
          }
        }
      },
      "range": [
        59,
        140
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        142,
        343
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"Expected \\\"pet\\\" to be a Pet\"",
                          "value": "Expected \"pet\" to be a Pet",
                          "range": [
                            280,
                            310
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 13
                            },
                            "start": {
                              "column": 24,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "range": [
                          274,
                          279
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 13
                          },
                          "start": {
                            "column": 18,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        270,
                        311
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 13
                        },
                        "start": {
                          "column": 14,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      264,
                      312
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  254,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 21,
                    "line": 12
                  }
                }
              },
              "test": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pet",
                      "optional": false,
                      "range": [
                        248,
                        251
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isPet",
                    "optional": false,
                    "range": [
                      242,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    242,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "operator": "!",
                "prefix": true,
                "range": [
                  241,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "range": [
                237,
                318
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pet",
                    "optional": false,
                    "range": [
                      336,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 15
                      },
                      "start": {
                        "column": 17,
                        "line": 15
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "voice",
                  "optional": false,
                  "range": [
                    330,
                    335
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "range": [
                  330,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              },
              "range": [
                323,
                341
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            }
          ],
          "range": [
            231,
            343
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 89,
              "line": 11
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "speak",
          "optional": false,
          "range": [
            158,
            163
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 11
            },
            "start": {
              "column": 16,
              "line": 11
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "pet",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 11
                },
                "start": {
                  "column": 43,
                  "line": 11
                }
              },
              "range": [
                185,
                191
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TPet",
                  "optional": false,
                  "range": [
                    187,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 11
                    },
                    "start": {
                      "column": 45,
                      "line": 11
                    }
                  }
                },
                "range": [
                  187,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 11
                  },
                  "start": {
                    "column": 45,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              182,
              191
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 11
              },
              "start": {
                "column": 40,
                "line": 11
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "voice",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 79,
                  "line": 11
                },
                "start": {
                  "column": 56,
                  "line": 11
                }
              },
              "range": [
                198,
                221
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pet",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 11
                        },
                        "start": {
                          "column": 62,
                          "line": 11
                        }
                      },
                      "range": [
                        204,
                        210
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TPet",
                          "optional": false,
                          "range": [
                            206,
                            210
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 11
                            },
                            "start": {
                              "column": 64,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          206,
                          210
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 11
                          },
                          "start": {
                            "column": 64,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      201,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 11
                      },
                      "start": {
                        "column": 59,
                        "line": 11
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 11
                    },
                    "start": {
                      "column": 70,
                      "line": 11
                    }
                  },
                  "range": [
                    212,
                    221
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      215,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 11
                      },
                      "start": {
                        "column": 73,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  200,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 11
                  },
                  "start": {
                    "column": 58,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              193,
              221
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 11
              },
              "start": {
                "column": 51,
                "line": 11
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 88,
              "line": 11
            },
            "start": {
              "column": 80,
              "line": 11
            }
          },
          "range": [
            222,
            230
          ],
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "range": [
              224,
              230
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 11
              },
              "start": {
                "column": 82,
                "line": 11
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 39,
              "line": 11
            },
            "start": {
              "column": 21,
              "line": 11
            }
          },
          "range": [
            163,
            181
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pet",
                  "optional": false,
                  "range": [
                    177,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 11
                    },
                    "start": {
                      "column": 35,
                      "line": 11
                    }
                  }
                },
                "range": [
                  177,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 11
                  },
                  "start": {
                    "column": 35,
                    "line": 11
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TPet",
                "optional": false,
                "range": [
                  164,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                }
              },
              "out": false,
              "range": [
                164,
                180
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 11
                },
                "start": {
                  "column": 22,
                  "line": 11
                }
              }
            }
          ]
        },
        "range": [
          149,
          343
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
      "column": 1,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
