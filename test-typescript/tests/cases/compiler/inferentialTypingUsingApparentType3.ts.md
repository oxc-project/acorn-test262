__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 461,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 45,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 45,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 43,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "decorators": [],
              "name": "clean",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 39,
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 39,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 38,
                    "end": 39,
                    "typeName": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 42,
                "end": 43,
                "typeName": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Field",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
      "type": "ClassDeclaration",
      "start": 47,
      "end": 146,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 146,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 144,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 99,
              "decorators": [],
              "name": "clean",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 99,
              "end": 144,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 144,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 125,
                    "end": 138,
                    "argument": {
                      "type": "Literal",
                      "start": 132,
                      "end": 137,
                      "raw": "\"Yup\"",
                      "value": "Yup"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 113,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 107,
                      "end": 113
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 62,
        "decorators": [],
        "name": "CharField",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 74,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 74,
            "end": 79,
            "decorators": [],
            "name": "Field",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 79,
            "end": 87,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
              }
            ]
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 148,
      "end": 247,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 191,
        "end": 247,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 197,
            "end": 245,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 202,
              "decorators": [],
              "name": "clean",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 202,
              "end": 245,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 245,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 228,
                    "end": 239,
                    "argument": {
                      "type": "Literal",
                      "start": 235,
                      "end": 238,
                      "raw": "123",
                      "value": 123
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 203,
                  "end": 216,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 208,
                    "end": 216,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 210,
                      "end": 216
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 165,
        "decorators": [],
        "name": "NumberField",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 177,
          "end": 190,
          "expression": {
            "type": "Identifier",
            "start": 177,
            "end": 182,
            "decorators": [],
            "name": "Field",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 182,
            "end": 190,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 183,
                "end": 189
              }
            ]
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 249,
      "end": 353,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 312,
        "end": 353,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 318,
            "end": 351,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 329,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 329,
              "end": 351,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 351,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 330,
                  "end": 346,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 346,
                    "decorators": [],
                    "name": "fields",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 343,
                      "end": 346,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 345,
                        "end": 346,
                        "typeName": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 346,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 266,
        "decorators": [],
        "name": "ObjectField",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 266,
        "end": 311,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 267,
            "end": 268,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 270,
            "end": 310,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 280,
              "end": 310,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 282,
                  "end": 308,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 283,
                      "end": 295,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 287,
                        "end": 295,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 289,
                          "end": 295
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 296,
                    "end": 308,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 298,
                      "end": 308,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 303,
                        "end": 308,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 304,
                            "end": 307
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 303,
                        "decorators": [],
                        "name": "Field",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
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
      "type": "VariableDeclaration",
      "start": 355,
      "end": 442,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 441,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 365,
            "decorators": [],
            "name": "person",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 368,
            "end": 441,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 384,
                "end": 440,
                "properties": [
                  {
                    "type": "Property",
                    "start": 390,
                    "end": 411,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 392,
                      "decorators": [],
                      "name": "id",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 394,
                      "end": 411,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 398,
                        "end": 409,
                        "decorators": [],
                        "name": "NumberField",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "start": 417,
                    "end": 438,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 421,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 423,
                      "end": 438,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 427,
                        "end": 436,
                        "decorators": [],
                        "name": "CharField",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 372,
              "end": 383,
              "decorators": [],
              "name": "ObjectField",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 461,
      "expression": {
        "type": "MemberExpression",
        "start": 444,
        "end": 460,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 444,
          "end": 457,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 444,
            "end": 450,
            "decorators": [],
            "name": "person",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 451,
            "end": 457,
            "decorators": [],
            "name": "fields",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 458,
          "end": 460,
          "decorators": [],
          "name": "id",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
