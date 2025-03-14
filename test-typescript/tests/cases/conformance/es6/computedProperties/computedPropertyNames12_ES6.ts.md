computedPropertyNames12_ES6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 42,
      "end": 296,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 296,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 68,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 81,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "n",
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 86,
            "end": 109,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "BinaryExpression",
              "start": 94,
              "end": 99,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 108,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 102,
                "end": 108
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 114,
            "end": 126,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "BinaryExpression",
              "start": 115,
              "end": 120,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 124,
              "end": 125,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 131,
            "end": 146,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "UnaryExpression",
              "start": 132,
              "end": 134,
              "argument": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "operator": "+",
              "prefix": true
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 137,
                "end": 145,
                "exprName": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 151,
            "end": 171,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 159,
              "end": 161,
              "raw": "\"\"",
              "value": ""
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 188,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 177,
              "end": 178,
              "raw": "0",
              "value": 0
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 187,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 181,
                "end": 187
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 193,
            "end": 205,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 204,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 198,
                "end": 204
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 210,
            "end": 237,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "TSTypeAssertion",
              "start": 218,
              "end": 227,
              "expression": {
                "type": "Literal",
                "start": 223,
                "end": 227,
                "raw": "true",
                "value": true
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 219,
                "end": 222
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 236,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 230,
                "end": 236
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 260,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "TemplateLiteral",
              "start": 243,
              "end": 254,
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 243,
                  "end": 254,
                  "tail": true,
                  "value": {
                    "cooked": "hello bye",
                    "raw": "hello bye"
                  }
                }
              ]
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 258,
              "end": 259,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 265,
            "end": 294,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "TemplateLiteral",
              "start": 273,
              "end": 289,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 282,
                  "end": 283,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 273,
                  "end": 282,
                  "tail": false,
                  "value": {
                    "cooked": "hello ",
                    "raw": "hello "
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 283,
                  "end": 289,
                  "tail": true,
                  "value": {
                    "cooked": " bye",
                    "raw": " bye"
                  }
                }
              ]
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 293,
              "end": 294,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
