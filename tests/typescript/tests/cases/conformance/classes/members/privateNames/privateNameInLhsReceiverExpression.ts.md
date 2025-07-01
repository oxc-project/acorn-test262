__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "y",
              "start": 17,
              "end": 19
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 22,
              "end": 25
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 26
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 47
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 61,
                                  "end": 67
                                },
                                "start": 59,
                                "end": 67
                              },
                              "start": 56,
                              "end": 67
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 70,
                                "end": 74
                              },
                              "typeArguments": null,
                              "start": 70,
                              "end": 74
                            },
                            "start": 68,
                            "end": 74
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 55,
                          "end": 74
                        }
                      ],
                      "start": 53,
                      "end": 76
                    },
                    "start": 51,
                    "end": 76
                  },
                  "start": 48,
                  "end": 76
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 88,
                            "end": 91
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "ClassExpression",
                                "decorators": [],
                                "id": null,
                                "typeParameters": null,
                                "superClass": null,
                                "superTypeArguments": null,
                                "implements": [],
                                "body": {
                                  "type": "ClassBody",
                                  "body": [
                                    {
                                      "type": "PropertyDefinition",
                                      "decorators": [],
                                      "key": {
                                        "type": "PrivateIdentifier",
                                        "name": "x",
                                        "start": 105,
                                        "end": 107
                                      },
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 110,
                                        "end": 111
                                      },
                                      "computed": false,
                                      "static": false,
                                      "declare": false,
                                      "override": false,
                                      "optional": false,
                                      "definite": false,
                                      "readonly": false,
                                      "accessibility": null,
                                      "start": 105,
                                      "end": 112
                                    },
                                    {
                                      "type": "PropertyDefinition",
                                      "decorators": [],
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 122,
                                        "end": 123
                                      },
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "value": "prop",
                                        "raw": "\"prop\"",
                                        "start": 126,
                                        "end": 132
                                      },
                                      "computed": false,
                                      "static": false,
                                      "declare": false,
                                      "override": false,
                                      "optional": false,
                                      "definite": false,
                                      "readonly": true,
                                      "accessibility": null,
                                      "start": 113,
                                      "end": 133
                                    }
                                  ],
                                  "start": 103,
                                  "end": 135
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 97,
                                "end": 135
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 93,
                              "end": 135
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 137,
                              "end": 138
                            },
                            "optional": false,
                            "computed": false,
                            "start": 92,
                            "end": 138
                          },
                          "optional": false,
                          "computed": true,
                          "start": 88,
                          "end": 139
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "y",
                          "start": 140,
                          "end": 142
                        },
                        "optional": false,
                        "computed": false,
                        "start": 88,
                        "end": 142
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 145,
                        "end": 146
                      },
                      "start": 88,
                      "end": 146
                    },
                    "directive": null,
                    "start": 88,
                    "end": 147
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 156,
                            "end": 159
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "ClassExpression",
                                "decorators": [],
                                "id": null,
                                "typeParameters": null,
                                "superClass": null,
                                "superTypeArguments": null,
                                "implements": [],
                                "body": {
                                  "type": "ClassBody",
                                  "body": [
                                    {
                                      "type": "PropertyDefinition",
                                      "decorators": [],
                                      "key": {
                                        "type": "PrivateIdentifier",
                                        "name": "x",
                                        "start": 173,
                                        "end": 175
                                      },
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 178,
                                        "end": 179
                                      },
                                      "computed": false,
                                      "static": false,
                                      "declare": false,
                                      "override": false,
                                      "optional": false,
                                      "definite": false,
                                      "readonly": false,
                                      "accessibility": null,
                                      "start": 173,
                                      "end": 180
                                    },
                                    {
                                      "type": "PropertyDefinition",
                                      "decorators": [],
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 190,
                                        "end": 191
                                      },
                                      "typeAnnotation": null,
                                      "value": {
                                        "type": "Literal",
                                        "value": "prop",
                                        "raw": "\"prop\"",
                                        "start": 194,
                                        "end": 200
                                      },
                                      "computed": false,
                                      "static": false,
                                      "declare": false,
                                      "override": false,
                                      "optional": false,
                                      "definite": false,
                                      "readonly": true,
                                      "accessibility": null,
                                      "start": 181,
                                      "end": 201
                                    }
                                  ],
                                  "start": 171,
                                  "end": 203
                                },
                                "abstract": false,
                                "declare": false,
                                "start": 165,
                                "end": 203
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 161,
                              "end": 203
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 205,
                              "end": 206
                            },
                            "optional": false,
                            "computed": false,
                            "start": 160,
                            "end": 206
                          },
                          "optional": false,
                          "computed": true,
                          "start": 156,
                          "end": 207
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "y",
                          "start": 208,
                          "end": 210
                        },
                        "optional": false,
                        "computed": false,
                        "start": 156,
                        "end": 210
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 214,
                        "end": 215
                      },
                      "start": 156,
                      "end": 215
                    },
                    "directive": null,
                    "start": 156,
                    "end": 216
                  }
                ],
                "start": 78,
                "end": 222
              },
              "expression": false,
              "start": 47,
              "end": 222
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 31,
            "end": 222
          }
        ],
        "start": 11,
        "end": 224
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 224
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 225
}
```
