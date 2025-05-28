__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 262,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 58,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 58,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 56,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrayExpression",
              "start": 45,
              "end": 55,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 46,
                  "end": 54,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 48,
                      "end": 52,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 51,
                        "end": 52,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 73,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 72,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 66,
                "end": 72
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 110,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 108,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 75,
          "end": 89,
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 76,
              "end": 88,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 78,
                  "end": 86,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 81,
                    "end": 86,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 83,
                        "end": 84,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 92,
          "end": 108,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 93,
              "end": 107,
              "properties": [
                {
                  "type": "Property",
                  "start": 95,
                  "end": 105,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 98,
                    "end": 105,
                    "callee": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 140,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 138,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 112,
          "end": 128,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 114,
              "end": 127,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 117,
                "end": 127,
                "decorators": [],
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 118,
                    "end": 126,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 120,
                        "end": 124,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 121,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 124,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 131,
          "end": 138,
          "callee": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 160,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 153,
            "decorators": [],
            "name": "nameX",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 156,
            "end": 159,
            "value": "x",
            "raw": "\"x\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 206,
      "expression": {
        "type": "AssignmentExpression",
        "start": 162,
        "end": 204,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 162,
          "end": 185,
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 163,
              "end": 184,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 165,
                  "end": 182,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 168,
                    "end": 182,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 170,
                        "end": 180,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 176,
                          "decorators": [],
                          "name": "nameX",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 180,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 188,
          "end": 204,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 189,
              "end": 203,
              "properties": [
                {
                  "type": "Property",
                  "start": 191,
                  "end": 201,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 194,
                    "end": 201,
                    "callee": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 199,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 226,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 225,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 219,
            "decorators": [],
            "name": "nameO",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 222,
            "end": 225,
            "value": "o",
            "raw": "\"o\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 227,
      "end": 262,
      "expression": {
        "type": "AssignmentExpression",
        "start": 228,
        "end": 260,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 228,
          "end": 250,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 230,
              "end": 249,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 231,
                "end": 236,
                "decorators": [],
                "name": "nameO",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 239,
                "end": 249,
                "decorators": [],
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 240,
                    "end": 248,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 242,
                        "end": 246,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 243,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 245,
                          "end": 246,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 253,
          "end": 260,
          "callee": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
