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
        "name": "repro",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 39
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 40,
            "end": 41
          }
        ],
        "start": 39,
        "end": 42
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
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
                    "name": "params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 61
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 64
                      },
                      "typeArguments": null,
                      "start": 63,
                      "end": 64
                    },
                    "start": 61,
                    "end": 64
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 55,
                  "end": 65
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 76
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 93,
                                    "end": 94
                                  },
                                  "typeArguments": null,
                                  "start": 93,
                                  "end": 94
                                },
                                "start": 91,
                                "end": 94
                              },
                              "start": 85,
                              "end": 94
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 99,
                              "end": 105
                            },
                            "start": 96,
                            "end": 105
                          },
                          "start": 84,
                          "end": 105
                        },
                        "start": 81,
                        "end": 105
                      },
                      "start": 78,
                      "end": 105
                    },
                    "start": 76,
                    "end": 105
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 68,
                  "end": 106
                }
              ],
              "start": 51,
              "end": 108
            },
            "start": 49,
            "end": 108
          },
          "start": 43,
          "end": 108
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 111,
          "end": 115
        },
        "start": 109,
        "end": 115
      },
      "body": null,
      "expression": false,
      "start": 17,
      "end": 116
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "repro",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 123
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
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 134
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 136,
                  "end": 137
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 128,
                "end": 137
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 149
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 166,
                              "end": 167
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 171,
                              "end": 172
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 175,
                              "end": 176
                            },
                            "start": 171,
                            "end": 176
                          },
                          "id": null,
                          "generator": false,
                          "start": 166,
                          "end": 176
                        },
                        "start": 159,
                        "end": 176
                      }
                    ],
                    "start": 157,
                    "end": 178
                  },
                  "id": null,
                  "generator": false,
                  "start": 151,
                  "end": 178
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 141,
                "end": 178
              }
            ],
            "start": 124,
            "end": 181
          }
        ],
        "optional": false,
        "start": 118,
        "end": 182
      },
      "directive": null,
      "start": 118,
      "end": 183
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 183
}
```
