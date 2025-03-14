__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    111
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        110
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            110
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
                  28,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  33,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                }
              },
              "range": [
                21,
                35
              ],
              "loc": {
                "end": {
                  "column": 18,
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
                  47,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  49,
                  69
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
                              54,
                              58
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 3
                              },
                              "start": {
                                "column": 18,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "a",
                            "range": [
                              59,
                              61
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 3
                              },
                              "start": {
                                "column": 23,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            54,
                            61
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 3
                            },
                            "start": {
                              "column": 18,
                              "line": 3
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "42",
                          "value": 42,
                          "range": [
                            64,
                            66
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 3
                            },
                            "start": {
                              "column": 28,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          54,
                          66
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 3
                          },
                          "start": {
                            "column": 18,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        54,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 3
                        },
                        "start": {
                          "column": 18,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    52,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
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
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              },
              "range": [
                40,
                69
              ],
              "loc": {
                "end": {
                  "column": 33,
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
                  85,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  87,
                  108
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              99,
                              100
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
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "b",
                            "range": [
                              101,
                              103
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 4
                              },
                              "start": {
                                "column": 31,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            99,
                            103
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 4
                            },
                            "start": {
                              "column": 29,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          99,
                          105
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 4
                          },
                          "start": {
                            "column": 29,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        92,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 4
                        },
                        "start": {
                          "column": 22,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    90,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
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
                    "column": 38,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              },
              "range": [
                74,
                108
              ],
              "loc": {
                "end": {
                  "column": 38,
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
          "name": "S",
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
          110
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
