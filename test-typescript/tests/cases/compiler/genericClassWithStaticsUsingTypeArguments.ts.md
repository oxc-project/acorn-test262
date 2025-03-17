__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 324,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 62,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 323,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 106,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 92,
              "end": 105,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 97,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 94,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 96,
                      "end": 97,
                      "typeName": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "name": "T",
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
              "body": {
                "type": "BlockStatement",
                "start": 102,
                "end": 105,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 124,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 123,
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 149,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrayExpression",
              "start": 146,
              "end": 148,
              "elements": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 155,
            "end": 207,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "LogicalExpression",
              "start": 166,
              "end": 207,
              "left": {
                "type": "Literal",
                "start": 166,
                "end": 171,
                "value": false,
                "raw": "false"
              },
              "operator": "||",
              "right": {
                "type": "CallExpression",
                "start": 175,
                "end": 207,
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 176,
                  "end": 200,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 177,
                      "end": 181,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 178,
                        "end": 181,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 180,
                          "end": 181,
                          "typeName": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 181,
                            "name": "T",
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
                  "body": {
                    "type": "LogicalExpression",
                    "start": 186,
                    "end": 200,
                    "left": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 187,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 200,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 202,
                    "end": 206,
                    "value": null,
                    "raw": "null"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 213,
            "end": 256,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 224,
              "end": 256,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 234,
                  "end": 238,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 238,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "name": "T",
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 262,
            "end": 321,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 270,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 270,
              "end": 321,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 271,
                  "end": 278,
                  "name": "xs",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 276,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 302,
                        "end": 312,
                        "object": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 304,
                          "name": "xs",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 312,
                          "name": "reverse",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
