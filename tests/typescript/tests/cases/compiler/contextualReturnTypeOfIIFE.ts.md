__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 13,
                  "end": 20
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 22,
                            "end": 25
                          },
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 27,
                            "end": 33
                          },
                          "optional": false,
                          "start": 22,
                          "end": 33
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 35,
                            "end": 38
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 40,
                            "end": 46
                          },
                          "optional": false,
                          "start": 35,
                          "end": 46
                        }
                      ],
                      "start": 21,
                      "end": 47
                    }
                  ],
                  "start": 20,
                  "end": 48
                },
                "start": 13,
                "end": 48
              },
              "start": 11,
              "end": 48
            },
            "start": 6,
            "end": 48
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 78,
                          "end": 79
                        },
                        {
                          "type": "Literal",
                          "value": "two",
                          "raw": "'two'",
                          "start": 81,
                          "end": 86
                        }
                      ],
                      "start": 77,
                      "end": 87
                    },
                    "start": 70,
                    "end": 88
                  }
                ],
                "start": 64,
                "end": 90
              },
              "id": null,
              "generator": false,
              "start": 52,
              "end": 90
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 51,
            "end": 93
          },
          "definite": false,
          "start": 6,
          "end": 93
        }
      ],
      "declare": false,
      "start": 0,
      "end": 94
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
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 116
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 118,
                            "end": 121
                          },
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 123,
                            "end": 129
                          },
                          "optional": false,
                          "start": 118,
                          "end": 129
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 131,
                            "end": 134
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 136,
                            "end": 142
                          },
                          "optional": false,
                          "start": 131,
                          "end": 142
                        }
                      ],
                      "start": 117,
                      "end": 143
                    }
                  ],
                  "start": 116,
                  "end": 144
                },
                "start": 109,
                "end": 144
              },
              "start": 107,
              "end": 144
            },
            "start": 102,
            "end": 144
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 158
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 172
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 184
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 186,
                          "end": 187
                        },
                        {
                          "type": "Literal",
                          "value": "two",
                          "raw": "'two'",
                          "start": 189,
                          "end": 194
                        }
                      ],
                      "start": 185,
                      "end": 195
                    }
                  ],
                  "optional": false,
                  "start": 177,
                  "end": 196
                },
                "id": null,
                "generator": false,
                "start": 164,
                "end": 196
              }
            ],
            "start": 147,
            "end": 199
          },
          "definite": false,
          "start": 102,
          "end": 199
        }
      ],
      "declare": false,
      "start": 96,
      "end": 200
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 218
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "one",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 221,
                              "end": 224
                            },
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 226,
                              "end": 232
                            },
                            "optional": false,
                            "start": 221,
                            "end": 232
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "two",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 237
                            },
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 239,
                              "end": 245
                            },
                            "optional": false,
                            "start": 234,
                            "end": 245
                          }
                        ],
                        "start": 220,
                        "end": 246
                      },
                      "start": 218,
                      "end": 246
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 215,
                    "end": 246
                  }
                ],
                "start": 213,
                "end": 248
              },
              "start": 211,
              "end": 248
            },
            "start": 208,
            "end": 248
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 260
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 270,
                          "end": 271
                        },
                        {
                          "type": "Literal",
                          "value": "two",
                          "raw": "'two'",
                          "start": 273,
                          "end": 278
                        }
                      ],
                      "start": 269,
                      "end": 279
                    },
                    "id": null,
                    "generator": false,
                    "start": 263,
                    "end": 279
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 262,
                  "end": 282
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 257,
                "end": 282
              }
            ],
            "start": 251,
            "end": 284
          },
          "definite": false,
          "start": 208,
          "end": 284
        }
      ],
      "declare": false,
      "start": 202,
      "end": 285
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 285
}
```
