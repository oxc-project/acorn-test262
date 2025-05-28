__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 313,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 196,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 18,
              "end": 36,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 20,
                  "end": 34,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 26,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 28,
                      "end": 34
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
        "start": 38,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 65,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 55,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 65,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 60,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
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
                "start": 62,
                "end": 65,
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
            "start": 70,
            "end": 194,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 194,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 73,
                "end": 86,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 74,
                    "end": 85,
                    "name": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 75,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 84,
                      "end": 85,
                      "typeName": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 85,
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
                  "start": 87,
                  "end": 91,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 90,
                      "end": 91,
                      "typeName": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 91,
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
                "start": 93,
                "end": 194,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 103,
                    "end": 168,
                    "id": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 115,
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
                      "start": 115,
                      "end": 128,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 116,
                          "end": 127,
                          "name": {
                            "type": "Identifier",
                            "start": 116,
                            "end": 117,
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 126,
                            "end": 127,
                            "typeName": {
                              "type": "Identifier",
                              "start": 126,
                              "end": 127,
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
                        "start": 129,
                        "end": 133,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 130,
                          "end": 133,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 132,
                            "end": 133,
                            "typeName": {
                              "type": "Identifier",
                              "start": 132,
                              "end": 133,
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
                      "start": 135,
                      "end": 168,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 149,
                          "end": 158,
                          "argument": {
                            "type": "Identifier",
                            "start": 156,
                            "end": 157,
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
                    "start": 177,
                    "end": 188,
                    "argument": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 187,
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
      "start": 198,
      "end": 227,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 206,
            "end": 226,
            "callee": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 212,
                "end": 225,
                "properties": [
                  {
                    "type": "Property",
                    "start": 214,
                    "end": 223,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 220,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 222,
                      "end": 223,
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
      "start": 228,
      "end": 246,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 236,
            "end": 245,
            "callee": {
              "type": "MemberExpression",
              "start": 236,
              "end": 241,
              "object": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 238,
                "end": 241,
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
                "type": "Literal",
                "start": 242,
                "end": 244,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 304,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 303,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 256,
            "end": 303,
            "callee": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 258,
                "end": 302,
                "properties": [
                  {
                    "type": "Property",
                    "start": 260,
                    "end": 269,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 266,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 268,
                      "end": 269,
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
                    "start": 271,
                    "end": 300,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 277,
                      "decorators": [],
                      "name": "charAt",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 279,
                      "end": 300,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 280,
                          "end": 289,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 281,
                            "end": 289,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 283,
                              "end": 289
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 294,
                        "end": 300,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 296,
                            "end": 298,
                            "expression": {
                              "type": "Literal",
                              "start": 296,
                              "end": 298,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
