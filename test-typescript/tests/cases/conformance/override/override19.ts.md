__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    428
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          5,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": true,
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                27,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              },
              "range": [
                31,
                36
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  33,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 1
                  },
                  "start": {
                    "column": 33,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              24,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 44,
              "line": 1
            },
            "start": {
              "column": 38,
              "line": 1
            }
          },
          "range": [
            38,
            44
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              41,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 41,
                "line": 1
              }
            }
          }
        },
        "range": [
          11,
          44
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "range": [
        0,
        45
      ],
      "loc": {
        "end": {
          "column": 45,
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
        "name": "CreateMixin",
        "optional": false,
        "range": [
          63,
          74
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 69,
                "line": 2
              },
              "start": {
                "column": 66,
                "line": 2
              }
            },
            "range": [
              112,
              115
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  114,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 2
                  },
                  "start": {
                    "column": 68,
                    "line": 2
                  }
                }
              },
              "range": [
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 2
                },
                "start": {
                  "column": 68,
                  "line": 2
                }
              }
            }
          },
          "range": [
            105,
            115
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 2
            },
            "start": {
              "column": 59,
              "line": 2
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 2
              },
              "start": {
                "column": 75,
                "line": 2
              }
            },
            "range": [
              121,
              124
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
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
                    "column": 78,
                    "line": 2
                  },
                  "start": {
                    "column": 77,
                    "line": 2
                  }
                }
              },
              "range": [
                123,
                124
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 2
                },
                "start": {
                  "column": 77,
                  "line": 2
                }
              }
            }
          },
          "range": [
            117,
            124
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 2
            },
            "start": {
              "column": 71,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 79,
            "line": 2
          }
        },
        "range": [
          125,
          188
        ],
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  127,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 2
                  },
                  "start": {
                    "column": 81,
                    "line": 2
                  }
                }
              },
              "range": [
                127,
                128
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 2
                },
                "start": {
                  "column": 81,
                  "line": 2
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "params": [
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "range": [
                          144,
                          148
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
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 3
                          },
                          "start": {
                            "column": 15,
                            "line": 3
                          }
                        },
                        "range": [
                          148,
                          155
                        ],
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "range": [
                              150,
                              153
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 3
                              },
                              "start": {
                                "column": 17,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            150,
                            155
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 3
                            },
                            "start": {
                              "column": 17,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        141,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    },
                    "range": [
                      156,
                      186
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
                            "name": "context",
                            "optional": false,
                            "range": [
                              160,
                              167
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 3
                              },
                              "start": {
                                "column": 27,
                                "line": 3
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
                                "column": 51,
                                "line": 3
                              },
                              "start": {
                                "column": 34,
                                "line": 3
                              }
                            },
                            "range": [
                              167,
                              184
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  181,
                                  184
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "range": [
                                        182,
                                        183
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 50,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 49,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "range": [
                                      182,
                                      183
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 50,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 49,
                                        "line": 3
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 3
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "InstanceType",
                                "optional": false,
                                "range": [
                                  169,
                                  181
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                169,
                                184
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 3
                                },
                                "start": {
                                  "column": 36,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            160,
                            184
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 3
                            },
                            "start": {
                              "column": 27,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        158,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 3
                        },
                        "start": {
                          "column": 25,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    136,
                    186
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 3
                    },
                    "start": {
                      "column": 3,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                131,
                188
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 4
                },
                "start": {
                  "column": 85,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            127,
            188
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 81,
              "line": 2
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 2
          },
          "start": {
            "column": 28,
            "line": 2
          }
        },
        "range": [
          74,
          104
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
                  85,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 39,
                    "line": 2
                  }
                }
              },
              "range": [
                85,
                88
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 2
                },
                "start": {
                  "column": 39,
                  "line": 2
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                75,
                76
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 29,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              75,
              88
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 2
              },
              "start": {
                "column": 29,
                "line": 2
              }
            }
          },
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
                  100,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 2
                  },
                  "start": {
                    "column": 54,
                    "line": 2
                  }
                }
              },
              "range": [
                100,
                103
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 2
                },
                "start": {
                  "column": 54,
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
                90,
                91
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 2
                },
                "start": {
                  "column": 44,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              90,
              103
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 2
              },
              "start": {
                "column": 44,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        46,
        188
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
          203,
          205
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 14,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Context",
        "optional": false,
        "range": [
          195,
          202
        ],
        "loc": {
          "end": {
            "column": 13,
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
      "range": [
        189,
        205
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          215,
          239
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "range": [
                221,
                232
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                232,
                237
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  235,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
                    "line": 8
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
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              221,
              237
            ],
            "loc": {
              "end": {
                "column": 20,
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
            "column": 8,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          213,
          214
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        207,
        239
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          281,
          324
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
                295,
                298
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                298,
                303
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  301,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 12
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
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "range": [
              286,
              303
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 3,
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
            "column": 40,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          247,
          248
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Context",
            "optional": false,
            "range": [
              269,
              276
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 28,
                "line": 11
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              278,
              279
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 11
              },
              "start": {
                "column": 37,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "CreateMixin",
          "optional": false,
          "range": [
            257,
            268
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 11
            },
            "start": {
              "column": 16,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          257,
          280
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 11
          },
          "start": {
            "column": 16,
            "line": 11
          }
        }
      },
      "range": [
        241,
        324
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          366,
          427
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomethang",
              "optional": false,
              "range": [
                381,
                392
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                392,
                397
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  395,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 16
                  },
                  "start": {
                    "column": 27,
                    "line": 16
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
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 24,
                  "line": 16
                }
              }
            },
            "range": [
              372,
              397
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 40,
            "line": 15
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
          332,
          333
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 15
          },
          "start": {
            "column": 6,
            "line": 15
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Context",
            "optional": false,
            "range": [
              354,
              361
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 15
              },
              "start": {
                "column": 28,
                "line": 15
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              363,
              364
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 15
              },
              "start": {
                "column": 37,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "CreateMixin",
          "optional": false,
          "range": [
            342,
            353
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
        },
        "optional": false,
        "range": [
          342,
          365
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 15
          },
          "start": {
            "column": 16,
            "line": 15
          }
        }
      },
      "range": [
        326,
        427
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
