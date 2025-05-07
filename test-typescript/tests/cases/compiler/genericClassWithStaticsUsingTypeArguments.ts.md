__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 323,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 62,
      "end": 323,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 323,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 92,
              "end": 105,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 102,
                "end": 105,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 97,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 94,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 96,
                      "end": 97,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 123,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 149,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 143,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 140,
                "end": 143,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 140,
                  "end": 141,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "start": 146,
              "end": 148,
              "elements": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 155,
            "end": 207,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "LogicalExpression",
              "start": 166,
              "end": 207,
              "operator": "||",
              "left": {
                "type": "Literal",
                "start": 166,
                "end": 171,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "CallExpression",
                "start": 175,
                "end": 207,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 202,
                    "end": 206,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  }
                ],
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 176,
                  "end": 200,
                  "async": false,
                  "body": {
                    "type": "LogicalExpression",
                    "start": 186,
                    "end": 200,
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 187,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 200,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 177,
                      "end": 181,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 178,
                        "end": 181,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 180,
                          "end": 181,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 181,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 213,
            "end": 256,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 224,
              "end": 256,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 256,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 242,
                    "end": 254,
                    "argument": {
                      "type": "Literal",
                      "start": 249,
                      "end": 253,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 234,
                  "end": 238,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 238,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 262,
            "end": 321,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 270,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 270,
              "end": 321,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 285,
                "end": 321,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 295,
                    "end": 315,
                    "argument": {
                      "type": "CallExpression",
                      "start": 302,
                      "end": 314,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 302,
                        "end": 312,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 304,
                          "decorators": [],
                          "name": "xs",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 312,
                          "decorators": [],
                          "name": "reverse",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 271,
                  "end": 278,
                  "decorators": [],
                  "name": "xs",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 273,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 275,
                      "end": 278,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 275,
                        "end": 276,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 276,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 279,
                "end": 284,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 281,
                  "end": 284,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 281,
                    "end": 282,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
