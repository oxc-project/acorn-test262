__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 324,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "decorators": [],
            "name": "ko",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 19,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 16,
                "end": 19
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 238,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 34,
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 35,
        "end": 238,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 41,
            "end": 60,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 49,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 59,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 51,
                "end": 59,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 51,
                  "end": 57
                }
              }
            },
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
            "start": 66,
            "end": 181,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 77,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 181,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 79,
                  "end": 98,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 98,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 92,
                        "end": 98
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 118,
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 110,
                      "end": 118,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 110,
                        "end": 116
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 181,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 130,
                    "end": 175,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 130,
                      "end": 174,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 130,
                        "end": 143,
                        "object": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 143,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 146,
                        "end": 174,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 146,
                          "end": 164,
                          "object": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 148,
                            "decorators": [],
                            "name": "ko",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 164,
                            "decorators": [],
                            "name": "observableArray",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 165,
                            "end": 173,
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
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
            "type": "PropertyDefinition",
            "start": 187,
            "end": 236,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 195,
              "decorators": [],
              "name": "addChild",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 198,
              "end": 235,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "start": 204,
                "end": 235,
                "callee": {
                  "type": "MemberExpression",
                  "start": 204,
                  "end": 222,
                  "object": {
                    "type": "MemberExpression",
                    "start": 204,
                    "end": 217,
                    "object": {
                      "type": "ThisExpression",
                      "start": 204,
                      "end": 208
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 217,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 222,
                    "decorators": [],
                    "name": "push",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 223,
                    "end": 234,
                    "value": "New child",
                    "raw": "\"New child\""
                  }
                ],
                "optional": false
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 241,
      "end": 292,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 248,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 249,
        "end": 292,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 290,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 258,
              "decorators": [],
              "name": "fo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 290,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 261,
                "end": 290,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 271,
                    "end": 284,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 275,
                        "end": 283,
                        "id": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 276,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 279,
                          "end": 283
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
      "type": "TSModuleDeclaration",
      "start": 294,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 302,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 303,
        "end": 324,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 309,
            "end": 322,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 313,
                "end": 321,
                "id": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 317,
                  "end": 321
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
