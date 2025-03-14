__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    34,
    364
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          39,
          43
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  77,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "range": [
                77,
                78
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  81,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 12,
                    "line": 6
                  }
                }
              },
              "range": [
                81,
                86
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            77,
            86
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 6
            },
            "start": {
              "column": 8,
              "line": 6
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            72,
            73
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 6
            },
            "start": {
              "column": 3,
              "line": 6
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                89,
                90
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
              89,
              90
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
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                99,
                104
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 6
                },
                "start": {
                  "column": 30,
                  "line": 6
                }
              }
            },
            "range": [
              99,
              104
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
              },
              "start": {
                "column": 30,
                "line": 6
              }
            }
          },
          "falseType": {
            "type": "TSFunctionType",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 6
                },
                "start": {
                  "column": 48,
                  "line": 6
                }
              },
              "range": [
                117,
                123
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  120,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 6
                  },
                  "start": {
                    "column": 51,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              114,
              123
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 6
              },
              "start": {
                "column": 45,
                "line": 6
              }
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                107,
                111
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 6
                },
                "start": {
                  "column": 38,
                  "line": 6
                }
              }
            },
            "range": [
              107,
              111
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 6
              },
              "start": {
                "column": 38,
                "line": 6
              }
            }
          },
          "range": [
            89,
            123
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 6
            },
            "start": {
              "column": 20,
              "line": 6
            }
          }
        },
        "range": [
          67,
          125
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 33,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        },
        "range": [
          43,
          64
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  60,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 26,
                    "line": 5
                  }
                }
              },
              "range": [
                54,
                63
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
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
                44,
                45
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
              44,
              63
            ],
            "loc": {
              "end": {
                "column": 29,
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
        34,
        125
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "range": [
                185,
                188
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              }
            },
            "range": [
              178,
              189
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          }
        ],
        "range": [
          174,
          191
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 47,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          136,
          140
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
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
                "column": 45,
                "line": 9
              },
              "start": {
                "column": 42,
                "line": 9
              }
            },
            "range": [
              169,
              172
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  171,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 9
                  },
                  "start": {
                    "column": 44,
                    "line": 9
                  }
                }
              },
              "range": [
                171,
                172
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 9
                },
                "start": {
                  "column": 44,
                  "line": 9
                }
              }
            }
          },
          "range": [
            166,
            172
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 9
            },
            "start": {
              "column": 39,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 9
          },
          "start": {
            "column": 13,
            "line": 9
          }
        },
        "range": [
          140,
          165
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  155,
                  164
                ],
                "params": [
                  {
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
                          162,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 9
                          },
                          "start": {
                            "column": 35,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        162,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 9
                        },
                        "start": {
                          "column": 35,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      156,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 9
                      },
                      "start": {
                        "column": 29,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 9
                  },
                  "start": {
                    "column": 28,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Test",
                "optional": false,
                "range": [
                  151,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              },
              "range": [
                151,
                164
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
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
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              141,
              164
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        127,
        191
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
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
            "name": "res1",
            "optional": false,
            "range": [
              199,
              203
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
          "init": {
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        215,
                        218
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 14
                        },
                        "start": {
                          "column": 2,
                          "line": 14
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        220,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 14
                        },
                        "start": {
                          "column": 7,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      215,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 14
                      },
                      "start": {
                        "column": 2,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        228,
                        231
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 15
                        },
                        "start": {
                          "column": 2,
                          "line": 15
                        }
                      }
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        231,
                        239
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          234,
                          239
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 15
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
                          "column": 3,
                          "line": 16
                        },
                        "start": {
                          "column": 5,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      228,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 16
                      },
                      "start": {
                        "column": 2,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  211,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 13
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                206,
                210
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 13
                },
                "start": {
                  "column": 13,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              206,
              242
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 17
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          },
          "range": [
            199,
            242
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 17
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
        193,
        243
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 17
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
            "name": "res2",
            "optional": false,
            "range": [
              251,
              255
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        267,
                        270
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 20
                        },
                        "start": {
                          "column": 2,
                          "line": 20
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        272,
                        276
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 20
                        },
                        "start": {
                          "column": 7,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      267,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 20
                      },
                      "start": {
                        "column": 2,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        280,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 21
                        },
                        "start": {
                          "column": 2,
                          "line": 21
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          297,
                          302
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 22
                          },
                          "start": {
                            "column": 19,
                            "line": 21
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        285,
                        302
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 22
                        },
                        "start": {
                          "column": 7,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      280,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 22
                      },
                      "start": {
                        "column": 2,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  263,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 23
                  },
                  "start": {
                    "column": 18,
                    "line": 19
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                258,
                262
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 19
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              258,
              305
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 23
              },
              "start": {
                "column": 13,
                "line": 19
              }
            }
          },
          "range": [
            251,
            305
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        245,
        306
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 23
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
            "name": "res3",
            "optional": false,
            "range": [
              314,
              318
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        330,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 26
                        },
                        "start": {
                          "column": 2,
                          "line": 26
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        335,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 26
                        },
                        "start": {
                          "column": 7,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      330,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 26
                      },
                      "start": {
                        "column": 2,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        343,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 27
                        },
                        "start": {
                          "column": 2,
                          "line": 27
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          354,
                          359
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 28
                          },
                          "start": {
                            "column": 13,
                            "line": 27
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        348,
                        359
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 28
                        },
                        "start": {
                          "column": 7,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      343,
                      359
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 28
                      },
                      "start": {
                        "column": 2,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  326,
                  361
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 29
                  },
                  "start": {
                    "column": 18,
                    "line": 25
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                321,
                325
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 25
                },
                "start": {
                  "column": 13,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              321,
              362
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 29
              },
              "start": {
                "column": 13,
                "line": 25
              }
            }
          },
          "range": [
            314,
            362
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        308,
        363
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 29
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
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
