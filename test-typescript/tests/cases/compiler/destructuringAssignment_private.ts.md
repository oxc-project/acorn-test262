__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 263,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 58,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 56,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 51,
                        "end": 52,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 72,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 66,
                "end": 72
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 76,
              "end": 88,
              "properties": [
                {
                  "type": "Property",
                  "start": 78,
                  "end": 86,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 81,
                    "end": 86,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 83,
                        "end": 84,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 98,
                    "end": 105,
                    "callee": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "kind": "init",
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
          "properties": [
            {
              "type": "Property",
              "start": 114,
              "end": 127,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 117,
                "end": 127,
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 118,
                    "end": 126,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 120,
                        "end": 124,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 121,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 124,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 153,
            "name": "nameX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 163,
              "end": 184,
              "properties": [
                {
                  "type": "Property",
                  "start": 165,
                  "end": 182,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 168,
                    "end": 182,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 170,
                        "end": 180,
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "key": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 176,
                          "name": "nameX",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 180,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "NewExpression",
                    "start": 194,
                    "end": 201,
                    "callee": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 199,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "kind": "init",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 225,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 219,
            "name": "nameO",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
          "properties": [
            {
              "type": "Property",
              "start": 230,
              "end": 249,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 231,
                "end": 236,
                "name": "nameO",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 239,
                "end": 249,
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 240,
                    "end": 248,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 242,
                        "end": 246,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 243,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 245,
                          "end": 246,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
