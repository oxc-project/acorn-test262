__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    5482
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequiresLeadingSlash",
        "optional": false,
        "range": [
          5,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "/",
              "raw": "/"
            },
            "range": [
              28,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 28,
                "line": 1
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              38,
              40
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 1
              },
              "start": {
                "column": 38,
                "line": 1
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              32,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 32,
                "line": 1
              }
            }
          }
        ],
        "range": [
          28,
          40
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 1
          },
          "start": {
            "column": 28,
            "line": 1
          }
        }
      },
      "range": [
        0,
        41
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                56,
                78
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequiresLeadingSlash",
                  "optional": false,
                  "range": [
                    58,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "range": [
                  58,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              55,
              78
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"/bin\"",
            "value": "/bin",
            "range": [
              81,
              87
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 32,
                "line": 4
              }
            }
          },
          "range": [
            55,
            87
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        49,
        88
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              },
              "range": [
                107,
                129
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequiresLeadingSlash",
                  "optional": false,
                  "range": [
                    109,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 7
                    },
                    "start": {
                      "column": 9,
                      "line": 7
                    }
                  }
                },
                "range": [
                  109,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              106,
              129
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"no slash\"",
            "value": "no slash",
            "range": [
              132,
              142
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 32,
                "line": 7
              }
            }
          },
          "range": [
            106,
            142
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 7
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
        100,
        143
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Protocol",
        "optional": false,
        "range": [
          150,
          158
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              197,
              200
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 9
              },
              "start": {
                "column": 52,
                "line": 9
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "://",
              "raw": "://"
            },
            "range": [
              201,
              207
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 9
              },
              "start": {
                "column": 56,
                "line": 9
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              208,
              210
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 9
              },
              "start": {
                "column": 63,
                "line": 9
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                200,
                201
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 9
                },
                "start": {
                  "column": 55,
                  "line": 9
                }
              }
            },
            "range": [
              200,
              201
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 9
              },
              "start": {
                "column": 55,
                "line": 9
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                207,
                208
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 9
                },
                "start": {
                  "column": 62,
                  "line": 9
                }
              }
            },
            "range": [
              207,
              208
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 9
              },
              "start": {
                "column": 62,
                "line": 9
              }
            }
          }
        ],
        "range": [
          197,
          210
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 9
          },
          "start": {
            "column": 52,
            "line": 9
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 9
          },
          "start": {
            "column": 13,
            "line": 9
          }
        },
        "range": [
          158,
          194
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                169,
                175
              ],
              "loc": {
                "end": {
                  "column": 30,
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
                159,
                160
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
              159,
              175
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                187,
                193
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 9
                },
                "start": {
                  "column": 42,
                  "line": 9
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
                177,
                178
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
            "out": false,
            "range": [
              177,
              193
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 9
              },
              "start": {
                "column": 32,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        145,
        211
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          284,
          287
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 10
          },
          "start": {
            "column": 72,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "download",
        "optional": false,
        "range": [
          221,
          229
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "hostSpec",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 70,
                "line": 10
              },
              "start": {
                "column": 26,
                "line": 10
              }
            },
            "range": [
              238,
              282
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  248,
                  282
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"http\"",
                          "value": "http",
                          "range": [
                            249,
                            255
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 10
                            },
                            "start": {
                              "column": 37,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          249,
                          255
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 10
                          },
                          "start": {
                            "column": 37,
                            "line": 10
                          }
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"https\"",
                          "value": "https",
                          "range": [
                            258,
                            265
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 10
                            },
                            "start": {
                              "column": 46,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          258,
                          265
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 10
                          },
                          "start": {
                            "column": 46,
                            "line": 10
                          }
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"ftp\"",
                          "value": "ftp",
                          "range": [
                            268,
                            273
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 10
                            },
                            "start": {
                              "column": 56,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          268,
                          273
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 10
                          },
                          "start": {
                            "column": 56,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      249,
                      273
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 10
                      },
                      "start": {
                        "column": 37,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      275,
                      281
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 10
                      },
                      "start": {
                        "column": 63,
                        "line": 10
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 10
                  },
                  "start": {
                    "column": 36,
                    "line": 10
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Protocol",
                "optional": false,
                "range": [
                  240,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 28,
                    "line": 10
                  }
                }
              },
              "range": [
                240,
                282
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 10
                },
                "start": {
                  "column": 28,
                  "line": 10
                }
              }
            }
          },
          "range": [
            230,
            282
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 10
            },
            "start": {
              "column": 18,
              "line": 10
            }
          }
        }
      ],
      "range": [
        212,
        287
      ],
      "loc": {
        "end": {
          "column": 75,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"http://example.com/protocol\"",
            "value": "http://example.com/protocol",
            "range": [
              317,
              346
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "download",
          "optional": false,
          "range": [
            308,
            316
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          308,
          347
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        308,
        348
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"example.com/noprotocol\"",
            "value": "example.com/noprotocol",
            "range": [
              388,
              412
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 14
              },
              "start": {
                "column": 9,
                "line": 14
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "download",
          "optional": false,
          "range": [
            379,
            387
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "optional": false,
        "range": [
          379,
          413
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        379,
        414
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"gopher://example.com/protocol\"",
            "value": "gopher://example.com/protocol",
            "range": [
              460,
              491
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 16
              },
              "start": {
                "column": 9,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "download",
          "optional": false,
          "range": [
            451,
            459
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          451,
          492
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        451,
        493
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 59,
                  "line": 18
                },
                "start": {
                  "column": 7,
                  "line": 18
                }
              },
              "range": [
                502,
                554
              ],
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RequiresLeadingSlash",
                    "optional": false,
                    "range": [
                      504,
                      524
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 18
                      },
                      "start": {
                        "column": 9,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    504,
                    524
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 18
                    },
                    "start": {
                      "column": 9,
                      "line": 18
                    }
                  }
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "range": [
                    533,
                    539
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 18
                    },
                    "start": {
                      "column": 38,
                      "line": 18
                    }
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      549,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 18
                      },
                      "start": {
                        "column": 54,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    549,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 18
                    },
                    "start": {
                      "column": 54,
                      "line": 18
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
                      542,
                      546
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 18
                      },
                      "start": {
                        "column": 47,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    542,
                    546
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 18
                    },
                    "start": {
                      "column": 47,
                      "line": 18
                    }
                  }
                },
                "range": [
                  504,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 18
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              501,
              554
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              557,
              561
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 18
              },
              "start": {
                "column": 62,
                "line": 18
              }
            }
          },
          "range": [
            501,
            561
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        495,
        562
      ],
      "loc": {
        "end": {
          "column": 67,
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
        "name": "bools",
        "optional": false,
        "range": [
          581,
          586
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 20
          },
          "start": {
            "column": 17,
            "line": 20
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
                "column": 38,
                "line": 20
              },
              "start": {
                "column": 24,
                "line": 20
              }
            },
            "range": [
              588,
              602
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    590,
                    593
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 20
                    },
                    "start": {
                      "column": 26,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    600,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 20
                    },
                    "start": {
                      "column": 36,
                      "line": 20
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    593,
                    600
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 20
                    },
                    "start": {
                      "column": 29,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                590,
                602
              ],
              "loc": {
                "end": {
                  "column": 38,
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
            587,
            602
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 20
            },
            "start": {
              "column": 23,
              "line": 20
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 20
          },
          "start": {
            "column": 39,
            "line": 20
          }
        },
        "range": [
          603,
          609
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            605,
            609
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 20
            },
            "start": {
              "column": 41,
              "line": 20
            }
          }
        }
      },
      "range": [
        564,
        610
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"true\"",
            "value": "true",
            "range": [
              623,
              629
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bools",
          "optional": false,
          "range": [
            617,
            622
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          617,
          630
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        617,
        631
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"false\"",
            "value": "false",
            "range": [
              638,
              645
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bools",
          "optional": false,
          "range": [
            632,
            637
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          632,
          646
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        632,
        647
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 23
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"other\"",
            "value": "other",
            "range": [
              665,
              672
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bools",
          "optional": false,
          "range": [
            659,
            664
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          659,
          673
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        659,
        674
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pat",
        "optional": false,
        "range": [
          681,
          684
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 28
          },
          "start": {
            "column": 5,
            "line": 28
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              724,
              727
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 28
              },
              "start": {
                "column": 48,
                "line": 28
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              728,
              730
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 28
              },
              "start": {
                "column": 52,
                "line": 28
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                727,
                728
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 28
                },
                "start": {
                  "column": 51,
                  "line": 28
                }
              }
            },
            "range": [
              727,
              728
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 28
              },
              "start": {
                "column": 51,
                "line": 28
              }
            }
          }
        ],
        "range": [
          724,
          730
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 28
          },
          "start": {
            "column": 48,
            "line": 28
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 45,
            "line": 28
          },
          "start": {
            "column": 8,
            "line": 28
          }
        },
        "range": [
          684,
          721
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    695,
                    701
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 28
                    },
                    "start": {
                      "column": 19,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    704,
                    708
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 28
                    },
                    "start": {
                      "column": 28,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    711,
                    720
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 28
                    },
                    "start": {
                      "column": 35,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                695,
                720
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 28
                },
                "start": {
                  "column": 19,
                  "line": 28
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
                685,
                686
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              685,
              720
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 28
              },
              "start": {
                "column": 9,
                "line": 28
              }
            }
          }
        ]
      },
      "range": [
        676,
        730
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
        "name": "nullishes",
        "optional": false,
        "range": [
          748,
          757
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 29
          },
          "start": {
            "column": 17,
            "line": 29
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
                "column": 51,
                "line": 29
              },
              "start": {
                "column": 28,
                "line": 29
              }
            },
            "range": [
              759,
              782
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  764,
                  782
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "range": [
                          765,
                          769
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 29
                          },
                          "start": {
                            "column": 34,
                            "line": 29
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          772,
                          781
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 29
                          },
                          "start": {
                            "column": 41,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "range": [
                      765,
                      781
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 29
                      },
                      "start": {
                        "column": 34,
                        "line": 29
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 29
                  },
                  "start": {
                    "column": 33,
                    "line": 29
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pat",
                "optional": false,
                "range": [
                  761,
                  764
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 29
                  },
                  "start": {
                    "column": 30,
                    "line": 29
                  }
                }
              },
              "range": [
                761,
                782
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 29
                },
                "start": {
                  "column": 30,
                  "line": 29
                }
              }
            }
          },
          "range": [
            758,
            782
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 29
            },
            "start": {
              "column": 27,
              "line": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 58,
            "line": 29
          },
          "start": {
            "column": 52,
            "line": 29
          }
        },
        "range": [
          783,
          789
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            785,
            789
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 29
            },
            "start": {
              "column": 54,
              "line": 29
            }
          }
        }
      },
      "range": [
        731,
        790
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"null\"",
            "value": "null",
            "range": [
              807,
              813
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 31
              },
              "start": {
                "column": 10,
                "line": 31
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "range": [
            797,
            806
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "optional": false,
        "range": [
          797,
          814
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        797,
        815
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"undefined\"",
            "value": "undefined",
            "range": [
              826,
              837
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 32
              },
              "start": {
                "column": 10,
                "line": 32
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "range": [
            816,
            825
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "optional": false,
        "range": [
          816,
          838
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        816,
        839
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0\"",
            "value": "0",
            "range": [
              861,
              864
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 35
              },
              "start": {
                "column": 10,
                "line": 35
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "range": [
            851,
            860
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "optional": false,
        "range": [
          851,
          865
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        851,
        866
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"false\"",
            "value": "false",
            "range": [
              877,
              884
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 36
              },
              "start": {
                "column": 10,
                "line": 36
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "range": [
            867,
            876
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 36
            },
            "start": {
              "column": 0,
              "line": 36
            }
          }
        },
        "optional": false,
        "range": [
          867,
          885
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        867,
        886
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"NaN\"",
            "value": "NaN",
            "range": [
              897,
              902
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 37
              },
              "start": {
                "column": 10,
                "line": 37
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "range": [
            887,
            896
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "optional": false,
        "range": [
          887,
          903
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        887,
        904
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              915,
              917
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 38
              },
              "start": {
                "column": 10,
                "line": 38
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "range": [
            905,
            914
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
            }
          }
        },
        "optional": false,
        "range": [
          905,
          918
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        905,
        919
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"other\"",
            "value": "other",
            "range": [
              930,
              937
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 39
              },
              "start": {
                "column": 10,
                "line": 39
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "range": [
            920,
            929
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 39
            },
            "start": {
              "column": 0,
              "line": 39
            }
          }
        },
        "optional": false,
        "range": [
          920,
          938
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        920,
        939
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
        "name": "numbers",
        "optional": false,
        "range": [
          958,
          965
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 41
          },
          "start": {
            "column": 17,
            "line": 41
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
                "column": 39,
                "line": 41
              },
              "start": {
                "column": 26,
                "line": 41
              }
            },
            "range": [
              967,
              980
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    969,
                    972
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 41
                    },
                    "start": {
                      "column": 28,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    978,
                    980
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 41
                    },
                    "start": {
                      "column": 37,
                      "line": 41
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    972,
                    978
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 41
                    },
                    "start": {
                      "column": 31,
                      "line": 41
                    }
                  }
                }
              ],
              "range": [
                969,
                980
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 41
                },
                "start": {
                  "column": 28,
                  "line": 41
                }
              }
            }
          },
          "range": [
            966,
            980
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 41
            },
            "start": {
              "column": 25,
              "line": 41
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 41
          },
          "start": {
            "column": 40,
            "line": 41
          }
        },
        "range": [
          981,
          987
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            983,
            987
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 41
            },
            "start": {
              "column": 42,
              "line": 41
            }
          }
        }
      },
      "range": [
        941,
        988
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1\"",
            "value": "1",
            "range": [
              1026,
              1029
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 43
              },
              "start": {
                "column": 8,
                "line": 43
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1018,
            1025
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
            }
          }
        },
        "optional": false,
        "range": [
          1018,
          1030
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        1018,
        1031
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1\"",
            "value": "-1",
            "range": [
              1040,
              1044
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 44
              },
              "start": {
                "column": 8,
                "line": 44
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1032,
            1039
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 44
            },
            "start": {
              "column": 0,
              "line": 44
            }
          }
        },
        "optional": false,
        "range": [
          1032,
          1045
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        1032,
        1046
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0\"",
            "value": "0",
            "range": [
              1055,
              1058
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 45
              },
              "start": {
                "column": 8,
                "line": 45
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1047,
            1054
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 45
            },
            "start": {
              "column": 0,
              "line": 45
            }
          }
        },
        "optional": false,
        "range": [
          1047,
          1059
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        1047,
        1060
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0b1\"",
            "value": "0b1",
            "range": [
              1069,
              1074
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 46
              },
              "start": {
                "column": 8,
                "line": 46
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1061,
            1068
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 46
            },
            "start": {
              "column": 0,
              "line": 46
            }
          }
        },
        "optional": false,
        "range": [
          1061,
          1075
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 46
          }
        }
      },
      "range": [
        1061,
        1076
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0x1\"",
            "value": "0x1",
            "range": [
              1085,
              1090
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 47
              },
              "start": {
                "column": 8,
                "line": 47
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1077,
            1084
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 47
            },
            "start": {
              "column": 0,
              "line": 47
            }
          }
        },
        "optional": false,
        "range": [
          1077,
          1091
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        1077,
        1092
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0o1\"",
            "value": "0o1",
            "range": [
              1101,
              1106
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 48
              },
              "start": {
                "column": 8,
                "line": 48
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1093,
            1100
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 48
            },
            "start": {
              "column": 0,
              "line": 48
            }
          }
        },
        "optional": false,
        "range": [
          1093,
          1107
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 48
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        1093,
        1108
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1e21\"",
            "value": "1e21",
            "range": [
              1117,
              1123
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 49
              },
              "start": {
                "column": 8,
                "line": 49
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1109,
            1116
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 49
            },
            "start": {
              "column": 0,
              "line": 49
            }
          }
        },
        "optional": false,
        "range": [
          1109,
          1124
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        1109,
        1125
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1E21\"",
            "value": "1E21",
            "range": [
              1134,
              1140
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 50
              },
              "start": {
                "column": 8,
                "line": 50
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1126,
            1133
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 50
            },
            "start": {
              "column": 0,
              "line": 50
            }
          }
        },
        "optional": false,
        "range": [
          1126,
          1141
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        1126,
        1142
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1e-21\"",
            "value": "1e-21",
            "range": [
              1151,
              1158
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 51
              },
              "start": {
                "column": 8,
                "line": 51
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1143,
            1150
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 51
            },
            "start": {
              "column": 0,
              "line": 51
            }
          }
        },
        "optional": false,
        "range": [
          1143,
          1159
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        1143,
        1160
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1E-21\"",
            "value": "1E-21",
            "range": [
              1169,
              1176
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 52
              },
              "start": {
                "column": 8,
                "line": 52
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1161,
            1168
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 52
            },
            "start": {
              "column": 0,
              "line": 52
            }
          }
        },
        "optional": false,
        "range": [
          1161,
          1177
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 52
          },
          "start": {
            "column": 0,
            "line": 52
          }
        }
      },
      "range": [
        1161,
        1178
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1.1\"",
            "value": "1.1",
            "range": [
              1187,
              1192
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 53
              },
              "start": {
                "column": 8,
                "line": 53
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1179,
            1186
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
            }
          }
        },
        "optional": false,
        "range": [
          1179,
          1193
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        1179,
        1194
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1.1\"",
            "value": "-1.1",
            "range": [
              1203,
              1209
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 54
              },
              "start": {
                "column": 8,
                "line": 54
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1195,
            1202
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "optional": false,
        "range": [
          1195,
          1210
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        1195,
        1211
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1.1e-10\"",
            "value": "-1.1e-10",
            "range": [
              1220,
              1230
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 55
              },
              "start": {
                "column": 8,
                "line": 55
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1212,
            1219
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 55
            },
            "start": {
              "column": 0,
              "line": 55
            }
          }
        },
        "optional": false,
        "range": [
          1212,
          1231
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        1212,
        1232
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1.1E-10\"",
            "value": "-1.1E-10",
            "range": [
              1241,
              1251
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 56
              },
              "start": {
                "column": 8,
                "line": 56
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1233,
            1240
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 56
            },
            "start": {
              "column": 0,
              "line": 56
            }
          }
        },
        "optional": false,
        "range": [
          1233,
          1252
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 56
          }
        }
      },
      "range": [
        1233,
        1253
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1.1e-10\"",
            "value": "1.1e-10",
            "range": [
              1262,
              1271
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 57
              },
              "start": {
                "column": 8,
                "line": 57
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1254,
            1261
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 57
            },
            "start": {
              "column": 0,
              "line": 57
            }
          }
        },
        "optional": false,
        "range": [
          1254,
          1272
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 57
          },
          "start": {
            "column": 0,
            "line": 57
          }
        }
      },
      "range": [
        1254,
        1273
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"?\"",
            "value": "?",
            "range": [
              1343,
              1346
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 60
              },
              "start": {
                "column": 8,
                "line": 60
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1335,
            1342
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 60
            },
            "start": {
              "column": 0,
              "line": 60
            }
          }
        },
        "optional": false,
        "range": [
          1335,
          1347
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 60
          },
          "start": {
            "column": 0,
            "line": 60
          }
        }
      },
      "range": [
        1335,
        1348
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"NaN\"",
            "value": "NaN",
            "range": [
              1357,
              1362
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 61
              },
              "start": {
                "column": 8,
                "line": 61
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1349,
            1356
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 61
            },
            "start": {
              "column": 0,
              "line": 61
            }
          }
        },
        "optional": false,
        "range": [
          1349,
          1363
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 61
          },
          "start": {
            "column": 0,
            "line": 61
          }
        }
      },
      "range": [
        1349,
        1364
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"Infinity\"",
            "value": "Infinity",
            "range": [
              1373,
              1383
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 62
              },
              "start": {
                "column": 8,
                "line": 62
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1365,
            1372
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 62
            },
            "start": {
              "column": 0,
              "line": 62
            }
          }
        },
        "optional": false,
        "range": [
          1365,
          1384
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 62
          },
          "start": {
            "column": 0,
            "line": 62
          }
        }
      },
      "range": [
        1365,
        1385
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"+Infinity\"",
            "value": "+Infinity",
            "range": [
              1394,
              1405
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 63
              },
              "start": {
                "column": 8,
                "line": 63
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1386,
            1393
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 63
            },
            "start": {
              "column": 0,
              "line": 63
            }
          }
        },
        "optional": false,
        "range": [
          1386,
          1406
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 63
          },
          "start": {
            "column": 0,
            "line": 63
          }
        }
      },
      "range": [
        1386,
        1407
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-Infinity\"",
            "value": "-Infinity",
            "range": [
              1416,
              1427
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 64
              },
              "start": {
                "column": 8,
                "line": 64
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1408,
            1415
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 64
            },
            "start": {
              "column": 0,
              "line": 64
            }
          }
        },
        "optional": false,
        "range": [
          1408,
          1428
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 64
          },
          "start": {
            "column": 0,
            "line": 64
          }
        }
      },
      "range": [
        1408,
        1429
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1_000\"",
            "value": "1_000",
            "range": [
              1438,
              1445
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 65
              },
              "start": {
                "column": 8,
                "line": 65
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1430,
            1437
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 65
            },
            "start": {
              "column": 0,
              "line": 65
            }
          }
        },
        "optional": false,
        "range": [
          1430,
          1446
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 65
          },
          "start": {
            "column": 0,
            "line": 65
          }
        }
      },
      "range": [
        1430,
        1447
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"a10\"",
            "value": "a10",
            "range": [
              1526,
              1531
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 68
              },
              "start": {
                "column": 8,
                "line": 68
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1518,
            1525
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 68
            },
            "start": {
              "column": 0,
              "line": 68
            }
          }
        },
        "optional": false,
        "range": [
          1518,
          1532
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 68
          },
          "start": {
            "column": 0,
            "line": 68
          }
        }
      },
      "range": [
        1518,
        1533
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"10a\"",
            "value": "10a",
            "range": [
              1542,
              1547
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 69
              },
              "start": {
                "column": 8,
                "line": 69
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1534,
            1541
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 69
            },
            "start": {
              "column": 0,
              "line": 69
            }
          }
        },
        "optional": false,
        "range": [
          1534,
          1548
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 69
          },
          "start": {
            "column": 0,
            "line": 69
          }
        }
      },
      "range": [
        1534,
        1549
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"- 1\"",
            "value": "- 1",
            "range": [
              1609,
              1614
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 72
              },
              "start": {
                "column": 8,
                "line": 72
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1601,
            1608
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 72
            },
            "start": {
              "column": 0,
              "line": 72
            }
          }
        },
        "optional": false,
        "range": [
          1601,
          1615
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 72
          },
          "start": {
            "column": 0,
            "line": 72
          }
        }
      },
      "range": [
        1601,
        1616
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-/**/1\"",
            "value": "-/**/1",
            "range": [
              1625,
              1633
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 73
              },
              "start": {
                "column": 8,
                "line": 73
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "range": [
            1617,
            1624
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 73
            },
            "start": {
              "column": 0,
              "line": 73
            }
          }
        },
        "optional": false,
        "range": [
          1617,
          1634
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 73
          },
          "start": {
            "column": 0,
            "line": 73
          }
        }
      },
      "range": [
        1617,
        1635
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
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
        "name": "bigints",
        "optional": false,
        "range": [
          1654,
          1661
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 75
          },
          "start": {
            "column": 17,
            "line": 75
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
                "column": 39,
                "line": 75
              },
              "start": {
                "column": 26,
                "line": 75
              }
            },
            "range": [
              1663,
              1676
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    1665,
                    1668
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 75
                    },
                    "start": {
                      "column": 28,
                      "line": 75
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    1674,
                    1676
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 75
                    },
                    "start": {
                      "column": 37,
                      "line": 75
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSBigIntKeyword",
                  "range": [
                    1668,
                    1674
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 75
                    },
                    "start": {
                      "column": 31,
                      "line": 75
                    }
                  }
                }
              ],
              "range": [
                1665,
                1676
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 75
                },
                "start": {
                  "column": 28,
                  "line": 75
                }
              }
            }
          },
          "range": [
            1662,
            1676
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 75
            },
            "start": {
              "column": 25,
              "line": 75
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 75
          },
          "start": {
            "column": 40,
            "line": 75
          }
        },
        "range": [
          1677,
          1683
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            1679,
            1683
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 75
            },
            "start": {
              "column": 42,
              "line": 75
            }
          }
        }
      },
      "range": [
        1637,
        1684
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1\"",
            "value": "1",
            "range": [
              1722,
              1725
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 77
              },
              "start": {
                "column": 8,
                "line": 77
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            1714,
            1721
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 77
            },
            "start": {
              "column": 0,
              "line": 77
            }
          }
        },
        "optional": false,
        "range": [
          1714,
          1726
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 77
          },
          "start": {
            "column": 0,
            "line": 77
          }
        }
      },
      "range": [
        1714,
        1727
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1\"",
            "value": "-1",
            "range": [
              1736,
              1740
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 78
              },
              "start": {
                "column": 8,
                "line": 78
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            1728,
            1735
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 78
            },
            "start": {
              "column": 0,
              "line": 78
            }
          }
        },
        "optional": false,
        "range": [
          1728,
          1741
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 78
          },
          "start": {
            "column": 0,
            "line": 78
          }
        }
      },
      "range": [
        1728,
        1742
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0\"",
            "value": "0",
            "range": [
              1751,
              1754
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 79
              },
              "start": {
                "column": 8,
                "line": 79
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            1743,
            1750
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 79
            },
            "start": {
              "column": 0,
              "line": 79
            }
          }
        },
        "optional": false,
        "range": [
          1743,
          1755
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 79
          },
          "start": {
            "column": 0,
            "line": 79
          }
        }
      },
      "range": [
        1743,
        1756
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0b1\"",
            "value": "0b1",
            "range": [
              1765,
              1770
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 80
              },
              "start": {
                "column": 8,
                "line": 80
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            1757,
            1764
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 80
            },
            "start": {
              "column": 0,
              "line": 80
            }
          }
        },
        "optional": false,
        "range": [
          1757,
          1771
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 80
          },
          "start": {
            "column": 0,
            "line": 80
          }
        }
      },
      "range": [
        1757,
        1772
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0x1\"",
            "value": "0x1",
            "range": [
              1781,
              1786
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 81
              },
              "start": {
                "column": 8,
                "line": 81
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            1773,
            1780
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 81
            },
            "start": {
              "column": 0,
              "line": 81
            }
          }
        },
        "optional": false,
        "range": [
          1773,
          1787
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 81
          },
          "start": {
            "column": 0,
            "line": 81
          }
        }
      },
      "range": [
        1773,
        1788
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0o1\"",
            "value": "0o1",
            "range": [
              1797,
              1802
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 82
              },
              "start": {
                "column": 8,
                "line": 82
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            1789,
            1796
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 82
            },
            "start": {
              "column": 0,
              "line": 82
            }
          }
        },
        "optional": false,
        "range": [
          1789,
          1803
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 82
          },
          "start": {
            "column": 0,
            "line": 82
          }
        }
      },
      "range": [
        1789,
        1804
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1e21\"",
            "value": "1e21",
            "range": [
              1909,
              1915
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 85
              },
              "start": {
                "column": 8,
                "line": 85
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            1901,
            1908
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 85
            },
            "start": {
              "column": 0,
              "line": 85
            }
          }
        },
        "optional": false,
        "range": [
          1901,
          1916
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 85
          },
          "start": {
            "column": 0,
            "line": 85
          }
        }
      },
      "range": [
        1901,
        1917
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1E21\"",
            "value": "1E21",
            "range": [
              1926,
              1932
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 86
              },
              "start": {
                "column": 8,
                "line": 86
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            1918,
            1925
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 86
            },
            "start": {
              "column": 0,
              "line": 86
            }
          }
        },
        "optional": false,
        "range": [
          1918,
          1933
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 86
          },
          "start": {
            "column": 0,
            "line": 86
          }
        }
      },
      "range": [
        1918,
        1934
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1e-21\"",
            "value": "1e-21",
            "range": [
              1943,
              1950
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 87
              },
              "start": {
                "column": 8,
                "line": 87
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            1935,
            1942
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 87
            },
            "start": {
              "column": 0,
              "line": 87
            }
          }
        },
        "optional": false,
        "range": [
          1935,
          1951
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 87
          },
          "start": {
            "column": 0,
            "line": 87
          }
        }
      },
      "range": [
        1935,
        1952
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1E-21\"",
            "value": "1E-21",
            "range": [
              1961,
              1968
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 88
              },
              "start": {
                "column": 8,
                "line": 88
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            1953,
            1960
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 88
            },
            "start": {
              "column": 0,
              "line": 88
            }
          }
        },
        "optional": false,
        "range": [
          1953,
          1969
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 88
          },
          "start": {
            "column": 0,
            "line": 88
          }
        }
      },
      "range": [
        1953,
        1970
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1.0\"",
            "value": "1.0",
            "range": [
              2034,
              2039
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 91
              },
              "start": {
                "column": 8,
                "line": 91
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2026,
            2033
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 91
            },
            "start": {
              "column": 0,
              "line": 91
            }
          }
        },
        "optional": false,
        "range": [
          2026,
          2040
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 91
          },
          "start": {
            "column": 0,
            "line": 91
          }
        }
      },
      "range": [
        2026,
        2041
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 91
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1.1\"",
            "value": "1.1",
            "range": [
              2050,
              2055
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 92
              },
              "start": {
                "column": 8,
                "line": 92
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2042,
            2049
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 92
            },
            "start": {
              "column": 0,
              "line": 92
            }
          }
        },
        "optional": false,
        "range": [
          2042,
          2056
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 92
          },
          "start": {
            "column": 0,
            "line": 92
          }
        }
      },
      "range": [
        2042,
        2057
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 92
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1.1\"",
            "value": "-1.1",
            "range": [
              2066,
              2072
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 93
              },
              "start": {
                "column": 8,
                "line": 93
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2058,
            2065
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 93
            },
            "start": {
              "column": 0,
              "line": 93
            }
          }
        },
        "optional": false,
        "range": [
          2058,
          2073
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 93
          },
          "start": {
            "column": 0,
            "line": 93
          }
        }
      },
      "range": [
        2058,
        2074
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 93
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1.1e-10\"",
            "value": "-1.1e-10",
            "range": [
              2083,
              2093
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 94
              },
              "start": {
                "column": 8,
                "line": 94
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2075,
            2082
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 94
            },
            "start": {
              "column": 0,
              "line": 94
            }
          }
        },
        "optional": false,
        "range": [
          2075,
          2094
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 94
          },
          "start": {
            "column": 0,
            "line": 94
          }
        }
      },
      "range": [
        2075,
        2095
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1.1E-10\"",
            "value": "-1.1E-10",
            "range": [
              2104,
              2114
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 95
              },
              "start": {
                "column": 8,
                "line": 95
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2096,
            2103
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 95
            },
            "start": {
              "column": 0,
              "line": 95
            }
          }
        },
        "optional": false,
        "range": [
          2096,
          2115
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 95
          },
          "start": {
            "column": 0,
            "line": 95
          }
        }
      },
      "range": [
        2096,
        2116
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 95
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1.1e-10\"",
            "value": "1.1e-10",
            "range": [
              2125,
              2134
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 96
              },
              "start": {
                "column": 8,
                "line": 96
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2117,
            2124
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 96
            },
            "start": {
              "column": 0,
              "line": 96
            }
          }
        },
        "optional": false,
        "range": [
          2117,
          2135
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 96
          },
          "start": {
            "column": 0,
            "line": 96
          }
        }
      },
      "range": [
        2117,
        2136
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 96
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"?\"",
            "value": "?",
            "range": [
              2206,
              2209
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 99
              },
              "start": {
                "column": 8,
                "line": 99
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2198,
            2205
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 99
            },
            "start": {
              "column": 0,
              "line": 99
            }
          }
        },
        "optional": false,
        "range": [
          2198,
          2210
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 99
          },
          "start": {
            "column": 0,
            "line": 99
          }
        }
      },
      "range": [
        2198,
        2211
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"NaN\"",
            "value": "NaN",
            "range": [
              2220,
              2225
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 100
              },
              "start": {
                "column": 8,
                "line": 100
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2212,
            2219
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 100
            },
            "start": {
              "column": 0,
              "line": 100
            }
          }
        },
        "optional": false,
        "range": [
          2212,
          2226
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 100
          },
          "start": {
            "column": 0,
            "line": 100
          }
        }
      },
      "range": [
        2212,
        2227
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"Infinity\"",
            "value": "Infinity",
            "range": [
              2236,
              2246
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 101
              },
              "start": {
                "column": 8,
                "line": 101
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2228,
            2235
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 101
            },
            "start": {
              "column": 0,
              "line": 101
            }
          }
        },
        "optional": false,
        "range": [
          2228,
          2247
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 101
          },
          "start": {
            "column": 0,
            "line": 101
          }
        }
      },
      "range": [
        2228,
        2248
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 101
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"+Infinity\"",
            "value": "+Infinity",
            "range": [
              2257,
              2268
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 102
              },
              "start": {
                "column": 8,
                "line": 102
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2249,
            2256
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 102
            },
            "start": {
              "column": 0,
              "line": 102
            }
          }
        },
        "optional": false,
        "range": [
          2249,
          2269
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 102
          },
          "start": {
            "column": 0,
            "line": 102
          }
        }
      },
      "range": [
        2249,
        2270
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 102
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-Infinity\"",
            "value": "-Infinity",
            "range": [
              2279,
              2290
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 103
              },
              "start": {
                "column": 8,
                "line": 103
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2271,
            2278
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 103
            },
            "start": {
              "column": 0,
              "line": 103
            }
          }
        },
        "optional": false,
        "range": [
          2271,
          2291
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 103
          },
          "start": {
            "column": 0,
            "line": 103
          }
        }
      },
      "range": [
        2271,
        2292
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 103
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1_000\"",
            "value": "1_000",
            "range": [
              2301,
              2308
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 104
              },
              "start": {
                "column": 8,
                "line": 104
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2293,
            2300
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 104
            },
            "start": {
              "column": 0,
              "line": 104
            }
          }
        },
        "optional": false,
        "range": [
          2293,
          2309
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 104
          },
          "start": {
            "column": 0,
            "line": 104
          }
        }
      },
      "range": [
        2293,
        2310
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 104
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"- 1\"",
            "value": "- 1",
            "range": [
              2370,
              2375
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 107
              },
              "start": {
                "column": 8,
                "line": 107
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2362,
            2369
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 107
            },
            "start": {
              "column": 0,
              "line": 107
            }
          }
        },
        "optional": false,
        "range": [
          2362,
          2376
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 107
          },
          "start": {
            "column": 0,
            "line": 107
          }
        }
      },
      "range": [
        2362,
        2377
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 107
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-/**/1\"",
            "value": "-/**/1",
            "range": [
              2386,
              2394
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 108
              },
              "start": {
                "column": 8,
                "line": 108
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2378,
            2385
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 108
            },
            "start": {
              "column": 0,
              "line": 108
            }
          }
        },
        "optional": false,
        "range": [
          2378,
          2395
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 108
          },
          "start": {
            "column": 0,
            "line": 108
          }
        }
      },
      "range": [
        2378,
        2396
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 108
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"a10n\"",
            "value": "a10n",
            "range": [
              2475,
              2481
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 111
              },
              "start": {
                "column": 8,
                "line": 111
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2467,
            2474
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 111
            },
            "start": {
              "column": 0,
              "line": 111
            }
          }
        },
        "optional": false,
        "range": [
          2467,
          2482
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 111
          },
          "start": {
            "column": 0,
            "line": 111
          }
        }
      },
      "range": [
        2467,
        2483
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"10an\"",
            "value": "10an",
            "range": [
              2492,
              2498
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 112
              },
              "start": {
                "column": 8,
                "line": 112
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2484,
            2491
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 112
            },
            "start": {
              "column": 0,
              "line": 112
            }
          }
        },
        "optional": false,
        "range": [
          2484,
          2499
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 112
          },
          "start": {
            "column": 0,
            "line": 112
          }
        }
      },
      "range": [
        2484,
        2500
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 112
        },
        "start": {
          "column": 0,
          "line": 112
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1n\"",
            "value": "1n",
            "range": [
              2654,
              2658
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 115
              },
              "start": {
                "column": 8,
                "line": 115
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2646,
            2653
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 115
            },
            "start": {
              "column": 0,
              "line": 115
            }
          }
        },
        "optional": false,
        "range": [
          2646,
          2659
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 115
          },
          "start": {
            "column": 0,
            "line": 115
          }
        }
      },
      "range": [
        2646,
        2660
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 115
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1n\"",
            "value": "-1n",
            "range": [
              2669,
              2674
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 116
              },
              "start": {
                "column": 8,
                "line": 116
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2661,
            2668
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 116
            },
            "start": {
              "column": 0,
              "line": 116
            }
          }
        },
        "optional": false,
        "range": [
          2661,
          2675
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 116
          },
          "start": {
            "column": 0,
            "line": 116
          }
        }
      },
      "range": [
        2661,
        2676
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 116
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0n\"",
            "value": "0n",
            "range": [
              2685,
              2689
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 117
              },
              "start": {
                "column": 8,
                "line": 117
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2677,
            2684
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 117
            },
            "start": {
              "column": 0,
              "line": 117
            }
          }
        },
        "optional": false,
        "range": [
          2677,
          2690
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 117
          },
          "start": {
            "column": 0,
            "line": 117
          }
        }
      },
      "range": [
        2677,
        2691
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 117
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0b1n\"",
            "value": "0b1n",
            "range": [
              2700,
              2706
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 118
              },
              "start": {
                "column": 8,
                "line": 118
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2692,
            2699
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 118
            },
            "start": {
              "column": 0,
              "line": 118
            }
          }
        },
        "optional": false,
        "range": [
          2692,
          2707
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 118
          },
          "start": {
            "column": 0,
            "line": 118
          }
        }
      },
      "range": [
        2692,
        2708
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 118
        },
        "start": {
          "column": 0,
          "line": 118
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0x1n\"",
            "value": "0x1n",
            "range": [
              2717,
              2723
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 119
              },
              "start": {
                "column": 8,
                "line": 119
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2709,
            2716
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 119
            },
            "start": {
              "column": 0,
              "line": 119
            }
          }
        },
        "optional": false,
        "range": [
          2709,
          2724
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 119
          },
          "start": {
            "column": 0,
            "line": 119
          }
        }
      },
      "range": [
        2709,
        2725
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 119
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"0o1n\"",
            "value": "0o1n",
            "range": [
              2734,
              2740
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 120
              },
              "start": {
                "column": 8,
                "line": 120
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2726,
            2733
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 120
            },
            "start": {
              "column": 0,
              "line": 120
            }
          }
        },
        "optional": false,
        "range": [
          2726,
          2741
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 120
          },
          "start": {
            "column": 0,
            "line": 120
          }
        }
      },
      "range": [
        2726,
        2742
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 120
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1e21n\"",
            "value": "1e21n",
            "range": [
              2751,
              2758
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 121
              },
              "start": {
                "column": 8,
                "line": 121
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2743,
            2750
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 121
            },
            "start": {
              "column": 0,
              "line": 121
            }
          }
        },
        "optional": false,
        "range": [
          2743,
          2759
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 121
          },
          "start": {
            "column": 0,
            "line": 121
          }
        }
      },
      "range": [
        2743,
        2760
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 121
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1E21n\"",
            "value": "1E21n",
            "range": [
              2769,
              2776
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 122
              },
              "start": {
                "column": 8,
                "line": 122
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2761,
            2768
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 122
            },
            "start": {
              "column": 0,
              "line": 122
            }
          }
        },
        "optional": false,
        "range": [
          2761,
          2777
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 122
          },
          "start": {
            "column": 0,
            "line": 122
          }
        }
      },
      "range": [
        2761,
        2778
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 122
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1e-21n\"",
            "value": "1e-21n",
            "range": [
              2787,
              2795
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 123
              },
              "start": {
                "column": 8,
                "line": 123
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2779,
            2786
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 123
            },
            "start": {
              "column": 0,
              "line": 123
            }
          }
        },
        "optional": false,
        "range": [
          2779,
          2796
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 123
          },
          "start": {
            "column": 0,
            "line": 123
          }
        }
      },
      "range": [
        2779,
        2797
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 123
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1E-21n\"",
            "value": "1E-21n",
            "range": [
              2806,
              2814
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 124
              },
              "start": {
                "column": 8,
                "line": 124
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2798,
            2805
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 124
            },
            "start": {
              "column": 0,
              "line": 124
            }
          }
        },
        "optional": false,
        "range": [
          2798,
          2815
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 124
          },
          "start": {
            "column": 0,
            "line": 124
          }
        }
      },
      "range": [
        2798,
        2816
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 124
        },
        "start": {
          "column": 0,
          "line": 124
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1.1n\"",
            "value": "1.1n",
            "range": [
              2825,
              2831
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 125
              },
              "start": {
                "column": 8,
                "line": 125
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2817,
            2824
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 125
            },
            "start": {
              "column": 0,
              "line": 125
            }
          }
        },
        "optional": false,
        "range": [
          2817,
          2832
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 125
          },
          "start": {
            "column": 0,
            "line": 125
          }
        }
      },
      "range": [
        2817,
        2833
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 125
        },
        "start": {
          "column": 0,
          "line": 125
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1.1n\"",
            "value": "-1.1n",
            "range": [
              2842,
              2849
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 126
              },
              "start": {
                "column": 8,
                "line": 126
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2834,
            2841
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 126
            },
            "start": {
              "column": 0,
              "line": 126
            }
          }
        },
        "optional": false,
        "range": [
          2834,
          2850
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 126
          },
          "start": {
            "column": 0,
            "line": 126
          }
        }
      },
      "range": [
        2834,
        2851
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 126
        },
        "start": {
          "column": 0,
          "line": 126
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1.1e-10n\"",
            "value": "-1.1e-10n",
            "range": [
              2860,
              2871
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 127
              },
              "start": {
                "column": 8,
                "line": 127
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2852,
            2859
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 127
            },
            "start": {
              "column": 0,
              "line": 127
            }
          }
        },
        "optional": false,
        "range": [
          2852,
          2872
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 127
          },
          "start": {
            "column": 0,
            "line": 127
          }
        }
      },
      "range": [
        2852,
        2873
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 127
        },
        "start": {
          "column": 0,
          "line": 127
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"-1.1E-10n\"",
            "value": "-1.1E-10n",
            "range": [
              2882,
              2893
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 128
              },
              "start": {
                "column": 8,
                "line": 128
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2874,
            2881
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 128
            },
            "start": {
              "column": 0,
              "line": 128
            }
          }
        },
        "optional": false,
        "range": [
          2874,
          2894
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 128
          },
          "start": {
            "column": 0,
            "line": 128
          }
        }
      },
      "range": [
        2874,
        2895
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 128
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"1.1e-10n\"",
            "value": "1.1e-10n",
            "range": [
              2904,
              2914
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 129
              },
              "start": {
                "column": 8,
                "line": 129
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "range": [
            2896,
            2903
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 129
            },
            "start": {
              "column": 0,
              "line": 129
            }
          }
        },
        "optional": false,
        "range": [
          2896,
          2915
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 129
          },
          "start": {
            "column": 0,
            "line": 129
          }
        }
      },
      "range": [
        2896,
        2916
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 129
        },
        "start": {
          "column": 0,
          "line": 129
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AStr",
        "optional": false,
        "range": [
          2923,
          2927
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 131
          },
          "start": {
            "column": 5,
            "line": 131
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "a",
              "raw": "a"
            },
            "range": [
              2930,
              2934
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 131
              },
              "start": {
                "column": 12,
                "line": 131
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              2940,
              2942
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 131
              },
              "start": {
                "column": 22,
                "line": 131
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              2934,
              2940
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 131
              },
              "start": {
                "column": 16,
                "line": 131
              }
            }
          }
        ],
        "range": [
          2930,
          2942
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 131
          },
          "start": {
            "column": 12,
            "line": 131
          }
        }
      },
      "range": [
        2918,
        2943
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 131
        },
        "start": {
          "column": 0,
          "line": 131
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ANum",
        "optional": false,
        "range": [
          2949,
          2953
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 132
          },
          "start": {
            "column": 5,
            "line": 132
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "a",
              "raw": "a"
            },
            "range": [
              2956,
              2960
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 132
              },
              "start": {
                "column": 12,
                "line": 132
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              2966,
              2968
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 132
              },
              "start": {
                "column": 22,
                "line": 132
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "range": [
              2960,
              2966
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 132
              },
              "start": {
                "column": 16,
                "line": 132
              }
            }
          }
        ],
        "range": [
          2956,
          2968
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 132
          },
          "start": {
            "column": 12,
            "line": 132
          }
        }
      },
      "range": [
        2944,
        2969
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 132
        },
        "start": {
          "column": 0,
          "line": 132
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AAny",
        "optional": false,
        "range": [
          2975,
          2979
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 133
          },
          "start": {
            "column": 5,
            "line": 133
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "a",
              "raw": "a"
            },
            "range": [
              2982,
              2986
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 133
              },
              "start": {
                "column": 12,
                "line": 133
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              2989,
              2991
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 133
              },
              "start": {
                "column": 19,
                "line": 133
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSAnyKeyword",
            "range": [
              2986,
              2989
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 133
              },
              "start": {
                "column": 16,
                "line": 133
              }
            }
          }
        ],
        "range": [
          2982,
          2991
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 133
          },
          "start": {
            "column": 12,
            "line": 133
          }
        }
      },
      "range": [
        2970,
        2992
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 133
        },
        "start": {
          "column": 0,
          "line": 133
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 135
                },
                "start": {
                  "column": 15,
                  "line": 135
                }
              },
              "range": [
                3009,
                3015
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AStr",
                  "optional": false,
                  "range": [
                    3011,
                    3015
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 135
                    },
                    "start": {
                      "column": 17,
                      "line": 135
                    }
                  }
                },
                "range": [
                  3011,
                  3015
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 135
                  },
                  "start": {
                    "column": 17,
                    "line": 135
                  }
                }
              }
            },
            "range": [
              3006,
              3015
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 135
              },
              "start": {
                "column": 12,
                "line": 135
              }
            }
          },
          "init": null,
          "range": [
            3006,
            3015
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 135
            },
            "start": {
              "column": 12,
              "line": 135
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        2994,
        3016
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 135
        },
        "start": {
          "column": 0,
          "line": 135
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 136
                },
                "start": {
                  "column": 15,
                  "line": 136
                }
              },
              "range": [
                3032,
                3038
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ANum",
                  "optional": false,
                  "range": [
                    3034,
                    3038
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 136
                    },
                    "start": {
                      "column": 17,
                      "line": 136
                    }
                  }
                },
                "range": [
                  3034,
                  3038
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 136
                  },
                  "start": {
                    "column": 17,
                    "line": 136
                  }
                }
              }
            },
            "range": [
              3029,
              3038
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 136
              },
              "start": {
                "column": 12,
                "line": 136
              }
            }
          },
          "init": null,
          "range": [
            3029,
            3038
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 136
            },
            "start": {
              "column": 12,
              "line": 136
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        3017,
        3039
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 136
        },
        "start": {
          "column": 0,
          "line": 136
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
            "name": "anyish",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 137
                },
                "start": {
                  "column": 18,
                  "line": 137
                }
              },
              "range": [
                3058,
                3064
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AAny",
                  "optional": false,
                  "range": [
                    3060,
                    3064
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 137
                    },
                    "start": {
                      "column": 20,
                      "line": 137
                    }
                  }
                },
                "range": [
                  3060,
                  3064
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 137
                  },
                  "start": {
                    "column": 20,
                    "line": 137
                  }
                }
              }
            },
            "range": [
              3052,
              3064
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 137
              },
              "start": {
                "column": 12,
                "line": 137
              }
            }
          },
          "init": null,
          "range": [
            3052,
            3064
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 137
            },
            "start": {
              "column": 12,
              "line": 137
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        3040,
        3065
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 137
        },
        "start": {
          "column": 0,
          "line": 137
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            3077,
            3080
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 140
            },
            "start": {
              "column": 0,
              "line": 140
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            3083,
            3086
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 140
            },
            "start": {
              "column": 6,
              "line": 140
            }
          }
        },
        "range": [
          3077,
          3086
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 140
          },
          "start": {
            "column": 0,
            "line": 140
          }
        }
      },
      "range": [
        3077,
        3087
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 140
        },
        "start": {
          "column": 0,
          "line": 140
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "range": [
            3088,
            3094
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 141
            },
            "start": {
              "column": 0,
              "line": 141
            }
          }
        },
        "right": {
          "type": "TemplateLiteral",
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "bno",
                "raw": "bno"
              },
              "range": [
                3097,
                3102
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 141
                },
                "start": {
                  "column": 9,
                  "line": 141
                }
              }
            }
          ],
          "range": [
            3097,
            3102
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 141
            },
            "start": {
              "column": 9,
              "line": 141
            }
          }
        },
        "range": [
          3088,
          3102
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 141
          },
          "start": {
            "column": 0,
            "line": 141
          }
        }
      },
      "range": [
        3088,
        3102
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 141
        },
        "start": {
          "column": 0,
          "line": 141
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            3110,
            3113
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 144
            },
            "start": {
              "column": 0,
              "line": 144
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            3116,
            3119
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 144
            },
            "start": {
              "column": 6,
              "line": 144
            }
          }
        },
        "range": [
          3110,
          3119
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 144
          },
          "start": {
            "column": 0,
            "line": 144
          }
        }
      },
      "range": [
        3110,
        3120
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 144
        },
        "start": {
          "column": 0,
          "line": 144
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "range": [
            3121,
            3127
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 145
            },
            "start": {
              "column": 0,
              "line": 145
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            3130,
            3133
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 145
            },
            "start": {
              "column": 9,
              "line": 145
            }
          }
        },
        "range": [
          3121,
          3133
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 145
          },
          "start": {
            "column": 0,
            "line": 145
          }
        }
      },
      "range": [
        3121,
        3134
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 145
        },
        "start": {
          "column": 0,
          "line": 145
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "range": [
            3135,
            3138
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 146
            },
            "start": {
              "column": 0,
              "line": 146
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "range": [
            3141,
            3147
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 146
            },
            "start": {
              "column": 6,
              "line": 146
            }
          }
        },
        "range": [
          3135,
          3147
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 146
          },
          "start": {
            "column": 0,
            "line": 146
          }
        }
      },
      "range": [
        3135,
        3148
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 146
        },
        "start": {
          "column": 0,
          "line": 146
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "range": [
            3149,
            3155
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 147
            },
            "start": {
              "column": 0,
              "line": 147
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            3158,
            3161
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 147
            },
            "start": {
              "column": 9,
              "line": 147
            }
          }
        },
        "range": [
          3149,
          3161
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 147
          },
          "start": {
            "column": 0,
            "line": 147
          }
        }
      },
      "range": [
        3149,
        3162
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 147
        },
        "start": {
          "column": 0,
          "line": 147
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "range": [
            3163,
            3166
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 148
            },
            "start": {
              "column": 0,
              "line": 148
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "range": [
            3169,
            3175
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 148
            },
            "start": {
              "column": 6,
              "line": 148
            }
          }
        },
        "range": [
          3163,
          3175
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 148
          },
          "start": {
            "column": 0,
            "line": 148
          }
        }
      },
      "range": [
        3163,
        3176
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 148
        },
        "start": {
          "column": 0,
          "line": 148
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "range": [
            3177,
            3183
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 149
            },
            "start": {
              "column": 0,
              "line": 149
            }
          }
        },
        "right": {
          "type": "TemplateLiteral",
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "aok",
                "raw": "aok"
              },
              "range": [
                3186,
                3191
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 149
                },
                "start": {
                  "column": 9,
                  "line": 149
                }
              }
            }
          ],
          "range": [
            3186,
            3191
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 149
            },
            "start": {
              "column": 9,
              "line": 149
            }
          }
        },
        "range": [
          3177,
          3191
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 149
          },
          "start": {
            "column": 0,
            "line": 149
          }
        }
      },
      "range": [
        3177,
        3191
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 149
        },
        "start": {
          "column": 0,
          "line": 149
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AGen",
        "optional": false,
        "range": [
          3258,
          3262
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 153
          },
          "start": {
            "column": 5,
            "line": 153
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field",
              "optional": false,
              "range": [
                3293,
                3298
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 153
                },
                "start": {
                  "column": 40,
                  "line": 153
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
                  "column": 54,
                  "line": 153
                },
                "start": {
                  "column": 45,
                  "line": 153
                }
              },
              "range": [
                3298,
                3307
              ],
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "a",
                      "raw": "a"
                    },
                    "range": [
                      3300,
                      3304
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 153
                      },
                      "start": {
                        "column": 47,
                        "line": 153
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      3305,
                      3307
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 153
                      },
                      "start": {
                        "column": 52,
                        "line": 153
                      }
                    }
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        3304,
                        3305
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 153
                        },
                        "start": {
                          "column": 51,
                          "line": 153
                        }
                      }
                    },
                    "range": [
                      3304,
                      3305
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 153
                      },
                      "start": {
                        "column": 51,
                        "line": 153
                      }
                    }
                  }
                ],
                "range": [
                  3300,
                  3307
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 153
                  },
                  "start": {
                    "column": 47,
                    "line": 153
                  }
                }
              }
            },
            "range": [
              3293,
              3307
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 153
              },
              "start": {
                "column": 40,
                "line": 153
              }
            }
          }
        ],
        "range": [
          3292,
          3308
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 153
          },
          "start": {
            "column": 39,
            "line": 153
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 153
          },
          "start": {
            "column": 9,
            "line": 153
          }
        },
        "range": [
          3262,
          3289
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    3273,
                    3279
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 153
                    },
                    "start": {
                      "column": 20,
                      "line": 153
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    3282,
                    3288
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 153
                    },
                    "start": {
                      "column": 29,
                      "line": 153
                    }
                  }
                }
              ],
              "range": [
                3273,
                3288
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 153
                },
                "start": {
                  "column": 20,
                  "line": 153
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
                3263,
                3264
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 153
                },
                "start": {
                  "column": 10,
                  "line": 153
                }
              }
            },
            "out": false,
            "range": [
              3263,
              3288
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 153
              },
              "start": {
                "column": 10,
                "line": 153
              }
            }
          }
        ]
      },
      "range": [
        3253,
        3309
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 153
        },
        "start": {
          "column": 0,
          "line": 153
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
            "name": "shouldWork1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 154
                },
                "start": {
                  "column": 17,
                  "line": 154
                }
              },
              "range": [
                3327,
                3341
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3333,
                    3341
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        3334,
                        3340
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 154
                        },
                        "start": {
                          "column": 24,
                          "line": 154
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 154
                    },
                    "start": {
                      "column": 23,
                      "line": 154
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AGen",
                  "optional": false,
                  "range": [
                    3329,
                    3333
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 154
                    },
                    "start": {
                      "column": 19,
                      "line": 154
                    }
                  }
                },
                "range": [
                  3329,
                  3341
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 154
                  },
                  "start": {
                    "column": 19,
                    "line": 154
                  }
                }
              }
            },
            "range": [
              3316,
              3341
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 154
              },
              "start": {
                "column": 6,
                "line": 154
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  3344,
                  3348
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 154
                  },
                  "start": {
                    "column": 34,
                    "line": 154
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3352,
                  3355
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 154
                  },
                  "start": {
                    "column": 42,
                    "line": 154
                  }
                }
              },
              "range": [
                3344,
                3355
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 154
                },
                "start": {
                  "column": 34,
                  "line": 154
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3363,
                  3370
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"yes\"",
                      "value": "yes",
                      "range": [
                        3364,
                        3369
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 154
                        },
                        "start": {
                          "column": 54,
                          "line": 154
                        }
                      }
                    },
                    "range": [
                      3364,
                      3369
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 154
                      },
                      "start": {
                        "column": 54,
                        "line": 154
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 154
                  },
                  "start": {
                    "column": 53,
                    "line": 154
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AGen",
                "optional": false,
                "range": [
                  3359,
                  3363
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 154
                  },
                  "start": {
                    "column": 49,
                    "line": 154
                  }
                }
              },
              "range": [
                3359,
                3370
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 154
                },
                "start": {
                  "column": 49,
                  "line": 154
                }
              }
            },
            "range": [
              3344,
              3370
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 154
              },
              "start": {
                "column": 34,
                "line": 154
              }
            }
          },
          "range": [
            3316,
            3370
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 154
            },
            "start": {
              "column": 6,
              "line": 154
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3310,
        3371
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 154
        },
        "start": {
          "column": 0,
          "line": 154
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
            "name": "shouldWork2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 155
                },
                "start": {
                  "column": 17,
                  "line": 155
                }
              },
              "range": [
                3389,
                3403
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3395,
                    3403
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        3396,
                        3402
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 155
                        },
                        "start": {
                          "column": 24,
                          "line": 155
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 155
                    },
                    "start": {
                      "column": 23,
                      "line": 155
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AGen",
                  "optional": false,
                  "range": [
                    3391,
                    3395
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 155
                    },
                    "start": {
                      "column": 19,
                      "line": 155
                    }
                  }
                },
                "range": [
                  3391,
                  3403
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 155
                  },
                  "start": {
                    "column": 19,
                    "line": 155
                  }
                }
              }
            },
            "range": [
              3378,
              3403
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 155
              },
              "start": {
                "column": 6,
                "line": 155
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  3406,
                  3410
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 155
                  },
                  "start": {
                    "column": 34,
                    "line": 155
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3414,
                  3417
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 155
                  },
                  "start": {
                    "column": 42,
                    "line": 155
                  }
                }
              },
              "range": [
                3406,
                3417
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 155
                },
                "start": {
                  "column": 34,
                  "line": 155
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3425,
                  3433
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      3426,
                      3432
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 155
                      },
                      "start": {
                        "column": 54,
                        "line": 155
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 155
                  },
                  "start": {
                    "column": 53,
                    "line": 155
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AGen",
                "optional": false,
                "range": [
                  3421,
                  3425
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 155
                  },
                  "start": {
                    "column": 49,
                    "line": 155
                  }
                }
              },
              "range": [
                3421,
                3433
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 155
                },
                "start": {
                  "column": 49,
                  "line": 155
                }
              }
            },
            "range": [
              3406,
              3433
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 155
              },
              "start": {
                "column": 34,
                "line": 155
              }
            }
          },
          "range": [
            3378,
            3433
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 155
            },
            "start": {
              "column": 6,
              "line": 155
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3372,
        3434
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 155
        },
        "start": {
          "column": 0,
          "line": 155
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          3480,
          3481
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 158
          },
          "start": {
            "column": 5,
            "line": 158
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              3484,
              3487
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 158
              },
              "start": {
                "column": 9,
                "line": 158
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              3493,
              3495
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 158
              },
              "start": {
                "column": 18,
                "line": 158
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "range": [
              3487,
              3493
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 158
              },
              "start": {
                "column": 12,
                "line": 158
              }
            }
          }
        ],
        "range": [
          3484,
          3495
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 158
          },
          "start": {
            "column": 9,
            "line": 158
          }
        }
      },
      "range": [
        3475,
        3496
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 158
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          3502,
          3503
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 159
          },
          "start": {
            "column": 5,
            "line": 159
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              3506,
              3509
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 159
              },
              "start": {
                "column": 9,
                "line": 159
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": " ",
              "raw": " "
            },
            "range": [
              3510,
              3514
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 159
              },
              "start": {
                "column": 13,
                "line": 159
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              3515,
              3517
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 159
              },
              "start": {
                "column": 18,
                "line": 159
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                3509,
                3510
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 159
                },
                "start": {
                  "column": 12,
                  "line": 159
                }
              }
            },
            "range": [
              3509,
              3510
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 159
              },
              "start": {
                "column": 12,
                "line": 159
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                3514,
                3515
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 159
                },
                "start": {
                  "column": 17,
                  "line": 159
                }
              }
            },
            "range": [
              3514,
              3515
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 159
              },
              "start": {
                "column": 17,
                "line": 159
              }
            }
          }
        ],
        "range": [
          3506,
          3517
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 159
          },
          "start": {
            "column": 9,
            "line": 159
          }
        }
      },
      "range": [
        3497,
        3518
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 159
        },
        "start": {
          "column": 0,
          "line": 159
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
            "name": "exampleBad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 160
                },
                "start": {
                  "column": 16,
                  "line": 160
                }
              },
              "range": [
                3535,
                3538
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    3537,
                    3538
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 160
                    },
                    "start": {
                      "column": 18,
                      "line": 160
                    }
                  }
                },
                "range": [
                  3537,
                  3538
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 160
                  },
                  "start": {
                    "column": 18,
                    "line": 160
                  }
                }
              }
            },
            "range": [
              3525,
              3538
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 160
              },
              "start": {
                "column": 6,
                "line": 160
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"anything\"",
            "value": "anything",
            "range": [
              3541,
              3551
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 160
              },
              "start": {
                "column": 22,
                "line": 160
              }
            }
          },
          "range": [
            3525,
            3551
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 160
            },
            "start": {
              "column": 6,
              "line": 160
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3519,
        3552
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 160
        },
        "start": {
          "column": 0,
          "line": 160
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
            "name": "exampleGood",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 161
                },
                "start": {
                  "column": 17,
                  "line": 161
                }
              },
              "range": [
                3579,
                3582
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    3581,
                    3582
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 161
                    },
                    "start": {
                      "column": 19,
                      "line": 161
                    }
                  }
                },
                "range": [
                  3581,
                  3582
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 161
                  },
                  "start": {
                    "column": 19,
                    "line": 161
                  }
                }
              }
            },
            "range": [
              3568,
              3582
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 161
              },
              "start": {
                "column": 6,
                "line": 161
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"1 2\"",
            "value": "1 2",
            "range": [
              3585,
              3590
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 161
              },
              "start": {
                "column": 23,
                "line": 161
              }
            }
          },
          "range": [
            3568,
            3590
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 161
            },
            "start": {
              "column": 6,
              "line": 161
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3562,
        3591
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 161
        },
        "start": {
          "column": 0,
          "line": 161
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
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 165
                },
                "start": {
                  "column": 6,
                  "line": 165
                }
              },
              "range": [
                3627,
                3632
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'0'",
                  "value": "0",
                  "range": [
                    3629,
                    3632
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 165
                    },
                    "start": {
                      "column": 8,
                      "line": 165
                    }
                  }
                },
                "range": [
                  3629,
                  3632
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 165
                  },
                  "start": {
                    "column": 8,
                    "line": 165
                  }
                }
              }
            },
            "range": [
              3625,
              3632
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 165
              },
              "start": {
                "column": 4,
                "line": 165
              }
            }
          },
          "init": null,
          "range": [
            3625,
            3632
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 165
            },
            "start": {
              "column": 4,
              "line": 165
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        3621,
        3633
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 165
        },
        "start": {
          "column": 0,
          "line": 165
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
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 166
                },
                "start": {
                  "column": 6,
                  "line": 166
                }
              },
              "range": [
                3640,
                3659
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'0'",
                      "value": "0",
                      "range": [
                        3642,
                        3645
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 166
                        },
                        "start": {
                          "column": 8,
                          "line": 166
                        }
                      }
                    },
                    "range": [
                      3642,
                      3645
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 166
                      },
                      "start": {
                        "column": 8,
                        "line": 166
                      }
                    }
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "range": [
                          3648,
                          3651
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 166
                          },
                          "start": {
                            "column": 14,
                            "line": 166
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "range": [
                          3657,
                          3659
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 166
                          },
                          "start": {
                            "column": 23,
                            "line": 166
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          3651,
                          3657
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 166
                          },
                          "start": {
                            "column": 17,
                            "line": 166
                          }
                        }
                      }
                    ],
                    "range": [
                      3648,
                      3659
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 166
                      },
                      "start": {
                        "column": 14,
                        "line": 166
                      }
                    }
                  }
                ],
                "range": [
                  3642,
                  3659
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 166
                  },
                  "start": {
                    "column": 8,
                    "line": 166
                  }
                }
              }
            },
            "range": [
              3638,
              3659
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 166
              },
              "start": {
                "column": 4,
                "line": 166
              }
            }
          },
          "init": null,
          "range": [
            3638,
            3659
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 166
            },
            "start": {
              "column": 4,
              "line": 166
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        3634,
        3660
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 166
        },
        "start": {
          "column": 0,
          "line": 166
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 170
                },
                "start": {
                  "column": 6,
                  "line": 170
                }
              },
              "range": [
                3739,
                3773
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        },
                        "range": [
                          3741,
                          3747
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 170
                          },
                          "start": {
                            "column": 8,
                            "line": 170
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "range": [
                          3753,
                          3755
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 170
                          },
                          "start": {
                            "column": 20,
                            "line": 170
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          3747,
                          3753
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 170
                          },
                          "start": {
                            "column": 14,
                            "line": 170
                          }
                        }
                      }
                    ],
                    "range": [
                      3741,
                      3755
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 170
                      },
                      "start": {
                        "column": 8,
                        "line": 170
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'foo1'",
                      "value": "foo1",
                      "range": [
                        3758,
                        3764
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 170
                        },
                        "start": {
                          "column": 25,
                          "line": 170
                        }
                      }
                    },
                    "range": [
                      3758,
                      3764
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 170
                      },
                      "start": {
                        "column": 25,
                        "line": 170
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'1foo'",
                      "value": "1foo",
                      "range": [
                        3767,
                        3773
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 170
                        },
                        "start": {
                          "column": 34,
                          "line": 170
                        }
                      }
                    },
                    "range": [
                      3767,
                      3773
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 170
                      },
                      "start": {
                        "column": 34,
                        "line": 170
                      }
                    }
                  }
                ],
                "range": [
                  3741,
                  3773
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 170
                  },
                  "start": {
                    "column": 8,
                    "line": 170
                  }
                }
              }
            },
            "range": [
              3737,
              3773
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 170
              },
              "start": {
                "column": 4,
                "line": 170
              }
            }
          },
          "init": null,
          "range": [
            3737,
            3773
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 170
            },
            "start": {
              "column": 4,
              "line": 170
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3733,
        3774
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 170
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 171
                },
                "start": {
                  "column": 6,
                  "line": 171
                }
              },
              "range": [
                3809,
                3872
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "TemplateLiteral",
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "foo1",
                            "raw": "foo1"
                          },
                          "range": [
                            3811,
                            3817
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 171
                            },
                            "start": {
                              "column": 8,
                              "line": 171
                            }
                          }
                        }
                      ],
                      "range": [
                        3811,
                        3817
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 171
                        },
                        "start": {
                          "column": 8,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      3811,
                      3817
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 171
                      },
                      "start": {
                        "column": 8,
                        "line": 171
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'1foo'",
                      "value": "1foo",
                      "range": [
                        3820,
                        3826
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 171
                        },
                        "start": {
                          "column": 17,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      3820,
                      3826
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 171
                      },
                      "start": {
                        "column": 17,
                        "line": 171
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'foofoo'",
                      "value": "foofoo",
                      "range": [
                        3829,
                        3837
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 171
                        },
                        "start": {
                          "column": 26,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      3829,
                      3837
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 171
                      },
                      "start": {
                        "column": 26,
                        "line": 171
                      }
                    }
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        },
                        "range": [
                          3840,
                          3846
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 171
                          },
                          "start": {
                            "column": 37,
                            "line": 171
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "range": [
                          3852,
                          3854
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 171
                          },
                          "start": {
                            "column": 49,
                            "line": 171
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          3846,
                          3852
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 171
                          },
                          "start": {
                            "column": 43,
                            "line": 171
                          }
                        }
                      }
                    ],
                    "range": [
                      3840,
                      3854
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 171
                      },
                      "start": {
                        "column": 37,
                        "line": 171
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'foox'",
                      "value": "foox",
                      "range": [
                        3857,
                        3863
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 171
                        },
                        "start": {
                          "column": 54,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      3857,
                      3863
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 171
                      },
                      "start": {
                        "column": 54,
                        "line": 171
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'xfoo'",
                      "value": "xfoo",
                      "range": [
                        3866,
                        3872
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 171
                        },
                        "start": {
                          "column": 63,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      3866,
                      3872
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 171
                      },
                      "start": {
                        "column": 63,
                        "line": 171
                      }
                    }
                  }
                ],
                "range": [
                  3811,
                  3872
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 171
                  },
                  "start": {
                    "column": 8,
                    "line": 171
                  }
                }
              }
            },
            "range": [
              3807,
              3872
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 171
              },
              "start": {
                "column": 4,
                "line": 171
              }
            }
          },
          "init": null,
          "range": [
            3807,
            3872
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 171
            },
            "start": {
              "column": 4,
              "line": 171
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3803,
        3873
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 171
        },
        "start": {
          "column": 0,
          "line": 171
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 86,
                  "line": 172
                },
                "start": {
                  "column": 6,
                  "line": 172
                }
              },
              "range": [
                3917,
                3997
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "TemplateLiteral",
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "foo1",
                            "raw": "foo1"
                          },
                          "range": [
                            3919,
                            3925
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 172
                            },
                            "start": {
                              "column": 8,
                              "line": 172
                            }
                          }
                        }
                      ],
                      "range": [
                        3919,
                        3925
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 172
                        },
                        "start": {
                          "column": 8,
                          "line": 172
                        }
                      }
                    },
                    "range": [
                      3919,
                      3925
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 172
                      },
                      "start": {
                        "column": 8,
                        "line": 172
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'1foo'",
                      "value": "1foo",
                      "range": [
                        3928,
                        3934
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 172
                        },
                        "start": {
                          "column": 17,
                          "line": 172
                        }
                      }
                    },
                    "range": [
                      3928,
                      3934
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 172
                      },
                      "start": {
                        "column": 17,
                        "line": 172
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'foofoo'",
                      "value": "foofoo",
                      "range": [
                        3937,
                        3945
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 172
                        },
                        "start": {
                          "column": 26,
                          "line": 172
                        }
                      }
                    },
                    "range": [
                      3937,
                      3945
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 172
                      },
                      "start": {
                        "column": 26,
                        "line": 172
                      }
                    }
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        },
                        "range": [
                          3948,
                          3954
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 172
                          },
                          "start": {
                            "column": 37,
                            "line": 172
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "range": [
                          3960,
                          3962
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 172
                          },
                          "start": {
                            "column": 49,
                            "line": 172
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          3954,
                          3960
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 172
                          },
                          "start": {
                            "column": 43,
                            "line": 172
                          }
                        }
                      }
                    ],
                    "range": [
                      3948,
                      3962
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 172
                      },
                      "start": {
                        "column": 37,
                        "line": 172
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'foox'",
                      "value": "foox",
                      "range": [
                        3965,
                        3971
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 172
                        },
                        "start": {
                          "column": 54,
                          "line": 172
                        }
                      }
                    },
                    "range": [
                      3965,
                      3971
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 172
                      },
                      "start": {
                        "column": 54,
                        "line": 172
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'xfoo'",
                      "value": "xfoo",
                      "range": [
                        3974,
                        3980
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 172
                        },
                        "start": {
                          "column": 63,
                          "line": 172
                        }
                      }
                    },
                    "range": [
                      3974,
                      3980
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 172
                      },
                      "start": {
                        "column": 63,
                        "line": 172
                      }
                    }
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "range": [
                          3983,
                          3986
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 172
                          },
                          "start": {
                            "column": 72,
                            "line": 172
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        },
                        "range": [
                          3992,
                          3997
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 172
                          },
                          "start": {
                            "column": 81,
                            "line": 172
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          3986,
                          3992
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 172
                          },
                          "start": {
                            "column": 75,
                            "line": 172
                          }
                        }
                      }
                    ],
                    "range": [
                      3983,
                      3997
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 172
                      },
                      "start": {
                        "column": 72,
                        "line": 172
                      }
                    }
                  }
                ],
                "range": [
                  3919,
                  3997
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 172
                  },
                  "start": {
                    "column": 8,
                    "line": 172
                  }
                }
              }
            },
            "range": [
              3915,
              3997
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 172
              },
              "start": {
                "column": 4,
                "line": 172
              }
            }
          },
          "init": null,
          "range": [
            3915,
            3997
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 172
            },
            "start": {
              "column": 4,
              "line": 172
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3911,
        3998
      ],
      "loc": {
        "end": {
          "column": 87,
          "line": 172
        },
        "start": {
          "column": 0,
          "line": 172
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
            "name": "bb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 174
                },
                "start": {
                  "column": 6,
                  "line": 174
                }
              },
              "range": [
                4050,
                4063
              ],
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      4052,
                      4055
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 174
                      },
                      "start": {
                        "column": 8,
                        "line": 174
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      4061,
                      4063
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 174
                      },
                      "start": {
                        "column": 17,
                        "line": 174
                      }
                    }
                  }
                ],
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      4055,
                      4061
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 174
                      },
                      "start": {
                        "column": 11,
                        "line": 174
                      }
                    }
                  }
                ],
                "range": [
                  4052,
                  4063
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 174
                  },
                  "start": {
                    "column": 8,
                    "line": 174
                  }
                }
              }
            },
            "range": [
              4048,
              4063
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 174
              },
              "start": {
                "column": 4,
                "line": 174
              }
            }
          },
          "init": null,
          "range": [
            4048,
            4063
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 174
            },
            "start": {
              "column": 4,
              "line": 174
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        4044,
        4064
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 174
        },
        "start": {
          "column": 0,
          "line": 174
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
            "name": "bb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 175
                },
                "start": {
                  "column": 6,
                  "line": 175
                }
              },
              "range": [
                4071,
                4090
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "range": [
                          4073,
                          4076
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 175
                          },
                          "start": {
                            "column": 8,
                            "line": 175
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "range": [
                          4082,
                          4084
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 175
                          },
                          "start": {
                            "column": 17,
                            "line": 175
                          }
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          4076,
                          4082
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 175
                          },
                          "start": {
                            "column": 11,
                            "line": 175
                          }
                        }
                      }
                    ],
                    "range": [
                      4073,
                      4084
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 175
                      },
                      "start": {
                        "column": 8,
                        "line": 175
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'0'",
                      "value": "0",
                      "range": [
                        4087,
                        4090
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 175
                        },
                        "start": {
                          "column": 22,
                          "line": 175
                        }
                      }
                    },
                    "range": [
                      4087,
                      4090
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 175
                      },
                      "start": {
                        "column": 22,
                        "line": 175
                      }
                    }
                  }
                ],
                "range": [
                  4073,
                  4090
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 175
                  },
                  "start": {
                    "column": 8,
                    "line": 175
                  }
                }
              }
            },
            "range": [
              4069,
              4090
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 175
              },
              "start": {
                "column": 4,
                "line": 175
              }
            }
          },
          "init": null,
          "range": [
            4069,
            4090
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 175
            },
            "start": {
              "column": 4,
              "line": 175
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        4065,
        4091
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 175
        },
        "start": {
          "column": 0,
          "line": 175
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2S",
        "optional": false,
        "range": [
          4139,
          4142
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 179
          },
          "start": {
            "column": 5,
            "line": 179
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              4181,
              4184
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 179
              },
              "start": {
                "column": 47,
                "line": 179
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              4185,
              4188
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 179
              },
              "start": {
                "column": 51,
                "line": 179
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              4189,
              4191
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 179
              },
              "start": {
                "column": 55,
                "line": 179
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                4184,
                4185
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 179
                },
                "start": {
                  "column": 50,
                  "line": 179
                }
              }
            },
            "range": [
              4184,
              4185
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 179
              },
              "start": {
                "column": 50,
                "line": 179
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                4188,
                4189
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 179
                },
                "start": {
                  "column": 54,
                  "line": 179
                }
              }
            },
            "range": [
              4188,
              4189
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 179
              },
              "start": {
                "column": 54,
                "line": 179
              }
            }
          }
        ],
        "range": [
          4181,
          4191
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 179
          },
          "start": {
            "column": 47,
            "line": 179
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 179
          },
          "start": {
            "column": 8,
            "line": 179
          }
        },
        "range": [
          4142,
          4178
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                4153,
                4159
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 179
                },
                "start": {
                  "column": 19,
                  "line": 179
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                4143,
                4144
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 179
                },
                "start": {
                  "column": 9,
                  "line": 179
                }
              }
            },
            "out": false,
            "range": [
              4143,
              4159
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 179
              },
              "start": {
                "column": 9,
                "line": 179
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                4171,
                4177
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 179
                },
                "start": {
                  "column": 37,
                  "line": 179
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                4161,
                4162
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 179
                },
                "start": {
                  "column": 27,
                  "line": 179
                }
              }
            },
            "out": false,
            "range": [
              4161,
              4177
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 179
              },
              "start": {
                "column": 27,
                "line": 179
              }
            }
          }
        ]
      },
      "range": [
        4134,
        4192
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 179
        },
        "start": {
          "column": 0,
          "line": 179
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S10",
        "optional": false,
        "range": [
          4199,
          4202
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 181
          },
          "start": {
            "column": 5,
            "line": 181
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              4205,
              4208
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 181
              },
              "start": {
                "column": 11,
                "line": 181
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              4214,
              4216
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 181
              },
              "start": {
                "column": 20,
                "line": 181
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              4208,
              4214
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 181
              },
              "start": {
                "column": 14,
                "line": 181
              }
            }
          }
        ],
        "range": [
          4205,
          4216
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 181
          },
          "start": {
            "column": 11,
            "line": 181
          }
        }
      },
      "range": [
        4194,
        4217
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 181
        },
        "start": {
          "column": 0,
          "line": 181
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S11",
        "optional": false,
        "range": [
          4234,
          4237
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 182
          },
          "start": {
            "column": 5,
            "line": 182
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              4240,
              4243
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 182
              },
              "start": {
                "column": 11,
                "line": 182
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              4249,
              4252
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 182
              },
              "start": {
                "column": 20,
                "line": 182
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              4258,
              4261
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 182
              },
              "start": {
                "column": 29,
                "line": 182
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              4267,
              4269
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 182
              },
              "start": {
                "column": 38,
                "line": 182
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              4243,
              4249
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 182
              },
              "start": {
                "column": 14,
                "line": 182
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              4252,
              4258
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 182
              },
              "start": {
                "column": 23,
                "line": 182
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              4261,
              4267
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 182
              },
              "start": {
                "column": 32,
                "line": 182
              }
            }
          }
        ],
        "range": [
          4240,
          4269
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 182
          },
          "start": {
            "column": 11,
            "line": 182
          }
        }
      },
      "range": [
        4229,
        4270
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 182
        },
        "start": {
          "column": 0,
          "line": 182
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S12",
        "optional": false,
        "range": [
          4287,
          4290
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 183
          },
          "start": {
            "column": 5,
            "line": 183
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            4296,
            4312
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                4297,
                4303
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 183
                },
                "start": {
                  "column": 15,
                  "line": 183
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "range": [
                4305,
                4311
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 183
                },
                "start": {
                  "column": 23,
                  "line": 183
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 183
            },
            "start": {
              "column": 14,
              "line": 183
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T2S",
          "optional": false,
          "range": [
            4293,
            4296
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 183
            },
            "start": {
              "column": 11,
              "line": 183
            }
          }
        },
        "range": [
          4293,
          4312
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 183
          },
          "start": {
            "column": 11,
            "line": 183
          }
        }
      },
      "range": [
        4282,
        4313
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 183
        },
        "start": {
          "column": 0,
          "line": 183
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
                  "name": "s1",
                  "optional": false,
                  "range": [
                    4375,
                    4377
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 186
                    },
                    "start": {
                      "column": 8,
                      "line": 186
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      4380,
                      4381
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 186
                      },
                      "start": {
                        "column": 13,
                        "line": 186
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "42",
                    "value": 42,
                    "range": [
                      4385,
                      4387
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 186
                      },
                      "start": {
                        "column": 18,
                        "line": 186
                      }
                    }
                  },
                  "range": [
                    4380,
                    4387
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 186
                    },
                    "start": {
                      "column": 13,
                      "line": 186
                    }
                  }
                },
                "range": [
                  4375,
                  4387
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 186
                  },
                  "start": {
                    "column": 8,
                    "line": 186
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              4371,
              4388
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 186
              },
              "start": {
                "column": 4,
                "line": 186
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
                  "name": "s2",
                  "optional": false,
                  "range": [
                    4408,
                    4410
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 187
                    },
                    "start": {
                      "column": 8,
                      "line": 187
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      4413,
                      4414
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 187
                      },
                      "start": {
                        "column": 13,
                        "line": 187
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "42",
                    "value": 42,
                    "range": [
                      4418,
                      4420
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 187
                      },
                      "start": {
                        "column": 18,
                        "line": 187
                      }
                    }
                  },
                  "range": [
                    4413,
                    4420
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 187
                    },
                    "start": {
                      "column": 13,
                      "line": 187
                    }
                  }
                },
                "range": [
                  4408,
                  4420
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 187
                  },
                  "start": {
                    "column": 8,
                    "line": 187
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              4404,
              4421
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 187
              },
              "start": {
                "column": 4,
                "line": 187
              }
            }
          }
        ],
        "range": [
          4365,
          4449
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 188
          },
          "start": {
            "column": 39,
            "line": 185
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff1",
        "optional": false,
        "range": [
          4335,
          4338
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 185
          },
          "start": {
            "column": 9,
            "line": 185
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
                "column": 37,
                "line": 185
              },
              "start": {
                "column": 14,
                "line": 185
              }
            },
            "range": [
              4340,
              4363
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    4342,
                    4345
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 185
                    },
                    "start": {
                      "column": 16,
                      "line": 185
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "-",
                    "raw": "-"
                  },
                  "range": [
                    4351,
                    4355
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 185
                    },
                    "start": {
                      "column": 25,
                      "line": 185
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    4361,
                    4363
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 185
                    },
                    "start": {
                      "column": 35,
                      "line": 185
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4345,
                    4351
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 185
                    },
                    "start": {
                      "column": 19,
                      "line": 185
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4355,
                    4361
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 185
                    },
                    "start": {
                      "column": 29,
                      "line": 185
                    }
                  }
                }
              ],
              "range": [
                4342,
                4363
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 185
                },
                "start": {
                  "column": 16,
                  "line": 185
                }
              }
            }
          },
          "range": [
            4339,
            4363
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 185
            },
            "start": {
              "column": 13,
              "line": 185
            }
          }
        }
      ],
      "range": [
        4326,
        4449
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 188
        },
        "start": {
          "column": 0,
          "line": 185
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4473,
        4539
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "range": [
            4485,
            4487
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 192
            },
            "start": {
              "column": 12,
              "line": 192
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                4523,
                4526
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 192
                },
                "start": {
                  "column": 50,
                  "line": 192
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "-",
                "raw": "-"
              },
              "range": [
                4529,
                4533
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 192
                },
                "start": {
                  "column": 56,
                  "line": 192
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                4536,
                4538
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 192
                },
                "start": {
                  "column": 63,
                  "line": 192
                }
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TId",
                "optional": false,
                "range": [
                  4526,
                  4529
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 192
                  },
                  "start": {
                    "column": 53,
                    "line": 192
                  }
                }
              },
              "range": [
                4526,
                4529
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 192
                },
                "start": {
                  "column": 53,
                  "line": 192
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TId",
                "optional": false,
                "range": [
                  4533,
                  4536
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 192
                  },
                  "start": {
                    "column": 60,
                    "line": 192
                  }
                }
              },
              "range": [
                4533,
                4536
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 192
                },
                "start": {
                  "column": 60,
                  "line": 192
                }
              }
            }
          ],
          "range": [
            4523,
            4538
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 192
            },
            "start": {
              "column": 50,
              "line": 192
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 47,
              "line": 192
            },
            "start": {
              "column": 14,
              "line": 192
            }
          },
          "range": [
            4487,
            4520
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TA",
                "optional": false,
                "range": [
                  4488,
                  4490
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 192
                  },
                  "start": {
                    "column": 15,
                    "line": 192
                  }
                }
              },
              "out": false,
              "range": [
                4488,
                4490
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 192
                },
                "start": {
                  "column": 15,
                  "line": 192
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  4504,
                  4510
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 192
                  },
                  "start": {
                    "column": 31,
                    "line": 192
                  }
                }
              },
              "default": {
                "type": "TSStringKeyword",
                "range": [
                  4513,
                  4519
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 192
                  },
                  "start": {
                    "column": 40,
                    "line": 192
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TId",
                "optional": false,
                "range": [
                  4492,
                  4495
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 192
                  },
                  "start": {
                    "column": 19,
                    "line": 192
                  }
                }
              },
              "out": false,
              "range": [
                4492,
                4519
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 192
                },
                "start": {
                  "column": 19,
                  "line": 192
                }
              }
            }
          ]
        },
        "range": [
          4480,
          4539
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 192
          },
          "start": {
            "column": 7,
            "line": 192
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 66,
          "line": 192
        },
        "start": {
          "column": 0,
          "line": 192
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4541,
        4559
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            4557,
            4559
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 18,
              "line": 194
            },
            "start": {
              "column": 16,
              "line": 194
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "range": [
            4554,
            4556
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 194
            },
            "start": {
              "column": 13,
              "line": 194
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          4548,
          4559
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 194
          },
          "start": {
            "column": 7,
            "line": 194
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 18,
          "line": 194
        },
        "start": {
          "column": 0,
          "line": 194
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4561,
        4685
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": true,
        "body": {
          "type": "ClassBody",
          "range": [
            4586,
            4685
          ],
          "body": [
            {
              "type": "TSAbstractMethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "range": [
                  4601,
                  4604
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 197
                  },
                  "start": {
                    "column": 13,
                    "line": 197
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  4604,
                  4623
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 197
                        },
                        "start": {
                          "column": 19,
                          "line": 197
                        }
                      },
                      "range": [
                        4607,
                        4615
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            4611,
                            4615
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AA",
                                "optional": false,
                                "range": [
                                  4612,
                                  4614
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 197
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 197
                                  }
                                }
                              },
                              "range": [
                                4612,
                                4614
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 197
                                },
                                "start": {
                                  "column": 24,
                                  "line": 197
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 197
                            },
                            "start": {
                              "column": 23,
                              "line": 197
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Id",
                          "optional": false,
                          "range": [
                            4609,
                            4611
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 197
                            },
                            "start": {
                              "column": 21,
                              "line": 197
                            }
                          }
                        },
                        "range": [
                          4609,
                          4615
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 197
                          },
                          "start": {
                            "column": 21,
                            "line": 197
                          }
                        }
                      }
                    },
                    "range": [
                      4605,
                      4615
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 197
                      },
                      "start": {
                        "column": 17,
                        "line": 197
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 197
                    },
                    "start": {
                      "column": 28,
                      "line": 197
                    }
                  },
                  "range": [
                    4616,
                    4622
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      4618,
                      4622
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 197
                      },
                      "start": {
                        "column": 30,
                        "line": 197
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 197
                  },
                  "start": {
                    "column": 16,
                    "line": 197
                  }
                }
              },
              "range": [
                4592,
                4623
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 197
                },
                "start": {
                  "column": 4,
                  "line": 197
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
                "name": "update",
                "optional": false,
                "range": [
                  4628,
                  4634
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 198
                  },
                  "start": {
                    "column": 4,
                    "line": 198
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
                  4634,
                  4683
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
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "id",
                              "optional": false,
                              "range": [
                                4672,
                                4674
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 199
                                },
                                "start": {
                                  "column": 17,
                                  "line": 199
                                }
                              }
                            },
                            "range": [
                              4672,
                              4675
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 199
                              },
                              "start": {
                                "column": 17,
                                "line": 199
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
                              4663,
                              4667
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 199
                              },
                              "start": {
                                "column": 8,
                                "line": 199
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "range": [
                              4668,
                              4671
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 199
                              },
                              "start": {
                                "column": 13,
                                "line": 199
                              }
                            }
                          },
                          "range": [
                            4663,
                            4671
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 199
                            },
                            "start": {
                              "column": 8,
                              "line": 199
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          4663,
                          4676
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 199
                          },
                          "start": {
                            "column": 8,
                            "line": 199
                          }
                        }
                      },
                      "range": [
                        4663,
                        4677
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 199
                        },
                        "start": {
                          "column": 8,
                          "line": 199
                        }
                      }
                    }
                  ],
                  "range": [
                    4653,
                    4683
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 200
                    },
                    "start": {
                      "column": 29,
                      "line": 198
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 198
                        },
                        "start": {
                          "column": 13,
                          "line": 198
                        }
                      },
                      "range": [
                        4637,
                        4645
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            4641,
                            4645
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AA",
                                "optional": false,
                                "range": [
                                  4642,
                                  4644
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 198
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 198
                                  }
                                }
                              },
                              "range": [
                                4642,
                                4644
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 198
                                },
                                "start": {
                                  "column": 18,
                                  "line": 198
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 198
                            },
                            "start": {
                              "column": 17,
                              "line": 198
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Id",
                          "optional": false,
                          "range": [
                            4639,
                            4641
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 198
                            },
                            "start": {
                              "column": 15,
                              "line": 198
                            }
                          }
                        },
                        "range": [
                          4639,
                          4645
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 198
                          },
                          "start": {
                            "column": 15,
                            "line": 198
                          }
                        }
                      }
                    },
                    "range": [
                      4635,
                      4645
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 198
                      },
                      "start": {
                        "column": 11,
                        "line": 198
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 198
                    },
                    "start": {
                      "column": 22,
                      "line": 198
                    }
                  },
                  "range": [
                    4646,
                    4652
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      4648,
                      4652
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 198
                      },
                      "start": {
                        "column": 24,
                        "line": 198
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 200
                  },
                  "start": {
                    "column": 10,
                    "line": 198
                  }
                }
              },
              "range": [
                4628,
                4683
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 200
                },
                "start": {
                  "column": 4,
                  "line": 198
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 201
            },
            "start": {
              "column": 25,
              "line": 196
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BB",
          "optional": false,
          "range": [
            4583,
            4585
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 196
            },
            "start": {
              "column": 22,
              "line": 196
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          4568,
          4685
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 201
          },
          "start": {
            "column": 7,
            "line": 196
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 201
        },
        "start": {
          "column": 0,
          "line": 196
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          4891,
          4893
        ],
        "loc": {
          "end": {
            "column": 115,
            "line": 204
          },
          "start": {
            "column": 113,
            "line": 204
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest",
        "optional": false,
        "range": [
          4787,
          4801
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 204
          },
          "start": {
            "column": 9,
            "line": 204
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 111,
                "line": 204
              },
              "start": {
                "column": 33,
                "line": 204
              }
            },
            "range": [
              4811,
              4889
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"downcast\"",
                    "value": "downcast",
                    "range": [
                      4815,
                      4825
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 204
                      },
                      "start": {
                        "column": 37,
                        "line": 204
                      }
                    }
                  },
                  "range": [
                    4815,
                    4825
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 204
                    },
                    "start": {
                      "column": 37,
                      "line": 204
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"dataDowncast\"",
                    "value": "dataDowncast",
                    "range": [
                      4828,
                      4842
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 204
                      },
                      "start": {
                        "column": 50,
                        "line": 204
                      }
                    }
                  },
                  "range": [
                    4828,
                    4842
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 204
                    },
                    "start": {
                      "column": 50,
                      "line": 204
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"editingDowncast\"",
                    "value": "editingDowncast",
                    "range": [
                      4845,
                      4862
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 204
                      },
                      "start": {
                        "column": 67,
                        "line": 204
                      }
                    }
                  },
                  "range": [
                    4845,
                    4862
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 204
                    },
                    "start": {
                      "column": 67,
                      "line": 204
                    }
                  }
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "range": [
                            4865,
                            4868
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 204
                            },
                            "start": {
                              "column": 87,
                              "line": 204
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "Downcast",
                            "raw": "Downcast"
                          },
                          "range": [
                            4874,
                            4884
                          ],
                          "loc": {
                            "end": {
                              "column": 106,
                              "line": 204
                            },
                            "start": {
                              "column": 96,
                              "line": 204
                            }
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            4868,
                            4874
                          ],
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 204
                            },
                            "start": {
                              "column": 90,
                              "line": 204
                            }
                          }
                        }
                      ],
                      "range": [
                        4865,
                        4884
                      ],
                      "loc": {
                        "end": {
                          "column": 106,
                          "line": 204
                        },
                        "start": {
                          "column": 87,
                          "line": 204
                        }
                      }
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        4887,
                        4889
                      ],
                      "loc": {
                        "end": {
                          "column": 111,
                          "line": 204
                        },
                        "start": {
                          "column": 109,
                          "line": 204
                        }
                      }
                    }
                  ],
                  "range": [
                    4865,
                    4889
                  ],
                  "loc": {
                    "end": {
                      "column": 111,
                      "line": 204
                    },
                    "start": {
                      "column": 87,
                      "line": 204
                    }
                  }
                }
              ],
              "range": [
                4813,
                4889
              ],
              "loc": {
                "end": {
                  "column": 111,
                  "line": 204
                },
                "start": {
                  "column": 35,
                  "line": 204
                }
              }
            }
          },
          "range": [
            4802,
            4889
          ],
          "loc": {
            "end": {
              "column": 111,
              "line": 204
            },
            "start": {
              "column": 24,
              "line": 204
            }
          }
        }
      ],
      "range": [
        4778,
        4893
      ],
      "loc": {
        "end": {
          "column": 115,
          "line": 204
        },
        "start": {
          "column": 0,
          "line": 204
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"testDowncast\"",
            "value": "testDowncast",
            "range": [
              4909,
              4923
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 205
              },
              "start": {
                "column": 15,
                "line": 205
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest",
          "optional": false,
          "range": [
            4894,
            4908
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 205
            },
            "start": {
              "column": 0,
              "line": 205
            }
          }
        },
        "optional": false,
        "range": [
          4894,
          4924
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 205
          },
          "start": {
            "column": 0,
            "line": 205
          }
        }
      },
      "range": [
        4894,
        4925
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 205
        },
        "start": {
          "column": 0,
          "line": 205
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          5040,
          5042
        ],
        "loc": {
          "end": {
            "column": 116,
            "line": 206
          },
          "start": {
            "column": 114,
            "line": 206
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest2",
        "optional": false,
        "range": [
          4935,
          4950
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 206
          },
          "start": {
            "column": 9,
            "line": 206
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 112,
                "line": 206
              },
              "start": {
                "column": 34,
                "line": 206
              }
            },
            "range": [
              4960,
              5038
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"downcast\"",
                    "value": "downcast",
                    "range": [
                      4964,
                      4974
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 206
                      },
                      "start": {
                        "column": 38,
                        "line": 206
                      }
                    }
                  },
                  "range": [
                    4964,
                    4974
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 206
                    },
                    "start": {
                      "column": 38,
                      "line": 206
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"dataDowncast\"",
                    "value": "dataDowncast",
                    "range": [
                      4977,
                      4991
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 206
                      },
                      "start": {
                        "column": 51,
                        "line": 206
                      }
                    }
                  },
                  "range": [
                    4977,
                    4991
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 206
                    },
                    "start": {
                      "column": 51,
                      "line": 206
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"editingDowncast\"",
                    "value": "editingDowncast",
                    "range": [
                      4994,
                      5011
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 206
                      },
                      "start": {
                        "column": 68,
                        "line": 206
                      }
                    }
                  },
                  "range": [
                    4994,
                    5011
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 206
                    },
                    "start": {
                      "column": 68,
                      "line": 206
                    }
                  }
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        5014,
                        5016
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 206
                        },
                        "start": {
                          "column": 88,
                          "line": 206
                        }
                      }
                    },
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "range": [
                            5019,
                            5022
                          ],
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 206
                            },
                            "start": {
                              "column": 93,
                              "line": 206
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "Downcast",
                            "raw": "Downcast"
                          },
                          "range": [
                            5028,
                            5038
                          ],
                          "loc": {
                            "end": {
                              "column": 112,
                              "line": 206
                            },
                            "start": {
                              "column": 102,
                              "line": 206
                            }
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            5022,
                            5028
                          ],
                          "loc": {
                            "end": {
                              "column": 102,
                              "line": 206
                            },
                            "start": {
                              "column": 96,
                              "line": 206
                            }
                          }
                        }
                      ],
                      "range": [
                        5019,
                        5038
                      ],
                      "loc": {
                        "end": {
                          "column": 112,
                          "line": 206
                        },
                        "start": {
                          "column": 93,
                          "line": 206
                        }
                      }
                    }
                  ],
                  "range": [
                    5014,
                    5038
                  ],
                  "loc": {
                    "end": {
                      "column": 112,
                      "line": 206
                    },
                    "start": {
                      "column": 88,
                      "line": 206
                    }
                  }
                }
              ],
              "range": [
                4962,
                5038
              ],
              "loc": {
                "end": {
                  "column": 112,
                  "line": 206
                },
                "start": {
                  "column": 36,
                  "line": 206
                }
              }
            }
          },
          "range": [
            4951,
            5038
          ],
          "loc": {
            "end": {
              "column": 112,
              "line": 206
            },
            "start": {
              "column": 25,
              "line": 206
            }
          }
        }
      ],
      "range": [
        4926,
        5042
      ],
      "loc": {
        "end": {
          "column": 116,
          "line": 206
        },
        "start": {
          "column": 0,
          "line": 206
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"testDowncast\"",
            "value": "testDowncast",
            "range": [
              5059,
              5073
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 207
              },
              "start": {
                "column": 16,
                "line": 207
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest2",
          "optional": false,
          "range": [
            5043,
            5058
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 207
            },
            "start": {
              "column": 0,
              "line": 207
            }
          }
        },
        "optional": false,
        "range": [
          5043,
          5074
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 207
          },
          "start": {
            "column": 0,
            "line": 207
          }
        }
      },
      "range": [
        5043,
        5075
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 207
        },
        "start": {
          "column": 0,
          "line": 207
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          5190,
          5192
        ],
        "loc": {
          "end": {
            "column": 116,
            "line": 208
          },
          "start": {
            "column": 114,
            "line": 208
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest3",
        "optional": false,
        "range": [
          5085,
          5100
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 208
          },
          "start": {
            "column": 9,
            "line": 208
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 112,
                "line": 208
              },
              "start": {
                "column": 34,
                "line": 208
              }
            },
            "range": [
              5110,
              5188
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"downcast\"",
                    "value": "downcast",
                    "range": [
                      5114,
                      5124
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 208
                      },
                      "start": {
                        "column": 38,
                        "line": 208
                      }
                    }
                  },
                  "range": [
                    5114,
                    5124
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 208
                    },
                    "start": {
                      "column": 38,
                      "line": 208
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"dataDowncast\"",
                    "value": "dataDowncast",
                    "range": [
                      5127,
                      5141
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 208
                      },
                      "start": {
                        "column": 51,
                        "line": 208
                      }
                    }
                  },
                  "range": [
                    5127,
                    5141
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 208
                    },
                    "start": {
                      "column": 51,
                      "line": 208
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"editingDowncast\"",
                    "value": "editingDowncast",
                    "range": [
                      5144,
                      5161
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 208
                      },
                      "start": {
                        "column": 68,
                        "line": 208
                      }
                    }
                  },
                  "range": [
                    5144,
                    5161
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 208
                    },
                    "start": {
                      "column": 68,
                      "line": 208
                    }
                  }
                },
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        5164,
                        5167
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 208
                        },
                        "start": {
                          "column": 88,
                          "line": 208
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "Downcast",
                        "raw": "Downcast"
                      },
                      "range": [
                        5178,
                        5188
                      ],
                      "loc": {
                        "end": {
                          "column": 112,
                          "line": 208
                        },
                        "start": {
                          "column": 102,
                          "line": 208
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            5167,
                            5173
                          ],
                          "loc": {
                            "end": {
                              "column": 97,
                              "line": 208
                            },
                            "start": {
                              "column": 91,
                              "line": 208
                            }
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "range": [
                            5176,
                            5178
                          ],
                          "loc": {
                            "end": {
                              "column": 102,
                              "line": 208
                            },
                            "start": {
                              "column": 100,
                              "line": 208
                            }
                          }
                        }
                      ],
                      "range": [
                        5167,
                        5178
                      ],
                      "loc": {
                        "end": {
                          "column": 102,
                          "line": 208
                        },
                        "start": {
                          "column": 91,
                          "line": 208
                        }
                      }
                    }
                  ],
                  "range": [
                    5164,
                    5188
                  ],
                  "loc": {
                    "end": {
                      "column": 112,
                      "line": 208
                    },
                    "start": {
                      "column": 88,
                      "line": 208
                    }
                  }
                }
              ],
              "range": [
                5112,
                5188
              ],
              "loc": {
                "end": {
                  "column": 112,
                  "line": 208
                },
                "start": {
                  "column": 36,
                  "line": 208
                }
              }
            }
          },
          "range": [
            5101,
            5188
          ],
          "loc": {
            "end": {
              "column": 112,
              "line": 208
            },
            "start": {
              "column": 25,
              "line": 208
            }
          }
        }
      ],
      "range": [
        5076,
        5192
      ],
      "loc": {
        "end": {
          "column": 116,
          "line": 208
        },
        "start": {
          "column": 0,
          "line": 208
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"testDowncast\"",
            "value": "testDowncast",
            "range": [
              5209,
              5223
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 209
              },
              "start": {
                "column": 16,
                "line": 209
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest3",
          "optional": false,
          "range": [
            5193,
            5208
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 209
            },
            "start": {
              "column": 0,
              "line": 209
            }
          }
        },
        "optional": false,
        "range": [
          5193,
          5224
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 209
          },
          "start": {
            "column": 0,
            "line": 209
          }
        }
      },
      "range": [
        5193,
        5225
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 209
        },
        "start": {
          "column": 0,
          "line": 209
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          5340,
          5342
        ],
        "loc": {
          "end": {
            "column": 116,
            "line": 210
          },
          "start": {
            "column": 114,
            "line": 210
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest4",
        "optional": false,
        "range": [
          5235,
          5250
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 210
          },
          "start": {
            "column": 9,
            "line": 210
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 112,
                "line": 210
              },
              "start": {
                "column": 34,
                "line": 210
              }
            },
            "range": [
              5260,
              5338
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"downcast\"",
                    "value": "downcast",
                    "range": [
                      5264,
                      5274
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 210
                      },
                      "start": {
                        "column": 38,
                        "line": 210
                      }
                    }
                  },
                  "range": [
                    5264,
                    5274
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 210
                    },
                    "start": {
                      "column": 38,
                      "line": 210
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"dataDowncast\"",
                    "value": "dataDowncast",
                    "range": [
                      5277,
                      5291
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 210
                      },
                      "start": {
                        "column": 51,
                        "line": 210
                      }
                    }
                  },
                  "range": [
                    5277,
                    5291
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 210
                    },
                    "start": {
                      "column": 51,
                      "line": 210
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"editingDowncast\"",
                    "value": "editingDowncast",
                    "range": [
                      5294,
                      5311
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 210
                      },
                      "start": {
                        "column": 68,
                        "line": 210
                      }
                    }
                  },
                  "range": [
                    5294,
                    5311
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 210
                    },
                    "start": {
                      "column": 68,
                      "line": 210
                    }
                  }
                },
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "range": [
                        5314,
                        5317
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 210
                        },
                        "start": {
                          "column": 88,
                          "line": 210
                        }
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "tail": true,
                      "value": {
                        "cooked": "Downcast",
                        "raw": "Downcast"
                      },
                      "range": [
                        5328,
                        5338
                      ],
                      "loc": {
                        "end": {
                          "column": 112,
                          "line": 210
                        },
                        "start": {
                          "column": 102,
                          "line": 210
                        }
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "range": [
                            5317,
                            5319
                          ],
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 210
                            },
                            "start": {
                              "column": 91,
                              "line": 210
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            5322,
                            5328
                          ],
                          "loc": {
                            "end": {
                              "column": 102,
                              "line": 210
                            },
                            "start": {
                              "column": 96,
                              "line": 210
                            }
                          }
                        }
                      ],
                      "range": [
                        5317,
                        5328
                      ],
                      "loc": {
                        "end": {
                          "column": 102,
                          "line": 210
                        },
                        "start": {
                          "column": 91,
                          "line": 210
                        }
                      }
                    }
                  ],
                  "range": [
                    5314,
                    5338
                  ],
                  "loc": {
                    "end": {
                      "column": 112,
                      "line": 210
                    },
                    "start": {
                      "column": 88,
                      "line": 210
                    }
                  }
                }
              ],
              "range": [
                5262,
                5338
              ],
              "loc": {
                "end": {
                  "column": 112,
                  "line": 210
                },
                "start": {
                  "column": 36,
                  "line": 210
                }
              }
            }
          },
          "range": [
            5251,
            5338
          ],
          "loc": {
            "end": {
              "column": 112,
              "line": 210
            },
            "start": {
              "column": 25,
              "line": 210
            }
          }
        }
      ],
      "range": [
        5226,
        5342
      ],
      "loc": {
        "end": {
          "column": 116,
          "line": 210
        },
        "start": {
          "column": 0,
          "line": 210
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"testDowncast\"",
            "value": "testDowncast",
            "range": [
              5359,
              5373
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 211
              },
              "start": {
                "column": 16,
                "line": 211
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest4",
          "optional": false,
          "range": [
            5343,
            5358
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 211
            },
            "start": {
              "column": 0,
              "line": 211
            }
          }
        },
        "optional": false,
        "range": [
          5343,
          5374
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 211
          },
          "start": {
            "column": 0,
            "line": 211
          }
        }
      },
      "range": [
        5343,
        5375
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 211
        },
        "start": {
          "column": 0,
          "line": 211
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          5433,
          5435
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 213
          },
          "start": {
            "column": 56,
            "line": 213
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          5386,
          5389
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 213
          },
          "start": {
            "column": 9,
            "line": 213
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 213
              },
              "start": {
                "column": 16,
                "line": 213
              }
            },
            "range": [
              5393,
              5431
            ],
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    5395,
                    5398
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 213
                    },
                    "start": {
                      "column": 18,
                      "line": 213
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "Test",
                    "raw": "Test"
                  },
                  "range": [
                    5425,
                    5431
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 213
                    },
                    "start": {
                      "column": 48,
                      "line": 213
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": "a",
                            "raw": "a"
                          },
                          "range": [
                            5398,
                            5402
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 213
                            },
                            "start": {
                              "column": 21,
                              "line": 213
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "range": [
                            5408,
                            5410
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 213
                            },
                            "start": {
                              "column": 31,
                              "line": 213
                            }
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            5402,
                            5408
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 213
                            },
                            "start": {
                              "column": 25,
                              "line": 213
                            }
                          }
                        }
                      ],
                      "range": [
                        5398,
                        5410
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 213
                        },
                        "start": {
                          "column": 21,
                          "line": 213
                        }
                      }
                    },
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": false,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "range": [
                            5413,
                            5416
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 213
                            },
                            "start": {
                              "column": 36,
                              "line": 213
                            }
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "a",
                            "raw": "a"
                          },
                          "range": [
                            5422,
                            5425
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 213
                            },
                            "start": {
                              "column": 45,
                              "line": 213
                            }
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            5416,
                            5422
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 213
                            },
                            "start": {
                              "column": 39,
                              "line": 213
                            }
                          }
                        }
                      ],
                      "range": [
                        5413,
                        5425
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 213
                        },
                        "start": {
                          "column": 36,
                          "line": 213
                        }
                      }
                    }
                  ],
                  "range": [
                    5398,
                    5425
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 213
                    },
                    "start": {
                      "column": 21,
                      "line": 213
                    }
                  }
                }
              ],
              "range": [
                5395,
                5431
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 213
                },
                "start": {
                  "column": 18,
                  "line": 213
                }
              }
            }
          },
          "range": [
            5390,
            5431
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 213
            },
            "start": {
              "column": 13,
              "line": 213
            }
          }
        }
      ],
      "range": [
        5377,
        5435
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 213
        },
        "start": {
          "column": 0,
          "line": 213
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"abaTest\"",
            "value": "abaTest",
            "range": [
              5440,
              5449
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 214
              },
              "start": {
                "column": 4,
                "line": 214
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            5436,
            5439
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 214
            },
            "start": {
              "column": 0,
              "line": 214
            }
          }
        },
        "optional": false,
        "range": [
          5436,
          5450
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 214
          },
          "start": {
            "column": 0,
            "line": 214
          }
        }
      },
      "range": [
        5436,
        5451
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 214
        },
        "start": {
          "column": 0,
          "line": 214
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"abcTest\"",
            "value": "abcTest",
            "range": [
              5462,
              5471
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 215
              },
              "start": {
                "column": 4,
                "line": 215
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            5458,
            5461
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 215
            },
            "start": {
              "column": 0,
              "line": 215
            }
          }
        },
        "optional": false,
        "range": [
          5458,
          5472
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 215
          },
          "start": {
            "column": 0,
            "line": 215
          }
        }
      },
      "range": [
        5458,
        5473
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 215
        },
        "start": {
          "column": 0,
          "line": 215
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 24,
      "line": 215
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
