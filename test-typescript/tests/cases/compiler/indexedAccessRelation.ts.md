__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    276
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          41,
          98
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setState",
              "optional": false,
              "range": [
                47,
                55
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                55,
                96
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  94,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 4
                  },
                  "start": {
                    "column": 51,
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
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 4
                      },
                      "start": {
                        "column": 37,
                        "line": 4
                      }
                    },
                    "range": [
                      80,
                      92
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          86,
                          92
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "range": [
                                87,
                                88
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 4
                                },
                                "start": {
                                  "column": 44,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              87,
                              88
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 4
                              },
                              "start": {
                                "column": 44,
                                "line": 4
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "range": [
                                90,
                                91
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 4
                                },
                                "start": {
                                  "column": 47,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              90,
                              91
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 4
                              },
                              "start": {
                                "column": 47,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 4
                          },
                          "start": {
                            "column": 43,
                            "line": 4
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "range": [
                          82,
                          86
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 4
                          },
                          "start": {
                            "column": 39,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        82,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 4
                        },
                        "start": {
                          "column": 39,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    75,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 4
                    },
                    "start": {
                      "column": 32,
                      "line": 4
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                },
                "range": [
                  55,
                  74
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "range": [
                            72,
                            73
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
                          72,
                          73
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
                        66,
                        73
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 4
                        },
                        "start": {
                          "column": 23,
                          "line": 4
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        56,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      56,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 4
                      },
                      "start": {
                        "column": 13,
                        "line": 4
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 53,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "range": [
              47,
              96
            ],
            "loc": {
              "end": {
                "column": 53,
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
            "column": 19,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "range": [
          28,
          37
        ],
        "loc": {
          "end": {
            "column": 15,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        },
        "range": [
          37,
          40
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                38,
                39
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              38,
              39
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        98
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
      "type": "ExportNamedDeclaration",
      "range": [
        100,
        140
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            126,
            140
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  132,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
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
                    "column": 9,
                    "line": 8
                  },
                  "start": {
                    "column": 6,
                    "line": 8
                  }
                },
                "range": [
                  134,
                  137
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      136,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    136,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                132,
                138
              ],
              "loc": {
                "end": {
                  "column": 10,
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
              "column": 26,
              "line": 7
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "State",
          "optional": false,
          "range": [
            117,
            122
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 7
            },
            "start": {
              "column": 17,
              "line": 7
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 25,
              "line": 7
            },
            "start": {
              "column": 22,
              "line": 7
            }
          },
          "range": [
            122,
            125
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
                  123,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                123,
                124
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            }
          ]
        },
        "range": [
          107,
          140
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          152,
          154
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 12,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
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
          148,
          151
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        142,
        154
      ],
      "loc": {
        "end": {
          "column": 12,
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
          217,
          275
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                223,
                226
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
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
                226,
                273
              ],
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
                                  259,
                                  260
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 16
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  262,
                                  263
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                259,
                                263
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 16
                                },
                                "start": {
                                  "column": 24,
                                  "line": 16
                                }
                              }
                            }
                          ],
                          "range": [
                            257,
                            265
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 16
                            },
                            "start": {
                              "column": 22,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            243,
                            247
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
                          "name": "setState",
                          "optional": false,
                          "range": [
                            248,
                            256
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 16
                            },
                            "start": {
                              "column": 13,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          243,
                          256
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        243,
                        266
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      243,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
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
                  233,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    },
                    "range": [
                      228,
                      231
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          230,
                          231
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 15
                          },
                          "start": {
                            "column": 11,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        230,
                        231
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 15
                        },
                        "start": {
                          "column": 11,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    227,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
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
                  "column": 7,
                  "line": 15
                }
              }
            },
            "range": [
              223,
              273
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
            "column": 0,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "range": [
          162,
          166
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "range": [
          193,
          202
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 13
          },
          "start": {
            "column": 37,
            "line": 13
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          202,
          216
        ],
        "params": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "range": [
                    203,
                    204
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 13
                    },
                    "start": {
                      "column": 47,
                      "line": 13
                    }
                  }
                },
                "range": [
                  203,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 13
                  },
                  "start": {
                    "column": 47,
                    "line": 13
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    212,
                    215
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
                          213,
                          214
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 13
                          },
                          "start": {
                            "column": 57,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        213,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 13
                        },
                        "start": {
                          "column": 57,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 13
                    },
                    "start": {
                      "column": 56,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "range": [
                    207,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 13
                    },
                    "start": {
                      "column": 51,
                      "line": 13
                    }
                  }
                },
                "range": [
                  207,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 13
                  },
                  "start": {
                    "column": 51,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              203,
              215
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 13
              },
              "start": {
                "column": 47,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 13
          },
          "start": {
            "column": 46,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        },
        "range": [
          166,
          184
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
                "name": "Foo",
                "optional": false,
                "range": [
                  177,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 13
                  },
                  "start": {
                    "column": 21,
                    "line": 13
                  }
                }
              },
              "range": [
                177,
                180
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 13
                },
                "start": {
                  "column": 21,
                  "line": 13
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
                167,
                168
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              167,
              180
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 13
              },
              "start": {
                "column": 11,
                "line": 13
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
              "name": "S",
              "optional": false,
              "range": [
                182,
                183
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 13
                },
                "start": {
                  "column": 26,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              182,
              183
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 13
              },
              "start": {
                "column": 26,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        156,
        275
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
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
