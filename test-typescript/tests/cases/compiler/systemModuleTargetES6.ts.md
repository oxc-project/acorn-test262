__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    247
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        24
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            21,
            24
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "range": [
            13,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 1
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
          "column": 24,
          "line": 1
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
        25,
        125
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            47,
            125
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
                "name": "value",
                "optional": false,
                "range": [
                  60,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  68,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "range": [
                53,
                71
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                "name": "getInstance",
                "optional": false,
                "range": [
                  83,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  94,
                  123
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyClass2",
                          "optional": false,
                          "range": [
                            106,
                            114
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 4
                            },
                            "start": {
                              "column": 34,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            115,
                            120
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 4
                            },
                            "start": {
                              "column": 43,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          106,
                          120
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 4
                          },
                          "start": {
                            "column": 34,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        99,
                        121
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 4
                        },
                        "start": {
                          "column": 27,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    97,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
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
                    "column": 51,
                    "line": 4
                  },
                  "start": {
                    "column": 22,
                    "line": 4
                  }
                }
              },
              "range": [
                76,
                123
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 4
                },
                "start": {
                  "column": 4,
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
              "column": 22,
              "line": 2
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass2",
          "optional": false,
          "range": [
            38,
            46
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
        },
        "implements": [],
        "superClass": null,
        "range": [
          32,
          125
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        127,
        185
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false,
                  "range": [
                    173,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                },
                "range": [
                  169,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "range": [
                162,
                183
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            }
          ],
          "range": [
            156,
            185
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 29,
              "line": 7
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "myFunction",
          "optional": false,
          "range": [
            143,
            153
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 7
            },
            "start": {
              "column": 16,
              "line": 7
            }
          }
        },
        "params": [],
        "range": [
          134,
          185
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
      "type": "ExportNamedDeclaration",
      "range": [
        187,
        247
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyClass2",
                  "optional": false,
                  "range": [
                    234,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                },
                "range": [
                  230,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "range": [
                223,
                245
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            }
          ],
          "range": [
            217,
            247
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 30,
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
          "name": "myFunction2",
          "optional": false,
          "range": [
            203,
            214
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
        "params": [],
        "range": [
          194,
          247
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
