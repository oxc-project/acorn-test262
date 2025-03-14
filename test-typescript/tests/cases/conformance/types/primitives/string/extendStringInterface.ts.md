__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 72,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 72,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 41,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 30,
              "decorators": [],
              "name": "doStuff",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 46,
            "end": 70,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 58,
              "decorators": [],
              "name": "doOtherStuff",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 63,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 64,
                    "end": 65,
                    "typeName": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 58,
              "end": 61,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 59,
                  "end": 60,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "String",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 82,
            "end": 84,
            "raw": "''",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 99,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 99,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 93,
                "end": 99
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 102,
            "end": 113,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 102,
              "end": 111,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 104,
                "end": 111,
                "decorators": [],
                "name": "doStuff",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 128,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 128,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 122,
                "end": 128
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 131,
            "end": 151,
            "arguments": [
              {
                "type": "Literal",
                "start": 146,
                "end": 150,
                "raw": "'hm'",
                "value": "hm"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 131,
              "end": 145,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 145,
                "decorators": [],
                "name": "doOtherStuff",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 166,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 166,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 160,
                "end": 166
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 169,
            "end": 183,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 169,
              "end": 181,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 171,
                "end": 180,
                "raw": "'doStuff'",
                "value": "doStuff"
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 224,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 198,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 198,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 192,
                "end": 198
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 201,
            "end": 224,
            "arguments": [
              {
                "type": "Literal",
                "start": 219,
                "end": 223,
                "raw": "'hm'",
                "value": "hm"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 201,
              "end": 218,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 203,
                "end": 217,
                "raw": "'doOtherStuff'",
                "value": "doOtherStuff"
              }
            },
            "optional": false
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
