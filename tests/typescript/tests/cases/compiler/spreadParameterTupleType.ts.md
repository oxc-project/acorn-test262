__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 339,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 124,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 20,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 29,
              "end": 40,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 30,
                  "end": 39,
                  "label": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 33,
                    "end": 39
                  },
                  "optional": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 46,
            "end": 68,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 55,
              "end": 67,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 56,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 59,
                    "end": 60,
                    "typeName": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 62,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 65,
                    "end": 66,
                    "typeName": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 74,
            "end": 122,
            "argument": {
              "type": "TSSatisfiesExpression",
              "start": 81,
              "end": 122,
              "expression": {
                "type": "FunctionExpression",
                "start": 81,
                "end": 108,
                "id": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 92,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 93,
                    "end": 103,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 100,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 103,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 102,
                        "end": 103,
                        "typeName": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 103,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 105,
                  "end": 108,
                  "body": []
                },
                "expression": false
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 137,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 140,
        "end": 339,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 146,
            "end": 167,
            "id": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 155,
              "end": 166,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 156,
                  "end": 165,
                  "label": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 159,
                    "end": 165
                  },
                  "optional": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 172,
            "end": 193,
            "id": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 181,
              "end": 192,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 182,
                  "end": 191,
                  "label": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 185,
                    "end": 191
                  },
                  "optional": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 198,
            "end": 219,
            "id": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 207,
              "end": 218,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 208,
                  "end": 217,
                  "label": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 209,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 211,
                    "end": 217
                  },
                  "optional": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 224,
            "end": 282,
            "id": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 233,
              "end": 281,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 234,
                  "end": 238,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 237,
                    "end": 238,
                    "typeName": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 238,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 240,
                  "end": 244,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 243,
                    "end": 244,
                    "typeName": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 244,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 246,
                  "end": 250,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 249,
                    "end": 250,
                    "typeName": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 250,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 252,
                  "end": 256,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 255,
                    "end": 256,
                    "typeName": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 256,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 258,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 261,
                    "end": 262,
                    "typeName": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 264,
                  "end": 268,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 267,
                    "end": 268,
                    "typeName": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 268,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 270,
                  "end": 274,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 273,
                    "end": 274,
                    "typeName": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 276,
                  "end": 280,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 279,
                    "end": 280,
                    "typeName": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 280,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 288,
            "end": 337,
            "argument": {
              "type": "TSSatisfiesExpression",
              "start": 295,
              "end": 336,
              "expression": {
                "type": "FunctionExpression",
                "start": 295,
                "end": 322,
                "id": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 307,
                    "end": 317,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 314,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 314,
                      "end": 317,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 316,
                        "end": 317,
                        "typeName": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 317,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 319,
                  "end": 322,
                  "body": []
                },
                "expression": false
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 333,
                "end": 336
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
