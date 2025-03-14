__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    480
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
                "column": 85,
                "line": 4
              },
              "start": {
                "column": 42,
                "line": 4
              }
            },
            "range": [
              129,
              172
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
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 4
                      },
                      "start": {
                        "column": 52,
                        "line": 4
                      }
                    },
                    "range": [
                      139,
                      147
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        141,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 4
                        },
                        "start": {
                          "column": 54,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    138,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
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
                      149,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 4
                      },
                      "start": {
                        "column": 62,
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
                        "column": 84,
                        "line": 4
                      },
                      "start": {
                        "column": 75,
                        "line": 4
                      }
                    },
                    "range": [
                      162,
                      171
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        164,
                        171
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 4
                        },
                        "start": {
                          "column": 77,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    149,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 4
                    },
                    "start": {
                      "column": 62,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                131,
                172
              ],
              "loc": {
                "end": {
                  "column": 85,
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
            172
          ],
          "loc": {
            "end": {
              "column": 85,
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
            "column": 99,
            "line": 4
          },
          "start": {
            "column": 86,
            "line": 4
          }
        },
        "range": [
          173,
          186
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
                175,
                178
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 4
                },
                "start": {
                  "column": 88,
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
                179,
                186
              ],
              "loc": {
                "end": {
                  "column": 99,
                  "line": 4
                },
                "start": {
                  "column": 92,
                  "line": 4
                }
              }
            },
            "range": [
              175,
              186
            ],
            "loc": {
              "end": {
                "column": 99,
                "line": 4
              },
              "start": {
                "column": 88,
                "line": 4
              }
            }
          },
          "range": [
            175,
            186
          ],
          "loc": {
            "end": {
              "column": 99,
              "line": 4
            },
            "start": {
              "column": 88,
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
        187
      ],
      "loc": {
        "end": {
          "column": 100,
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
          205,
          222
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
              233,
              247
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
                      236,
                      237
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
                      237,
                      240
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          239,
                          240
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
                        239,
                        240
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
                    236,
                    241
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
                      242,
                      243
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
                      243,
                      246
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          245,
                          246
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
                        245,
                        246
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
                    242,
                    246
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
                235,
                247
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
            229,
            247
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
          248,
          261
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
                250,
                253
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
                254,
                261
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
              250,
              261
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
            250,
            261
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
          222,
          228
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
                223,
                224
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
              223,
              224
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
                226,
                227
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
              226,
              227
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
        188,
        262
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
                    371,
                    373
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
                      376,
                      407
                    ],
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "a",
                          "range": [
                            395,
                            396
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 9
                            },
                            "start": {
                              "column": 32,
                              "line": 9
                            }
                          }
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg1",
                              "optional": false,
                              "range": [
                                398,
                                402
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 9
                                },
                                "start": {
                                  "column": 35,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                403,
                                404
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 9
                                },
                                "start": {
                                  "column": 40,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              398,
                              404
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 9
                              },
                              "start": {
                                "column": 35,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            397,
                            405
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 9
                            },
                            "start": {
                              "column": 34,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          395,
                          405
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 9
                          },
                          "start": {
                            "column": 32,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "range": [
                        377,
                        394
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
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    376,
                    407
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                },
                "range": [
                  371,
                  407
                ],
                "loc": {
                  "end": {
                    "column": 44,
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
              367,
              407
            ],
            "loc": {
              "end": {
                "column": 44,
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
                  "name": "a2",
                  "optional": false,
                  "range": [
                    416,
                    418
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
                      421,
                      464
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
                            444,
                            448
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
                          440,
                          449
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
                          "name": "ignore-prop",
                          "range": [
                            450,
                            461
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 10
                            },
                            "start": {
                              "column": 42,
                              "line": 10
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          450,
                          461
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
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
                        422,
                        439
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
                        "column": 56,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    421,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  416,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 56,
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
              412,
              464
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          361,
          480
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
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
          282,
          285
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
              347,
              350
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  349,
                  350
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
                349,
                350
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
            343,
            350
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
              356,
              359
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  358,
                  359
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
                358,
                359
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
            352,
            359
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
          285,
          342
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
                      297,
                      298
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
                      298,
                      306
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        300,
                        306
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
                    297,
                    306
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
                296,
                307
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
                286,
                287
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
              286,
              307
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
                      320,
                      321
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
                      321,
                      330
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        323,
                        330
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
                    320,
                    331
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
                      332,
                      333
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
                      333,
                      340
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        334,
                        340
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
                    332,
                    340
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
                319,
                341
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
                309,
                310
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
              309,
              341
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
        273,
        480
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
