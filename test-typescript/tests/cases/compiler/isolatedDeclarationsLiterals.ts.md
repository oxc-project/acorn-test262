__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1185
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        541
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "constObject",
              "optional": false,
              "range": [
                13,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "range": [
                        55,
                        58
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 3
                        },
                        "start": {
                          "column": 4,
                          "line": 3
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        60,
                        61
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 3
                        },
                        "start": {
                          "column": 9,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      55,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneOctal",
                      "optional": false,
                      "range": [
                        91,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 5
                        },
                        "start": {
                          "column": 4,
                          "line": 5
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "0o1",
                      "value": 1,
                      "range": [
                        101,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 5
                        },
                        "start": {
                          "column": 14,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      91,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneHex",
                      "optional": false,
                      "range": [
                        134,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 7
                        },
                        "start": {
                          "column": 4,
                          "line": 7
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "0x1",
                      "value": 1,
                      "range": [
                        142,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      134,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 7
                      },
                      "start": {
                        "column": 4,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pOne",
                      "optional": false,
                      "range": [
                        174,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 9
                        },
                        "start": {
                          "column": 4,
                          "line": 9
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          181,
                          182
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 9
                          },
                          "start": {
                            "column": 11,
                            "line": 9
                          }
                        }
                      },
                      "operator": "+",
                      "prefix": true,
                      "range": [
                        180,
                        182
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 9
                        },
                        "start": {
                          "column": 10,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      174,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 9
                      },
                      "start": {
                        "column": 4,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mOne",
                      "optional": false,
                      "range": [
                        211,
                        215
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 11
                        },
                        "start": {
                          "column": 4,
                          "line": 11
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          218,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 11
                          },
                          "start": {
                            "column": 11,
                            "line": 11
                          }
                        }
                      },
                      "operator": "-",
                      "prefix": true,
                      "range": [
                        217,
                        219
                      ],
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
                    "range": [
                      211,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "range": [
                        225,
                        230
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 4,
                          "line": 12
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            233,
                            234
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              237,
                              238
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 12
                              },
                              "start": {
                                "column": 16,
                                "line": 12
                              }
                            }
                          },
                          "operator": "-",
                          "prefix": true,
                          "range": [
                            236,
                            238
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 12
                            },
                            "start": {
                              "column": 15,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "range": [
                            240,
                            242
                          ],
                          "bigint": "1",
                          "raw": "1n",
                          "value": null,
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 12
                            },
                            "start": {
                              "column": 19,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Literal",
                            "range": [
                              245,
                              247
                            ],
                            "bigint": "1",
                            "raw": "1n",
                            "value": null,
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 12
                              },
                              "start": {
                                "column": 24,
                                "line": 12
                              }
                            }
                          },
                          "operator": "-",
                          "prefix": true,
                          "range": [
                            244,
                            247
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 12
                            },
                            "start": {
                              "column": 23,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        232,
                        248
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 12
                        },
                        "start": {
                          "column": 11,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      225,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 12
                      },
                      "start": {
                        "column": 4,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "onen",
                      "optional": false,
                      "range": [
                        277,
                        281
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 14
                        },
                        "start": {
                          "column": 4,
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
                      "range": [
                        283,
                        285
                      ],
                      "bigint": "1",
                      "raw": "1n",
                      "value": null,
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 14
                        },
                        "start": {
                          "column": 10,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      277,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
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
                      "name": "mOnen",
                      "optional": false,
                      "range": [
                        315,
                        320
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 16
                        },
                        "start": {
                          "column": 4,
                          "line": 16
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "range": [
                          323,
                          325
                        ],
                        "bigint": "1",
                        "raw": "1n",
                        "value": null,
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 16
                          },
                          "start": {
                            "column": 12,
                            "line": 16
                          }
                        }
                      },
                      "operator": "-",
                      "prefix": true,
                      "range": [
                        322,
                        325
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 16
                        },
                        "start": {
                          "column": 11,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      315,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 16
                      },
                      "start": {
                        "column": 4,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneStrDoubleQuote",
                      "optional": false,
                      "range": [
                        356,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 19
                        },
                        "start": {
                          "column": 4,
                          "line": 19
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"1\"",
                      "value": "1",
                      "range": [
                        375,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 19
                        },
                        "start": {
                          "column": 23,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      356,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 4,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneStrSingleQuote",
                      "optional": false,
                      "range": [
                        408,
                        425
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 21
                        },
                        "start": {
                          "column": 4,
                          "line": 21
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'1'",
                      "value": "1",
                      "range": [
                        427,
                        430
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 21
                        },
                        "start": {
                          "column": 23,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      408,
                      430
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 21
                      },
                      "start": {
                        "column": 4,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneStrTemplate",
                      "optional": false,
                      "range": [
                        460,
                        474
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 23
                        },
                        "start": {
                          "column": 4,
                          "line": 23
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "TemplateLiteral",
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "tail": true,
                          "value": {
                            "cooked": "1",
                            "raw": "1"
                          },
                          "range": [
                            476,
                            479
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 23
                            },
                            "start": {
                              "column": 20,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "range": [
                        476,
                        479
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 23
                        },
                        "start": {
                          "column": 20,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      460,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 23
                      },
                      "start": {
                        "column": 4,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "range": [
                        505,
                        511
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 25
                        },
                        "start": {
                          "column": 4,
                          "line": 25
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
                        511,
                        528
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          520,
                          528
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 27
                          },
                          "start": {
                            "column": 19,
                            "line": 25
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
                            "column": 18,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        },
                        "range": [
                          513,
                          519
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            515,
                            519
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 25
                            },
                            "start": {
                              "column": 14,
                              "line": 25
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 27
                        },
                        "start": {
                          "column": 10,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      505,
                      528
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 27
                      },
                      "start": {
                        "column": 4,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  27,
                  531
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 28
                  },
                  "start": {
                    "column": 27,
                    "line": 1
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "range": [
                    535,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 28
                    },
                    "start": {
                      "column": 5,
                      "line": 28
                    }
                  }
                },
                "range": [
                  535,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 28
                  },
                  "start": {
                    "column": 5,
                    "line": 28
                  }
                }
              },
              "range": [
                27,
                540
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 28
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              540
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 28
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          541
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 28
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
          "column": 11,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        543,
        564
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "range": [
                556,
                559
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 30
                },
                "start": {
                  "column": 13,
                  "line": 30
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                562,
                563
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 30
                },
                "start": {
                  "column": 19,
                  "line": 30
                }
              }
            },
            "range": [
              556,
              563
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 30
              },
              "start": {
                "column": 13,
                "line": 30
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          550,
          564
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 30
          },
          "start": {
            "column": 7,
            "line": 30
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 21,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        565,
        593
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneOctal",
              "optional": false,
              "range": [
                578,
                586
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 31
                },
                "start": {
                  "column": 13,
                  "line": 31
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0o1",
              "value": 1,
              "range": [
                589,
                592
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 31
                },
                "start": {
                  "column": 24,
                  "line": 31
                }
              }
            },
            "range": [
              578,
              592
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 31
              },
              "start": {
                "column": 13,
                "line": 31
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          572,
          593
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 31
          },
          "start": {
            "column": 7,
            "line": 31
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 28,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        594,
        620
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneHex",
              "optional": false,
              "range": [
                607,
                613
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 32
                },
                "start": {
                  "column": 13,
                  "line": 32
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0x1",
              "value": 1,
              "range": [
                616,
                619
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 32
                },
                "start": {
                  "column": 22,
                  "line": 32
                }
              }
            },
            "range": [
              607,
              619
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 32
              },
              "start": {
                "column": 13,
                "line": 32
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          601,
          620
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 32
          },
          "start": {
            "column": 7,
            "line": 32
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 26,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        621,
        644
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "pOne",
              "optional": false,
              "range": [
                634,
                638
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 33
                },
                "start": {
                  "column": 13,
                  "line": 33
                }
              }
            },
            "init": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  642,
                  643
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 33
                  },
                  "start": {
                    "column": 21,
                    "line": 33
                  }
                }
              },
              "operator": "+",
              "prefix": true,
              "range": [
                641,
                643
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 33
                },
                "start": {
                  "column": 20,
                  "line": 33
                }
              }
            },
            "range": [
              634,
              643
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 33
              },
              "start": {
                "column": 13,
                "line": 33
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          628,
          644
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 33
          },
          "start": {
            "column": 7,
            "line": 33
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 23,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        645,
        668
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mOne",
              "optional": false,
              "range": [
                658,
                662
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 34
                },
                "start": {
                  "column": 13,
                  "line": 34
                }
              }
            },
            "init": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  666,
                  667
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 34
                  },
                  "start": {
                    "column": 21,
                    "line": 34
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                665,
                667
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 34
                },
                "start": {
                  "column": 20,
                  "line": 34
                }
              }
            },
            "range": [
              658,
              667
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 34
              },
              "start": {
                "column": 13,
                "line": 34
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          652,
          668
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 34
          },
          "start": {
            "column": 7,
            "line": 34
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 23,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        669,
        692
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "onen",
              "optional": false,
              "range": [
                682,
                686
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 35
                },
                "start": {
                  "column": 13,
                  "line": 35
                }
              }
            },
            "init": {
              "type": "Literal",
              "range": [
                689,
                691
              ],
              "bigint": "1",
              "raw": "1n",
              "value": null,
              "loc": {
                "end": {
                  "column": 22,
                  "line": 35
                },
                "start": {
                  "column": 20,
                  "line": 35
                }
              }
            },
            "range": [
              682,
              691
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 35
              },
              "start": {
                "column": 13,
                "line": 35
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          676,
          692
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 35
          },
          "start": {
            "column": 7,
            "line": 35
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 23,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        693,
        718
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mOnen",
              "optional": false,
              "range": [
                706,
                711
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 36
                },
                "start": {
                  "column": 13,
                  "line": 36
                }
              }
            },
            "init": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Literal",
                "range": [
                  715,
                  717
                ],
                "bigint": "1",
                "raw": "1n",
                "value": null,
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 36
                  },
                  "start": {
                    "column": 22,
                    "line": 36
                  }
                }
              },
              "operator": "-",
              "prefix": true,
              "range": [
                714,
                717
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 36
                },
                "start": {
                  "column": 21,
                  "line": 36
                }
              }
            },
            "range": [
              706,
              717
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 36
              },
              "start": {
                "column": 13,
                "line": 36
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          700,
          718
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 36
          },
          "start": {
            "column": 7,
            "line": 36
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 25,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        719,
        756
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneStrDoubleQuote",
              "optional": false,
              "range": [
                732,
                749
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 37
                },
                "start": {
                  "column": 13,
                  "line": 37
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "\"1\"",
              "value": "1",
              "range": [
                752,
                755
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 37
                },
                "start": {
                  "column": 33,
                  "line": 37
                }
              }
            },
            "range": [
              732,
              755
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 37
              },
              "start": {
                "column": 13,
                "line": 37
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          726,
          756
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 37
          },
          "start": {
            "column": 7,
            "line": 37
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 37,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        757,
        794
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneStrSingleQuote",
              "optional": false,
              "range": [
                770,
                787
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 38
                },
                "start": {
                  "column": 13,
                  "line": 38
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "'1'",
              "value": "1",
              "range": [
                790,
                793
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 38
                },
                "start": {
                  "column": 33,
                  "line": 38
                }
              }
            },
            "range": [
              770,
              793
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 38
              },
              "start": {
                "column": 13,
                "line": 38
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          764,
          794
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 38
          },
          "start": {
            "column": 7,
            "line": 38
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 37,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        795,
        829
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneStrTemplate",
              "optional": false,
              "range": [
                808,
                822
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 39
                },
                "start": {
                  "column": 13,
                  "line": 39
                }
              }
            },
            "init": {
              "type": "TemplateLiteral",
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "1",
                    "raw": "1"
                  },
                  "range": [
                    825,
                    828
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 39
                    },
                    "start": {
                      "column": 30,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                825,
                828
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 39
                },
                "start": {
                  "column": 30,
                  "line": 39
                }
              }
            },
            "range": [
              808,
              828
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 39
              },
              "start": {
                "column": 13,
                "line": 39
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          802,
          829
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 39
          },
          "start": {
            "column": 7,
            "line": 39
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 34,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        831,
        1182
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mutableObject",
              "optional": false,
              "range": [
                844,
                857
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 41
                },
                "start": {
                  "column": 13,
                  "line": 41
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "range": [
                      888,
                      891
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 43
                      },
                      "start": {
                        "column": 4,
                        "line": 43
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      893,
                      894
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 43
                      },
                      "start": {
                        "column": 9,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    888,
                    894
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 43
                    },
                    "start": {
                      "column": 4,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oneOctal",
                    "optional": false,
                    "range": [
                      924,
                      932
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 45
                      },
                      "start": {
                        "column": 4,
                        "line": 45
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "0o1",
                    "value": 1,
                    "range": [
                      934,
                      937
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 45
                      },
                      "start": {
                        "column": 14,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    924,
                    937
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oneHex",
                    "optional": false,
                    "range": [
                      967,
                      973
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 47
                      },
                      "start": {
                        "column": 4,
                        "line": 47
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "0x1",
                    "value": 1,
                    "range": [
                      975,
                      978
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 47
                      },
                      "start": {
                        "column": 12,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    967,
                    978
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 47
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pOne",
                    "optional": false,
                    "range": [
                      1007,
                      1011
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 49
                      },
                      "start": {
                        "column": 4,
                        "line": 49
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1014,
                        1015
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 49
                        },
                        "start": {
                          "column": 11,
                          "line": 49
                        }
                      }
                    },
                    "operator": "+",
                    "prefix": true,
                    "range": [
                      1013,
                      1015
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 49
                      },
                      "start": {
                        "column": 10,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1007,
                    1015
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 49
                    },
                    "start": {
                      "column": 4,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mOne",
                    "optional": false,
                    "range": [
                      1044,
                      1048
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 51
                      },
                      "start": {
                        "column": 4,
                        "line": 51
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1051,
                        1052
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 51
                        },
                        "start": {
                          "column": 11,
                          "line": 51
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1050,
                      1052
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 51
                      },
                      "start": {
                        "column": 10,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1044,
                    1052
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 51
                    },
                    "start": {
                      "column": 4,
                      "line": 51
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onen",
                    "optional": false,
                    "range": [
                      1081,
                      1085
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 53
                      },
                      "start": {
                        "column": 4,
                        "line": 53
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "range": [
                      1087,
                      1089
                    ],
                    "bigint": "1",
                    "raw": "1n",
                    "value": null,
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 53
                      },
                      "start": {
                        "column": 10,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    1081,
                    1089
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 53
                    },
                    "start": {
                      "column": 4,
                      "line": 53
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mOnen",
                    "optional": false,
                    "range": [
                      1119,
                      1124
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 55
                      },
                      "start": {
                        "column": 4,
                        "line": 55
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "range": [
                        1127,
                        1129
                      ],
                      "bigint": "1",
                      "raw": "1n",
                      "value": null,
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 55
                        },
                        "start": {
                          "column": 12,
                          "line": 55
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1126,
                      1129
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 55
                      },
                      "start": {
                        "column": 11,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1119,
                    1129
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 55
                    },
                    "start": {
                      "column": 4,
                      "line": 55
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "range": [
                      1155,
                      1161
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 57
                      },
                      "start": {
                        "column": 4,
                        "line": 57
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
                      1161,
                      1178
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1170,
                        1178
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 59
                        },
                        "start": {
                          "column": 19,
                          "line": 57
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
                          "column": 18,
                          "line": 57
                        },
                        "start": {
                          "column": 12,
                          "line": 57
                        }
                      },
                      "range": [
                        1163,
                        1169
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          1165,
                          1169
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 57
                          },
                          "start": {
                            "column": 14,
                            "line": 57
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 59
                      },
                      "start": {
                        "column": 10,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    1155,
                    1178
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 59
                    },
                    "start": {
                      "column": 4,
                      "line": 57
                    }
                  }
                }
              ],
              "range": [
                860,
                1181
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 60
                },
                "start": {
                  "column": 29,
                  "line": 41
                }
              }
            },
            "range": [
              844,
              1181
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 60
              },
              "start": {
                "column": 13,
                "line": 41
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          838,
          1182
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 60
          },
          "start": {
            "column": 7,
            "line": 41
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 63
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
