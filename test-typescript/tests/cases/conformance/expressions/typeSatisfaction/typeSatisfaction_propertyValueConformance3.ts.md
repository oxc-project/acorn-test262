__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 324,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 56,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 56,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "decorators": [],
          "name": "Color",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 20,
          "end": 55,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 22,
              "end": 32,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "r",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 23,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 25,
                  "end": 31
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 33,
              "end": 43,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 34,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 36,
                  "end": 42
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 44,
              "end": 53,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 45,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 47,
                  "end": 53
                }
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 126,
      "end": 323,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 133,
        "end": 323,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 139,
            "end": 322,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 139,
              "end": 146,
              "decorators": [],
              "name": "Palette",
              "optional": false
            },
            "init": {
              "type": "TSSatisfiesExpression",
              "start": 149,
              "end": 322,
              "expression": {
                "type": "ObjectExpression",
                "start": 149,
                "end": 290,
                "properties": [
                  {
                    "type": "Property",
                    "start": 155,
                    "end": 188,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 160,
                      "decorators": [],
                      "name": "white",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 162,
                      "end": 188,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 164,
                          "end": 170,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 164,
                            "end": 165,
                            "decorators": [],
                            "name": "r",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 167,
                            "end": 170,
                            "raw": "255",
                            "value": 255
                          }
                        },
                        {
                          "type": "Property",
                          "start": 172,
                          "end": 178,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 172,
                            "end": 173,
                            "decorators": [],
                            "name": "g",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 175,
                            "end": 178,
                            "raw": "255",
                            "value": 255
                          }
                        },
                        {
                          "type": "Property",
                          "start": 180,
                          "end": 186,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 181,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 183,
                            "end": 186,
                            "raw": "255",
                            "value": 255
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 194,
                    "end": 221,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 199,
                      "decorators": [],
                      "name": "black",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 201,
                      "end": 221,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 203,
                          "end": 207,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 204,
                            "decorators": [],
                            "name": "r",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 206,
                            "end": 207,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 209,
                          "end": 213,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 210,
                            "decorators": [],
                            "name": "g",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 212,
                            "end": 213,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 215,
                          "end": 219,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 215,
                            "end": 216,
                            "decorators": [],
                            "name": "d",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 218,
                            "end": 219,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 259,
                    "end": 287,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 263,
                      "decorators": [],
                      "name": "blue",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 265,
                      "end": 287,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 267,
                          "end": 271,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 267,
                            "end": 268,
                            "decorators": [],
                            "name": "r",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 270,
                            "end": 271,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 273,
                          "end": 277,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 273,
                            "end": 274,
                            "decorators": [],
                            "name": "g",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 276,
                            "end": 277,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 279,
                          "end": 285,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 279,
                            "end": 280,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 282,
                            "end": 285,
                            "raw": "255",
                            "value": 255
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 301,
                "end": 322,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 307,
                  "end": 322,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 308,
                      "end": 314
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 316,
                      "end": 321,
                      "typeName": {
                        "type": "Identifier",
                        "start": 316,
                        "end": 321,
                        "decorators": [],
                        "name": "Color",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 307,
                  "decorators": [],
                  "name": "Record",
                  "optional": false
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
