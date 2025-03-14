__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    248
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "range": [
                42,
                44
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "raw": "\"./SubModule\"",
                "value": "./SubModule",
                "range": [
                  55,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              },
              "range": [
                47,
                69
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "range": [
              35,
              70
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 4,
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
                91,
                222
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StaticVar",
                    "optional": false,
                    "range": [
                      115,
                      124
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 4
                      },
                      "start": {
                        "column": 31,
                        "line": 4
                      }
                    },
                    "range": [
                      124,
                      132
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        126,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 4
                        },
                        "start": {
                          "column": 33,
                          "line": 4
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    101,
                    133
                  ],
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
                {
                  "type": "PropertyDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InstanceVar",
                    "optional": false,
                    "range": [
                      149,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
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
                        "column": 34,
                        "line": 5
                      },
                      "start": {
                        "column": 26,
                        "line": 5
                      }
                    },
                    "range": [
                      160,
                      168
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        162,
                        168
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 5
                        },
                        "start": {
                          "column": 28,
                          "line": 5
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    142,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      185,
                      186
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
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
                        "column": 16,
                        "line": 6
                      }
                    },
                    "range": [
                      186,
                      192
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2",
                          "optional": false,
                          "range": [
                            188,
                            190
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 6
                            },
                            "start": {
                              "column": 18,
                              "line": 6
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            191,
                            192
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 6
                            },
                            "start": {
                              "column": 21,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          188,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 6
                          },
                          "start": {
                            "column": 18,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        188,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 6
                        },
                        "start": {
                          "column": 18,
                          "line": 6
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    178,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
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
                    "range": [
                      202,
                      213
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
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
                      213,
                      216
                    ],
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 7
                      },
                      "start": {
                        "column": 19,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    202,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
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
                  "column": 20,
                  "line": 3
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubModule",
              "optional": false,
              "range": [
                81,
                90
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              75,
              222
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubModule",
              "optional": false,
              "range": [
                236,
                245
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
                }
              }
            },
            "range": [
              227,
              246
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          29,
          248
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 29,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"OuterModule\"",
        "value": "OuterModule",
        "range": [
          15,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        248
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
