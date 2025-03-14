__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    168
  ],
  "body": [
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    38,
                    39
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    42,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  38,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              34,
              45
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          28,
          47
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 28,
            "line": 1
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "title",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            },
            "range": [
              18,
              26
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                20,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            }
          },
          "range": [
            13,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        }
      ],
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              70,
              97
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  90,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
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
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  86,
                  87
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
              "params": [],
              "range": [
                77,
                97
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          64,
          99
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          56,
          63
        ],
        "left": {
          "type": "Identifier",
          "range": [
            56,
            59
          ],
          "decorators": [],
          "name": "foo",
          "optional": false,
          "loc": {
            "end": {
              "column": 10,
              "line": 5
            },
            "start": {
              "column": 7,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            60,
            63
          ],
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "loc": {
            "end": {
              "column": 14,
              "line": 5
            },
            "start": {
              "column": 11,
              "line": 5
            }
          }
        },
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "kind": "module",
      "range": [
        49,
        99
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              122,
              166
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "range": [
                            152,
                            155
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 12
                            },
                            "start": {
                              "column": 8,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "range": [
                            156,
                            157
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
                        "range": [
                          152,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        152,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      152,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  142,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "range": [
                  138,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              },
              "params": [],
              "range": [
                129,
                166
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          116,
          168
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 15,
            "line": 10
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          108,
          115
        ],
        "left": {
          "type": "Identifier",
          "range": [
            108,
            111
          ],
          "decorators": [],
          "name": "foo",
          "optional": false,
          "loc": {
            "end": {
              "column": 10,
              "line": 10
            },
            "start": {
              "column": 7,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            112,
            115
          ],
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 11,
              "line": 10
            }
          }
        },
        "loc": {
          "end": {
            "column": 14,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "kind": "module",
      "range": [
        101,
        168
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
