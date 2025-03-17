__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 246,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "arrTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 246,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 41,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 24,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 24,
              "end": 41,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 25,
                  "end": 39,
                  "name": "arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 31,
                      "end": 39,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 67,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 50,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 50,
              "end": 67,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 65,
                  "name": "arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 57,
                      "end": 65,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 57,
                        "end": 63
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 93,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 93,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 77,
                  "end": 88,
                  "name": "arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 83,
                      "end": 88,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 83,
                        "end": 86
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 93,
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
          },
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 244,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 106,
              "name": "callTest",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 244,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 244,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 143,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 142,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 119,
                        "end": 128,
                        "object": {
                          "type": "ThisExpression",
                          "start": 119,
                          "end": 123
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 128,
                          "name": "test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 129,
                          "end": 141,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 130,
                              "end": 131,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 133,
                              "end": 134,
                              "value": 2,
                              "raw": "2"
                            },
                            {
                              "type": "Literal",
                              "start": 136,
                              "end": 137,
                              "value": 3,
                              "raw": "3"
                            },
                            {
                              "type": "Literal",
                              "start": 139,
                              "end": 140,
                              "value": 5,
                              "raw": "5"
                            }
                          ]
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 152,
                    "end": 170,
                    "expression": {
                      "type": "CallExpression",
                      "start": 152,
                      "end": 169,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 152,
                        "end": 161,
                        "object": {
                          "type": "ThisExpression",
                          "start": 152,
                          "end": 156
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 161,
                          "name": "test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 162,
                          "end": 168,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 163,
                              "end": 167,
                              "value": "hi",
                              "raw": "\"hi\""
                            }
                          ]
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 179,
                    "end": 193,
                    "expression": {
                      "type": "CallExpression",
                      "start": 179,
                      "end": 192,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 179,
                        "end": 188,
                        "object": {
                          "type": "ThisExpression",
                          "start": 179,
                          "end": 183
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 188,
                          "name": "test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 189,
                          "end": 191,
                          "elements": []
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 202,
                    "end": 229,
                    "expression": {
                      "type": "CallExpression",
                      "start": 202,
                      "end": 228,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 202,
                        "end": 211,
                        "object": {
                          "type": "ThisExpression",
                          "start": 202,
                          "end": 206
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 211,
                          "name": "test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 212,
                          "end": 227,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 213,
                              "end": 214,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 216,
                              "end": 217,
                              "value": 2,
                              "raw": "2"
                            },
                            {
                              "type": "Literal",
                              "start": 219,
                              "end": 223,
                              "value": "hi",
                              "raw": "\"hi\""
                            },
                            {
                              "type": "Literal",
                              "start": 225,
                              "end": 226,
                              "value": 5,
                              "raw": "5"
                            }
                          ]
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
