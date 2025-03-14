__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    484
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "range": [
          7,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"react\"",
          "value": "react",
          "range": [
            23,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "range": [
          15,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
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
        "name": "FunctionPropertyNames",
        "optional": false,
        "range": [
          38,
          59
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
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
                125,
                126
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 2
                },
                "start": {
                  "column": 92,
                  "line": 2
                }
              }
            },
            "range": [
              125,
              126
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 2
              },
              "start": {
                "column": 92,
                "line": 2
              }
            }
          },
          "range": [
            119,
            126
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 2
            },
            "start": {
              "column": 86,
              "line": 2
            }
          }
        },
        "objectType": {
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
                  79,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 2
                  },
                  "start": {
                    "column": 46,
                    "line": 2
                  }
                }
              },
              "range": [
                79,
                80
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 2
                },
                "start": {
                  "column": 46,
                  "line": 2
                }
              }
            },
            "range": [
              73,
              80
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 2
              },
              "start": {
                "column": 40,
                "line": 2
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              68,
              69
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 35,
                "line": 2
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    85,
                    86
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
                "range": [
                  85,
                  86
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
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    83,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 2
                    },
                    "start": {
                      "column": 50,
                      "line": 2
                    }
                  }
                },
                "range": [
                  83,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 2
                  },
                  "start": {
                    "column": 50,
                    "line": 2
                  }
                }
              },
              "range": [
                83,
                87
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 2
                },
                "start": {
                  "column": 50,
                  "line": 2
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  96,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 2
                  },
                  "start": {
                    "column": 63,
                    "line": 2
                  }
                }
              },
              "range": [
                96,
                104
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 2
                },
                "start": {
                  "column": 63,
                  "line": 2
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "range": [
                111,
                116
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 2
                },
                "start": {
                  "column": 78,
                  "line": 2
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  107,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 2
                  },
                  "start": {
                    "column": 74,
                    "line": 2
                  }
                }
              },
              "range": [
                107,
                108
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 2
                },
                "start": {
                  "column": 74,
                  "line": 2
                }
              }
            },
            "range": [
              83,
              116
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 2
              },
              "start": {
                "column": 50,
                "line": 2
              }
            }
          },
          "range": [
            65,
            118
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 2
            },
            "start": {
              "column": 32,
              "line": 2
            }
          }
        },
        "range": [
          65,
          127
        ],
        "loc": {
          "end": {
            "column": 94,
            "line": 2
          },
          "start": {
            "column": 32,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 2
          },
          "start": {
            "column": 26,
            "line": 2
          }
        },
        "range": [
          59,
          62
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
                60,
                61
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              60,
              61
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 27,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        33,
        128
      ],
      "loc": {
        "end": {
          "column": 95,
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
          146,
          219
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
              "name": "a",
              "optional": false,
              "range": [
                152,
                153
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                153,
                161
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  155,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "''",
              "value": "",
              "range": [
                164,
                166
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              }
            },
            "range": [
              152,
              167
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                172,
                173
              ],
              "loc": {
                "end": {
                  "column": 5,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                173,
                181
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  175,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                184,
                185
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "range": [
              172,
              186
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                191,
                192
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              },
              "range": [
                192,
                204
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  },
                  "range": [
                    197,
                    204
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      200,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  194,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              }
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  213,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 6
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                207,
                216
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              }
            },
            "range": [
              191,
              217
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestObject",
        "optional": false,
        "range": [
          135,
          145
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        129,
        219
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          243,
          295
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "model",
              "optional": false,
              "range": [
                249,
                254
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                  "column": 12,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              },
              "range": [
                254,
                257
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    256,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                },
                "range": [
                  256,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              249,
              258
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                263,
                266
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
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
                  "column": 33,
                  "line": 10
                },
                "start": {
                  "column": 7,
                  "line": 10
                }
              },
              "range": [
                266,
                292
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    289,
                    292
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
                          290,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 10
                          },
                          "start": {
                            "column": 31,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        290,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 10
                        },
                        "start": {
                          "column": 31,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 10
                    },
                    "start": {
                      "column": 30,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "range": [
                    268,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                },
                "range": [
                  268,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              263,
              293
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 23,
            "line": 8
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestProps",
        "optional": false,
        "range": [
          230,
          239
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 8
          },
          "start": {
            "column": 19,
            "line": 8
          }
        },
        "range": [
          239,
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
              "name": "T",
              "optional": false,
              "range": [
                240,
                241
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              240,
              241
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 20,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        220,
        295
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
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
              "type": "JSXFragment",
              "children": [],
              "closingFragment": {
                "type": "JSXClosingFragment",
                "range": [
                  345,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 12
                  },
                  "start": {
                    "column": 49,
                    "line": 12
                  }
                }
              },
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "range": [
                  343,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 12
                  },
                  "start": {
                    "column": 47,
                    "line": 12
                  }
                }
              },
              "range": [
                343,
                348
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 12
                },
                "start": {
                  "column": 47,
                  "line": 12
                }
              }
            },
            "range": [
              336,
              349
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 12
              },
              "start": {
                "column": 40,
                "line": 12
              }
            }
          }
        ],
        "range": [
          334,
          351
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 12
          },
          "start": {
            "column": 38,
            "line": 12
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          305,
          309
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            },
            "range": [
              318,
              332
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  329,
                  332
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
                        330,
                        331
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 12
                        },
                        "start": {
                          "column": 34,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      330,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 12
                      },
                      "start": {
                        "column": 34,
                        "line": 12
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 12
                  },
                  "start": {
                    "column": 33,
                    "line": 12
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TestProps",
                "optional": false,
                "range": [
                  320,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 24,
                    "line": 12
                  }
                }
              },
              "range": [
                320,
                332
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 12
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            }
          },
          "range": [
            313,
            332
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 12
            },
            "start": {
              "column": 17,
              "line": 12
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 12
          },
          "start": {
            "column": 13,
            "line": 12
          }
        },
        "range": [
          309,
          312
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
                310,
                311
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              310,
              311
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 14,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        296,
        351
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "model",
            "optional": false,
            "range": [
              358,
              363
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestObject",
              "optional": false,
              "range": [
                370,
                380
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 13
                },
                "start": {
                  "column": 18,
                  "line": 13
                }
              }
            },
            "range": [
              366,
              382
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 13
              }
            }
          },
          "range": [
            358,
            382
          ],
          "loc": {
            "end": {
              "column": 30,
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
        352,
        383
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "el1",
            "optional": false,
            "range": [
              391,
              394
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                397,
                427
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "model",
                    "range": [
                      403,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 18,
                        "line": 15
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "model",
                      "optional": false,
                      "range": [
                        410,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 15
                        },
                        "start": {
                          "column": 25,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      409,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 15
                      },
                      "start": {
                        "column": 24,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    403,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 15
                    },
                    "start": {
                      "column": 18,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      417,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 15
                      },
                      "start": {
                        "column": 32,
                        "line": 15
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"c\"",
                    "value": "c",
                    "range": [
                      421,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 15
                      },
                      "start": {
                        "column": 36,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    417,
                    424
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 15
                    },
                    "start": {
                      "column": 32,
                      "line": 15
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Test",
                "range": [
                  398,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 15
                  },
                  "start": {
                    "column": 13,
                    "line": 15
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 42,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
                }
              }
            },
            "range": [
              397,
              427
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          },
          "range": [
            391,
            427
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        385,
        428
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "el2",
            "optional": false,
            "range": [
              435,
              438
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                441,
                483
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "model",
                    "range": [
                      459,
                      464
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 16
                      },
                      "start": {
                        "column": 30,
                        "line": 16
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "model",
                      "optional": false,
                      "range": [
                        466,
                        471
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 16
                        },
                        "start": {
                          "column": 37,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      465,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 16
                      },
                      "start": {
                        "column": 36,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    459,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 16
                    },
                    "start": {
                      "column": 30,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      473,
                      476
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 16
                      },
                      "start": {
                        "column": 44,
                        "line": 16
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"c\"",
                    "value": "c",
                    "range": [
                      477,
                      480
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 16
                      },
                      "start": {
                        "column": 48,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    473,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 16
                    },
                    "start": {
                      "column": 44,
                      "line": 16
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Test",
                "range": [
                  442,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 16
                  },
                  "start": {
                    "column": 13,
                    "line": 16
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  446,
                  458
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TestObject",
                      "optional": false,
                      "range": [
                        447,
                        457
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 16
                        },
                        "start": {
                          "column": 18,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      447,
                      457
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 16
                      },
                      "start": {
                        "column": 18,
                        "line": 16
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 16
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 54,
                  "line": 16
                },
                "start": {
                  "column": 12,
                  "line": 16
                }
              }
            },
            "range": [
              441,
              483
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 16
              },
              "start": {
                "column": 12,
                "line": 16
              }
            }
          },
          "range": [
            435,
            483
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        429,
        484
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 55,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
