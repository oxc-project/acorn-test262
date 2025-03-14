esDecorators-classDeclaration-classSuper.1.ts
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
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 61,
              "decorators": [],
              "name": "method",
              "optional": false
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
                  }
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
              }
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
        "optional": false
      },
      "implements": [],
      "superClass": null
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
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 103,
            "end": 111,
            "raw": "\"method\"",
            "value": "method"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 315,
      "abstract": false,
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
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 163,
                    "end": 175,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 163,
                      "end": 168
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 175,
                      "decorators": [],
                      "name": "method",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 187,
                "end": 205,
                "expression": {
                  "type": "CallExpression",
                  "start": 187,
                  "end": 204,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 187,
                    "end": 202,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 193,
                      "end": 201,
                      "raw": "\"method\"",
                      "value": "method"
                    }
                  },
                  "optional": false
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 214,
                "end": 230,
                "expression": {
                  "type": "CallExpression",
                  "start": 214,
                  "end": 229,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 214,
                    "end": 227,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 214,
                      "end": 219
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 226,
                      "decorators": [],
                      "name": "method",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 240,
                "end": 255,
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "start": 240,
                  "end": 254,
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
                    "start": 240,
                    "end": 252,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 240,
                      "end": 245
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 252,
                      "decorators": [],
                      "name": "method",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 264,
                "end": 282,
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "start": 264,
                  "end": 281,
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
                    "start": 264,
                    "end": 279,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 264,
                      "end": 269
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 270,
                      "end": 278,
                      "raw": "\"method\"",
                      "value": "method"
                    }
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 291,
                "end": 307,
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "start": 291,
                  "end": 306,
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
                    "start": 291,
                    "end": 304,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 291,
                      "end": 296
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 303,
                      "decorators": [],
                      "name": "method",
                      "optional": false
                    }
                  }
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
          "start": 114,
          "end": 118,
          "expression": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 135,
        "end": 139,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
