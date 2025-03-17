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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Field",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 45,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 43,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "name": "clean",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 39,
                "name": "input",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 62,
        "name": "CharField",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 146,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 144,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 99,
              "name": "clean",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 99,
              "end": 144,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 113,
                  "name": "input",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 107,
                      "end": 113
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "value": "Yup",
                      "raw": "\"Yup\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 74,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 74,
            "end": 79,
            "name": "Field",
            "typeAnnotation": null,
            "decorators": [],
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
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 148,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 165,
        "name": "NumberField",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 191,
        "end": 247,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 197,
            "end": 245,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 202,
              "name": "clean",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 202,
              "end": 245,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 203,
                  "end": 216,
                  "name": "input",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 208,
                    "end": 216,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 210,
                      "end": 216
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "value": 123,
                      "raw": "123"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 177,
          "end": 190,
          "expression": {
            "type": "Identifier",
            "start": 177,
            "end": 182,
            "name": "Field",
            "typeAnnotation": null,
            "decorators": [],
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
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 249,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 266,
        "name": "ObjectField",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 312,
        "end": 353,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 318,
            "end": 351,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 329,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 329,
              "end": 351,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "fields",
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
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 348,
                "end": 351,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 266,
        "end": 311,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 267,
            "end": 268,
            "name": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 270,
            "end": 310,
            "name": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "name": "name",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 287,
                        "end": 295,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 289,
                          "end": 295
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 296,
                    "end": 308,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 298,
                      "end": 308,
                      "typeName": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 303,
                        "name": "Field",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 365,
            "name": "person",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 368,
            "end": 441,
            "callee": {
              "type": "Identifier",
              "start": 372,
              "end": 383,
              "name": "ObjectField",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 392,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 394,
                      "end": 411,
                      "callee": {
                        "type": "Identifier",
                        "start": 398,
                        "end": 409,
                        "name": "NumberField",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 417,
                    "end": 438,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 421,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 423,
                      "end": 438,
                      "callee": {
                        "type": "Identifier",
                        "start": 427,
                        "end": 436,
                        "name": "CharField",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 461,
      "expression": {
        "type": "MemberExpression",
        "start": 444,
        "end": 460,
        "object": {
          "type": "MemberExpression",
          "start": 444,
          "end": 457,
          "object": {
            "type": "Identifier",
            "start": 444,
            "end": 450,
            "name": "person",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 451,
            "end": 457,
            "name": "fields",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 458,
          "end": 460,
          "name": "id",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
