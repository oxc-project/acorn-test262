__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 316,
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "start": 23,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 84,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 61,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 61,
              "end": 84,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 62,
                  "end": 76,
                  "argument": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 83,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 79,
                  "end": 83
                }
              }
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
      "declare": true,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 100,
            "name": "method",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 135,
        "end": 139,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 140,
        "end": 315,
        "body": [
          {
            "type": "StaticBlock",
            "start": 146,
            "end": 313,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 163,
                "end": 178,
                "expression": {
                  "type": "CallExpression",
                  "start": 163,
                  "end": 177,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 163,
                    "end": 175,
                    "object": {
                      "type": "Super",
                      "start": 163,
                      "end": 168
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 175,
                      "name": "method",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 187,
                "end": 205,
                "expression": {
                  "type": "CallExpression",
                  "start": 187,
                  "end": 204,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 187,
                    "end": 202,
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "property": {
                      "type": "Literal",
                      "start": 193,
                      "end": 201,
                      "value": "method",
                      "raw": "\"method\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 214,
                "end": 230,
                "expression": {
                  "type": "CallExpression",
                  "start": 214,
                  "end": 229,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 214,
                    "end": 227,
                    "object": {
                      "type": "Super",
                      "start": 214,
                      "end": 219
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 226,
                      "name": "method",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 240,
                "end": 255,
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "start": 240,
                  "end": 254,
                  "tag": {
                    "type": "MemberExpression",
                    "start": 240,
                    "end": 252,
                    "object": {
                      "type": "Super",
                      "start": 240,
                      "end": 245
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 252,
                      "name": "method",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "quasi": {
                    "type": "TemplateLiteral",
                    "start": 252,
                    "end": 254,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 252,
                        "end": 254,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ]
                  },
                  "typeArguments": null
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 264,
                "end": 282,
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "start": 264,
                  "end": 281,
                  "tag": {
                    "type": "MemberExpression",
                    "start": 264,
                    "end": 279,
                    "object": {
                      "type": "Super",
                      "start": 264,
                      "end": 269
                    },
                    "property": {
                      "type": "Literal",
                      "start": 270,
                      "end": 278,
                      "value": "method",
                      "raw": "\"method\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "quasi": {
                    "type": "TemplateLiteral",
                    "start": 279,
                    "end": 281,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 279,
                        "end": 281,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ]
                  },
                  "typeArguments": null
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 291,
                "end": 307,
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "start": 291,
                  "end": 306,
                  "tag": {
                    "type": "MemberExpression",
                    "start": 291,
                    "end": 304,
                    "object": {
                      "type": "Super",
                      "start": 291,
                      "end": 296
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 303,
                      "name": "method",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "quasi": {
                    "type": "TemplateLiteral",
                    "start": 304,
                    "end": 306,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 304,
                        "end": 306,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ]
                  },
                  "typeArguments": null
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 114,
          "end": 118,
          "expression": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "name": "dec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
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
