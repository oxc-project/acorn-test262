__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 307,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 79,
        "decorators": [],
        "name": "narrow",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 83,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 87,
        "end": 213,
        "checkType": {
          "type": "TSTypeReference",
          "start": 87,
          "end": 90,
          "typeName": {
            "type": "Identifier",
            "start": 87,
            "end": 90,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 99,
          "end": 105
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 110,
          "end": 113,
          "typeName": {
            "type": "Identifier",
            "start": 110,
            "end": 113,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 118,
          "end": 213,
          "checkType": {
            "type": "TSTypeReference",
            "start": 118,
            "end": 121,
            "typeName": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTupleType",
            "start": 130,
            "end": 153,
            "elementTypes": [
              {
                "type": "TSUnknownKeyword",
                "start": 131,
                "end": 138
              },
              {
                "type": "TSRestType",
                "start": 140,
                "end": 152,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 143,
                  "end": 152,
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 143,
                    "end": 150
                  }
                }
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 158,
            "end": 161,
            "typeName": {
              "type": "Identifier",
              "start": 158,
              "end": 161,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSMappedType",
            "start": 166,
            "end": 213,
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 180,
              "end": 189,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 189,
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 189,
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 206,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 198,
                "decorators": [],
                "name": "narrow",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 198,
                "end": 206,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 199,
                    "end": 205,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 199,
                      "end": 202,
                      "typeName": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 202,
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 203,
                      "end": 204,
                      "typeName": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 204,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "optional": false,
            "readonly": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 268,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 267,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 267,
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 267,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 237,
                "end": 267,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 237,
                  "end": 242,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 238,
                      "end": 241,
                      "name": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 241,
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "typeAnnotation": null
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
                    "start": 243,
                    "end": 259,
                    "decorators": [],
                    "name": "def",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 246,
                      "end": 259,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 248,
                        "end": 259,
                        "typeName": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 254,
                          "decorators": [],
                          "name": "narrow",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 254,
                          "end": 259,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 255,
                              "end": 258,
                              "typeName": {
                                "type": "Identifier",
                                "start": 255,
                                "end": 258,
                                "decorators": [],
                                "name": "def",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 261,
                  "end": 267,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 264,
                    "end": 267,
                    "typeName": {
                      "type": "Identifier",
                      "start": 264,
                      "end": 267,
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 307,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 306,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 282,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 285,
            "end": 306,
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 290,
              "decorators": [],
              "name": "parse",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 291,
                "end": 305,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 292,
                    "end": 304,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 294,
                        "end": 302,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 295,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 297,
                          "end": 302,
                          "value": "foo",
                          "raw": "\"foo\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
