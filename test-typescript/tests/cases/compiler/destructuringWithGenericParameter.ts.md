__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    359
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          22,
          41
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
              "name": "payload",
              "optional": false,
              "range": [
                28,
                35
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              },
              "range": [
                35,
                38
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    37,
                    38
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
                "range": [
                  37,
                  38
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
            },
            "value": null,
            "range": [
              28,
              39
            ],
            "loc": {
              "end": {
                "column": 15,
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
            "column": 22,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericClass",
        "optional": false,
        "range": [
          6,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        },
        "range": [
          18,
          21
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
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              19,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        41
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "genericObject",
            "optional": false,
            "range": [
              47,
              60
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "GenericClass",
              "optional": false,
              "range": [
                67,
                79
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                79,
                101
              ],
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "range": [
                          82,
                          90
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 5
                          },
                          "start": {
                            "column": 39,
                            "line": 5
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
                            "column": 55,
                            "line": 5
                          },
                          "start": {
                            "column": 47,
                            "line": 5
                          }
                        },
                        "range": [
                          90,
                          98
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            92,
                            98
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 5
                            },
                            "start": {
                              "column": 49,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        82,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 5
                        },
                        "start": {
                          "column": 39,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    80,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 5
                    },
                    "start": {
                      "column": 37,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 5
                },
                "start": {
                  "column": 36,
                  "line": 5
                }
              }
            },
            "range": [
              63,
              103
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          "range": [
            47,
            103
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        43,
        104
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "range": [
                      206,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "range": [
                      213,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    206,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "range": [
                  197,
                  205
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
              "optional": false,
              "range": [
                197,
                221
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              197,
              222
            ],
            "loc": {
              "end": {
                "column": 29,
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
          191,
          224
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 85,
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
        "name": "genericFunction",
        "optional": false,
        "range": [
          115,
          130
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 7
              },
              "start": {
                "column": 34,
                "line": 7
              }
            },
            "range": [
              140,
              157
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  154,
                  157
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        155,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 7
                        },
                        "start": {
                          "column": 49,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      155,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 7
                      },
                      "start": {
                        "column": 49,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 7
                  },
                  "start": {
                    "column": 48,
                    "line": 7
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericClass",
                "optional": false,
                "range": [
                  142,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 7
                  },
                  "start": {
                    "column": 36,
                    "line": 7
                  }
                }
              },
              "range": [
                142,
                157
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 7
                },
                "start": {
                  "column": 36,
                  "line": 7
                }
              }
            }
          },
          "range": [
            134,
            157
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 7
            },
            "start": {
              "column": 28,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 83,
                "line": 7
              },
              "start": {
                "column": 61,
                "line": 7
              }
            },
            "range": [
              167,
              189
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 7
                      },
                      "start": {
                        "column": 71,
                        "line": 7
                      }
                    },
                    "range": [
                      177,
                      180
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          179,
                          180
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 7
                          },
                          "start": {
                            "column": 73,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        179,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 7
                        },
                        "start": {
                          "column": 73,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    170,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 7
                    },
                    "start": {
                      "column": 64,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 7
                  },
                  "start": {
                    "column": 76,
                    "line": 7
                  }
                },
                "range": [
                  182,
                  189
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    185,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 7
                    },
                    "start": {
                      "column": 79,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                169,
                189
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 7
                },
                "start": {
                  "column": 63,
                  "line": 7
                }
              }
            }
          },
          "range": [
            159,
            189
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 7
            },
            "start": {
              "column": 53,
              "line": 7
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 7
          },
          "start": {
            "column": 24,
            "line": 7
          }
        },
        "range": [
          130,
          133
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
                131,
                132
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              131,
              132
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 25,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        106,
        224
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "genericObject",
            "optional": false,
            "range": [
              242,
              255
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 11
              },
              "start": {
                "column": 16,
                "line": 11
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          283,
                          284
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "greeting",
                            "optional": false,
                            "range": [
                              287,
                              295
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 12
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toLocaleLowerCase",
                            "optional": false,
                            "range": [
                              296,
                              313
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 12
                              },
                              "start": {
                                "column": 21,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            287,
                            313
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          287,
                          315
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 12
                          },
                          "start": {
                            "column": 12,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        283,
                        315
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    279,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                273,
                356
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 13
                },
                "start": {
                  "column": 47,
                  "line": 11
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
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
                      "name": "greeting",
                      "optional": false,
                      "range": [
                        259,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 11
                        },
                        "start": {
                          "column": 33,
                          "line": 11
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
                      "name": "greeting",
                      "optional": false,
                      "range": [
                        259,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 11
                        },
                        "start": {
                          "column": 33,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      259,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 11
                      },
                      "start": {
                        "column": 33,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  258,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 11
                  },
                  "start": {
                    "column": 32,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              257,
              356
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 31,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "genericFunction",
          "optional": false,
          "range": [
            226,
            241
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          226,
          357
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        226,
        358
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 13
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
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
