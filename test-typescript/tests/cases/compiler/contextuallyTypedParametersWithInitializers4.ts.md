__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 245,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 120,
          "end": 137,
          "name": "context",
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
                "name": "TContext",
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
        {
          "type": "Identifier",
          "start": 139,
          "end": 156,
          "name": "methods",
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
                "name": "TMethods",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
              "name": "TContext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "TMethods",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 54,
              "end": 116,
              "typeName": {
                "type": "Identifier",
                "start": 54,
                "end": 60,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "ctx",
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
                              "name": "TContext",
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
                      {
                        "type": "RestElement",
                        "start": 85,
                        "end": 103,
                        "argument": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 92,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 157,
        "end": 163,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 159,
          "end": 163
        }
      }
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
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 185,
                  "name": "count",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 187,
                  "end": 188,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 213,
                  "name": "checkLimit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 215,
                  "end": 235,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 216,
                      "end": 219,
                      "name": "ctx",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 221,
                      "end": 228,
                      "left": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 224,
                        "name": "max",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 227,
                        "end": 228,
                        "value": 3,
                        "raw": "3"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 233,
                    "end": 235,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
