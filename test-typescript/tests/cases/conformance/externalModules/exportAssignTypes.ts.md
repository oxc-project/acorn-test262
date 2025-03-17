__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 14,
            "value": "test",
            "raw": "\"test\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 16,
      "end": 27,
      "expression": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": 42,
            "raw": "42"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 12,
      "end": 23,
      "expression": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 12,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 14,
      "end": 25,
      "expression": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 11,
                "end": 12,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 15,
      "end": 26,
      "expression": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 16,
                  "name": "answer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 20,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 22,
                "end": 32,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 26,
                  "name": "when",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 28,
                  "end": 32,
                  "value": 1776,
                  "raw": "1776"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 35,
      "end": 46,
      "expression": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 7,
      "end": 18,
      "expression": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "name": "a",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSExportAssignment",
      "start": 34,
      "end": 45,
      "expression": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
        "name": "iString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 39,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 38,
          "value": "./expString",
          "raw": "'./expString'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 55,
            "name": "v1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 55,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 49,
                "end": 55
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 58,
            "end": 65,
            "name": "iString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 68,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 82,
        "name": "iNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 85,
        "end": 107,
        "expression": {
          "type": "Literal",
          "start": 93,
          "end": 106,
          "value": "./expNumber",
          "raw": "'./expNumber'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 123,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 126,
            "end": 133,
            "name": "iNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 136,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 151,
        "name": "iBoolean",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 154,
        "end": 177,
        "expression": {
          "type": "Literal",
          "start": 162,
          "end": 176,
          "value": "./expBoolean",
          "raw": "'./expBoolean'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 194,
            "name": "v3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 194,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 187,
                "end": 194
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 197,
            "end": 205,
            "name": "iBoolean",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 208,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 221,
        "name": "iArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 224,
        "end": 245,
        "expression": {
          "type": "Literal",
          "start": 232,
          "end": 244,
          "value": "./expArray",
          "raw": "'./expArray'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 268,
            "name": "v4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 253,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 255,
                "end": 268,
                "typeName": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 260,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 271,
            "end": 277,
            "name": "iArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 280,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 294,
        "name": "iObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 297,
        "end": 319,
        "expression": {
          "type": "Literal",
          "start": 305,
          "end": 318,
          "value": "./expObject",
          "raw": "'./expObject'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 335,
            "name": "v5",
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
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 338,
            "end": 345,
            "name": "iObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 348,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 359,
        "name": "iAny",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 362,
        "end": 381,
        "expression": {
          "type": "Literal",
          "start": 370,
          "end": 380,
          "value": "./expAny",
          "raw": "'./expAny'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 389,
            "name": "v6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 392,
            "end": 396,
            "name": "iAny",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 399,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 406,
        "end": 414,
        "name": "iGeneric",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 417,
        "end": 440,
        "expression": {
          "type": "Literal",
          "start": 425,
          "end": 439,
          "value": "./expGeneric",
          "raw": "'./expGeneric'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 465,
            "name": "v7",
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 451,
                      "end": 454,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 452,
                          "end": 453,
                          "name": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 453,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 455,
                        "end": 460,
                        "name": "p1",
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
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 468,
            "end": 476,
            "name": "iGeneric",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
