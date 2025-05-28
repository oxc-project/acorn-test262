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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 224,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 26,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 19,
              "name": "y"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 22,
              "end": 25,
              "value": 123,
              "raw": "123"
            },
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
            "start": 31,
            "end": 222,
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
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 222,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 68,
                            "end": 74,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 70,
                              "end": 74,
                              "typeName": {
                                "type": "Identifier",
                                "start": 70,
                                "end": 74,
                                "decorators": [],
                                "name": "Test",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 222,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 88,
                    "end": 147,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 88,
                      "end": 146,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 88,
                        "end": 142,
                        "object": {
                          "type": "MemberExpression",
                          "start": 88,
                          "end": 139,
                          "object": {
                            "type": "Identifier",
                            "start": 88,
                            "end": 91,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "MemberExpression",
                            "start": 92,
                            "end": 138,
                            "object": {
                              "type": "NewExpression",
                              "start": 93,
                              "end": 135,
                              "callee": {
                                "type": "ClassExpression",
                                "start": 97,
                                "end": 135,
                                "decorators": [],
                                "id": null,
                                "typeParameters": null,
                                "superClass": null,
                                "superTypeArguments": null,
                                "implements": [],
                                "body": {
                                  "type": "ClassBody",
                                  "start": 103,
                                  "end": 135,
                                  "body": [
                                    {
                                      "type": "PropertyDefinition",
                                      "start": 105,
                                      "end": 112,
                                      "decorators": [],
                                      "key": {
                                        "type": "PrivateIdentifier",
                                        "start": 105,
                                        "end": 107,
                                        "name": "x"
                                      },
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "start": 110,
                                        "end": 111,
                                        "value": 1,
                                        "raw": "1"
                                      },
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
                                      "type": "PropertyDefinition",
                                      "start": 113,
                                      "end": 133,
                                      "decorators": [],
                                      "key": {
                                        "type": "Identifier",
                                        "start": 122,
                                        "end": 123,
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "start": 126,
                                        "end": 132,
                                        "value": "prop",
                                        "raw": "\"prop\""
                                      },
                                      "computed": false,
                                      "static": false,
                                      "declare": false,
                                      "override": false,
                                      "optional": false,
                                      "definite": false,
                                      "readonly": true,
                                      "accessibility": null
                                    }
                                  ]
                                },
                                "abstract": false,
                                "declare": false
                              },
                              "typeArguments": null,
                              "arguments": []
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 138,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "optional": false,
                          "computed": true
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 140,
                          "end": 142,
                          "name": "y"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 145,
                        "end": 146,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 156,
                    "end": 216,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 156,
                      "end": 215,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 156,
                        "end": 210,
                        "object": {
                          "type": "MemberExpression",
                          "start": 156,
                          "end": 207,
                          "object": {
                            "type": "Identifier",
                            "start": 156,
                            "end": 159,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "MemberExpression",
                            "start": 160,
                            "end": 206,
                            "object": {
                              "type": "NewExpression",
                              "start": 161,
                              "end": 203,
                              "callee": {
                                "type": "ClassExpression",
                                "start": 165,
                                "end": 203,
                                "decorators": [],
                                "id": null,
                                "typeParameters": null,
                                "superClass": null,
                                "superTypeArguments": null,
                                "implements": [],
                                "body": {
                                  "type": "ClassBody",
                                  "start": 171,
                                  "end": 203,
                                  "body": [
                                    {
                                      "type": "PropertyDefinition",
                                      "start": 173,
                                      "end": 180,
                                      "decorators": [],
                                      "key": {
                                        "type": "PrivateIdentifier",
                                        "start": 173,
                                        "end": 175,
                                        "name": "x"
                                      },
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "start": 178,
                                        "end": 179,
                                        "value": 1,
                                        "raw": "1"
                                      },
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
                                      "type": "PropertyDefinition",
                                      "start": 181,
                                      "end": 201,
                                      "decorators": [],
                                      "key": {
                                        "type": "Identifier",
                                        "start": 190,
                                        "end": 191,
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "start": 194,
                                        "end": 200,
                                        "value": "prop",
                                        "raw": "\"prop\""
                                      },
                                      "computed": false,
                                      "static": false,
                                      "declare": false,
                                      "override": false,
                                      "optional": false,
                                      "definite": false,
                                      "readonly": true,
                                      "accessibility": null
                                    }
                                  ]
                                },
                                "abstract": false,
                                "declare": false
                              },
                              "typeArguments": null,
                              "arguments": []
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 205,
                              "end": 206,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "optional": false,
                          "computed": true
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 208,
                          "end": 210,
                          "name": "y"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 214,
                        "end": 215,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
