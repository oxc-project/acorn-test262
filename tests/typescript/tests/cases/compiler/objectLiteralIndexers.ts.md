__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 324,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 52,
          "end": 53,
          "expression": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 72,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 70,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 83,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 82,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 82,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 84,
      "end": 93,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 92,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 94,
      "end": 105,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 104,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 104,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 101,
                "end": 104
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
      "type": "VariableDeclaration",
      "start": 107,
      "end": 167,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 149,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 115,
                "end": 149,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 117,
                    "end": 132,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 118,
                        "end": 127,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 119,
                          "end": 127,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 121,
                            "end": 127
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 128,
                      "end": 131,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 130,
                        "end": 131,
                        "typeName": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 132,
                    "end": 147,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 133,
                        "end": 142,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 134,
                          "end": 142,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 136,
                            "end": 142
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 146,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 145,
                        "end": 146,
                        "typeName": {
                          "type": "Identifier",
                          "start": 145,
                          "end": 146,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 152,
            "end": 166,
            "properties": [
              {
                "type": "Property",
                "start": 154,
                "end": 158,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 160,
                "end": 164,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 160,
                  "end": 161,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 232,
      "expression": {
        "type": "AssignmentExpression",
        "start": 212,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 212,
          "end": 214,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 217,
          "end": 231,
          "properties": [
            {
              "type": "Property",
              "start": 219,
              "end": 223,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 219,
                "end": 220,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 225,
              "end": 229,
              "kind": "init",
              "key": {
                "type": "Literal",
                "start": 225,
                "end": 226,
                "value": 0,
                "raw": "0"
              },
              "value": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 258,
      "end": 278,
      "expression": {
        "type": "AssignmentExpression",
        "start": 258,
        "end": 277,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 258,
          "end": 260,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 263,
          "end": 277,
          "properties": [
            {
              "type": "Property",
              "start": 265,
              "end": 269,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 265,
                "end": 266,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 271,
              "end": 275,
              "kind": "init",
              "key": {
                "type": "Literal",
                "start": 271,
                "end": 272,
                "value": 0,
                "raw": "0"
              },
              "value": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
