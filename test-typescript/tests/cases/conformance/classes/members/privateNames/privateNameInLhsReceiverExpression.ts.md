__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 224,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 224,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 19,
              "name": "y"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 22,
              "end": 25,
              "raw": "123",
              "value": 123,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 222,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 47,
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 222,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 222,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 88,
                    "end": 147,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 88,
                      "end": 146,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 88,
                        "end": 142,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 88,
                          "end": 139,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 88,
                            "end": 91,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "MemberExpression",
                            "start": 92,
                            "end": 138,
                            "computed": false,
                            "object": {
                              "type": "NewExpression",
                              "start": 93,
                              "end": 135,
                              "arguments": [],
                              "callee": {
                                "type": "ClassExpression",
                                "start": 97,
                                "end": 135,
                                "abstract": false,
                                "body": {
                                  "type": "ClassBody",
                                  "start": 103,
                                  "end": 135,
                                  "body": [
                                    {
                                      "type": "PropertyDefinition",
                                      "start": 105,
                                      "end": 112,
                                      "accessibility": null,
                                      "computed": false,
                                      "declare": false,
                                      "decorators": [],
                                      "definite": false,
                                      "key": {
                                        "type": "PrivateIdentifier",
                                        "start": 105,
                                        "end": 107,
                                        "name": "x"
                                      },
                                      "optional": false,
                                      "override": false,
                                      "readonly": false,
                                      "static": false,
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "start": 110,
                                        "end": 111,
                                        "raw": "1",
                                        "value": 1,
                                        "regex": null,
                                        "bigint": null
                                      }
                                    },
                                    {
                                      "type": "PropertyDefinition",
                                      "start": 113,
                                      "end": 133,
                                      "accessibility": null,
                                      "computed": false,
                                      "declare": false,
                                      "decorators": [],
                                      "definite": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 122,
                                        "end": 123,
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "override": false,
                                      "readonly": true,
                                      "static": false,
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "start": 126,
                                        "end": 132,
                                        "raw": "\"prop\"",
                                        "value": "prop",
                                        "regex": null,
                                        "bigint": null
                                      }
                                    }
                                  ]
                                },
                                "declare": false,
                                "decorators": [],
                                "id": null,
                                "implements": [],
                                "superClass": null,
                                "superTypeArguments": null,
                                "typeParameters": null
                              },
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 138,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 140,
                          "end": 142,
                          "name": "y"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 145,
                        "end": 146,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 156,
                    "end": 216,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 156,
                      "end": 215,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 156,
                        "end": 210,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 156,
                          "end": 207,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 156,
                            "end": 159,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "MemberExpression",
                            "start": 160,
                            "end": 206,
                            "computed": false,
                            "object": {
                              "type": "NewExpression",
                              "start": 161,
                              "end": 203,
                              "arguments": [],
                              "callee": {
                                "type": "ClassExpression",
                                "start": 165,
                                "end": 203,
                                "abstract": false,
                                "body": {
                                  "type": "ClassBody",
                                  "start": 171,
                                  "end": 203,
                                  "body": [
                                    {
                                      "type": "PropertyDefinition",
                                      "start": 173,
                                      "end": 180,
                                      "accessibility": null,
                                      "computed": false,
                                      "declare": false,
                                      "decorators": [],
                                      "definite": false,
                                      "key": {
                                        "type": "PrivateIdentifier",
                                        "start": 173,
                                        "end": 175,
                                        "name": "x"
                                      },
                                      "optional": false,
                                      "override": false,
                                      "readonly": false,
                                      "static": false,
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "start": 178,
                                        "end": 179,
                                        "raw": "1",
                                        "value": 1,
                                        "regex": null,
                                        "bigint": null
                                      }
                                    },
                                    {
                                      "type": "PropertyDefinition",
                                      "start": 181,
                                      "end": 201,
                                      "accessibility": null,
                                      "computed": false,
                                      "declare": false,
                                      "decorators": [],
                                      "definite": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 190,
                                        "end": 191,
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "override": false,
                                      "readonly": true,
                                      "static": false,
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "start": 194,
                                        "end": 200,
                                        "raw": "\"prop\"",
                                        "value": "prop",
                                        "regex": null,
                                        "bigint": null
                                      }
                                    }
                                  ]
                                },
                                "declare": false,
                                "decorators": [],
                                "id": null,
                                "implements": [],
                                "superClass": null,
                                "superTypeArguments": null,
                                "typeParameters": null
                              },
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 205,
                              "end": 206,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 208,
                          "end": 210,
                          "name": "y"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 214,
                        "end": 215,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
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
                  "start": 48,
                  "end": 76,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 51,
                    "end": 76,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 53,
                      "end": 76,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 55,
                          "end": 74,
                          "accessibility": null,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 56,
                              "end": 67,
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 59,
                                "end": 67,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 61,
                                  "end": 67
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 68,
                            "end": 74,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 70,
                              "end": 74,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 70,
                                "end": 74,
                                "decorators": [],
                                "name": "Test",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
