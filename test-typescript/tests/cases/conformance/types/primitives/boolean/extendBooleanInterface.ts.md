extendBooleanInterface.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 74,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 74,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 24,
            "end": 42,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 31,
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
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 47,
            "end": 72,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 59,
              "decorators": [],
              "name": "doOtherStuff",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 63,
                "end": 67,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 66,
                    "end": 67,
                    "typeName": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
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
              "start": 68,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 59,
              "end": 62,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 60,
                  "end": 61,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
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
        "end": 17,
        "decorators": [],
        "name": "Boolean",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 84,
            "end": 88,
            "raw": "true",
            "value": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 103,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 106,
            "end": 117,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 106,
              "end": 115,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 108,
                "end": 115,
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
      "start": 119,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 132,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 132,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 126,
                "end": 132
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 135,
            "end": 155,
            "arguments": [
              {
                "type": "Literal",
                "start": 150,
                "end": 154,
                "raw": "'hm'",
                "value": "hm"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 135,
              "end": 149,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 137,
                "end": 149,
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
      "start": 157,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 170,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 173,
            "end": 187,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 173,
              "end": 185,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 173,
                "end": 174,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 175,
                "end": 184,
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
      "start": 189,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 202,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 202,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 196,
                "end": 202
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 205,
            "end": 228,
            "arguments": [
              {
                "type": "Literal",
                "start": 223,
                "end": 227,
                "raw": "'hm'",
                "value": "hm"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 205,
              "end": 222,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 207,
                "end": 221,
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
  "sourceType": "script"
}
```
