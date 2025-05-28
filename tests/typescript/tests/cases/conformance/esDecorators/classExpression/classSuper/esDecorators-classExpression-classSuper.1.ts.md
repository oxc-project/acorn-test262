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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 86,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 84,
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
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 61,
              "end": 84,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 62,
                  "end": 76,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
              "body": null,
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 112,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 111,
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
            "value": "method",
            "raw": "\"method\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 318,
      "expression": {
        "type": "ClassExpression",
        "start": 115,
        "end": 316,
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
        "typeParameters": null,
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
        "implements": [],
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
                  "expression": {
                    "type": "CallExpression",
                    "start": 164,
                    "end": 178,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 164,
                      "end": 176,
                      "object": {
                        "type": "Super",
                        "start": 164,
                        "end": 169
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 176,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 188,
                  "end": 206,
                  "expression": {
                    "type": "CallExpression",
                    "start": 188,
                    "end": 205,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 188,
                      "end": 203,
                      "object": {
                        "type": "Super",
                        "start": 188,
                        "end": 193
                      },
                      "property": {
                        "type": "Literal",
                        "start": 194,
                        "end": 202,
                        "value": "method",
                        "raw": "\"method\""
                      },
                      "optional": false,
                      "computed": true
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 215,
                  "end": 231,
                  "expression": {
                    "type": "CallExpression",
                    "start": 215,
                    "end": 230,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 215,
                      "end": 228,
                      "object": {
                        "type": "Super",
                        "start": 215,
                        "end": 220
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 227,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 241,
                  "end": 256,
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "start": 241,
                    "end": 255,
                    "tag": {
                      "type": "MemberExpression",
                      "start": 241,
                      "end": 253,
                      "object": {
                        "type": "Super",
                        "start": 241,
                        "end": 246
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 253,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "start": 253,
                      "end": 255,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 253,
                          "end": 255,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "expressions": []
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 265,
                  "end": 283,
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "start": 265,
                    "end": 282,
                    "tag": {
                      "type": "MemberExpression",
                      "start": 265,
                      "end": 280,
                      "object": {
                        "type": "Super",
                        "start": 265,
                        "end": 270
                      },
                      "property": {
                        "type": "Literal",
                        "start": 271,
                        "end": 279,
                        "value": "method",
                        "raw": "\"method\""
                      },
                      "optional": false,
                      "computed": true
                    },
                    "typeArguments": null,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "start": 280,
                      "end": 282,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 280,
                          "end": 282,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "expressions": []
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 292,
                  "end": 308,
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "start": 292,
                    "end": 307,
                    "tag": {
                      "type": "MemberExpression",
                      "start": 292,
                      "end": 305,
                      "object": {
                        "type": "Super",
                        "start": 292,
                        "end": 297
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 304,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    },
                    "typeArguments": null,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "start": 305,
                      "end": 307,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 305,
                          "end": 307,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "expressions": []
                    }
                  },
                  "directive": null
                }
              ]
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
