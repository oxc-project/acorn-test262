__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 361,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 144,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 26,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 20,
              "end": 25,
              "name": "test"
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 92,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 43,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 92,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 44,
                  "end": 56,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 56,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 50,
                      "end": 56
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 92,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 68,
                    "end": 86,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 68,
                      "end": 85,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 68,
                        "end": 78,
                        "object": {
                          "type": "ThisExpression",
                          "start": 68,
                          "end": 72
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 73,
                          "end": 78,
                          "name": "test"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 85,
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 142,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 106,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 142,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 142,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 119,
                    "end": 136,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 126,
                      "end": 136,
                      "object": {
                        "type": "ThisExpression",
                        "start": 126,
                        "end": 130
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 131,
                        "end": 136,
                        "name": "test"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 361,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "decorators": [],
        "name": "Example2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 361,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 173,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 167,
              "end": 172,
              "name": "test"
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 179,
            "end": 251,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 190,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 190,
              "end": 251,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 191,
                  "end": 215,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 195,
                    "end": 215,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 197,
                      "end": 215,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 197,
                          "end": 203
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 206,
                          "end": 215
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 217,
                "end": 251,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 227,
                    "end": 245,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 227,
                      "end": 244,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 227,
                        "end": 237,
                        "object": {
                          "type": "ThisExpression",
                          "start": 227,
                          "end": 231
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 232,
                          "end": 237,
                          "name": "test"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 244,
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 257,
            "end": 359,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 265,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 265,
              "end": 359,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 268,
                "end": 359,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 278,
                    "end": 335,
                    "test": {
                      "type": "MemberExpression",
                      "start": 282,
                      "end": 292,
                      "object": {
                        "type": "ThisExpression",
                        "start": 282,
                        "end": 286
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 287,
                        "end": 292,
                        "name": "test"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 294,
                      "end": 335,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 308,
                          "end": 325,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 315,
                            "end": 325,
                            "object": {
                              "type": "ThisExpression",
                              "start": 315,
                              "end": 319
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 320,
                              "end": 325,
                              "name": "test"
                            },
                            "optional": false,
                            "computed": false
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 344,
                    "end": 353,
                    "argument": {
                      "type": "Literal",
                      "start": 351,
                      "end": 352,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
