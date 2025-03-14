__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    251
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              18,
              46
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  38,
                  46
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "range": [
                  31,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                25,
                46
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          11,
          49
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          10
        ],
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        49
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
          83,
          149
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                105,
                116
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                117,
                146
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          131,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        131,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      131,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  120,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 19,
                    "line": 13
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
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 13
                }
              }
            },
            "range": [
              105,
              146
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 29,
            "line": 11
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
          60,
          63
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
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
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
              "column": 21,
              "line": 11
            },
            "start": {
              "column": 18,
              "line": 11
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "range": [
            76,
            82
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 11
            },
            "start": {
              "column": 22,
              "line": 11
            }
          }
        },
        "range": [
          72,
          82
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 11
          },
          "start": {
            "column": 18,
            "line": 11
          }
        }
      },
      "range": [
        54,
        149
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
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
          177,
          250
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                184,
                195
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
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
                196,
                247
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          232,
                          237
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 26
                          },
                          "start": {
                            "column": 8,
                            "line": 26
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        232,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      232,
                      240
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  199,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 19,
                    "line": 24
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
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 24
                }
              }
            },
            "range": [
              184,
              247
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 25,
            "line": 22
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "range": [
          158,
          161
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 22
          },
          "start": {
            "column": 6,
            "line": 22
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "range": [
          170,
          176
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
      },
      "range": [
        152,
        250
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
