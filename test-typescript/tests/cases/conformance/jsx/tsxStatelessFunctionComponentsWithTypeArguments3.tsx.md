__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1069
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
          "raw": "'react'",
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
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
        "name": "OverloadComponent",
        "optional": false,
        "range": [
          50,
          67
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 3
          },
          "start": {
            "column": 39,
            "line": 3
          }
        },
        "range": [
          72,
          85
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "range": [
                74,
                77
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 41,
                  "line": 3
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                78,
                85
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 3
                },
                "start": {
                  "column": 45,
                  "line": 3
                }
              }
            },
            "range": [
              74,
              85
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 3
              },
              "start": {
                "column": 41,
                "line": 3
              }
            }
          },
          "range": [
            74,
            85
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 3
            },
            "start": {
              "column": 41,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 3
          },
          "start": {
            "column": 34,
            "line": 3
          }
        },
        "range": [
          67,
          70
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                68,
                69
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 35,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              68,
              69
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        33,
        86
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "OverloadComponent",
        "optional": false,
        "range": [
          104,
          121
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 86,
                "line": 4
              },
              "start": {
                "column": 42,
                "line": 4
              }
            },
            "range": [
              129,
              173
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      132,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 4
                      },
                      "start": {
                        "column": 45,
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
                        "column": 49,
                        "line": 4
                      },
                      "start": {
                        "column": 46,
                        "line": 4
                      }
                    },
                    "range": [
                      133,
                      136
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          135,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 4
                          },
                          "start": {
                            "column": 48,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        135,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 4
                        },
                        "start": {
                          "column": 48,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    132,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 4
                    },
                    "start": {
                      "column": 45,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      138,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 4
                      },
                      "start": {
                        "column": 51,
                        "line": 4
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 4
                      },
                      "start": {
                        "column": 53,
                        "line": 4
                      }
                    },
                    "range": [
                      140,
                      148
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        142,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 4
                        },
                        "start": {
                          "column": 55,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    138,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 4
                    },
                    "start": {
                      "column": 51,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "\"ignore-prop\"",
                    "value": "ignore-prop",
                    "range": [
                      150,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 4
                      },
                      "start": {
                        "column": 63,
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
                        "column": 85,
                        "line": 4
                      },
                      "start": {
                        "column": 76,
                        "line": 4
                      }
                    },
                    "range": [
                      163,
                      172
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        165,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 4
                        },
                        "start": {
                          "column": 78,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    150,
                    172
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 4
                    },
                    "start": {
                      "column": 63,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                131,
                173
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 4
                },
                "start": {
                  "column": 44,
                  "line": 4
                }
              }
            }
          },
          "range": [
            125,
            173
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 4
            },
            "start": {
              "column": 38,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 100,
            "line": 4
          },
          "start": {
            "column": 87,
            "line": 4
          }
        },
        "range": [
          174,
          187
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "range": [
                176,
                179
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 4
                },
                "start": {
                  "column": 89,
                  "line": 4
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                180,
                187
              ],
              "loc": {
                "end": {
                  "column": 100,
                  "line": 4
                },
                "start": {
                  "column": 93,
                  "line": 4
                }
              }
            },
            "range": [
              176,
              187
            ],
            "loc": {
              "end": {
                "column": 100,
                "line": 4
              },
              "start": {
                "column": 89,
                "line": 4
              }
            }
          },
          "range": [
            176,
            187
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 4
            },
            "start": {
              "column": 89,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 4
          },
          "start": {
            "column": 34,
            "line": 4
          }
        },
        "range": [
          121,
          124
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                122,
                123
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 4
                },
                "start": {
                  "column": 35,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              122,
              123
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 35,
                "line": 4
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
          "column": 101,
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
        "name": "OverloadComponent",
        "optional": false,
        "range": [
          206,
          223
        ],
        "loc": {
          "end": {
            "column": 34,
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
          "name": "attr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 5
              },
              "start": {
                "column": 45,
                "line": 5
              }
            },
            "range": [
              234,
              248
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      237,
                      238
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 5
                      },
                      "start": {
                        "column": 48,
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
                        "column": 52,
                        "line": 5
                      },
                      "start": {
                        "column": 49,
                        "line": 5
                      }
                    },
                    "range": [
                      238,
                      241
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          240,
                          241
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 5
                          },
                          "start": {
                            "column": 51,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        240,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 5
                        },
                        "start": {
                          "column": 51,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    237,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 5
                    },
                    "start": {
                      "column": 48,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      243,
                      244
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 5
                      },
                      "start": {
                        "column": 54,
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
                        "column": 58,
                        "line": 5
                      },
                      "start": {
                        "column": 55,
                        "line": 5
                      }
                    },
                    "range": [
                      244,
                      247
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          246,
                          247
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 5
                          },
                          "start": {
                            "column": 57,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        246,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 5
                        },
                        "start": {
                          "column": 57,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    243,
                    247
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 5
                    },
                    "start": {
                      "column": 54,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                236,
                248
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 5
                },
                "start": {
                  "column": 47,
                  "line": 5
                }
              }
            }
          },
          "range": [
            230,
            248
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 5
            },
            "start": {
              "column": 41,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 73,
            "line": 5
          },
          "start": {
            "column": 60,
            "line": 5
          }
        },
        "range": [
          249,
          262
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "range": [
                251,
                254
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 5
                },
                "start": {
                  "column": 62,
                  "line": 5
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                255,
                262
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 5
                },
                "start": {
                  "column": 66,
                  "line": 5
                }
              }
            },
            "range": [
              251,
              262
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 5
              },
              "start": {
                "column": 62,
                "line": 5
              }
            }
          },
          "range": [
            251,
            262
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 5
            },
            "start": {
              "column": 62,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 5
          },
          "start": {
            "column": 34,
            "line": 5
          }
        },
        "range": [
          223,
          229
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
                224,
                225
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 5
                },
                "start": {
                  "column": 35,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              224,
              225
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 5
              },
              "start": {
                "column": 35,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                227,
                228
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 5
                },
                "start": {
                  "column": 38,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              227,
              228
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 5
              },
              "start": {
                "column": 38,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        189,
        263
      ],
      "loc": {
        "end": {
          "column": 74,
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "range": [
                    369,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
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
                      374,
                      427
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "range": [
                            397,
                            401
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 9
                            },
                            "start": {
                              "column": 36,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          393,
                          402
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 9
                          },
                          "start": {
                            "column": 32,
                            "line": 9
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "a",
                          "range": [
                            403,
                            404
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 9
                            },
                            "start": {
                              "column": 42,
                              "line": 9
                            }
                          }
                        },
                        "value": {
                          "type": "Literal",
                          "raw": "\"hello\"",
                          "value": "hello",
                          "range": [
                            405,
                            412
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 9
                            },
                            "start": {
                              "column": 44,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          403,
                          412
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 9
                          },
                          "start": {
                            "column": 42,
                            "line": 9
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "range": [
                            413,
                            424
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 9
                            },
                            "start": {
                              "column": 52,
                              "line": 9
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          413,
                          424
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 9
                          },
                          "start": {
                            "column": 52,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "range": [
                        375,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 9
                        },
                        "start": {
                          "column": 14,
                          "line": 9
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    374,
                    427
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                },
                "range": [
                  369,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              365,
              428
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "name": "a1",
                  "optional": false,
                  "range": [
                    437,
                    439
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
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
                      442,
                      498
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "range": [
                            465,
                            469
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 10
                            },
                            "start": {
                              "column": 36,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          461,
                          470
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 10
                          },
                          "start": {
                            "column": 32,
                            "line": 10
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-pro",
                          "range": [
                            471,
                            481
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 10
                            },
                            "start": {
                              "column": 42,
                              "line": 10
                            }
                          }
                        },
                        "value": {
                          "type": "Literal",
                          "raw": "\"hello world\"",
                          "value": "hello world",
                          "range": [
                            482,
                            495
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 10
                            },
                            "start": {
                              "column": 53,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          471,
                          495
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 10
                          },
                          "start": {
                            "column": 42,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "range": [
                        443,
                        460
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 10
                        },
                        "start": {
                          "column": 14,
                          "line": 10
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    442,
                    498
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  437,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              433,
              499
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
                  "name": "a2",
                  "optional": false,
                  "range": [
                    508,
                    510
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
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
                      513,
                      544
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "range": [
                            536,
                            540
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 11
                            },
                            "start": {
                              "column": 36,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          532,
                          541
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 11
                          },
                          "start": {
                            "column": 32,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "range": [
                        514,
                        531
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 11
                        },
                        "start": {
                          "column": 14,
                          "line": 11
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 11
                      },
                      "start": {
                        "column": 13,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    513,
                    544
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                },
                "range": [
                  508,
                  544
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              504,
              545
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 11
              },
              "start": {
                "column": 4,
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
                  "name": "a3",
                  "optional": false,
                  "range": [
                    554,
                    556
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
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
                      559,
                      602
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "range": [
                            582,
                            586
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 12
                            },
                            "start": {
                              "column": 36,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          578,
                          587
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 12
                          },
                          "start": {
                            "column": 32,
                            "line": 12
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "range": [
                            588,
                            599
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 12
                            },
                            "start": {
                              "column": 42,
                              "line": 12
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          588,
                          599
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 12
                          },
                          "start": {
                            "column": 42,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "range": [
                        560,
                        577
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 12
                        },
                        "start": {
                          "column": 14,
                          "line": 12
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    559,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                },
                "range": [
                  554,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 56,
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
            "kind": "let",
            "range": [
              550,
              603
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 12
              },
              "start": {
                "column": 4,
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
                  "name": "a4",
                  "optional": false,
                  "range": [
                    612,
                    614
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
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
                      617,
                      638
                    ],
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "range": [
                        618,
                        635
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 13
                        },
                        "start": {
                          "column": 14,
                          "line": 13
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 13
                      },
                      "start": {
                        "column": 13,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    617,
                    638
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 13
                    },
                    "start": {
                      "column": 13,
                      "line": 13
                    }
                  }
                },
                "range": [
                  612,
                  638
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              608,
              639
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 13
              },
              "start": {
                "column": 4,
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
                  "name": "a5",
                  "optional": false,
                  "range": [
                    648,
                    650
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
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
                      653,
                      714
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "range": [
                            676,
                            680
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 14
                            },
                            "start": {
                              "column": 36,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          672,
                          681
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 14
                          },
                          "start": {
                            "column": 32,
                            "line": 14
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "range": [
                            682,
                            693
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 14
                            },
                            "start": {
                              "column": 42,
                              "line": 14
                            }
                          }
                        },
                        "value": {
                          "type": "Literal",
                          "raw": "\"hello\"",
                          "value": "hello",
                          "range": [
                            694,
                            701
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 14
                            },
                            "start": {
                              "column": 54,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          682,
                          701
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 14
                          },
                          "start": {
                            "column": 42,
                            "line": 14
                          }
                        }
                      },
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "range": [
                            706,
                            710
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 14
                            },
                            "start": {
                              "column": 66,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          702,
                          711
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 14
                          },
                          "start": {
                            "column": 62,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "range": [
                        654,
                        671
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 14
                        },
                        "start": {
                          "column": 14,
                          "line": 14
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    653,
                    714
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                },
                "range": [
                  648,
                  714
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              644,
              715
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                  "name": "a6",
                  "optional": false,
                  "range": [
                    724,
                    726
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
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
                      729,
                      782
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "range": [
                            752,
                            756
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 15
                            },
                            "start": {
                              "column": 36,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          748,
                          757
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 15
                          },
                          "start": {
                            "column": 32,
                            "line": 15
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "range": [
                            758,
                            769
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 15
                            },
                            "start": {
                              "column": 42,
                              "line": 15
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          758,
                          769
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 15
                          },
                          "start": {
                            "column": 42,
                            "line": 15
                          }
                        }
                      },
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "range": [
                            774,
                            778
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 15
                            },
                            "start": {
                              "column": 58,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          770,
                          779
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 15
                          },
                          "start": {
                            "column": 54,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "range": [
                        730,
                        747
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 15
                        },
                        "start": {
                          "column": 14,
                          "line": 15
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    729,
                    782
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 15
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  }
                },
                "range": [
                  724,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              720,
              783
            ],
            "loc": {
              "end": {
                "column": 67,
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
          359,
          785
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 88,
            "line": 8
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "range": [
          280,
          283
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 8
              },
              "start": {
                "column": 74,
                "line": 8
              }
            },
            "range": [
              345,
              348
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  347,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 8
                  },
                  "start": {
                    "column": 76,
                    "line": 8
                  }
                }
              },
              "range": [
                347,
                348
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 8
                },
                "start": {
                  "column": 76,
                  "line": 8
                }
              }
            }
          },
          "range": [
            341,
            348
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 8
            },
            "start": {
              "column": 70,
              "line": 8
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 86,
                "line": 8
              },
              "start": {
                "column": 83,
                "line": 8
              }
            },
            "range": [
              354,
              357
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  356,
                  357
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 8
                  },
                  "start": {
                    "column": 85,
                    "line": 8
                  }
                }
              },
              "range": [
                356,
                357
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 8
                },
                "start": {
                  "column": 85,
                  "line": 8
                }
              }
            }
          },
          "range": [
            350,
            357
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 8
            },
            "start": {
              "column": 79,
              "line": 8
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 69,
            "line": 8
          },
          "start": {
            "column": 12,
            "line": 8
          }
        },
        "range": [
          283,
          340
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      295,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 8
                      },
                      "start": {
                        "column": 24,
                        "line": 8
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
                        "line": 8
                      },
                      "start": {
                        "column": 25,
                        "line": 8
                      }
                    },
                    "range": [
                      296,
                      304
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        298,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 8
                        },
                        "start": {
                          "column": 27,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    295,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 8
                    },
                    "start": {
                      "column": 24,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                294,
                305
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 23,
                  "line": 8
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
                284,
                285
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              284,
              305
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
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
                      318,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 8
                      },
                      "start": {
                        "column": 47,
                        "line": 8
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
                        "column": 57,
                        "line": 8
                      },
                      "start": {
                        "column": 48,
                        "line": 8
                      }
                    },
                    "range": [
                      319,
                      328
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        321,
                        328
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 8
                        },
                        "start": {
                          "column": 50,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    318,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 8
                    },
                    "start": {
                      "column": 47,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      330,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 8
                      },
                      "start": {
                        "column": 59,
                        "line": 8
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
                        "column": 67,
                        "line": 8
                      },
                      "start": {
                        "column": 60,
                        "line": 8
                      }
                    },
                    "range": [
                      331,
                      338
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        332,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 8
                        },
                        "start": {
                          "column": 61,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    330,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 8
                    },
                    "start": {
                      "column": 59,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                317,
                339
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 8
                },
                "start": {
                  "column": 46,
                  "line": 8
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                307,
                308
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 8
                },
                "start": {
                  "column": 36,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              307,
              339
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 8
              },
              "start": {
                "column": 36,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        271,
        785
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 8
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
        "name": "Link",
        "optional": false,
        "range": [
          804,
          808
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 18
          },
          "start": {
            "column": 17,
            "line": 18
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 18
              },
              "start": {
                "column": 26,
                "line": 18
              }
            },
            "range": [
              813,
              837
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "range": [
                      816,
                      820
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 18
                      },
                      "start": {
                        "column": 29,
                        "line": 18
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
                        "column": 49,
                        "line": 18
                      },
                      "start": {
                        "column": 33,
                        "line": 18
                      }
                    },
                    "range": [
                      820,
                      836
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 18
                              },
                              "start": {
                                "column": 39,
                                "line": 18
                              }
                            },
                            "range": [
                              826,
                              829
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "range": [
                                  828,
                                  829
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                828,
                                829
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 18
                                },
                                "start": {
                                  "column": 41,
                                  "line": 18
                                }
                              }
                            }
                          },
                          "range": [
                            823,
                            829
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 18
                            },
                            "start": {
                              "column": 36,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 18
                          },
                          "start": {
                            "column": 43,
                            "line": 18
                          }
                        },
                        "range": [
                          830,
                          836
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            832,
                            836
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 18
                            },
                            "start": {
                              "column": 45,
                              "line": 18
                            }
                          }
                        }
                      },
                      "range": [
                        822,
                        836
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 18
                        },
                        "start": {
                          "column": 35,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    816,
                    836
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 18
                    },
                    "start": {
                      "column": 29,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                815,
                837
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 18
                },
                "start": {
                  "column": 28,
                  "line": 18
                }
              }
            }
          },
          "range": [
            812,
            837
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 18
            },
            "start": {
              "column": 25,
              "line": 18
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 64,
            "line": 18
          },
          "start": {
            "column": 51,
            "line": 18
          }
        },
        "range": [
          838,
          851
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "range": [
                840,
                843
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 18
                },
                "start": {
                  "column": 53,
                  "line": 18
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                844,
                851
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 18
                },
                "start": {
                  "column": 57,
                  "line": 18
                }
              }
            },
            "range": [
              840,
              851
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 18
              },
              "start": {
                "column": 53,
                "line": 18
              }
            }
          },
          "range": [
            840,
            851
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 18
            },
            "start": {
              "column": 53,
              "line": 18
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 18
          },
          "start": {
            "column": 21,
            "line": 18
          }
        },
        "range": [
          808,
          811
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                809,
                810
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 18
                },
                "start": {
                  "column": 22,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              809,
              810
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 18
              },
              "start": {
                "column": 22,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        787,
        852
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
        "name": "Link",
        "optional": false,
        "range": [
          870,
          874
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 19
          },
          "start": {
            "column": 17,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 19
              },
              "start": {
                "column": 26,
                "line": 19
              }
            },
            "range": [
              879,
              917
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "range": [
                      882,
                      886
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 19
                      },
                      "start": {
                        "column": 29,
                        "line": 19
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
                        "column": 63,
                        "line": 19
                      },
                      "start": {
                        "column": 33,
                        "line": 19
                      }
                    },
                    "range": [
                      886,
                      916
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 19
                              },
                              "start": {
                                "column": 40,
                                "line": 19
                              }
                            },
                            "range": [
                              893,
                              895
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "range": [
                                  894,
                                  895
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                894,
                                895
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 19
                                },
                                "start": {
                                  "column": 41,
                                  "line": 19
                                }
                              }
                            }
                          },
                          "range": [
                            889,
                            895
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 19
                            },
                            "start": {
                              "column": 36,
                              "line": 19
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 19
                              },
                              "start": {
                                "column": 48,
                                "line": 19
                              }
                            },
                            "range": [
                              901,
                              909
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                903,
                                909
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 19
                                },
                                "start": {
                                  "column": 50,
                                  "line": 19
                                }
                              }
                            }
                          },
                          "range": [
                            897,
                            909
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 19
                            },
                            "start": {
                              "column": 44,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 19
                          },
                          "start": {
                            "column": 57,
                            "line": 19
                          }
                        },
                        "range": [
                          910,
                          916
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            912,
                            916
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 19
                            },
                            "start": {
                              "column": 59,
                              "line": 19
                            }
                          }
                        }
                      },
                      "range": [
                        888,
                        916
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 19
                        },
                        "start": {
                          "column": 35,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    882,
                    916
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 19
                    },
                    "start": {
                      "column": 29,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                881,
                917
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 19
                },
                "start": {
                  "column": 28,
                  "line": 19
                }
              }
            }
          },
          "range": [
            878,
            917
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 19
            },
            "start": {
              "column": 25,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 78,
            "line": 19
          },
          "start": {
            "column": 65,
            "line": 19
          }
        },
        "range": [
          918,
          931
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "range": [
                920,
                923
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 19
                },
                "start": {
                  "column": 67,
                  "line": 19
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                924,
                931
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 19
                },
                "start": {
                  "column": 71,
                  "line": 19
                }
              }
            },
            "range": [
              920,
              931
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 19
              },
              "start": {
                "column": 67,
                "line": 19
              }
            }
          },
          "range": [
            920,
            931
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 19
            },
            "start": {
              "column": 67,
              "line": 19
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 19
          },
          "start": {
            "column": 21,
            "line": 19
          }
        },
        "range": [
          874,
          877
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                875,
                876
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 19
                },
                "start": {
                  "column": 22,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              875,
              876
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 19
              },
              "start": {
                "column": 22,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        853,
        932
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "range": [
                    988,
                    989
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
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
                      992,
                      1012
                    ],
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "func",
                          "range": [
                            998,
                            1002
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 21
                            },
                            "start": {
                              "column": 18,
                              "line": 21
                            }
                          }
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "range": [
                              1004,
                              1008
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 21
                              },
                              "start": {
                                "column": 24,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            1003,
                            1009
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 21
                            },
                            "start": {
                              "column": 23,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          998,
                          1009
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 21
                          },
                          "start": {
                            "column": 18,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Link",
                      "range": [
                        993,
                        997
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 21
                        },
                        "start": {
                          "column": 13,
                          "line": 21
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 21
                      },
                      "start": {
                        "column": 12,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    992,
                    1012
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 21
                    }
                  }
                },
                "range": [
                  988,
                  1012
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              984,
              1012
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                  "name": "o1",
                  "optional": false,
                  "range": [
                    1021,
                    1023
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
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
                      1026,
                      1066
                    ],
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "func",
                          "range": [
                            1032,
                            1036
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 22
                            },
                            "start": {
                              "column": 19,
                              "line": 22
                            }
                          }
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "range": [
                                1060,
                                1062
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 22
                                },
                                "start": {
                                  "column": 47,
                                  "line": 22
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 22
                                    }
                                  },
                                  "range": [
                                    1040,
                                    1047
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      1041,
                                      1047
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 22
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1039,
                                  1047
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 22
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 22
                                    }
                                  },
                                  "range": [
                                    1050,
                                    1057
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      1051,
                                      1057
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 22
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1049,
                                  1057
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 22
                                  }
                                }
                              }
                            ],
                            "range": [
                              1038,
                              1062
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 22
                              },
                              "start": {
                                "column": 25,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            1037,
                            1063
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 22
                            },
                            "start": {
                              "column": 24,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          1032,
                          1063
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 22
                          },
                          "start": {
                            "column": 19,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Link",
                      "range": [
                        1027,
                        1031
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 22
                        },
                        "start": {
                          "column": 14,
                          "line": 22
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 22
                      },
                      "start": {
                        "column": 13,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    1026,
                    1066
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 22
                    },
                    "start": {
                      "column": 13,
                      "line": 22
                    }
                  }
                },
                "range": [
                  1021,
                  1066
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1017,
              1067
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          978,
          1069
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 45,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createLink",
        "optional": false,
        "range": [
          942,
          952
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 20
              },
              "start": {
                "column": 24,
                "line": 20
              }
            },
            "range": [
              957,
              976
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 20
                      },
                      "start": {
                        "column": 28,
                        "line": 20
                      }
                    },
                    "range": [
                      961,
                      969
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        963,
                        969
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 20
                        },
                        "start": {
                          "column": 30,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    960,
                    969
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 20
                    },
                    "start": {
                      "column": 27,
                      "line": 20
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 20
                  },
                  "start": {
                    "column": 37,
                    "line": 20
                  }
                },
                "range": [
                  970,
                  976
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    972,
                    976
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 20
                    },
                    "start": {
                      "column": 39,
                      "line": 20
                    }
                  }
                }
              },
              "range": [
                959,
                976
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 20
                },
                "start": {
                  "column": 26,
                  "line": 20
                }
              }
            }
          },
          "range": [
            953,
            976
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 20
            },
            "start": {
              "column": 20,
              "line": 20
            }
          }
        }
      ],
      "range": [
        933,
        1069
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
