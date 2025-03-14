__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    86
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          47
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 2
                },
                "start": {
                  "column": 2,
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
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
                }
              },
              "range": [
                17,
                25
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  19,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              16,
              26
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getA",
              "optional": false,
              "range": [
                29,
                33
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
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
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 6,
                  "line": 3
                }
              },
              "range": [
                33,
                44
              ],
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      40,
                      43
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    40,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                },
                "objectType": {
                  "type": "TSThisType",
                  "range": [
                    35,
                    39
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "range": [
                  35,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              29,
              45
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 2,
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
        47
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "range": [
          54,
          55
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "'getA'",
            "value": "getA",
            "range": [
              78,
              84
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
              },
              "start": {
                "column": 29,
                "line": 6
              }
            }
          },
          "range": [
            78,
            84
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 6
            },
            "start": {
              "column": 29,
              "line": 6
            }
          }
        },
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  59,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              },
              "range": [
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      65,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 16,
                        "line": 6
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
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    },
                    "range": [
                      66,
                      74
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        68,
                        74
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
                  "range": [
                    65,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                63,
                76
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            59,
            76
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 6
            },
            "start": {
              "column": 10,
              "line": 6
            }
          }
        },
        "range": [
          58,
          85
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "range": [
        49,
        86
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 37,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
