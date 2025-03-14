__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    16,
    224
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        16,
        224
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            33,
            224
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
                "name": "x",
                "optional": false,
                "range": [
                  39,
                  40
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
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null,
              "range": [
                39,
                41
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  46,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null,
              "range": [
                46,
                48
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "range": [
                  53,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null,
              "range": [
                53,
                55
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  65,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null,
              "range": [
                65,
                67
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  73,
                  84
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
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
                  84,
                  222
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              109,
                              113
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 10
                              },
                              "start": {
                                "column": 8,
                                "line": 10
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "raw": "'x'",
                            "value": "x",
                            "range": [
                              114,
                              117
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 10
                              },
                              "start": {
                                "column": 13,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            109,
                            118
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "range": [
                                122,
                                126
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 10
                                },
                                "start": {
                                  "column": 21,
                                  "line": 10
                                }
                              }
                            }
                          ],
                          "range": [
                            121,
                            127
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 10
                            },
                            "start": {
                              "column": 20,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          109,
                          127
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        109,
                        128
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
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
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              137,
                              141
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 11
                              },
                              "start": {
                                "column": 8,
                                "line": 11
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "raw": "'y'",
                            "value": "y",
                            "range": [
                              142,
                              145
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
                            137,
                            146
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 11
                            }
                          }
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "seed",
                                "optional": false,
                                "range": [
                                  151,
                                  155
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 11
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "seed",
                                "optional": false,
                                "range": [
                                  151,
                                  155
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                151,
                                155
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 11
                                },
                                "start": {
                                  "column": 22,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "range": [
                            149,
                            157
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 11
                            },
                            "start": {
                              "column": 20,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          137,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 11
                          },
                          "start": {
                            "column": 8,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        137,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 8,
                          "line": 11
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
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              167,
                              171
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
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
                            "type": "Literal",
                            "raw": "'z'",
                            "value": "z",
                            "range": [
                              172,
                              175
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 12
                              },
                              "start": {
                                "column": 13,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            167,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 12
                            },
                            "start": {
                              "column": 8,
                              "line": 12
                            }
                          }
                        },
                        "right": {
                          "type": "TemplateLiteral",
                          "expressions": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "range": [
                                182,
                                186
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 12
                                },
                                "start": {
                                  "column": 23,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "tail": false,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "range": [
                                179,
                                182
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 12
                                },
                                "start": {
                                  "column": 20,
                                  "line": 12
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
                                186,
                                188
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 12
                                },
                                "start": {
                                  "column": 27,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "range": [
                            179,
                            188
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 12
                            },
                            "start": {
                              "column": 20,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          167,
                          188
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        167,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
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
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              199,
                              203
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 14
                              },
                              "start": {
                                "column": 8,
                                "line": 14
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              204,
                              205
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 14
                              },
                              "start": {
                                "column": 13,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            199,
                            206
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 14
                            },
                            "start": {
                              "column": 8,
                              "line": 14
                            }
                          }
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "range": [
                                210,
                                214
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 14
                                },
                                "start": {
                                  "column": 19,
                                  "line": 14
                                }
                              }
                            }
                          ],
                          "range": [
                            209,
                            215
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 14
                            },
                            "start": {
                              "column": 18,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          199,
                          215
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 14
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        199,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    99,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 30,
                      "line": 9
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
                    "name": "seed",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 9
                        },
                        "start": {
                          "column": 20,
                          "line": 9
                        }
                      },
                      "range": [
                        89,
                        97
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          91,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 9
                          },
                          "start": {
                            "column": 22,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      85,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 16,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 9
                  }
                }
              },
              "range": [
                73,
                222
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
          "optional": false,
          "range": [
            29,
            32
          ],
          "loc": {
            "end": {
              "column": 16,
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
          23,
          224
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
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
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
