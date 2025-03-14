defaultArgsInOverloads.ts
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
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "fun",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 16,
              "end": 22
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 25,
      "end": 45,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "fun",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 38,
          "end": 43,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 42,
            "end": 43,
            "raw": "3",
            "value": 3
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 46,
      "end": 72,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 72,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "decorators": [],
        "name": "fun",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 59,
          "end": 67,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 63,
            "end": 67,
            "raw": "null",
            "value": null
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 204,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 204,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 100,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 88,
              "end": 100,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 98,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 92,
                      "end": 98
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 113,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 105,
              "end": 113,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 106,
                  "end": 111,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 110,
                    "end": 111,
                    "raw": "3",
                    "value": 3
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 132,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 118,
              "end": 132,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 132,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 119,
                  "end": 127,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 123,
                    "end": 127,
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 134,
            "end": 156,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 144,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 144,
              "end": 156,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 154,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 148,
                      "end": 154
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 158,
            "end": 176,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 168,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 168,
              "end": 176,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 169,
                  "end": 174,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 173,
                    "end": 174,
                    "raw": "3",
                    "value": 3
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 178,
            "end": 202,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 188,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 202,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 199,
                "end": 202,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 189,
                  "end": 197,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 193,
                    "end": 197,
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 206,
      "end": 257,
      "body": {
        "type": "TSInterfaceBody",
        "start": 218,
        "end": 257,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 224,
            "end": 239,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 227,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 228,
                "end": 237,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 229,
                  "end": 237,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 231,
                    "end": 237
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 244,
            "end": 255,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 247,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 248,
                "end": 253,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 252,
                  "end": 253,
                  "raw": "3",
                  "value": 3
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "I",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 283,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 283,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 266,
                "end": 283,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 267,
                    "end": 272,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 268,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 271,
                      "end": 272,
                      "raw": "3",
                      "value": 3
                    }
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
