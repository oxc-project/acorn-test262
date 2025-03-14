__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    98
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        97
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            97
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "name": "a",
                "range": [
                  21,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 6,
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
              "value": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  26,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              },
              "range": [
                21,
                28
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
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "b",
                "range": [
                  33,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  35,
                  55
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              40,
                              44
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
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "c",
                            "range": [
                              45,
                              47
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 3
                              },
                              "start": {
                                "column": 16,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            40,
                            47
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 3
                            },
                            "start": {
                              "column": 11,
                              "line": 3
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "42",
                          "value": 42,
                          "range": [
                            50,
                            52
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 3
                            },
                            "start": {
                              "column": 21,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          40,
                          52
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 3
                          },
                          "start": {
                            "column": 11,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        40,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 3
                        },
                        "start": {
                          "column": 11,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    38,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 9,
                      "line": 3
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
                  }
                }
              },
              "range": [
                33,
                55
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "c",
                "range": [
                  64,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  66,
                  95
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "+=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              80,
                              84
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 4
                              },
                              "start": {
                                "column": 24,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "a",
                            "range": [
                              85,
                              87
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 4
                              },
                              "start": {
                                "column": 29,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            80,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 4
                            },
                            "start": {
                              "column": 24,
                              "line": 4
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            91,
                            92
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
                        "range": [
                          80,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 4
                          },
                          "start": {
                            "column": 24,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        80,
                        93
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    78,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 4
                    },
                    "start": {
                      "column": 22,
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      },
                      "range": [
                        68,
                        76
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          70,
                          76
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 4
                          },
                          "start": {
                            "column": 14,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      67,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              },
              "range": [
                60,
                95
              ],
              "loc": {
                "end": {
                  "column": 39,
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
              "column": 15,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            13,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          97
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    94,
    298
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        94,
        190
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false,
          "range": [
            118,
            140
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 2
            },
            "start": {
              "column": 24,
              "line": 2
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "receiver",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 79,
                  "line": 2
                },
                "start": {
                  "column": 76,
                  "line": 2
                }
              },
              "range": [
                170,
                173
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    172,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 2
                    },
                    "start": {
                      "column": 78,
                      "line": 2
                    }
                  }
                },
                "range": [
                  172,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 2
                  },
                  "start": {
                    "column": 78,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              162,
              173
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 2
              },
              "start": {
                "column": 68,
                "line": 2
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 91,
                  "line": 2
                },
                "start": {
                  "column": 86,
                  "line": 2
                }
              },
              "range": [
                180,
                185
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  182,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 2
                  },
                  "start": {
                    "column": 88,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              175,
              185
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 2
              },
              "start": {
                "column": 81,
                "line": 2
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 95,
              "line": 2
            },
            "start": {
              "column": 92,
              "line": 2
            }
          },
          "range": [
            186,
            189
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                188,
                189
              ],
              "loc": {
                "end": {
                  "column": 95,
                  "line": 2
                },
                "start": {
                  "column": 94,
                  "line": 2
                }
              }
            },
            "range": [
              188,
              189
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 2
              },
              "start": {
                "column": 94,
                "line": 2
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 67,
              "line": 2
            },
            "start": {
              "column": 46,
              "line": 2
            }
          },
          "range": [
            140,
            161
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  151,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 2
                  },
                  "start": {
                    "column": 57,
                    "line": 2
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
                  141,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 2
                  },
                  "start": {
                    "column": 47,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                141,
                157
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 2
                },
                "start": {
                  "column": 47,
                  "line": 2
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
                "name": "V",
                "optional": false,
                "range": [
                  159,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 2
                  },
                  "start": {
                    "column": 65,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                159,
                160
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 2
                },
                "start": {
                  "column": 65,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          101,
          190
        ],
        "loc": {
          "end": {
            "column": 96,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 96,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        191,
        297
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldSet",
          "optional": false,
          "range": [
            215,
            237
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "receiver",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 79,
                  "line": 3
                },
                "start": {
                  "column": 76,
                  "line": 3
                }
              },
              "range": [
                267,
                270
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    269,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 3
                    },
                    "start": {
                      "column": 78,
                      "line": 3
                    }
                  }
                },
                "range": [
                  269,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 3
                  },
                  "start": {
                    "column": 78,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              259,
              270
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 3
              },
              "start": {
                "column": 68,
                "line": 3
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 91,
                  "line": 3
                },
                "start": {
                  "column": 86,
                  "line": 3
                }
              },
              "range": [
                277,
                282
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  279,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 3
                  },
                  "start": {
                    "column": 88,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              272,
              282
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 3
              },
              "start": {
                "column": 81,
                "line": 3
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 101,
                  "line": 3
                },
                "start": {
                  "column": 98,
                  "line": 3
                }
              },
              "range": [
                289,
                292
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    291,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 3
                    },
                    "start": {
                      "column": 100,
                      "line": 3
                    }
                  }
                },
                "range": [
                  291,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 101,
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
              284,
              292
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 3
              },
              "start": {
                "column": 93,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 105,
              "line": 3
            },
            "start": {
              "column": 102,
              "line": 3
            }
          },
          "range": [
            293,
            296
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                295,
                296
              ],
              "loc": {
                "end": {
                  "column": 105,
                  "line": 3
                },
                "start": {
                  "column": 104,
                  "line": 3
                }
              }
            },
            "range": [
              295,
              296
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 3
              },
              "start": {
                "column": 104,
                "line": 3
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 67,
              "line": 3
            },
            "start": {
              "column": 46,
              "line": 3
            }
          },
          "range": [
            237,
            258
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "range": [
                  248,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 3
                  },
                  "start": {
                    "column": 57,
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
                  238,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 3
                  },
                  "start": {
                    "column": 47,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                238,
                254
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 3
                },
                "start": {
                  "column": 47,
                  "line": 3
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
                "name": "V",
                "optional": false,
                "range": [
                  256,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 3
                  },
                  "start": {
                    "column": 65,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                256,
                257
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 3
                },
                "start": {
                  "column": 65,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          198,
          297
        ],
        "loc": {
          "end": {
            "column": 106,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 106,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
