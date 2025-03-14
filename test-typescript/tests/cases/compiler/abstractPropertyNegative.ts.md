__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1081
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          50
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                18,
                22
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                22,
                30
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  24,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              18,
              31
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                36,
                37
              ],
              "loc": {
                "end": {
                  "column": 5,
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
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              },
              "range": [
                39,
                47
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  41,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "range": [
              36,
              48
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
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
        50
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          81,
          296
        ],
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                96,
                100
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 13,
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
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 6
                }
              },
              "range": [
                100,
                108
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  102,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 19,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              87,
              109
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ro",
              "optional": false,
              "range": [
                139,
                141
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 7
                },
                "start": {
                  "column": 31,
                  "line": 7
                }
              },
              "range": [
                141,
                149
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  143,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                }
              }
            },
            "value": null,
            "range": [
              114,
              150
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyProp",
              "optional": false,
              "range": [
                168,
                180
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 17,
                  "line": 8
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                180,
                191
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
                    "line": 8
                  }
                },
                "range": [
                  182,
                  190
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    184,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 8
                    },
                    "start": {
                      "column": 33,
                      "line": 8
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 40,
                  "line": 8
                },
                "start": {
                  "column": 29,
                  "line": 8
                }
              }
            },
            "range": [
              155,
              191
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                205,
                206
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
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
                206,
                217
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
                    "line": 9
                  }
                },
                "range": [
                  208,
                  216
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    210,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              196,
              217
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mismatch",
              "optional": false,
              "range": [
                235,
                243
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                243,
                254
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                },
                "range": [
                  245,
                  253
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    247,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 10
                    },
                    "start": {
                      "column": 29,
                      "line": 10
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 25,
                  "line": 10
                }
              }
            },
            "range": [
              222,
              254
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mismatch",
              "optional": false,
              "range": [
                272,
                280
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 11
                },
                "start": {
                  "column": 17,
                  "line": 11
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                280,
                294
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 11
                      },
                      "start": {
                        "column": 29,
                        "line": 11
                      }
                    },
                    "range": [
                      284,
                      292
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        286,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 11
                        },
                        "start": {
                          "column": 31,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    281,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 11
                    },
                    "start": {
                      "column": 26,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 11
                },
                "start": {
                  "column": 25,
                  "line": 11
                }
              }
            },
            "range": [
              259,
              294
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 30,
            "line": 5
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
          66,
          67
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              79,
              80
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 28,
                "line": 5
              }
            }
          },
          "range": [
            79,
            80
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 5
            },
            "start": {
              "column": 28,
              "line": 5
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        51,
        296
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
          315,
          426
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
              "name": "ro",
              "optional": false,
              "range": [
                330,
                332
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 14
                },
                "start": {
                  "column": 13,
                  "line": 14
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "\"readonly please\"",
              "value": "readonly please",
              "range": [
                335,
                352
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 14
                },
                "start": {
                  "column": 18,
                  "line": 14
                }
              }
            },
            "range": [
              321,
              353
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "notAllowed",
              "optional": false,
              "range": [
                367,
                377
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
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
                  "column": 31,
                  "line": 15
                },
                "start": {
                  "column": 23,
                  "line": 15
                }
              },
              "range": [
                377,
                385
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  379,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 15
                  },
                  "start": {
                    "column": 25,
                    "line": 15
                  }
                }
              }
            },
            "value": null,
            "range": [
              358,
              386
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
              "name": "concreteWithNoBody",
              "optional": false,
              "range": [
                395,
                413
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                413,
                424
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 16
                  },
                  "start": {
                    "column": 28,
                    "line": 16
                  }
                },
                "range": [
                  415,
                  423
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    417,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 16
                    },
                    "start": {
                      "column": 30,
                      "line": 16
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 37,
                  "line": 16
                },
                "start": {
                  "column": 26,
                  "line": 16
                }
              }
            },
            "range": [
              391,
              424
            ],
            "loc": {
              "end": {
                "column": 37,
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
            "column": 18,
            "line": 13
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
          303,
          304
        ],
        "loc": {
          "end": {
            "column": 7,
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
        "name": "B",
        "optional": false,
        "range": [
          313,
          314
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 13
          },
          "start": {
            "column": 16,
            "line": 13
          }
        }
      },
      "range": [
        297,
        426
      ],
      "loc": {
        "end": {
          "column": 1,
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
            "name": "c",
            "optional": false,
            "range": [
              431,
              432
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                439,
                440
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 12,
                  "line": 18
                }
              }
            },
            "range": [
              435,
              442
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 18
              },
              "start": {
                "column": 8,
                "line": 18
              }
            }
          },
          "range": [
            431,
            442
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        427,
        443
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "c",
            "optional": false,
            "range": [
              444,
              445
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 19
              },
              "start": {
                "column": 0,
                "line": 19
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ro",
            "optional": false,
            "range": [
              446,
              448
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          },
          "range": [
            444,
            448
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"error: lhs of assignment can't be readonly\"",
          "value": "error: lhs of assignment can't be readonly",
          "range": [
            451,
            495
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 19
            },
            "start": {
              "column": 7,
              "line": 19
            }
          }
        },
        "range": [
          444,
          495
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        444,
        496
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          531,
          560
        ],
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "range": [
                546,
                549
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 22
                },
                "start": {
                  "column": 13,
                  "line": 22
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
                  "column": 24,
                  "line": 22
                },
                "start": {
                  "column": 16,
                  "line": 22
                }
              },
              "range": [
                549,
                557
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  551,
                  557
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 22
                  },
                  "start": {
                    "column": 18,
                    "line": 22
                  }
                }
              }
            },
            "value": null,
            "range": [
              537,
              558
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 33,
            "line": 21
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeProperty",
        "optional": false,
        "range": [
          513,
          530
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 21
          },
          "start": {
            "column": 15,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        498,
        560
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          615,
          643
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
              "name": "num",
              "optional": false,
              "range": [
                621,
                624
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "\"nope, wrong\"",
              "value": "nope, wrong",
              "range": [
                627,
                640
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 25
                },
                "start": {
                  "column": 10,
                  "line": 25
                }
              }
            },
            "range": [
              621,
              641
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 54,
            "line": 24
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypePropertyImpl",
        "optional": false,
        "range": [
          567,
          588
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 24
          },
          "start": {
            "column": 6,
            "line": 24
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeProperty",
        "optional": false,
        "range": [
          597,
          614
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 24
          },
          "start": {
            "column": 36,
            "line": 24
          }
        }
      },
      "range": [
        561,
        643
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          677,
          712
        ],
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "range": [
                696,
                699
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 28
                },
                "start": {
                  "column": 17,
                  "line": 28
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                699,
                710
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 28
                  },
                  "start": {
                    "column": 22,
                    "line": 28
                  }
                },
                "range": [
                  701,
                  709
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    703,
                    709
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 28
                    },
                    "start": {
                      "column": 24,
                      "line": 28
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 31,
                  "line": 28
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              }
            },
            "range": [
              683,
              710
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 33,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeAccessor",
        "optional": false,
        "range": [
          659,
          676
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 27
          },
          "start": {
            "column": 15,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        644,
        712
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          767,
          810
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "range": [
                777,
                780
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 8,
                  "line": 31
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                780,
                808
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"nope, wrong\"",
                      "value": "nope, wrong",
                      "range": [
                        792,
                        805
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 31
                        },
                        "start": {
                          "column": 23,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      785,
                      806
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 31
                      },
                      "start": {
                        "column": 16,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  783,
                  808
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 31
                  },
                  "start": {
                    "column": 14,
                    "line": 31
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
                  "column": 39,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              }
            },
            "range": [
              773,
              808
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
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
            "column": 54,
            "line": 30
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeAccessorImpl",
        "optional": false,
        "range": [
          719,
          740
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 30
          },
          "start": {
            "column": 6,
            "line": 30
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeAccessor",
        "optional": false,
        "range": [
          749,
          766
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 30
          },
          "start": {
            "column": 36,
            "line": 30
          }
        }
      },
      "range": [
        713,
        810
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          866,
          894
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
              "name": "num",
              "optional": false,
              "range": [
                872,
                875
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "\"nope, wrong\"",
              "value": "nope, wrong",
              "range": [
                878,
                891
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 34
                },
                "start": {
                  "column": 10,
                  "line": 34
                }
              }
            },
            "range": [
              872,
              892
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 55,
            "line": 33
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeAccessorImpl2",
        "optional": false,
        "range": [
          817,
          839
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 33
          },
          "start": {
            "column": 6,
            "line": 33
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrongTypeAccessor",
        "optional": false,
        "range": [
          848,
          865
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 33
          },
          "start": {
            "column": 37,
            "line": 33
          }
        }
      },
      "range": [
        811,
        894
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          936,
          1080
        ],
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                955,
                957
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 38
                },
                "start": {
                  "column": 17,
                  "line": 38
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                957,
                968
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 38
                  },
                  "start": {
                    "column": 21,
                    "line": 38
                  }
                },
                "range": [
                  959,
                  967
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    961,
                    967
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 38
                    },
                    "start": {
                      "column": 23,
                      "line": 38
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 30,
                  "line": 38
                },
                "start": {
                  "column": 19,
                  "line": 38
                }
              }
            },
            "range": [
              942,
              968
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
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
              "name": "p1",
              "optional": false,
              "range": [
                977,
                979
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 39
                },
                "start": {
                  "column": 8,
                  "line": 39
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
                979,
                996
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  993,
                  996
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 39
                  },
                  "start": {
                    "column": 24,
                    "line": 39
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 39
                      },
                      "start": {
                        "column": 14,
                        "line": 39
                      }
                    },
                    "range": [
                      983,
                      991
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        985,
                        991
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 39
                        },
                        "start": {
                          "column": 16,
                          "line": 39
                        }
                      }
                    }
                  },
                  "range": [
                    980,
                    991
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 39
                    },
                    "start": {
                      "column": 11,
                      "line": 39
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 39
                },
                "start": {
                  "column": 10,
                  "line": 39
                }
              }
            },
            "range": [
              973,
              996
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
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
              "name": "p2",
              "optional": false,
              "range": [
                1006,
                1008
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 40
                },
                "start": {
                  "column": 8,
                  "line": 40
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1008,
                1044
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"should work\"",
                      "value": "should work",
                      "range": [
                        1028,
                        1041
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 40
                        },
                        "start": {
                          "column": 30,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1021,
                      1042
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 40
                      },
                      "start": {
                        "column": 23,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  1019,
                  1044
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 40
                  },
                  "start": {
                    "column": 21,
                    "line": 40
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
                    "column": 20,
                    "line": 40
                  },
                  "start": {
                    "column": 12,
                    "line": 40
                  }
                },
                "range": [
                  1010,
                  1018
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    1012,
                    1018
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 40
                    },
                    "start": {
                      "column": 14,
                      "line": 40
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 46,
                  "line": 40
                },
                "start": {
                  "column": 10,
                  "line": 40
                }
              }
            },
            "range": [
              1002,
              1044
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "range": [
                1062,
                1064
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 41
                },
                "start": {
                  "column": 17,
                  "line": 41
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1064,
                1078
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 41
                      },
                      "start": {
                        "column": 23,
                        "line": 41
                      }
                    },
                    "range": [
                      1068,
                      1076
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1070,
                        1076
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 41
                        },
                        "start": {
                          "column": 25,
                          "line": 41
                        }
                      }
                    }
                  },
                  "range": [
                    1065,
                    1076
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 41
                    },
                    "start": {
                      "column": 20,
                      "line": 41
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 41
                },
                "start": {
                  "column": 19,
                  "line": 41
                }
              }
            },
            "range": [
              1049,
              1078
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 40,
            "line": 37
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractAccessorMismatch",
        "optional": false,
        "range": [
          911,
          935
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 37
          },
          "start": {
            "column": 15,
            "line": 37
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        896,
        1080
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
