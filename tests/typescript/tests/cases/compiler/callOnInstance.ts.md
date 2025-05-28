__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 254,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 20,
        "end": 28,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 22,
          "end": 28
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 88,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 86,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 69,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 70,
              "end": 86,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 71,
                  "end": 84,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 76,
                    "end": 84,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 78,
                      "end": 84
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 120,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 113,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 116,
            "end": 119,
            "callee": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 158,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 142,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 136,
                "end": 142
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 145,
            "end": 157,
            "callee": {
              "type": "NewExpression",
              "start": 146,
              "end": 154,
              "callee": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 152,
                  "end": 153,
                  "value": 1,
                  "raw": "1"
                }
              ]
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 160,
      "end": 207,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 178,
            "end": 205,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 189,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 189,
              "end": 205,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 190,
                  "end": 203,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 195,
                    "end": 203,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 197,
                      "end": 203
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 221,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 220,
        "callee": {
          "type": "NewExpression",
          "start": 209,
          "end": 217,
          "callee": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 215,
              "end": 216,
              "value": 1,
              "raw": "1"
            }
          ]
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
