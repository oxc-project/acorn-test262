__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 30
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 45
          }
        ],
        "start": 14,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 61
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrong",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 73
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "place",
                      "raw": "\"place\"",
                      "start": 75,
                      "end": 82
                    },
                    "start": 75,
                    "end": 82
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "time",
                      "raw": "\"time\"",
                      "start": 85,
                      "end": 91
                    },
                    "start": 85,
                    "end": 91
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "method",
                      "raw": "\"method\"",
                      "start": 94,
                      "end": 102
                    },
                    "start": 94,
                    "end": 102
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "technique",
                      "raw": "\"technique\"",
                      "start": 105,
                      "end": 116
                    },
                    "start": 105,
                    "end": 116
                  }
                ],
                "start": 75,
                "end": 116
              },
              "start": 73,
              "end": 116
            },
            "accessibility": null,
            "static": false,
            "start": 68,
            "end": 117
          }
        ],
        "start": 62,
        "end": 119
      },
      "declare": false,
      "start": 48,
      "end": 119
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mismatch",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 134
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "value": {
                  "type": "Literal",
                  "value": 13,
                  "raw": "13",
                  "start": 146,
                  "end": 148
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 143,
                "end": 148
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 159
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 166,
                            "end": 169
                          },
                          "typeArguments": null,
                          "start": 166,
                          "end": 169
                        },
                        "start": 164,
                        "end": 169
                      },
                      "start": 160,
                      "end": 169
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 180,
                            "end": 184
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 185,
                            "end": 186
                          },
                          "optional": false,
                          "computed": false,
                          "start": 180,
                          "end": 186
                        },
                        "start": 173,
                        "end": 187
                      }
                    ],
                    "start": 171,
                    "end": 189
                  },
                  "expression": false,
                  "start": 159,
                  "end": 189
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 154,
                "end": 189
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 200
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 207,
                            "end": 210
                          },
                          "typeArguments": null,
                          "start": 207,
                          "end": 210
                        },
                        "start": 205,
                        "end": 210
                      },
                      "start": 201,
                      "end": 210
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 213
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 217,
                              "end": 221
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "wrong",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 222,
                              "end": 227
                            },
                            "optional": false,
                            "computed": false,
                            "start": 217,
                            "end": 227
                          },
                          "right": {
                            "type": "Literal",
                            "value": "method",
                            "raw": "\"method\"",
                            "start": 230,
                            "end": 238
                          },
                          "start": 217,
                          "end": 238
                        },
                        "directive": null,
                        "start": 217,
                        "end": 239
                      }
                    ],
                    "start": 215,
                    "end": 241
                  },
                  "expression": false,
                  "start": 200,
                  "end": 241
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 195,
                "end": 241
              }
            ],
            "start": 137,
            "end": 243
          },
          "definite": false,
          "start": 126,
          "end": 243
        }
      ],
      "declare": false,
      "start": 120,
      "end": 243
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "contextual",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 265
                },
                "typeArguments": null,
                "start": 262,
                "end": 265
              },
              "start": 260,
              "end": 265
            },
            "start": 250,
            "end": 265
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 275
                },
                "value": {
                  "type": "Literal",
                  "value": 16,
                  "raw": "16",
                  "start": 277,
                  "end": 279
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 274,
                "end": 279
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 290
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 302,
                            "end": 306
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 307,
                            "end": 308
                          },
                          "optional": false,
                          "computed": false,
                          "start": 302,
                          "end": 308
                        },
                        "start": 295,
                        "end": 309
                      }
                    ],
                    "start": 293,
                    "end": 311
                  },
                  "expression": false,
                  "start": 290,
                  "end": 311
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 285,
                "end": 311
              }
            ],
            "start": 268,
            "end": 313
          },
          "definite": false,
          "start": 250,
          "end": 313
        }
      ],
      "declare": false,
      "start": 244,
      "end": 313
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 313
}
```
