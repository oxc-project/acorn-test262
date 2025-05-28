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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 219,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 88,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 88,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 83,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 88,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 217,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 96,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 96,
              "end": 217,
              "id": null,
              "generator": false,
              "async": false,
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
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 107,
                      "end": 108,
                      "typeName": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 108,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 114,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
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
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
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
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 149,
                            "end": 150,
                            "typeName": {
                              "type": "Identifier",
                              "start": 149,
                              "end": 150,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 152,
                        "end": 156,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
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
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 200,
                    "end": 211,
                    "argument": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 210,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 250,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 229,
            "end": 249,
            "callee": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 243,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 245,
                      "end": 246,
                      "value": 2,
                      "raw": "2"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 311,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 310,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 261,
                "end": 264,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 273,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 275,
                      "end": 276,
                      "value": 3,
                      "raw": "3"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 278,
                    "end": 307,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 284,
                      "decorators": [],
                      "name": "charAt",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 286,
                      "end": 307,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 287,
                          "end": 296,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 288,
                            "end": 296,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 290,
                              "end": 296
                            }
                          }
                        }
                      ],
                      "returnType": null,
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
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
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
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 327,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 318,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 321,
            "end": 326,
            "callee": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 323,
                "end": 325,
                "value": "",
                "raw": "''"
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
