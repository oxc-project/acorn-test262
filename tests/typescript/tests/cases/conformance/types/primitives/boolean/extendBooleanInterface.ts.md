__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boolean",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doStuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 31
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 24,
            "end": 42
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doOtherStuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 59
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 61
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 60,
                  "end": 61
                }
              ],
              "start": 59,
              "end": 62
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 67
                    },
                    "typeArguments": null,
                    "start": 66,
                    "end": 67
                  },
                  "start": 64,
                  "end": 67
                },
                "start": 63,
                "end": 67
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 71
                },
                "typeArguments": null,
                "start": 70,
                "end": 71
              },
              "start": 68,
              "end": 71
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 47,
            "end": 72
          }
        ],
        "start": 18,
        "end": 74
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 84,
            "end": 88
          },
          "definite": false,
          "start": 80,
          "end": 88
        }
      ],
      "declare": false,
      "start": 76,
      "end": 89
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "start": 94,
            "end": 103
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "doStuff",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 115
              },
              "optional": false,
              "computed": false,
              "start": 106,
              "end": 115
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 106,
            "end": 117
          },
          "definite": false,
          "start": 94,
          "end": 117
        }
      ],
      "declare": false,
      "start": 90,
      "end": 118
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 126,
                "end": 132
              },
              "start": 124,
              "end": 132
            },
            "start": 123,
            "end": 132
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 136
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "doOtherStuff",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 149
              },
              "optional": false,
              "computed": false,
              "start": 135,
              "end": 149
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hm",
                "raw": "'hm'",
                "start": 150,
                "end": 154
              }
            ],
            "optional": false,
            "start": 135,
            "end": 155
          },
          "definite": false,
          "start": 123,
          "end": 155
        }
      ],
      "declare": false,
      "start": 119,
      "end": 156
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "start": 161,
            "end": 170
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 174
              },
              "property": {
                "type": "Literal",
                "value": "doStuff",
                "raw": "'doStuff'",
                "start": 175,
                "end": 184
              },
              "optional": false,
              "computed": true,
              "start": 173,
              "end": 185
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 173,
            "end": 187
          },
          "definite": false,
          "start": 161,
          "end": 187
        }
      ],
      "declare": false,
      "start": 157,
      "end": 188
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 196,
                "end": 202
              },
              "start": 194,
              "end": 202
            },
            "start": 193,
            "end": 202
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 206
              },
              "property": {
                "type": "Literal",
                "value": "doOtherStuff",
                "raw": "'doOtherStuff'",
                "start": 207,
                "end": 221
              },
              "optional": false,
              "computed": true,
              "start": 205,
              "end": 222
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hm",
                "raw": "'hm'",
                "start": 223,
                "end": 227
              }
            ],
            "optional": false,
            "start": 205,
            "end": 228
          },
          "definite": false,
          "start": 193,
          "end": 228
        }
      ],
      "declare": false,
      "start": 189,
      "end": 229
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 229
}
```
