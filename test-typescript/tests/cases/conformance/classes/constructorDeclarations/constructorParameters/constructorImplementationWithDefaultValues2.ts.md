__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 352,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 29,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 25,
              "end": 29,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "name": "x",
                  "typeAnnotation": null,
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
          },
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 103,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 103,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 46,
                  "end": 66,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 53,
                    "end": 66,
                    "left": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 62,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 54,
                        "end": 62,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 56,
                          "end": 62
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 65,
                      "end": 66,
                      "value": 1,
                      "raw": "1"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 103,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 87,
                    "end": 97,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 91,
                        "end": 96,
                        "id": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 92,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "name": "x",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 232,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 151,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 138,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 138,
              "end": 151,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 139,
                  "end": 143,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 142,
                      "end": 143,
                      "typeName": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
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
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 149,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 148,
                      "end": 149,
                      "typeName": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "name": "U",
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
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 230,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 167,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 167,
              "end": 230,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 168,
                  "end": 176,
                  "left": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 172,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 171,
                        "end": 172,
                        "typeName": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 172,
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
                  "right": {
                    "type": "Literal",
                    "start": 175,
                    "end": 176,
                    "value": 1,
                    "raw": "1"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "TSParameterProperty",
                  "start": 178,
                  "end": 193,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 185,
                    "end": 193,
                    "left": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 189,
                      "name": "y",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 186,
                        "end": 189,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 188,
                          "end": 189,
                          "typeName": {
                            "type": "Identifier",
                            "start": 188,
                            "end": 189,
                            "name": "U",
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
                    "right": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 195,
                "end": 230,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 214,
                    "end": 224,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 218,
                        "end": 223,
                        "id": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 219,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 223,
                          "name": "x",
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 120,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 116,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 119,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "name": "U",
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
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 234,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 241,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 258,
        "end": 352,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 264,
            "end": 279,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 275,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 275,
              "end": 279,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 276,
                  "end": 277,
                  "name": "x",
                  "typeAnnotation": null,
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
          },
          {
            "type": "MethodDefinition",
            "start": 284,
            "end": 350,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 295,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 295,
              "end": 350,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 296,
                  "end": 313,
                  "left": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 300,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 300,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 299,
                        "end": 300,
                        "typeName": {
                          "type": "Identifier",
                          "start": 299,
                          "end": 300,
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
                  "right": {
                    "type": "NewExpression",
                    "start": 303,
                    "end": 313,
                    "callee": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 311,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 315,
                "end": 350,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 334,
                    "end": 344,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 338,
                        "end": 343,
                        "id": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 339,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 342,
                          "end": 343,
                          "name": "x",
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 241,
        "end": 257,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 242,
            "end": 256,
            "name": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 252,
              "end": 256,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
