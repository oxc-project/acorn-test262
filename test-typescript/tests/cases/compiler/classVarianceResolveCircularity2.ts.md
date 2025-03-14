__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    346
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        17,
        27
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          42,
          157
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "range": [
                48,
                51
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              },
              "range": [
                52,
                60
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  54,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              48,
              61
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
              "name": "Value",
              "optional": false,
              "range": [
                66,
                71
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "range": [
                            89,
                            93
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 7
                            },
                            "start": {
                              "column": 27,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          85,
                          88
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 7
                          },
                          "start": {
                            "column": 23,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        81,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 7
                        },
                        "start": {
                          "column": 19,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callme",
                    "optional": false,
                    "range": [
                      74,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    74,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    96,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 7
                    },
                    "start": {
                      "column": 34,
                      "line": 7
                    }
                  }
                },
                "range": [
                  74,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "range": [
                  100,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 38,
                    "line": 7
                  }
                }
              },
              "range": [
                74,
                103
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              }
            },
            "range": [
              66,
              104
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
              "name": "Field",
              "optional": false,
              "range": [
                109,
                114
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              },
              "range": [
                114,
                122
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  116,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              }
            },
            "value": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "range": [
                            140,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 8
                            },
                            "start": {
                              "column": 35,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          136,
                          139
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
                        132,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 8
                        },
                        "start": {
                          "column": 27,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callme",
                    "optional": false,
                    "range": [
                      125,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    125,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    147,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 8
                    },
                    "start": {
                      "column": 42,
                      "line": 8
                    }
                  }
                },
                "range": [
                  125,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "range": [
                  151,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 8
                  },
                  "start": {
                    "column": 46,
                    "line": 8
                  }
                }
              },
              "range": [
                125,
                154
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 8
                }
              }
            },
            "range": [
              109,
              155
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 13,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          35,
          38
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        },
        "range": [
          38,
          41
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
                39,
                40
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
            "out": false,
            "range": [
              39,
              40
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
          }
        ]
      },
      "range": [
        29,
        157
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
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
        "name": "callme",
        "optional": false,
        "range": [
          175,
          181
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
          }
        }
      },
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
                "column": 35,
                "line": 10
              },
              "start": {
                "column": 25,
                "line": 10
              }
            },
            "range": [
              183,
              193
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  188,
                  193
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      189,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
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
                    "column": 35,
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
                "name": "Foo",
                "optional": false,
                "range": [
                  185,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                }
              },
              "range": [
                185,
                193
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 10
                },
                "start": {
                  "column": 27,
                  "line": 10
                }
              }
            }
          },
          "range": [
            182,
            193
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 10
            },
            "start": {
              "column": 24,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 10
          },
          "start": {
            "column": 36,
            "line": 10
          }
        },
        "range": [
          194,
          204
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              199,
              204
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  200,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 10
                  },
                  "start": {
                    "column": 42,
                    "line": 10
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 10
              },
              "start": {
                "column": 41,
                "line": 10
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              196,
              199
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 10
              },
              "start": {
                "column": 38,
                "line": 10
              }
            }
          },
          "range": [
            196,
            204
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 10
            },
            "start": {
              "column": 38,
              "line": 10
            }
          }
        }
      },
      "range": [
        158,
        205
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
        "name": "callme",
        "optional": false,
        "range": [
          223,
          229
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 11
          },
          "start": {
            "column": 17,
            "line": 11
          }
        }
      },
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
                "column": 33,
                "line": 11
              },
              "start": {
                "column": 25,
                "line": 11
              }
            },
            "range": [
              231,
              239
            ],
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "range": [
                233,
                239
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 11
                },
                "start": {
                  "column": 27,
                  "line": 11
                }
              }
            }
          },
          "range": [
            230,
            239
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 11
            },
            "start": {
              "column": 24,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 11
          },
          "start": {
            "column": 34,
            "line": 11
          }
        },
        "range": [
          240,
          248
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            242,
            248
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 11
            },
            "start": {
              "column": 36,
              "line": 11
            }
          }
        }
      },
      "range": [
        206,
        249
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          264,
          346
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                270,
                273
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              },
              "range": [
                274,
                282
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    279,
                    282
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
                          280,
                          281
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        280,
                        281
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 14
                        },
                        "start": {
                          "column": 14,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "range": [
                    276,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "range": [
                  276,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              }
            },
            "value": null,
            "range": [
              270,
              283
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                288,
                299
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                299,
                344
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
                            323,
                            327
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 16
                            },
                            "start": {
                              "column": 8,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "range": [
                            328,
                            331
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 16
                            },
                            "start": {
                              "column": 13,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          323,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          334,
                          337
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 16
                          },
                          "start": {
                            "column": 19,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        323,
                        337
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      323,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  313,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 29,
                    "line": 15
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 15
                      },
                      "start": {
                        "column": 19,
                        "line": 15
                      }
                    },
                    "range": [
                      303,
                      311
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          308,
                          311
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
                                309,
                                310
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 15
                                },
                                "start": {
                                  "column": 25,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              309,
                              310
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 15
                              },
                              "start": {
                                "column": 25,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 15
                          },
                          "start": {
                            "column": 24,
                            "line": 15
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "range": [
                          305,
                          308
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 15
                          },
                          "start": {
                            "column": 21,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        305,
                        311
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 15
                        },
                        "start": {
                          "column": 21,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    300,
                    311
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 15
                    },
                    "start": {
                      "column": 16,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            },
            "range": [
              288,
              344
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 13,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          257,
          260
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        },
        "range": [
          260,
          263
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
                261,
                262
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              261,
              262
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 10,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        251,
        346
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
      "column": 1,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
