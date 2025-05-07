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
      "async": false,
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
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 33,
          "decorators": [],
          "name": "n",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 25,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 24,
                      "end": 25,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 25,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 27,
                  "end": 31,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 30,
                      "end": 31,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 35,
          "end": 39,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 39,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 38,
              "end": 39,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 87,
            "end": 110,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 96,
                      "end": 97,
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 99,
                    "end": 104,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 102,
                      "end": 104,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 108,
                "end": 109,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 118,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 121,
            "end": 152,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 138,
                      "end": 139,
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 141,
                    "end": 146,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 144,
                      "end": 146,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 150,
                "end": 151,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 161,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 164,
            "end": 195,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 181,
                      "end": 182,
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 184,
                    "end": 189,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 185,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 187,
                      "end": 189,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 193,
                "end": 194,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 164,
              "end": 167,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 207,
            "end": 239,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 224,
                      "end": 226,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 228,
                    "end": 232,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 231,
                      "end": 232,
                      "raw": "4",
                      "value": 4,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 236,
                "end": 238,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 247,
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 250,
            "end": 282,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 264,
                      "end": 265,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 267,
                      "end": 269,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 271,
                    "end": 275,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 274,
                      "end": 275,
                      "raw": "4",
                      "value": 4,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 279,
                "end": 281,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 253,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
