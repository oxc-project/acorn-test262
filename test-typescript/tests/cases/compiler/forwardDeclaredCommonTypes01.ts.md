forwardDeclaredCommonTypes01.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 290,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 23,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 23,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Promise",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 24,
      "end": 43,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 43,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 40,
        "decorators": [],
        "name": "Symbol",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 44,
      "end": 66,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 66,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 57,
        "decorators": [],
        "name": "Map",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 57,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 58,
            "end": 59,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 62,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 67,
      "end": 108,
      "body": {
        "type": "TSInterfaceBody",
        "start": 106,
        "end": 108,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 84,
        "decorators": [],
        "name": "WeakMap",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 101,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 95,
              "end": 101
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 103,
            "end": 104,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 109,
      "end": 128,
      "body": {
        "type": "TSInterfaceBody",
        "start": 126,
        "end": 128,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 122,
        "decorators": [],
        "name": "Set",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 122,
        "end": 125,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 123,
            "end": 124,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 129,
      "end": 167,
      "body": {
        "type": "TSInterfaceBody",
        "start": 165,
        "end": 167,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 146,
        "decorators": [],
        "name": "WeakSet",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 146,
        "end": 164,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 163,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 157,
              "end": 163
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 289,
      "expression": {
        "type": "FunctionExpression",
        "start": 170,
        "end": 287,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 181,
          "end": 287,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 187,
              "end": 199,
              "expression": {
                "type": "NewExpression",
                "start": 187,
                "end": 198,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 198,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 204,
              "end": 215,
              "expression": {
                "type": "NewExpression",
                "start": 204,
                "end": 214,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 214,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 216,
              "end": 225,
              "expression": {
                "type": "CallExpression",
                "start": 216,
                "end": 224,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 222,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false
                },
                "optional": false
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 230,
              "end": 238,
              "expression": {
                "type": "NewExpression",
                "start": 230,
                "end": 237,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 237,
                  "decorators": [],
                  "name": "Map",
                  "optional": false
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 243,
              "end": 255,
              "expression": {
                "type": "NewExpression",
                "start": 243,
                "end": 254,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 254,
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 260,
              "end": 268,
              "expression": {
                "type": "NewExpression",
                "start": 260,
                "end": 267,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 267,
                  "decorators": [],
                  "name": "Set",
                  "optional": false
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 273,
              "end": 285,
              "expression": {
                "type": "NewExpression",
                "start": 273,
                "end": 284,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 284,
                  "decorators": [],
                  "name": "WeakSet",
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": null,
        "params": []
      }
    }
  ],
  "sourceType": "script"
}
```
