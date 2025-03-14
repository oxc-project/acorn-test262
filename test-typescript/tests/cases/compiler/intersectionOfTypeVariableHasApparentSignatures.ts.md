__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 269,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 80,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 80,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 78,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 34,
              "decorators": [],
              "name": "props",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 77,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 36,
                "end": 77,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 36,
                    "end": 47,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 44,
                      "end": 47,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 45,
                          "end": 46,
                          "typeName": {
                            "type": "Identifier",
                            "start": 45,
                            "end": 46,
                            "decorators": [],
                            "name": "P",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 44,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 50,
                    "end": 77,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 58,
                      "end": 77,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 59,
                          "end": 76,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 61,
                              "end": 74,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 61,
                                "end": 69,
                                "decorators": [],
                                "name": "children",
                                "optional": false
                              },
                              "optional": true,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 70,
                                "end": 74,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 72,
                                  "end": 74,
                                  "members": []
                                }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 58,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "Component",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 145,
      "body": {
        "type": "TSInterfaceBody",
        "start": 98,
        "end": 145,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 143,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 112,
              "decorators": [],
              "name": "children",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 143,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 115,
                "end": 143,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 116,
                    "end": 134,
                    "decorators": [],
                    "name": "items",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 121,
                      "end": 134,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 123,
                        "end": 134,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 124,
                            "end": 133,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 124,
                              "end": 125,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 125,
                              "end": 133,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 127,
                                "end": 133
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 136,
                  "end": 143,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 139,
                    "end": 143
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 97,
        "decorators": [],
        "name": "Props",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 147,
      "end": 206,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 165,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 183,
          "end": 198,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 198,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 198,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 195,
                "end": 198,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 196,
                    "end": 197,
                    "typeName": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 197,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 195,
                "decorators": [],
                "name": "Component",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 199,
        "end": 205,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 201,
          "end": 205
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 165,
        "end": 182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 166,
            "end": 181,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 176,
              "end": 181,
              "typeName": {
                "type": "Identifier",
                "start": 176,
                "end": 181,
                "decorators": [],
                "name": "Props",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 269,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 268,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 210,
            "end": 267,
            "properties": [
              {
                "type": "Property",
                "start": 216,
                "end": 265,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 221,
                  "decorators": [],
                  "name": "props",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 223,
                  "end": 265,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 233,
                      "end": 259,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 233,
                        "end": 241,
                        "decorators": [],
                        "name": "children",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 244,
                        "end": 258,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 255,
                          "end": 258,
                          "body": []
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "ObjectPattern",
                            "start": 245,
                            "end": 250,
                            "decorators": [],
                            "optional": false,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 247,
                                "end": 248,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 247,
                                  "end": 248,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": true,
                                "value": {
                                  "type": "Identifier",
                                  "start": 247,
                                  "end": 248,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
