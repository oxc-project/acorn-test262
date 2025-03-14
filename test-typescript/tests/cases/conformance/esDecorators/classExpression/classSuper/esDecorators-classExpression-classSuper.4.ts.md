esDecorators-classExpression-classSuper.4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 343,
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
      "end": 88,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 86,
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
              "end": 86,
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
                "end": 85,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
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
      "start": 90,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "decorators": [],
            "name": "method",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 105,
            "end": 113,
            "raw": "\"method\"",
            "value": "method"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 342,
      "expression": {
        "type": "ClassExpression",
        "start": 117,
        "end": 340,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 143,
          "end": 340,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 149,
              "end": 175,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "CallExpression",
                "start": 160,
                "end": 174,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 160,
                  "end": 172,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 160,
                    "end": 165
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 172,
                    "decorators": [],
                    "name": "method",
                    "optional": false
                  }
                },
                "optional": false
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 180,
              "end": 209,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "CallExpression",
                "start": 191,
                "end": 208,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 191,
                  "end": 206,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 191,
                    "end": 196
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 197,
                    "end": 205,
                    "raw": "\"method\"",
                    "value": "method"
                  }
                },
                "optional": false
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 214,
              "end": 241,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "CallExpression",
                "start": 225,
                "end": 240,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 225,
                  "end": 238,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 225,
                    "end": 230
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 237,
                    "decorators": [],
                    "name": "method",
                    "optional": false
                  }
                },
                "optional": false
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 246,
              "end": 272,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 253,
                "end": 254,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "TaggedTemplateExpression",
                "start": 257,
                "end": 271,
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 269,
                  "end": 271,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 269,
                      "end": 271,
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
                  "start": 257,
                  "end": 269,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 257,
                    "end": 262
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 269,
                    "decorators": [],
                    "name": "method",
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 277,
              "end": 306,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "TaggedTemplateExpression",
                "start": 288,
                "end": 305,
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 303,
                  "end": 305,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 303,
                      "end": 305,
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
                  "start": 288,
                  "end": 303,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 288,
                    "end": 293
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 294,
                    "end": 302,
                    "raw": "\"method\"",
                    "value": "method"
                  }
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 311,
              "end": 338,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "TaggedTemplateExpression",
                "start": 322,
                "end": 337,
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 335,
                  "end": 337,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 335,
                      "end": 337,
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
                  "start": 322,
                  "end": 335,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 322,
                    "end": 327
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 334,
                    "decorators": [],
                    "name": "method",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 117,
            "end": 121,
            "expression": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "decorators": [],
              "name": "dec",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 138,
          "end": 142,
          "decorators": [],
          "name": "Base",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
