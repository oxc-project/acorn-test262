__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 284,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "name": "DMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 84,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 82,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 41,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 41,
              "end": 82,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 42,
                  "end": 80,
                  "name": "iterable",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 50,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 52,
                      "end": 80,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 52,
                          "end": 68,
                          "typeName": {
                            "type": "Identifier",
                            "start": 52,
                            "end": 60,
                            "name": "Iterable",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 60,
                            "end": 68,
                            "params": [
                              {
                                "type": "TSTupleType",
                                "start": 61,
                                "end": 67,
                                "elementTypes": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 62,
                                    "end": 63,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 62,
                                      "end": 63,
                                      "name": "K",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 65,
                                    "end": 66,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 65,
                                      "end": 66,
                                      "name": "V",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 71,
                          "end": 80
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
        "start": 18,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "K",
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
            "start": 22,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "V",
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 106,
      "expression": {
        "type": "NewExpression",
        "start": 85,
        "end": 105,
        "callee": {
          "type": "Identifier",
          "start": 89,
          "end": 93,
          "name": "DMap",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 94,
            "end": 104,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 95,
                "end": 103,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 96,
                    "end": 99,
                    "value": "1",
                    "raw": "\"1\""
                  },
                  {
                    "type": "Literal",
                    "start": 101,
                    "end": 102,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 151,
            "name": "i1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 151,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 118,
                "end": 151,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 118,
                    "end": 139,
                    "typeName": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 126,
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 126,
                      "end": 139,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 127,
                          "end": 138,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 129,
                              "end": 136,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 129,
                                "end": 130,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 130,
                                "end": 136,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 132,
                                  "end": 136,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 132,
                                    "end": 136,
                                    "value": true,
                                    "raw": "true"
                                  }
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 142,
                    "end": 151
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 154,
            "end": 167,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 155,
                "end": 166,
                "properties": [
                  {
                    "type": "Property",
                    "start": 157,
                    "end": 164,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 158,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 160,
                      "end": 164,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 225,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 225,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 179,
                "end": 225,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 179,
                    "end": 200,
                    "typeName": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 187,
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 187,
                      "end": 200,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 188,
                          "end": 199,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 190,
                              "end": 197,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 190,
                                "end": 191,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 191,
                                "end": 197,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 193,
                                  "end": 197,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 193,
                                    "end": 197,
                                    "value": true,
                                    "raw": "true"
                                  }
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 203,
                    "end": 225,
                    "typeName": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 211,
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 211,
                      "end": 225,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 212,
                          "end": 224,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 214,
                              "end": 222,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 214,
                                "end": 215,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 215,
                                "end": 222,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 217,
                                  "end": 222,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 217,
                                    "end": 222,
                                    "value": false,
                                    "raw": "false"
                                  }
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 228,
            "end": 242,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 229,
                "end": 241,
                "properties": [
                  {
                    "type": "Property",
                    "start": 231,
                    "end": 239,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 232,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 234,
                      "end": 239,
                      "value": false,
                      "raw": "false"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 276,
            "name": "i3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 276,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 254,
                "end": 276,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 254,
                    "end": 270,
                    "typeName": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 262,
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 262,
                      "end": 270,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 263,
                          "end": 269
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 273,
                    "end": 276,
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 273,
                      "end": 274,
                      "literal": {
                        "type": "Literal",
                        "start": 273,
                        "end": 274,
                        "value": 1,
                        "raw": "1"
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
            "type": "ArrayExpression",
            "start": 279,
            "end": 282,
            "elements": [
              {
                "type": "Literal",
                "start": 280,
                "end": 281,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
