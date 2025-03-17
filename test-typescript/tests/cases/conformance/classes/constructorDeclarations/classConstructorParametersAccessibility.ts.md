__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 360,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 26,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 27,
                  "end": 43,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 43,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 35,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
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
                "start": 45,
                "end": 48,
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 61,
            "name": "c1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 61,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 61,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 61,
                  "name": "C1",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 67,
      "expression": {
        "type": "MemberExpression",
        "start": 63,
        "end": 67,
        "object": {
          "type": "Identifier",
          "start": 63,
          "end": 65,
          "name": "c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 127,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 125,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 102,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 125,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 103,
                  "end": 120,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 120,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 112,
                      "end": 120,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 114,
                        "end": 120
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
                "start": 122,
                "end": 125,
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 138,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 138,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 138,
                  "name": "C2",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 144,
      "expression": {
        "type": "MemberExpression",
        "start": 140,
        "end": 144,
        "object": {
          "type": "Identifier",
          "start": 140,
          "end": 142,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
          "name": "p",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 165,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 173,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 174,
        "end": 218,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 180,
            "end": 216,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 191,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 191,
              "end": 216,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 192,
                  "end": 211,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 211,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 203,
                      "end": 211,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 205,
                        "end": 211
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
                "start": 213,
                "end": 216,
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 229,
            "name": "c3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 225,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 227,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 229,
                  "name": "C3",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 235,
      "expression": {
        "type": "MemberExpression",
        "start": 231,
        "end": 235,
        "object": {
          "type": "Identifier",
          "start": 231,
          "end": 233,
          "name": "c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 234,
          "end": 235,
          "name": "p",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 256,
      "end": 359,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 269,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 278,
        "end": 280,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 281,
        "end": 359,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 287,
            "end": 357,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 298,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 298,
              "end": 357,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 299,
                  "end": 308,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 300,
                    "end": 308,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 302,
                      "end": 308
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 310,
                "end": 357,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 320,
                    "end": 329,
                    "expression": {
                      "type": "CallExpression",
                      "start": 320,
                      "end": 328,
                      "callee": {
                        "type": "Super",
                        "start": 320,
                        "end": 325
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 326,
                          "end": 327,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 338,
                    "end": 345,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 338,
                      "end": 344,
                      "object": {
                        "type": "ThisExpression",
                        "start": 338,
                        "end": 342
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 343,
                        "end": 344,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
