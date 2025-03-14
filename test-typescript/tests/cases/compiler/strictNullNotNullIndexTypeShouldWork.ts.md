__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    548
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          47
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "range": [
                18,
                24
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              },
              "range": [
                25,
                44
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        29,
                        33
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 2
                        },
                        "start": {
                          "column": 15,
                          "line": 2
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
                          "column": 27,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      },
                      "range": [
                        33,
                        41
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          35,
                          41
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 2
                          },
                          "start": {
                            "column": 21,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      29,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  27,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              18,
              45
            ],
            "loc": {
              "end": {
                "column": 31,
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
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          10,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        47
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          73,
          150
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
              "name": "attrs",
              "optional": false,
              "range": [
                79,
                84
              ],
              "loc": {
                "end": {
                  "column": 9,
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
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              },
              "range": [
                84,
                97
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    94,
                    97
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
                          95,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 6
                          },
                          "start": {
                            "column": 20,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        95,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 6
                        },
                        "start": {
                          "column": 20,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 19,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "range": [
                    86,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                },
                "range": [
                  86,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              79,
              98
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                104,
                105
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                105,
                148
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                118,
                                122
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 9
                                },
                                "start": {
                                  "column": 8,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "attrs",
                              "optional": false,
                              "range": [
                                123,
                                128
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 9
                                },
                                "start": {
                                  "column": 13,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              118,
                              128
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 9
                              },
                              "start": {
                                "column": 8,
                                "line": 9
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "range": [
                              129,
                              135
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            118,
                            135
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          118,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          137,
                          141
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 9
                          },
                          "start": {
                            "column": 27,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        118,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      118,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  108,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
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
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 8
                }
              }
            },
            "range": [
              104,
              148
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
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
            "line": 11
          },
          "start": {
            "column": 24,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          55,
          59
        ],
        "loc": {
          "end": {
            "column": 10,
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
            "column": 23,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        },
        "range": [
          59,
          72
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
                "name": "A",
                "optional": false,
                "range": [
                  70,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                70,
                71
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
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
                60,
                61
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              60,
              71
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        49,
        150
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          166,
          187
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                172,
                175
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
            "optional": true,
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
                176,
                184
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  178,
                  184
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
            "range": [
              172,
              185
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 14,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          162,
          165
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        152,
        187
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          225,
          350
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
              "name": "properties",
              "optional": false,
              "range": [
                231,
                241
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                  "column": 27,
                  "line": 18
                },
                "start": {
                  "column": 14,
                  "line": 18
                }
              },
              "range": [
                241,
                254
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    251,
                    254
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          252,
                          253
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 18
                          },
                          "start": {
                            "column": 25,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        252,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 18
                        },
                        "start": {
                          "column": 25,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 18
                    },
                    "start": {
                      "column": 24,
                      "line": 18
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "range": [
                    243,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 18
                    },
                    "start": {
                      "column": 16,
                      "line": 18
                    }
                  }
                },
                "range": [
                  243,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 18
                  },
                  "start": {
                    "column": 16,
                    "line": 18
                  }
                }
              }
            },
            "value": null,
            "range": [
              231,
              255
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
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
                261,
                264
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
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
                264,
                348
              ],
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
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  293,
                                  296
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 21
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "AssignmentPattern",
                                "range": [
                                  293,
                                  301
                                ],
                                "decorators": [],
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "range": [
                                    293,
                                    296
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 21
                                    }
                                  }
                                },
                                "optional": false,
                                "right": {
                                  "type": "Literal",
                                  "raw": "42",
                                  "value": 42,
                                  "range": [
                                    299,
                                    301
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 21
                                    }
                                  }
                                },
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                293,
                                301
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 21
                                },
                                "start": {
                                  "column": 16,
                                  "line": 21
                                }
                              }
                            }
                          ],
                          "range": [
                            291,
                            303
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 21
                            },
                            "start": {
                              "column": 14,
                              "line": 21
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              306,
                              310
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 21
                              },
                              "start": {
                                "column": 29,
                                "line": 21
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "properties",
                            "optional": false,
                            "range": [
                              311,
                              321
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 21
                              },
                              "start": {
                                "column": 34,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            306,
                            321
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 21
                            },
                            "start": {
                              "column": 29,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          291,
                          321
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 21
                          },
                          "start": {
                            "column": 14,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      285,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        338,
                        341
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 22
                        },
                        "start": {
                          "column": 15,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      331,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  275,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 18,
                    "line": 20
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
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
                  266,
                  274
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    268,
                    274
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
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 7,
                  "line": 20
                }
              }
            },
            "range": [
              261,
              348
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 36,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooClass",
        "optional": false,
        "range": [
          195,
          203
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 17
          },
          "start": {
            "column": 14,
            "line": 17
          }
        },
        "range": [
          203,
          224
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
                  214,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 17
                  },
                  "start": {
                    "column": 25,
                    "line": 17
                  }
                }
              },
              "range": [
                214,
                217
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 17
                },
                "start": {
                  "column": 25,
                  "line": 17
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  220,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 17
                  },
                  "start": {
                    "column": 31,
                    "line": 17
                  }
                }
              },
              "range": [
                220,
                223
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 17
                },
                "start": {
                  "column": 31,
                  "line": 17
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                204,
                205
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              204,
              223
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 17
              },
              "start": {
                "column": 15,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        189,
        350
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
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
          377,
          548
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
              "name": "attrs",
              "optional": false,
              "range": [
                383,
                388
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
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
                  "column": 22,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              },
              "range": [
                388,
                401
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    398,
                    401
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
                          399,
                          400
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 27
                          },
                          "start": {
                            "column": 20,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        399,
                        400
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 27
                        },
                        "start": {
                          "column": 20,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 27
                    },
                    "start": {
                      "column": 19,
                      "line": 27
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "range": [
                    390,
                    398
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 27
                    },
                    "start": {
                      "column": 11,
                      "line": 27
                    }
                  }
                },
                "range": [
                  390,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 27
                  },
                  "start": {
                    "column": 11,
                    "line": 27
                  }
                }
              }
            },
            "value": null,
            "range": [
              383,
              402
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                408,
                409
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
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
                409,
                546
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              429,
                              433
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 30
                              },
                              "start": {
                                "column": 15,
                                "line": 30
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "attrs",
                            "optional": false,
                            "range": [
                              434,
                              439
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 30
                              },
                              "start": {
                                "column": 20,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            429,
                            439
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 30
                            },
                            "start": {
                              "column": 15,
                              "line": 30
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "range": [
                            440,
                            446
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 30
                            },
                            "start": {
                              "column": 26,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          429,
                          446
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 30
                          },
                          "start": {
                            "column": 15,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        429,
                        447
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 30
                        },
                        "start": {
                          "column": 15,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      422,
                      448
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  412,
                  546
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 29
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
                  "column": 5,
                  "line": 31
                },
                "start": {
                  "column": 5,
                  "line": 29
                }
              }
            },
            "range": [
              408,
              546
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 25,
            "line": 26
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "range": [
          358,
          363
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 26
          },
          "start": {
            "column": 6,
            "line": 26
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 26
          },
          "start": {
            "column": 11,
            "line": 26
          }
        },
        "range": [
          363,
          376
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
                "name": "A",
                "optional": false,
                "range": [
                  374,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 26
                  },
                  "start": {
                    "column": 22,
                    "line": 26
                  }
                }
              },
              "range": [
                374,
                375
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 26
                },
                "start": {
                  "column": 22,
                  "line": 26
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
                364,
                365
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 26
                },
                "start": {
                  "column": 12,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              364,
              375
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 26
              },
              "start": {
                "column": 12,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        352,
        548
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
