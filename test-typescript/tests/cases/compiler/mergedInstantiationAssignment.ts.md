__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    544
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          89,
          109
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                97,
                98
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 6,
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
                98,
                107
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  105,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    },
                    "range": [
                      100,
                      103
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          102,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 4
                          },
                          "start": {
                            "column": 11,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        102,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 4
                        },
                        "start": {
                          "column": 11,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    99,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              }
            },
            "range": [
              93,
              107
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 2,
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
            "column": 32,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericObject",
        "optional": false,
        "range": [
          63,
          76
        ],
        "loc": {
          "end": {
            "column": 19,
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
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 3
          }
        },
        "range": [
          76,
          88
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSNumberKeyword",
              "range": [
                81,
                87
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 24,
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
                77,
                78
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              77,
              87
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        57,
        109
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "range": [
              117,
              119
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericObject",
                "optional": false,
                "range": [
                  126,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 15,
                    "line": 7
                  }
                }
              },
              "range": [
                122,
                141
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GenericObject",
                    "optional": false,
                    "range": [
                      145,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 7
                      },
                      "start": {
                        "column": 34,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    145,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 7
                    },
                    "start": {
                      "column": 34,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
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
                              166,
                              167
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 8
                              },
                              "start": {
                                "column": 5,
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
                                "column": 15,
                                "line": 8
                              },
                              "start": {
                                "column": 7,
                                "line": 8
                              }
                            },
                            "range": [
                              168,
                              176
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                170,
                                176
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 8
                                },
                                "start": {
                                  "column": 9,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "range": [
                            166,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 8
                            },
                            "start": {
                              "column": 5,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        164,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 8
                        },
                        "start": {
                          "column": 3,
                          "line": 8
                        }
                      }
                    },
                    {
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
                              183,
                              184
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 8
                              },
                              "start": {
                                "column": 22,
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
                                "column": 32,
                                "line": 8
                              },
                              "start": {
                                "column": 24,
                                "line": 8
                              }
                            },
                            "range": [
                              185,
                              193
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                187,
                                193
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 8
                                },
                                "start": {
                                  "column": 26,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "range": [
                            183,
                            193
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 8
                            },
                            "start": {
                              "column": 22,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        181,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 8
                        },
                        "start": {
                          "column": 20,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    164,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 8
                    },
                    "start": {
                      "column": 3,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                145,
                196
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 8
                },
                "start": {
                  "column": 34,
                  "line": 7
                }
              }
            },
            "range": [
              122,
              196
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 7
              }
            }
          },
          "range": [
            117,
            196
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        111,
        197
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 8
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "range": [
              198,
              200
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              201,
              202
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 9
              },
              "start": {
                "column": 3,
                "line": 9
              }
            }
          },
          "range": [
            198,
            202
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "432",
          "value": 432,
          "range": [
            205,
            208
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 9
            },
            "start": {
              "column": 7,
              "line": 9
            }
          }
        },
        "range": [
          198,
          208
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        198,
        209
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          256,
          275
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                268,
                269
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 12
                },
                "start": {
                  "column": 10,
                  "line": 12
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
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              },
              "range": [
                269,
                272
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    271,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  }
                },
                "range": [
                  271,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 12
                  },
                  "start": {
                    "column": 13,
                    "line": 12
                  }
                }
              }
            },
            "value": null,
            "range": [
              260,
              273
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 45,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericObjectWithoutSetter",
        "optional": false,
        "range": [
          217,
          243
        ],
        "loc": {
          "end": {
            "column": 32,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 11
          },
          "start": {
            "column": 32,
            "line": 11
          }
        },
        "range": [
          243,
          255
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSNumberKeyword",
              "range": [
                248,
                254
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 11
                },
                "start": {
                  "column": 37,
                  "line": 11
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
                244,
                245
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 11
                },
                "start": {
                  "column": 33,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              244,
              254
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 11
              },
              "start": {
                "column": 33,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        211,
        275
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
            "name": "v2",
            "optional": false,
            "range": [
              283,
              285
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericObjectWithoutSetter",
                "optional": false,
                "range": [
                  292,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              },
              "range": [
                288,
                320
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GenericObjectWithoutSetter",
                    "optional": false,
                    "range": [
                      324,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 15
                      },
                      "start": {
                        "column": 47,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    324,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 15
                    },
                    "start": {
                      "column": 47,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
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
                              358,
                              359
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 16
                              },
                              "start": {
                                "column": 5,
                                "line": 16
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
                                "column": 15,
                                "line": 16
                              },
                              "start": {
                                "column": 7,
                                "line": 16
                              }
                            },
                            "range": [
                              360,
                              368
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                362,
                                368
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 16
                                },
                                "start": {
                                  "column": 9,
                                  "line": 16
                                }
                              }
                            }
                          },
                          "range": [
                            358,
                            368
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 16
                            },
                            "start": {
                              "column": 5,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        356,
                        370
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 16
                        },
                        "start": {
                          "column": 3,
                          "line": 16
                        }
                      }
                    },
                    {
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
                              375,
                              376
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 16
                              },
                              "start": {
                                "column": 22,
                                "line": 16
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
                                "column": 32,
                                "line": 16
                              },
                              "start": {
                                "column": 24,
                                "line": 16
                              }
                            },
                            "range": [
                              377,
                              385
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                379,
                                385
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 16
                                },
                                "start": {
                                  "column": 26,
                                  "line": 16
                                }
                              }
                            }
                          },
                          "range": [
                            375,
                            385
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 16
                            },
                            "start": {
                              "column": 22,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        373,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 16
                        },
                        "start": {
                          "column": 20,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    356,
                    387
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 16
                    },
                    "start": {
                      "column": 3,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                324,
                388
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 16
                },
                "start": {
                  "column": 47,
                  "line": 15
                }
              }
            },
            "range": [
              288,
              388
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 16
              },
              "start": {
                "column": 11,
                "line": 15
              }
            }
          },
          "range": [
            283,
            388
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 16
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
        277,
        389
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "v2",
            "optional": false,
            "range": [
              390,
              392
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 17
              },
              "start": {
                "column": 0,
                "line": 17
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              393,
              394
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 17
              },
              "start": {
                "column": 3,
                "line": 17
              }
            }
          },
          "range": [
            390,
            394
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            397,
            399
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 17
            },
            "start": {
              "column": 7,
              "line": 17
            }
          }
        },
        "range": [
          390,
          399
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        390,
        400
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          421,
          446
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                429,
                430
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 20
                },
                "start": {
                  "column": 6,
                  "line": 20
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
                430,
                444
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  442,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 20
                  },
                  "start": {
                    "column": 19,
                    "line": 20
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 20
                      },
                      "start": {
                        "column": 9,
                        "line": 20
                      }
                    },
                    "range": [
                      432,
                      440
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        434,
                        440
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 20
                        },
                        "start": {
                          "column": 11,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    431,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 7,
                  "line": 20
                }
              }
            },
            "range": [
              425,
              444
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 19,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NormalObject",
        "optional": false,
        "range": [
          408,
          420
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        402,
        446
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "v3",
            "optional": false,
            "range": [
              454,
              456
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "NormalObject",
                "optional": false,
                "range": [
                  463,
                  475
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 23
                  },
                  "start": {
                    "column": 15,
                    "line": 23
                  }
                }
              },
              "range": [
                459,
                477
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NormalObject",
                    "optional": false,
                    "range": [
                      481,
                      493
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 23
                      },
                      "start": {
                        "column": 33,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    481,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 23
                    },
                    "start": {
                      "column": 33,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
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
                              501,
                              502
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 24
                              },
                              "start": {
                                "column": 5,
                                "line": 24
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
                                "column": 15,
                                "line": 24
                              },
                              "start": {
                                "column": 7,
                                "line": 24
                              }
                            },
                            "range": [
                              503,
                              511
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                505,
                                511
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 24
                                },
                                "start": {
                                  "column": 9,
                                  "line": 24
                                }
                              }
                            }
                          },
                          "range": [
                            501,
                            511
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 24
                            },
                            "start": {
                              "column": 5,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        499,
                        513
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 24
                        },
                        "start": {
                          "column": 3,
                          "line": 24
                        }
                      }
                    },
                    {
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
                              518,
                              519
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 24
                              },
                              "start": {
                                "column": 22,
                                "line": 24
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
                                "column": 32,
                                "line": 24
                              },
                              "start": {
                                "column": 24,
                                "line": 24
                              }
                            },
                            "range": [
                              520,
                              528
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                522,
                                528
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 24
                                },
                                "start": {
                                  "column": 26,
                                  "line": 24
                                }
                              }
                            }
                          },
                          "range": [
                            518,
                            528
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 24
                            },
                            "start": {
                              "column": 22,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        516,
                        530
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 24
                        },
                        "start": {
                          "column": 20,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "range": [
                    499,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 24
                    },
                    "start": {
                      "column": 3,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                481,
                531
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 24
                },
                "start": {
                  "column": 33,
                  "line": 23
                }
              }
            },
            "range": [
              459,
              531
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 24
              },
              "start": {
                "column": 11,
                "line": 23
              }
            }
          },
          "range": [
            454,
            531
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        448,
        532
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "v3",
            "optional": false,
            "range": [
              533,
              535
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              536,
              537
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 25
              },
              "start": {
                "column": 3,
                "line": 25
              }
            }
          },
          "range": [
            533,
            537
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            540,
            542
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 25
            },
            "start": {
              "column": 7,
              "line": 25
            }
          }
        },
        "range": [
          533,
          542
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        533,
        543
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
