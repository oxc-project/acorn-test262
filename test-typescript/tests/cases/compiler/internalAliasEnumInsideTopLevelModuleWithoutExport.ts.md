__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    155
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        100
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                22,
                98
              ],
              "attributes": [],
              "declaration": {
                "type": "TSEnumDeclaration",
                "body": {
                  "type": "TSEnumBody",
                  "range": [
                    42,
                    98
                  ],
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Friday",
                        "optional": false,
                        "range": [
                          52,
                          58
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        52,
                        58
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "TSEnumMember",
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Saturday",
                        "optional": false,
                        "range": [
                          68,
                          76
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        68,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "TSEnumMember",
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Sunday",
                        "optional": false,
                        "range": [
                          86,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        86,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 24,
                      "line": 2
                    }
                  }
                },
                "const": false,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "weekend",
                  "optional": false,
                  "range": [
                    34,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                "range": [
                  29,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            16,
            100
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            14,
            15
          ],
          "decorators": [],
          "name": "a",
          "optional": false,
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "kind": "module",
        "range": [
          7,
          100
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "range": [
          109,
          110
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            113,
            114
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "weekend",
          "optional": false,
          "range": [
            115,
            122
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 9
            },
            "start": {
              "column": 13,
              "line": 9
            }
          }
        },
        "range": [
          113,
          122
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 9
          },
          "start": {
            "column": 11,
            "line": 9
          }
        }
      },
      "range": [
        102,
        123
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        124,
        154
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
              "name": "bVal",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 15,
                    "line": 10
                  }
                },
                "range": [
                  139,
                  142
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      141,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 10
                      },
                      "start": {
                        "column": 17,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    141,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 10
                    },
                    "start": {
                      "column": 17,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                135,
                142
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "init": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  145,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sunday",
                "optional": false,
                "range": [
                  147,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 10
                  },
                  "start": {
                    "column": 23,
                    "line": 10
                  }
                }
              },
              "range": [
                145,
                153
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 21,
                  "line": 10
                }
              }
            },
            "range": [
              135,
              153
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 10
              },
              "start": {
                "column": 11,
                "line": 10
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          131,
          154
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 30,
          "line": 10
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
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
