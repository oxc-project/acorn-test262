__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 284,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "fun",
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
          "start": 13,
          "end": 22,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 16,
              "end": 22
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 25,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "name": "fun",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 38,
          "end": 43,
          "left": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 42,
            "end": 43,
            "value": 3,
            "raw": "3"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 46,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "name": "fun",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 59,
          "end": 67,
          "left": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 63,
            "end": 67,
            "value": null,
            "raw": "null"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 72,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 204,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 100,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 88,
              "end": 100,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 98,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 92,
                      "end": 98
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 113,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 105,
              "end": 113,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 106,
                  "end": 111,
                  "left": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 110,
                    "end": 111,
                    "value": 3,
                    "raw": "3"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 132,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 118,
              "end": 132,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 119,
                  "end": 127,
                  "left": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 123,
                    "end": 127,
                    "value": null,
                    "raw": "null"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 132,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 134,
            "end": 156,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 144,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 144,
              "end": 156,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 154,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 148,
                      "end": 154
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 158,
            "end": 176,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 168,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 168,
              "end": 176,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 169,
                  "end": 174,
                  "left": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 173,
                    "end": 174,
                    "value": 3,
                    "raw": "3"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 178,
            "end": 202,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 188,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 202,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 189,
                  "end": 197,
                  "left": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 193,
                    "end": 197,
                    "value": null,
                    "raw": "null"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 199,
                "end": 202,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 206,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 218,
        "end": 257,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 224,
            "end": 239,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 227,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 228,
                "end": 237,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 229,
                  "end": 237,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 231,
                    "end": 237
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 244,
            "end": 255,
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 247,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 248,
                "end": 253,
                "left": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 252,
                  "end": 253,
                  "value": 3,
                  "raw": "3"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 283,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 283,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 266,
                "end": 283,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 267,
                    "end": 272,
                    "left": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 268,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 271,
                      "end": 272,
                      "value": 3,
                      "raw": "3"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 274,
                  "end": 283,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 277,
                    "end": 283
                  }
                }
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
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
