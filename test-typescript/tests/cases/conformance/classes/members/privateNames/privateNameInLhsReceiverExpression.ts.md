__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 224,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 19,
              "name": "y"
            },
            "value": {
              "type": "Literal",
              "start": 22,
              "end": 25,
              "value": 123,
              "raw": "123"
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
            "start": 31,
            "end": 222,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 47,
              "name": "something",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 222,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 76,
                  "name": "obj",
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
                              "name": "key",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 59,
                                "end": 67,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 61,
                                  "end": 67
                                }
                              },
                              "decorators": [],
                              "optional": false
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
                                "name": "Test",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                            "name": "obj",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "id": null,
                                "superClass": null,
                                "body": {
                                  "type": "ClassBody",
                                  "start": 103,
                                  "end": 135,
                                  "body": [
                                    {
                                      "type": "PropertyDefinition",
                                      "start": 105,
                                      "end": 112,
                                      "static": false,
                                      "computed": false,
                                      "key": {
                                        "type": "PrivateIdentifier",
                                        "start": 105,
                                        "end": 107,
                                        "name": "x"
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "start": 110,
                                        "end": 111,
                                        "value": 1,
                                        "raw": "1"
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
                                      "start": 113,
                                      "end": 133,
                                      "static": false,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 122,
                                        "end": 123,
                                        "name": "s",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "start": 126,
                                        "end": 132,
                                        "value": "prop",
                                        "raw": "\"prop\""
                                      },
                                      "decorators": [],
                                      "declare": false,
                                      "override": false,
                                      "optional": false,
                                      "definite": false,
                                      "readonly": true,
                                      "typeAnnotation": null,
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
                              },
                              "arguments": [],
                              "typeArguments": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 138,
                              "name": "s",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 140,
                          "end": 142,
                          "name": "y"
                        },
                        "computed": false,
                        "optional": false
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
                            "name": "obj",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "id": null,
                                "superClass": null,
                                "body": {
                                  "type": "ClassBody",
                                  "start": 171,
                                  "end": 203,
                                  "body": [
                                    {
                                      "type": "PropertyDefinition",
                                      "start": 173,
                                      "end": 180,
                                      "static": false,
                                      "computed": false,
                                      "key": {
                                        "type": "PrivateIdentifier",
                                        "start": 173,
                                        "end": 175,
                                        "name": "x"
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "start": 178,
                                        "end": 179,
                                        "value": 1,
                                        "raw": "1"
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
                                      "start": 181,
                                      "end": 201,
                                      "static": false,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 190,
                                        "end": 191,
                                        "name": "s",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "start": 194,
                                        "end": 200,
                                        "value": "prop",
                                        "raw": "\"prop\""
                                      },
                                      "decorators": [],
                                      "declare": false,
                                      "override": false,
                                      "optional": false,
                                      "definite": false,
                                      "readonly": true,
                                      "typeAnnotation": null,
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
                              },
                              "arguments": [],
                              "typeArguments": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 205,
                              "end": 206,
                              "name": "s",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 208,
                          "end": 210,
                          "name": "y"
                        },
                        "computed": false,
                        "optional": false
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
