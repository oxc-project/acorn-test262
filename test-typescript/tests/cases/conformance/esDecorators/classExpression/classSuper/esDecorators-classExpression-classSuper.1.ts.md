__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 318,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 86,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 84,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 61,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 61,
              "end": 84,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 62,
                  "end": 76,
                  "argument": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 76,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 71,
                      "end": 76,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 71,
                        "end": 74
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 83,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 79,
                  "end": 83
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 100,
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 103,
            "end": 111,
            "raw": "\"method\"",
            "value": "method",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 318,
      "directive": null,
      "expression": {
        "type": "ClassExpression",
        "start": 115,
        "end": 316,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 141,
          "end": 316,
          "body": [
            {
              "type": "StaticBlock",
              "start": 147,
              "end": 314,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 164,
                  "end": 179,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 164,
                    "end": 178,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 164,
                      "end": 176,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 164,
                        "end": 169
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 176,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 188,
                  "end": 206,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 188,
                    "end": 205,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 188,
                      "end": 203,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 188,
                        "end": 193
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 194,
                        "end": 202,
                        "raw": "\"method\"",
                        "value": "method",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 215,
                  "end": 231,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 215,
                    "end": 230,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 215,
                      "end": 228,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 215,
                        "end": 220
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 227,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 241,
                  "end": 256,
                  "directive": null,
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "start": 241,
                    "end": 255,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "start": 253,
                      "end": 255,
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 253,
                          "end": 255,
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        }
                      ]
                    },
                    "tag": {
                      "type": "MemberExpression",
                      "start": 241,
                      "end": 253,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 241,
                        "end": 246
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 253,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 265,
                  "end": 283,
                  "directive": null,
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "start": 265,
                    "end": 282,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "start": 280,
                      "end": 282,
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 280,
                          "end": 282,
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        }
                      ]
                    },
                    "tag": {
                      "type": "MemberExpression",
                      "start": 265,
                      "end": 280,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 265,
                        "end": 270
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 271,
                        "end": 279,
                        "raw": "\"method\"",
                        "value": "method",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 292,
                  "end": 308,
                  "directive": null,
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "start": 292,
                    "end": 307,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "start": 305,
                      "end": 307,
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 305,
                          "end": 307,
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        }
                      ]
                    },
                    "tag": {
                      "type": "MemberExpression",
                      "start": 292,
                      "end": 305,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 292,
                        "end": 297
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 304,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          ]
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 115,
            "end": 119,
            "expression": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 126,
          "end": 127,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 136,
          "end": 140,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
