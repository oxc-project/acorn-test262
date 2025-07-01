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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 41
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 61
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 69
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 71,
                        "end": 74
                      },
                      "start": 71,
                      "end": 76
                    },
                    "start": 69,
                    "end": 76
                  },
                  "value": null,
                  "start": 62,
                  "end": 76
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 79,
                  "end": 83
                },
                "start": 77,
                "end": 83
              },
              "body": null,
              "expression": false,
              "start": 61,
              "end": 84
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 48,
            "end": 84
          }
        ],
        "start": 42,
        "end": 86
      },
      "abstract": false,
      "declare": true,
      "start": 23,
      "end": 86
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 100
          },
          "init": {
            "type": "Literal",
            "value": "method",
            "raw": "\"method\"",
            "start": 103,
            "end": 111
          },
          "definite": false,
          "start": 94,
          "end": 111
        }
      ],
      "declare": false,
      "start": 88,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 119
            },
            "start": 115,
            "end": 119
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 127
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 140
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "StaticBlock",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 164,
                        "end": 169
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 176
                      },
                      "optional": false,
                      "computed": false,
                      "start": 164,
                      "end": 176
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 164,
                    "end": 178
                  },
                  "directive": null,
                  "start": 164,
                  "end": 179
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 188,
                        "end": 193
                      },
                      "property": {
                        "type": "Literal",
                        "value": "method",
                        "raw": "\"method\"",
                        "start": 194,
                        "end": 202
                      },
                      "optional": false,
                      "computed": true,
                      "start": 188,
                      "end": 203
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 188,
                    "end": 205
                  },
                  "directive": null,
                  "start": 188,
                  "end": 206
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 215,
                        "end": 220
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 227
                      },
                      "optional": false,
                      "computed": true,
                      "start": 215,
                      "end": 228
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 215,
                    "end": 230
                  },
                  "directive": null,
                  "start": 215,
                  "end": 231
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "tag": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 241,
                        "end": 246
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 247,
                        "end": 253
                      },
                      "optional": false,
                      "computed": false,
                      "start": 241,
                      "end": 253
                    },
                    "typeArguments": null,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 253,
                          "end": 255
                        }
                      ],
                      "expressions": [],
                      "start": 253,
                      "end": 255
                    },
                    "start": 241,
                    "end": 255
                  },
                  "directive": null,
                  "start": 241,
                  "end": 256
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "tag": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 265,
                        "end": 270
                      },
                      "property": {
                        "type": "Literal",
                        "value": "method",
                        "raw": "\"method\"",
                        "start": 271,
                        "end": 279
                      },
                      "optional": false,
                      "computed": true,
                      "start": 265,
                      "end": 280
                    },
                    "typeArguments": null,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 280,
                          "end": 282
                        }
                      ],
                      "expressions": [],
                      "start": 280,
                      "end": 282
                    },
                    "start": 265,
                    "end": 282
                  },
                  "directive": null,
                  "start": 265,
                  "end": 283
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "tag": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 292,
                        "end": 297
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 298,
                        "end": 304
                      },
                      "optional": false,
                      "computed": true,
                      "start": 292,
                      "end": 305
                    },
                    "typeArguments": null,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 305,
                          "end": 307
                        }
                      ],
                      "expressions": [],
                      "start": 305,
                      "end": 307
                    },
                    "start": 292,
                    "end": 307
                  },
                  "directive": null,
                  "start": 292,
                  "end": 308
                }
              ],
              "start": 147,
              "end": 314
            }
          ],
          "start": 141,
          "end": 316
        },
        "abstract": false,
        "declare": false,
        "start": 115,
        "end": 316
      },
      "directive": null,
      "start": 114,
      "end": 318
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 318
}
```
