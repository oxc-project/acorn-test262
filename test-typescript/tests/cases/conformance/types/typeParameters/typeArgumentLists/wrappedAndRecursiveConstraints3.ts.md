__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 327,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 219,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 88,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 88,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 83,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 82,
                      "end": 83,
                      "typeName": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 83,
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
                "start": 85,
                "end": 88,
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
          },
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 217,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 96,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 96,
              "end": 217,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 114,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 113,
                      "end": 114,
                      "typeName": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 114,
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
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 217,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 126,
                    "end": 191,
                    "id": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 138,
                      "name": "bar",
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
                        "start": 152,
                        "end": 156,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 153,
                          "end": 156,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 155,
                            "end": 156,
                            "typeName": {
                              "type": "Identifier",
                              "start": 155,
                              "end": 156,
                              "name": "V",
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
                      "start": 158,
                      "end": 191,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 172,
                          "end": 181,
                          "argument": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 180,
                            "name": "x",
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
                      "start": 138,
                      "end": 151,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 139,
                          "end": 150,
                          "name": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 140,
                            "name": "V",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 149,
                            "end": 150,
                            "typeName": {
                              "type": "Identifier",
                              "start": 149,
                              "end": 150,
                              "name": "U",
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
                    "returnType": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 200,
                    "end": 211,
                    "argument": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 210,
                      "name": "bar",
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
                "start": 96,
                "end": 109,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 97,
                    "end": 108,
                    "name": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 107,
                      "end": 108,
                      "typeName": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 108,
                        "name": "T",
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
        "start": 30,
        "end": 60,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 59,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 41,
              "end": 59,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 43,
                  "end": 57,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 49,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 51,
                      "end": 57
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 221,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 229,
            "end": 249,
            "callee": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 235,
                "end": 248,
                "properties": [
                  {
                    "type": "Property",
                    "start": 237,
                    "end": 246,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 243,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 245,
                      "end": 246,
                      "value": 2,
                      "raw": "2"
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
      "type": "VariableDeclaration",
      "start": 251,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 310,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 259,
            "end": 310,
            "callee": {
              "type": "MemberExpression",
              "start": 259,
              "end": 264,
              "object": {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 261,
                "end": 264,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 265,
                "end": 309,
                "properties": [
                  {
                    "type": "Property",
                    "start": 267,
                    "end": 276,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 273,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 275,
                      "end": 276,
                      "value": 3,
                      "raw": "3"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 278,
                    "end": 307,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 284,
                      "name": "charAt",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 286,
                      "end": 307,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 287,
                          "end": 296,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 288,
                            "end": 296,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 290,
                              "end": 296
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 301,
                        "end": 307,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 303,
                            "end": 305,
                            "expression": {
                              "type": "Literal",
                              "start": 303,
                              "end": 305,
                              "value": "",
                              "raw": "''"
                            },
                            "directive": ""
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 318,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 321,
            "end": 326,
            "callee": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 323,
                "end": 325,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
