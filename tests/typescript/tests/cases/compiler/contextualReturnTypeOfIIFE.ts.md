__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 285,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 94,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 93,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 48,
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 13,
                "end": 48,
                "typeName": {
                  "type": "Identifier",
                  "start": 13,
                  "end": 20,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 20,
                  "end": 48,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 21,
                      "end": 47,
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "start": 22,
                          "end": 33,
                          "label": {
                            "type": "Identifier",
                            "start": 22,
                            "end": 25,
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 27,
                            "end": 33
                          },
                          "optional": false
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "start": 35,
                          "end": 46,
                          "label": {
                            "type": "Identifier",
                            "start": 35,
                            "end": 38,
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 40,
                            "end": 46
                          },
                          "optional": false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 51,
            "end": 93,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 52,
              "end": 90,
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 90,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 70,
                    "end": 88,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 77,
                      "end": 87,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 78,
                          "end": 79,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 81,
                          "end": 86,
                          "value": "two",
                          "raw": "'two'"
                        }
                      ]
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 200,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 144,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 144,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 144,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 116,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 116,
                  "end": 144,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 117,
                      "end": 143,
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "start": 118,
                          "end": 129,
                          "label": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 121,
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 123,
                            "end": 129
                          },
                          "optional": false
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "start": 131,
                          "end": 142,
                          "label": {
                            "type": "Identifier",
                            "start": 131,
                            "end": 134,
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 136,
                            "end": 142
                          },
                          "optional": false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 147,
            "end": 199,
            "callee": {
              "type": "Identifier",
              "start": 151,
              "end": 158,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 164,
                "end": 196,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 165,
                    "end": 172,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 177,
                  "end": 196,
                  "callee": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 184,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "start": 185,
                      "end": 195,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 186,
                          "end": 187,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 189,
                          "end": 194,
                          "value": "two",
                          "raw": "'two'"
                        }
                      ]
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
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
      "start": 202,
      "end": 285,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 248,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 248,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 213,
                "end": 248,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 215,
                    "end": 246,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 218,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 218,
                      "end": 246,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 220,
                        "end": 246,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 221,
                            "end": 232,
                            "label": {
                              "type": "Identifier",
                              "start": 221,
                              "end": 224,
                              "decorators": [],
                              "name": "one",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 226,
                              "end": 232
                            },
                            "optional": false
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "start": 234,
                            "end": 245,
                            "label": {
                              "type": "Identifier",
                              "start": 234,
                              "end": 237,
                              "decorators": [],
                              "name": "two",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 239,
                              "end": 245
                            },
                            "optional": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 251,
            "end": 284,
            "properties": [
              {
                "type": "Property",
                "start": 257,
                "end": 282,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 260,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "CallExpression",
                  "start": 262,
                  "end": 282,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 263,
                    "end": 279,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "ArrayExpression",
                      "start": 269,
                      "end": 279,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 270,
                          "end": 271,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 273,
                          "end": 278,
                          "value": "two",
                          "raw": "'two'"
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
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
