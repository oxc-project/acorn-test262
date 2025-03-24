__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 33,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 33,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 19,
              "end": 33,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 21,
                  "end": 26,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 25,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 24,
                      "end": 25,
                      "typeName": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 25,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 27,
                  "end": 31,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 30,
                      "end": 31,
                      "typeName": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 35,
          "end": 39,
          "name": "m",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 39,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 38,
              "end": 39,
              "typeName": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 54,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 43,
            "end": 52,
            "argument": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 87,
            "end": 110,
            "callee": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 91,
                "end": 106,
                "properties": [
                  {
                    "type": "Property",
                    "start": 93,
                    "end": 97,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 96,
                      "end": 97,
                      "value": 3,
                      "raw": "3"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 99,
                    "end": 104,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 102,
                      "end": 104,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 108,
                "end": 109,
                "value": 4,
                "raw": "4"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 118,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 121,
            "end": 152,
            "callee": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 133,
                "end": 148,
                "properties": [
                  {
                    "type": "Property",
                    "start": 135,
                    "end": 139,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 138,
                      "end": 139,
                      "value": 3,
                      "raw": "3"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 141,
                    "end": 146,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 144,
                      "end": 146,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 150,
                "end": 151,
                "value": 4,
                "raw": "4"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 124,
              "end": 132,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 125,
                  "end": 131
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 161,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 164,
            "end": 195,
            "callee": {
              "type": "Identifier",
              "start": 164,
              "end": 167,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 176,
                "end": 191,
                "properties": [
                  {
                    "type": "Property",
                    "start": 178,
                    "end": 182,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 181,
                      "end": 182,
                      "value": 3,
                      "raw": "3"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 184,
                    "end": 189,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 185,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 187,
                      "end": 189,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 193,
                "end": 194,
                "value": 4,
                "raw": "4"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 167,
              "end": 175,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 168,
                  "end": 174
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "name": "x4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 207,
            "end": 239,
            "callee": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 219,
                "end": 234,
                "properties": [
                  {
                    "type": "Property",
                    "start": 221,
                    "end": 226,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 224,
                      "end": 226,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 228,
                    "end": 232,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 231,
                      "end": 232,
                      "value": 4,
                      "raw": "4"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 236,
                "end": 238,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 210,
              "end": 218,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 211,
                  "end": 217
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 247,
            "name": "x5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 250,
            "end": 282,
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 253,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 262,
                "end": 277,
                "properties": [
                  {
                    "type": "Property",
                    "start": 264,
                    "end": 269,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 264,
                      "end": 265,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 267,
                      "end": 269,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 271,
                    "end": 275,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 274,
                      "end": 275,
                      "value": 4,
                      "raw": "4"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 279,
                "end": 281,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 253,
              "end": 261,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 254,
                  "end": 260
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
