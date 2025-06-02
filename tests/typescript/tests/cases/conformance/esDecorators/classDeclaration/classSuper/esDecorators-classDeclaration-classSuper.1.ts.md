__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 315,
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
      "type": "ClassDeclaration",
      "start": 114,
      "end": 315,
      "decorators": [
        {
          "type": "Decorator",
          "start": 114,
          "end": 118,
          "expression": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 135,
        "end": 139,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
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
                    "start": 252,
                    "end": 254,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 252,
                        "end": 254,
                        "value": {
                          "raw": "",
                          "cooked": ""
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
                    "optional": false,
                    "computed": true
                  },
                  "typeArguments": null,
                  "quasi": {
                    "type": "TemplateLiteral",
                    "start": 279,
                    "end": 281,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 279,
                        "end": 281,
                        "value": {
                          "raw": "",
                          "cooked": ""
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
                    "start": 304,
                    "end": 306,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 304,
                        "end": 306,
                        "value": {
                          "raw": "",
                          "cooked": ""
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
