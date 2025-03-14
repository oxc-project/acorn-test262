__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    68,
    307
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "narrow",
        "optional": false,
        "range": [
          73,
          79
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
            "name": "def",
            "optional": false,
            "range": [
              87,
              90
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          },
          "range": [
            87,
            90
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 19,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "range": [
            99,
            105
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 3
            },
            "start": {
              "column": 31,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "range": [
                118,
                121
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "range": [
              118,
              121
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSUnknownKeyword",
                "range": [
                  131,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      143,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 5
                      },
                      "start": {
                        "column": 29,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    143,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 5
                    },
                    "start": {
                      "column": 29,
                      "line": 5
                    }
                  }
                },
                "range": [
                  140,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 5
                  },
                  "start": {
                    "column": 26,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              130,
              153
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "falseType": {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "range": [
                    186,
                    189
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
                "range": [
                  186,
                  189
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
              "range": [
                180,
                189
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "range": [
                175,
                176
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  198,
                  206
                ],
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "range": [
                          203,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 8
                          },
                          "start": {
                            "column": 35,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        203,
                        204
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 8
                        },
                        "start": {
                          "column": 35,
                          "line": 8
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "range": [
                          199,
                          202
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 8
                          },
                          "start": {
                            "column": 31,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        199,
                        202
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 8
                        },
                        "start": {
                          "column": 31,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      199,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 8
                      },
                      "start": {
                        "column": 31,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 8
                  },
                  "start": {
                    "column": 30,
                    "line": 8
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "narrow",
                "optional": false,
                "range": [
                  192,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              },
              "range": [
                192,
                206
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              }
            },
            "range": [
              166,
              213
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "range": [
                158,
                161
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              158,
              161
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "range": [
            118,
            213
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "range": [
              110,
              113
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "range": [
            110,
            113
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "range": [
          87,
          213
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 9
          },
          "start": {
            "column": 19,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        },
        "range": [
          79,
          84
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "range": [
                80,
                83
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              80,
              83
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        68,
        214
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 9
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
            "name": "parse",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              },
              "range": [
                235,
                267
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "def",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 11
                        },
                        "start": {
                          "column": 30,
                          "line": 11
                        }
                      },
                      "range": [
                        246,
                        259
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            254,
                            259
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "def",
                                "optional": false,
                                "range": [
                                  255,
                                  258
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                255,
                                258
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 11
                                },
                                "start": {
                                  "column": 39,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 11
                            },
                            "start": {
                              "column": 38,
                              "line": 11
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "narrow",
                          "optional": false,
                          "range": [
                            248,
                            254
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 11
                            },
                            "start": {
                              "column": 32,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          248,
                          259
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 11
                          },
                          "start": {
                            "column": 32,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      243,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 11
                      },
                      "start": {
                        "column": 27,
                        "line": 11
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 11
                    },
                    "start": {
                      "column": 45,
                      "line": 11
                    }
                  },
                  "range": [
                    261,
                    267
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "range": [
                        264,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 11
                        },
                        "start": {
                          "column": 48,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      264,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 11
                      },
                      "start": {
                        "column": 48,
                        "line": 11
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 11
                    },
                    "start": {
                      "column": 21,
                      "line": 11
                    }
                  },
                  "range": [
                    237,
                    242
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "range": [
                          238,
                          241
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
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
                        238,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
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
                  237,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 11
                  },
                  "start": {
                    "column": 21,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              230,
              267
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            230,
            267
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        216,
        268
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "result",
            "optional": false,
            "range": [
              276,
              282
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
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
                            294,
                            295
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 13
                            },
                            "start": {
                              "column": 24,
                              "line": 13
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "\"foo\"",
                          "value": "foo",
                          "range": [
                            297,
                            302
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 13
                            },
                            "start": {
                              "column": 27,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          294,
                          302
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 13
                          },
                          "start": {
                            "column": 24,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "range": [
                      292,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 13
                      },
                      "start": {
                        "column": 22,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  291,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 13
                  },
                  "start": {
                    "column": 21,
                    "line": 13
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "parse",
              "optional": false,
              "range": [
                285,
                290
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              285,
              306
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
              }
            }
          },
          "range": [
            276,
            306
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        270,
        307
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 37,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
