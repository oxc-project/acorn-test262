__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 33
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 25,
            "end": 33
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMethods",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 45
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 60
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 61,
                    "end": 67
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ctx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 75,
                              "end": 83
                            },
                            "typeArguments": null,
                            "start": 75,
                            "end": 83
                          },
                          "start": 73,
                          "end": 83
                        },
                        "start": 70,
                        "end": 83
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 92
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 95,
                                    "end": 96
                                  },
                                  "start": 95,
                                  "end": 96
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 99,
                                    "end": 100
                                  },
                                  "start": 99,
                                  "end": 100
                                }
                              ],
                              "start": 95,
                              "end": 100
                            },
                            "start": 94,
                            "end": 103
                          },
                          "start": 92,
                          "end": 103
                        },
                        "value": null,
                        "start": 85,
                        "end": 103
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 108,
                        "end": 115
                      },
                      "start": 105,
                      "end": 115
                    },
                    "start": 69,
                    "end": 115
                  }
                ],
                "start": 60,
                "end": 116
              },
              "start": 54,
              "end": 116
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 116
          }
        ],
        "start": 21,
        "end": 119
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 137
              },
              "typeArguments": null,
              "start": 129,
              "end": 137
            },
            "start": 127,
            "end": 137
          },
          "start": 120,
          "end": 137
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "methods",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TMethods",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 156
              },
              "typeArguments": null,
              "start": 148,
              "end": 156
            },
            "start": 146,
            "end": 156
          },
          "start": 139,
          "end": 156
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 159,
          "end": 163
        },
        "start": 157,
        "end": 163
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 170
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "count",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 185
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 187,
                  "end": 188
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 180,
                "end": 188
              }
            ],
            "start": 174,
            "end": 193
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "checkLimit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 213
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ctx",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 219
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "max",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 224
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 227,
                        "end": 228
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 221,
                      "end": 228
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 233,
                    "end": 235
                  },
                  "id": null,
                  "generator": false,
                  "start": 215,
                  "end": 235
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 203,
                "end": 235
              }
            ],
            "start": 197,
            "end": 240
          }
        ],
        "optional": false,
        "start": 166,
        "end": 243
      },
      "directive": null,
      "start": 166,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 244
}
```
