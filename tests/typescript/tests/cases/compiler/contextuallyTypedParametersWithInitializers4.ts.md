__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 33,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 33,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 116,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 45,
              "decorators": [],
              "name": "TMethods",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 54,
              "end": 116,
              "typeName": {
                "type": "Identifier",
                "start": 54,
                "end": 60,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 60,
                "end": 116,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 61,
                    "end": 67
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 69,
                    "end": 115,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 70,
                        "end": 83,
                        "decorators": [],
                        "name": "ctx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 73,
                          "end": 83,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 75,
                            "end": 83,
                            "typeName": {
                              "type": "Identifier",
                              "start": 75,
                              "end": 83,
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 85,
                        "end": 103,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 92,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 92,
                          "end": 103,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 94,
                            "end": 103,
                            "elementType": {
                              "type": "TSUnionType",
                              "start": 95,
                              "end": 100,
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 95,
                                  "end": 96,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 95,
                                    "end": 96,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 99,
                                  "end": 100,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 99,
                                    "end": 100,
                                    "value": 2,
                                    "raw": "2"
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 105,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 108,
                        "end": 115
                      }
                    }
                  }
                ]
              }
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
          "start": 120,
          "end": 137,
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 137,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 129,
              "end": 137,
              "typeName": {
                "type": "Identifier",
                "start": 129,
                "end": 137,
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 139,
          "end": 156,
          "decorators": [],
          "name": "methods",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 156,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 148,
              "end": 156,
              "typeName": {
                "type": "Identifier",
                "start": 148,
                "end": 156,
                "decorators": [],
                "name": "TMethods",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 157,
        "end": 163,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 159,
          "end": 163
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 244,
      "expression": {
        "type": "CallExpression",
        "start": 166,
        "end": 243,
        "callee": {
          "type": "Identifier",
          "start": 166,
          "end": 170,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 174,
            "end": 193,
            "properties": [
              {
                "type": "Property",
                "start": 180,
                "end": 188,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 185,
                  "decorators": [],
                  "name": "count",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 187,
                  "end": 188,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 197,
            "end": 240,
            "properties": [
              {
                "type": "Property",
                "start": 203,
                "end": 235,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 213,
                  "decorators": [],
                  "name": "checkLimit",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 215,
                  "end": 235,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 216,
                      "end": 219,
                      "decorators": [],
                      "name": "ctx",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 221,
                      "end": 228,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 224,
                        "decorators": [],
                        "name": "max",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 227,
                        "end": 228,
                        "value": 3,
                        "raw": "3"
                      },
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 233,
                    "end": 235,
                    "body": []
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
