interfaceWithOverloadedCallAndConstructSignatures.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 105,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 105,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 31,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 24,
                "end": 30
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 36,
            "end": 56,
            "params": [
              {
                "type": "Identifier",
                "start": 37,
                "end": 46,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 38,
                  "end": 46,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 40,
                    "end": 46
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 55,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 62,
            "end": 74,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 73,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 70,
                "end": 73
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 79,
            "end": 103,
            "params": [
              {
                "type": "Identifier",
                "start": 84,
                "end": 93,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 87,
                    "end": 93
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 102,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 102,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 117,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 117,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 125,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 128,
            "end": 131,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "f",
              "optional": false
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
      "start": 133,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 142,
            "end": 147,
            "arguments": [
              {
                "type": "Literal",
                "start": 144,
                "end": 146,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "f",
              "optional": false
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
      "start": 149,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 165,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 155,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 158,
            "end": 165,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 173,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 176,
            "end": 185,
            "arguments": [
              {
                "type": "Literal",
                "start": 182,
                "end": 184,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "f",
              "optional": false
            }
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
