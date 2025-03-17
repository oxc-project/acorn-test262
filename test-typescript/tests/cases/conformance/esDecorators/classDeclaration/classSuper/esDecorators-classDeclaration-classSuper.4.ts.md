__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 340,
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
      "end": 88,
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
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 86,
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
              "end": 86,
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
                "end": 85,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
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
      "start": 90,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "name": "method",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 105,
            "end": 113,
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
      "start": 116,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 137,
        "end": 141,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 339,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 174,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 159,
              "end": 173,
              "callee": {
                "type": "MemberExpression",
                "start": 159,
                "end": 171,
                "object": {
                  "type": "Super",
                  "start": 159,
                  "end": 164
                },
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 171,
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 179,
            "end": 208,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 190,
              "end": 207,
              "callee": {
                "type": "MemberExpression",
                "start": 190,
                "end": 205,
                "object": {
                  "type": "Super",
                  "start": 190,
                  "end": 195
                },
                "property": {
                  "type": "Literal",
                  "start": 196,
                  "end": 204,
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 213,
            "end": 240,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 224,
              "end": 239,
              "callee": {
                "type": "MemberExpression",
                "start": 224,
                "end": 237,
                "object": {
                  "type": "Super",
                  "start": 224,
                  "end": 229
                },
                "property": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 236,
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 245,
            "end": 271,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "TaggedTemplateExpression",
              "start": 256,
              "end": 270,
              "tag": {
                "type": "MemberExpression",
                "start": 256,
                "end": 268,
                "object": {
                  "type": "Super",
                  "start": 256,
                  "end": 261
                },
                "property": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 268,
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
                "start": 268,
                "end": 270,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 268,
                    "end": 270,
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 276,
            "end": 305,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 284,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "TaggedTemplateExpression",
              "start": 287,
              "end": 304,
              "tag": {
                "type": "MemberExpression",
                "start": 287,
                "end": 302,
                "object": {
                  "type": "Super",
                  "start": 287,
                  "end": 292
                },
                "property": {
                  "type": "Literal",
                  "start": 293,
                  "end": 301,
                  "value": "method",
                  "raw": "\"method\""
                },
                "computed": true,
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 302,
                "end": 304,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 302,
                    "end": 304,
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 310,
            "end": 337,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "TaggedTemplateExpression",
              "start": 321,
              "end": 336,
              "tag": {
                "type": "MemberExpression",
                "start": 321,
                "end": 334,
                "object": {
                  "type": "Super",
                  "start": 321,
                  "end": 326
                },
                "property": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 333,
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
                "start": 334,
                "end": 336,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 334,
                    "end": 336,
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
      "decorators": [
        {
          "type": "Decorator",
          "start": 116,
          "end": 120,
          "expression": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
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
