__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 363,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
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
        "end": 51,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 49,
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
              "end": 49,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 27,
                  "end": 44,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 44,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 36,
                      "end": 44,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 38,
                        "end": 44
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 49,
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
      "start": 52,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 62,
            "name": "c1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 60,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 62,
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
      "start": 64,
      "end": 68,
      "expression": {
        "type": "MemberExpression",
        "start": 64,
        "end": 68,
        "object": {
          "type": "Identifier",
          "start": 64,
          "end": 66,
          "name": "c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
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
      "start": 77,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 85,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 129,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 92,
            "end": 127,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 103,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 127,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 104,
                  "end": 122,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 122,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 114,
                      "end": 122,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 116,
                        "end": 122
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 124,
                "end": 127,
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
      "start": 130,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 140,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 140,
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 140,
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
      "start": 142,
      "end": 146,
      "expression": {
        "type": "MemberExpression",
        "start": 142,
        "end": 146,
        "object": {
          "type": "Identifier",
          "start": 142,
          "end": 144,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
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
      "start": 167,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 175,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 221,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 193,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 193,
              "end": 219,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 194,
                  "end": 214,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 214,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 214,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 208,
                        "end": 214
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 216,
                "end": 219,
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
      "start": 222,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 232,
            "name": "c3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 230,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 232,
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
      "start": 234,
      "end": 238,
      "expression": {
        "type": "MemberExpression",
        "start": 234,
        "end": 238,
        "object": {
          "type": "Identifier",
          "start": 234,
          "end": 236,
          "name": "c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 237,
          "end": 238,
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
      "start": 259,
      "end": 362,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 272,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 281,
        "end": 283,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 284,
        "end": 362,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 290,
            "end": 360,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 290,
              "end": 301,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 301,
              "end": 360,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 302,
                  "end": 311,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 313,
                "end": 360,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 323,
                    "end": 332,
                    "expression": {
                      "type": "CallExpression",
                      "start": 323,
                      "end": 331,
                      "callee": {
                        "type": "Super",
                        "start": 323,
                        "end": 328
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 329,
                          "end": 330,
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
                    "start": 341,
                    "end": 348,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 341,
                      "end": 347,
                      "object": {
                        "type": "ThisExpression",
                        "start": 341,
                        "end": 345
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 346,
                        "end": 347,
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
