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
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "name": "foo",
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
          "start": 97,
          "end": 98,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 103,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 112,
            "end": 118,
            "callee": {
              "type": "Identifier",
              "start": 112,
              "end": 115,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 116,
                "end": 117,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 150,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 162,
        "end": 182,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 168,
            "end": 171,
            "typeParameters": null,
            "params": [],
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 176,
            "end": 180,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
      "start": 183,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 191,
            "name": "i",
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 199,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 202,
            "end": 205,
            "callee": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 213,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 216,
            "end": 221,
            "callee": {
              "type": "MemberExpression",
              "start": 216,
              "end": 219,
              "object": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 251,
            "name": "a",
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
                    "typeParameters": null,
                    "params": [],
                    "returnType": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 245,
                    "end": 249,
                    "key": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
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
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 262,
            "end": 265,
            "callee": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 273,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 276,
            "end": 281,
            "callee": {
              "type": "MemberExpression",
              "start": 276,
              "end": 279,
              "object": {
                "type": "Identifier",
                "start": 276,
                "end": 277,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 278,
                "end": 279,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
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
