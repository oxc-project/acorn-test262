__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 313,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 48,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 119,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 117,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 73,
              "decorators": [],
              "name": "wrong",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 116,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 75,
                "end": 116,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 75,
                    "end": 82,
                    "literal": {
                      "type": "Literal",
                      "start": 75,
                      "end": 82,
                      "value": "place",
                      "raw": "\"place\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 85,
                    "end": 91,
                    "literal": {
                      "type": "Literal",
                      "start": 85,
                      "end": 91,
                      "value": "time",
                      "raw": "\"time\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 94,
                    "end": 102,
                    "literal": {
                      "type": "Literal",
                      "start": 94,
                      "end": 102,
                      "value": "method",
                      "raw": "\"method\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 105,
                    "end": 116,
                    "literal": {
                      "type": "Literal",
                      "start": 105,
                      "end": 116,
                      "value": "technique",
                      "raw": "\"technique\""
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 243,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 134,
            "decorators": [],
            "name": "mismatch",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 137,
            "end": 243,
            "properties": [
              {
                "type": "Property",
                "start": 143,
                "end": 148,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 146,
                  "end": 148,
                  "value": 13,
                  "raw": "13"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 154,
                "end": 189,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 159,
                  "end": 189,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 160,
                      "end": 169,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 164,
                        "end": 169,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 166,
                          "end": 169,
                          "typeName": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 169,
                            "decorators": [],
                            "name": "Foo",
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
                    "start": 171,
                    "end": 189,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 173,
                        "end": 187,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 180,
                          "end": 186,
                          "object": {
                            "type": "ThisExpression",
                            "start": 180,
                            "end": 184
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 186,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 195,
                "end": 241,
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 200,
                  "end": 241,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 201,
                      "end": 210,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 205,
                        "end": 210,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 207,
                          "end": 210,
                          "typeName": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 210,
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 212,
                      "end": 213,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 215,
                    "end": 241,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 217,
                        "end": 239,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 217,
                          "end": 238,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 217,
                            "end": 227,
                            "object": {
                              "type": "ThisExpression",
                              "start": 217,
                              "end": 221
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 222,
                              "end": 227,
                              "decorators": [],
                              "name": "wrong",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 230,
                            "end": 238,
                            "value": "method",
                            "raw": "\"method\""
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
      "start": 244,
      "end": 313,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 313,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 265,
            "decorators": [],
            "name": "contextual",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 265,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 265,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 265,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 268,
            "end": 313,
            "properties": [
              {
                "type": "Property",
                "start": 274,
                "end": 279,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 277,
                  "end": 279,
                  "value": 16,
                  "raw": "16"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 285,
                "end": 311,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 290,
                  "end": 311,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 293,
                    "end": 311,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 295,
                        "end": 309,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 302,
                          "end": 308,
                          "object": {
                            "type": "ThisExpression",
                            "start": 302,
                            "end": 306
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 307,
                            "end": 308,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
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
