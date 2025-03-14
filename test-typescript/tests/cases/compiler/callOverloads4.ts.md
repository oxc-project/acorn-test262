__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    308
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        },
        "range": [
          14,
          18
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              15,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          },
          "range": [
            15,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        19
      ],
      "loc": {
        "end": {
          "column": 19,
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          38,
          41
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            },
            "range": [
              43,
              50
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                44,
                50
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            }
          },
          "range": [
            42,
            50
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 2
            },
            "start": {
              "column": 13,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 26,
            "line": 2
          },
          "start": {
            "column": 22,
            "line": 2
          }
        },
        "range": [
          51,
          55
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              52,
              55
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 23,
                "line": 2
              }
            }
          },
          "range": [
            52,
            55
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          }
        }
      },
      "range": [
        29,
        56
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 2
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
          76,
          251
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "range": [
                91,
                95
              ],
              "loc": {
                "end": {
                  "column": 8,
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
                95,
                127
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  98,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
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
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              91,
              127
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
                132,
                143
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                143,
                155
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 5
                      },
                      "start": {
                        "column": 17,
                        "line": 5
                      }
                    },
                    "range": [
                      145,
                      153
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        147,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 5
                        },
                        "start": {
                          "column": 19,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    144,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "range": [
              132,
              155
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
                160,
                171
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                171,
                249
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  180,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 6
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
                        "column": 22,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    },
                    "range": [
                      173,
                      178
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        175,
                        178
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
                    }
                  },
                  "range": [
                    172,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              160,
              249
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
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
            "column": 10,
            "line": 3
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
          72,
          75
        ],
        "loc": {
          "end": {
            "column": 9,
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
      "range": [
        66,
        251
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
            "name": "f1",
            "optional": false,
            "range": [
              257,
              259
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"hey\"",
                "value": "hey",
                "range": [
                  270,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 11
                  },
                  "start": {
                    "column": 17,
                    "line": 11
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
                266,
                269
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "range": [
              262,
              276
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "range": [
            257,
            276
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        253,
        277
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "range": [
              280,
              282
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 14
              },
              "start": {
                "column": 0,
                "line": 14
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "range": [
              283,
              287
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 14
              },
              "start": {
                "column": 3,
                "line": 14
              }
            }
          },
          "range": [
            280,
            287
          ],
          "loc": {
            "end": {
              "column": 7,
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
          280,
          289
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        280,
        290
      ],
      "loc": {
        "end": {
          "column": 10,
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
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            291,
            294
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          291,
          296
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        291,
        297
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 15
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"s\"",
            "value": "s",
            "range": [
              302,
              305
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
            298,
            301
          ],
          "loc": {
            "end": {
              "column": 3,
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
          298,
          306
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
      "range": [
        298,
        307
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
