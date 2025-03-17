__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 325,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "name": "ko",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 19,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 16,
                "end": 19
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 238,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 34,
        "name": "Person",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 35,
        "end": 238,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 41,
            "end": 60,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 49,
              "name": "children",
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 181,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 77,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 181,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "name",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 92,
                        "end": 98
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 118,
                  "name": "children",
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "children",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                            "name": "ko",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 164,
                            "name": "observableArray",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 165,
                            "end": 173,
                            "name": "children",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
          },
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 236,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 195,
              "name": "addChild",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 198,
              "end": 235,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 222,
                    "name": "push",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 223,
                    "end": 234,
                    "value": "New child",
                    "raw": "\"New child\""
                  }
                ],
                "optional": false,
                "typeArguments": null
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
    {
      "type": "ClassDeclaration",
      "start": 241,
      "end": 292,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 248,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 249,
        "end": 292,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 290,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 258,
              "name": "fo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 290,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 261,
                "end": 290,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 271,
                    "end": 284,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 275,
                        "end": 283,
                        "id": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 276,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 279,
                          "end": 283
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 294,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 302,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 313,
                "end": 321,
                "id": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 317,
                  "end": 321
                },
                "definite": false
              }
            ],
            "kind": "var",
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
