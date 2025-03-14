expString.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 14,
            "raw": "\"test\"",
            "value": "test"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 16,
      "end": 27,
      "expression": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
expNumber.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "42",
            "value": 42
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 12,
      "end": 23,
      "expression": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
expBoolean.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 12,
            "raw": "true",
            "value": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 14,
      "end": 25,
      "expression": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
expArray.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 8,
            "end": 13,
            "elements": [
              {
                "type": "Literal",
                "start": 9,
                "end": 10,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 11,
                "end": 12,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 15,
      "end": 26,
      "expression": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
expObject.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 33,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 20,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 16,
                  "decorators": [],
                  "name": "answer",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 20,
                  "raw": "42",
                  "value": 42
                }
              },
              {
                "type": "Property",
                "start": 22,
                "end": 32,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 26,
                  "decorators": [],
                  "name": "when",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 28,
                  "end": 32,
                  "raw": "1776",
                  "value": 1776
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 35,
      "end": 46,
      "expression": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
expAny.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 7,
      "end": 18,
      "expression": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
expGeneric.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 33,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 22,
            "end": 31,
            "argument": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 18,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 17,
              "end": 18,
              "typeName": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 34,
      "end": 45,
      "expression": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
consumer.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 478,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "decorators": [],
        "name": "iString",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 39,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 38,
          "raw": "'./expString'",
          "value": "./expString"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 55,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 55,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 49,
                "end": 55
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 58,
            "end": 65,
            "decorators": [],
            "name": "iString",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 68,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 82,
        "decorators": [],
        "name": "iNumber",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 85,
        "end": 107,
        "expression": {
          "type": "Literal",
          "start": 93,
          "end": 106,
          "raw": "'./expNumber'",
          "value": "./expNumber"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 123,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 126,
            "end": 133,
            "decorators": [],
            "name": "iNumber",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 136,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 151,
        "decorators": [],
        "name": "iBoolean",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 154,
        "end": 177,
        "expression": {
          "type": "Literal",
          "start": 162,
          "end": 176,
          "raw": "'./expBoolean'",
          "value": "./expBoolean"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 194,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 194,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 187,
                "end": 194
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 197,
            "end": 205,
            "decorators": [],
            "name": "iBoolean",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 208,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 221,
        "decorators": [],
        "name": "iArray",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 224,
        "end": 245,
        "expression": {
          "type": "Literal",
          "start": 232,
          "end": 244,
          "raw": "'./expArray'",
          "value": "./expArray"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 268,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 253,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 255,
                "end": 268,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 260,
                  "end": 268,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 261,
                      "end": 267
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 260,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 271,
            "end": 277,
            "decorators": [],
            "name": "iArray",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 280,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 294,
        "decorators": [],
        "name": "iObject",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 297,
        "end": 319,
        "expression": {
          "type": "Literal",
          "start": 305,
          "end": 318,
          "raw": "'./expObject'",
          "value": "./expObject"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 345,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 335,
            "decorators": [],
            "name": "v5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 335,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 329,
                "end": 335,
                "typeName": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 335,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 338,
            "end": 345,
            "decorators": [],
            "name": "iObject",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 348,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 359,
        "decorators": [],
        "name": "iAny",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 362,
        "end": 381,
        "expression": {
          "type": "Literal",
          "start": 370,
          "end": 380,
          "raw": "'./expAny'",
          "value": "./expAny"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 396,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 389,
            "decorators": [],
            "name": "v6",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 392,
            "end": 396,
            "decorators": [],
            "name": "iAny",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 399,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 406,
        "end": 414,
        "decorators": [],
        "name": "iGeneric",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 417,
        "end": 440,
        "expression": {
          "type": "Literal",
          "start": 425,
          "end": 439,
          "raw": "'./expGeneric'",
          "value": "./expGeneric"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 476,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 465,
            "decorators": [],
            "name": "v7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 448,
              "end": 465,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 450,
                "end": 465,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 451,
                    "end": 464,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 455,
                        "end": 460,
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 457,
                          "end": 460,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 459,
                            "end": 460,
                            "typeName": {
                              "type": "Identifier",
                              "start": 459,
                              "end": 460,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 461,
                      "end": 464,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 463,
                        "end": 464,
                        "typeName": {
                          "type": "Identifier",
                          "start": 463,
                          "end": 464,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 451,
                      "end": 454,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 452,
                          "end": 453,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 453,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 468,
            "end": 476,
            "decorators": [],
            "name": "iGeneric",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
