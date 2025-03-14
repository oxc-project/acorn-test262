__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 84,
  "end": 282,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 103,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 103,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 112,
            "end": 118,
            "arguments": [
              {
                "type": "Literal",
                "start": 116,
                "end": 117,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 112,
              "end": 115,
              "decorators": [],
              "name": "foo",
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
      "type": "TSInterfaceDeclaration",
      "start": 150,
      "end": 182,
      "body": {
        "type": "TSInterfaceBody",
        "start": 162,
        "end": 182,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 168,
            "end": 171,
            "params": []
          },
          {
            "type": "TSMethodSignature",
            "start": 176,
            "end": 180,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 191,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 191,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 190,
                "end": 191,
                "typeName": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "decorators": [],
                  "name": "I",
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
      "start": 193,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 199,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 202,
            "end": 205,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "i",
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
      "start": 207,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 213,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 216,
            "end": 221,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 216,
              "end": 219,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "decorators": [],
                "name": "f",
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
      "start": 224,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 251,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 231,
                "end": 251,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 237,
                    "end": 240,
                    "params": []
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 245,
                    "end": 249,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "static": false
                  }
                ]
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
      "start": 253,
      "end": 266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 265,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 262,
            "end": 265,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "a",
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
      "start": 267,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 281,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 273,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 276,
            "end": 281,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 276,
              "end": 279,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 276,
                "end": 277,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 278,
                "end": 279,
                "decorators": [],
                "name": "f",
                "optional": false
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
