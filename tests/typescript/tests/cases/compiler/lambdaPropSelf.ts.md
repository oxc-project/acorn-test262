__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ko",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 16,
                "end": 19
              },
              "start": 14,
              "end": 19
            },
            "start": 12,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 19
        }
      ],
      "declare": true,
      "start": 0,
      "end": 20
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 34
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
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 49
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 51,
                  "end": 57
                },
                "start": 51,
                "end": 59
              },
              "start": 49,
              "end": 59
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 41,
            "end": 60
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 77
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 92,
                        "end": 98
                      },
                      "start": 90,
                      "end": 98
                    },
                    "start": 86,
                    "end": 98
                  },
                  "readonly": false,
                  "static": false,
                  "start": 79,
                  "end": 98
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 110,
                        "end": 116
                      },
                      "start": 110,
                      "end": 118
                    },
                    "start": 108,
                    "end": 118
                  },
                  "start": 100,
                  "end": 118
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
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 135,
                          "end": 143
                        },
                        "optional": false,
                        "computed": false,
                        "start": 130,
                        "end": 143
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ko",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 146,
                            "end": 148
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "observableArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 149,
                            "end": 164
                          },
                          "optional": false,
                          "computed": false,
                          "start": 146,
                          "end": 164
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 173
                          }
                        ],
                        "optional": false,
                        "start": 146,
                        "end": 174
                      },
                      "start": 130,
                      "end": 174
                    },
                    "directive": null,
                    "start": 130,
                    "end": 175
                  }
                ],
                "start": 120,
                "end": 181
              },
              "expression": false,
              "start": 78,
              "end": 181
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 66,
            "end": 181
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addChild",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 195
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 204,
                      "end": 208
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 217
                    },
                    "optional": false,
                    "computed": false,
                    "start": 204,
                    "end": 217
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "push",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 222
                  },
                  "optional": false,
                  "computed": false,
                  "start": 204,
                  "end": 222
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "New child",
                    "raw": "\"New child\"",
                    "start": 223,
                    "end": 234
                  }
                ],
                "optional": false,
                "start": 204,
                "end": 235
              },
              "id": null,
              "generator": false,
              "start": 198,
              "end": 235
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 187,
            "end": 236
          }
        ],
        "start": 35,
        "end": 238
      },
      "abstract": false,
      "declare": false,
      "start": 22,
      "end": 238
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 248
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fo",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 258
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 275,
                          "end": 276
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 279,
                          "end": 283
                        },
                        "definite": false,
                        "start": 275,
                        "end": 283
                      }
                    ],
                    "declare": false,
                    "start": 271,
                    "end": 284
                  }
                ],
                "start": 261,
                "end": 290
              },
              "expression": false,
              "start": 258,
              "end": 290
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 256,
            "end": 290
          }
        ],
        "start": 249,
        "end": 292
      },
      "abstract": false,
      "declare": false,
      "start": 241,
      "end": 292
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 304,
        "end": 305
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 317
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 320,
                  "end": 324
                },
                "definite": false,
                "start": 316,
                "end": 324
              }
            ],
            "declare": false,
            "start": 312,
            "end": 325
          }
        ],
        "start": 306,
        "end": 327
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 294,
      "end": 327
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 327
}
```
