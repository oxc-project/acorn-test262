__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 224,
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
        "name": "Number",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 83,
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
            "end": 83,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 112,
          "definite": false,
          "id": {
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
          },
          "init": {
            "type": "CallExpression",
            "start": 101,
            "end": 112,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 101,
              "end": 110,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 110,
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
      "start": 114,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 127,
            "decorators": [],
            "name": "b",
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
          },
          "init": {
            "type": "CallExpression",
            "start": 130,
            "end": 150,
            "arguments": [
              {
                "type": "Literal",
                "start": 145,
                "end": 149,
                "raw": "'hm'",
                "value": "hm"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 130,
              "end": 144,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 132,
                "end": 144,
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
      "start": 152,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 165,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 168,
            "end": 182,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 168,
              "end": 180,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 168,
                "end": 169,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 170,
                "end": 179,
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
      "start": 184,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 197,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 197,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 191,
                "end": 197
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 200,
            "end": 223,
            "arguments": [
              {
                "type": "Literal",
                "start": 218,
                "end": 222,
                "raw": "'hm'",
                "value": "hm"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 200,
              "end": 217,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 202,
                "end": 216,
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
