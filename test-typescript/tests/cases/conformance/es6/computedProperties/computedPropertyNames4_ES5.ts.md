computedPropertyNames4_ES5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
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
      "type": "VariableDeclaration",
      "start": 42,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 50,
            "end": 227,
            "properties": [
              {
                "type": "Property",
                "start": 56,
                "end": 62,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 61,
                  "end": 62,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 68,
                "end": 74,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 80,
                "end": 90,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 81,
                  "end": 86,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 89,
                  "end": 90,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 96,
                "end": 106,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 97,
                  "end": 102,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 105,
                  "end": 106,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "Property",
                "start": 112,
                "end": 119,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 113,
                  "end": 115,
                  "argument": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "operator": "+",
                  "prefix": true
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 125,
                "end": 132,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 126,
                  "end": 128,
                  "raw": "\"\"",
                  "value": ""
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 131,
                  "end": 132,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 138,
                "end": 144,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 139,
                  "end": 140,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 143,
                  "end": 144,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 150,
                "end": 156,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 155,
                  "end": 156,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 162,
                "end": 176,
                "computed": true,
                "key": {
                  "type": "TSTypeAssertion",
                  "start": 163,
                  "end": 172,
                  "expression": {
                    "type": "Literal",
                    "start": 168,
                    "end": 172,
                    "raw": "true",
                    "value": true
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 164,
                    "end": 167
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 175,
                  "end": 176,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 182,
                "end": 198,
                "computed": true,
                "key": {
                  "type": "TemplateLiteral",
                  "start": 183,
                  "end": 194,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 183,
                      "end": 194,
                      "tail": true,
                      "value": {
                        "cooked": "hello bye",
                        "raw": "hello bye"
                      }
                    }
                  ]
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 197,
                  "end": 198,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 204,
                "end": 225,
                "computed": true,
                "key": {
                  "type": "TemplateLiteral",
                  "start": 205,
                  "end": 221,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 214,
                      "end": 215,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 205,
                      "end": 214,
                      "tail": false,
                      "value": {
                        "cooked": "hello ",
                        "raw": "hello "
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 215,
                      "end": 221,
                      "tail": true,
                      "value": {
                        "cooked": " bye",
                        "raw": " bye"
                      }
                    }
                  ]
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 224,
                  "end": 225,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
