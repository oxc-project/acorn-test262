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
        "name": "Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
              "start": 23,
              "end": 30
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
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 41
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doOtherStuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 58
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
                    "start": 59,
                    "end": 60
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 59,
                  "end": 60
                }
              ],
              "start": 58,
              "end": 61
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
                      "start": 64,
                      "end": 65
                    },
                    "typeArguments": null,
                    "start": 64,
                    "end": 65
                  },
                  "start": 63,
                  "end": 65
                },
                "start": 62,
                "end": 65
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
                  "start": 68,
                  "end": 69
                },
                "typeArguments": null,
                "start": 68,
                "end": 69
              },
              "start": 66,
              "end": 69
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 46,
            "end": 70
          }
        ],
        "start": 17,
        "end": 72
      },
      "declare": false,
      "start": 0,
      "end": 72
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
            "start": 78,
            "end": 79
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 82,
            "end": 83
          },
          "definite": false,
          "start": 78,
          "end": 83
        }
      ],
      "declare": false,
      "start": 74,
      "end": 84
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
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
            },
            "start": 89,
            "end": 98
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
                "start": 101,
                "end": 102
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "doStuff",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 110
              },
              "optional": false,
              "computed": false,
              "start": 101,
              "end": 110
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 101,
            "end": 112
          },
          "definite": false,
          "start": 89,
          "end": 112
        }
      ],
      "declare": false,
      "start": 85,
      "end": 113
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
                "start": 121,
                "end": 127
              },
              "start": 119,
              "end": 127
            },
            "start": 118,
            "end": 127
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
                "start": 130,
                "end": 131
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "doOtherStuff",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 144
              },
              "optional": false,
              "computed": false,
              "start": 130,
              "end": 144
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hm",
                "raw": "'hm'",
                "start": 145,
                "end": 149
              }
            ],
            "optional": false,
            "start": 130,
            "end": 150
          },
          "definite": false,
          "start": 118,
          "end": 150
        }
      ],
      "declare": false,
      "start": 114,
      "end": 151
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
                "start": 159,
                "end": 165
              },
              "start": 157,
              "end": 165
            },
            "start": 156,
            "end": 165
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
                "start": 168,
                "end": 169
              },
              "property": {
                "type": "Literal",
                "value": "doStuff",
                "raw": "'doStuff'",
                "start": 170,
                "end": 179
              },
              "optional": false,
              "computed": true,
              "start": 168,
              "end": 180
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 168,
            "end": 182
          },
          "definite": false,
          "start": 156,
          "end": 182
        }
      ],
      "declare": false,
      "start": 152,
      "end": 183
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
                "start": 191,
                "end": 197
              },
              "start": 189,
              "end": 197
            },
            "start": 188,
            "end": 197
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
                "start": 200,
                "end": 201
              },
              "property": {
                "type": "Literal",
                "value": "doOtherStuff",
                "raw": "'doOtherStuff'",
                "start": 202,
                "end": 216
              },
              "optional": false,
              "computed": true,
              "start": 200,
              "end": 217
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hm",
                "raw": "'hm'",
                "start": 218,
                "end": 222
              }
            ],
            "optional": false,
            "start": 200,
            "end": 223
          },
          "definite": false,
          "start": 188,
          "end": 223
        }
      ],
      "declare": false,
      "start": 184,
      "end": 224
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 224
}
```
