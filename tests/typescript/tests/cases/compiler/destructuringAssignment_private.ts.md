__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 26,
              "end": 27
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 14,
            "end": 28
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 49
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 51,
                        "end": 52
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 48,
                      "end": 52
                    }
                  ],
                  "start": 46,
                  "end": 54
                }
              ],
              "start": 45,
              "end": 55
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 33,
            "end": 56
          }
        ],
        "start": 8,
        "end": 58
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 66,
                "end": 72
              },
              "start": 64,
              "end": 72
            },
            "start": 63,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 63,
          "end": 72
        }
      ],
      "declare": false,
      "start": 59,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 79
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 83,
                          "end": 84
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 83,
                          "end": 84
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 83,
                        "end": 84
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 86
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 78,
                  "end": 86
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 88
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 89
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 103
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 98,
                    "end": 105
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 95,
                  "end": 105
                }
              ],
              "start": 93,
              "end": 107
            }
          ],
          "start": 92,
          "end": 108
        },
        "start": 75,
        "end": 108
      },
      "directive": null,
      "start": 74,
      "end": 110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
              },
              "value": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 120,
                          "end": 121
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 124
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 120,
                        "end": 124
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 126
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 127
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 114,
              "end": 127
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 128
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 136
          },
          "typeArguments": null,
          "arguments": [],
          "start": 131,
          "end": 138
        },
        "start": 112,
        "end": 138
      },
      "directive": null,
      "start": 111,
      "end": 140
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
            "name": "nameX",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 153
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 156,
            "end": 159
          },
          "definite": false,
          "start": 148,
          "end": 159
        }
      ],
      "declare": false,
      "start": 142,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nameX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 176
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 179,
                          "end": 180
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 170,
                        "end": 180
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 182
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 165,
                  "end": 182
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 184
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 185
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 199
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 194,
                    "end": 201
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 191,
                  "end": 201
                }
              ],
              "start": 189,
              "end": 203
            }
          ],
          "start": 188,
          "end": 204
        },
        "start": 162,
        "end": 204
      },
      "directive": null,
      "start": 161,
      "end": 206
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
            "name": "nameO",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 219
          },
          "init": {
            "type": "Literal",
            "value": "o",
            "raw": "\"o\"",
            "start": 222,
            "end": 225
          },
          "definite": false,
          "start": 214,
          "end": 225
        }
      ],
      "declare": false,
      "start": 208,
      "end": 226
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameO",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 236
              },
              "value": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 242,
                          "end": 243
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 245,
                          "end": 246
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 242,
                        "end": 246
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 248
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 249
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 230,
              "end": 249
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 250
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 258
          },
          "typeArguments": null,
          "arguments": [],
          "start": 253,
          "end": 260
        },
        "start": 228,
        "end": 260
      },
      "directive": null,
      "start": 227,
      "end": 262
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 262
}
```
