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
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 20,
        "end": 28,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 22,
          "end": 28
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 86,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 69,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 70,
              "end": 86,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 71,
                  "end": 84,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 76,
                    "end": 84,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 78,
                      "end": 84
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 113,
            "name": "s1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 116,
            "end": 119,
            "callee": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "name": "D",
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
      "start": 128,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 142,
            "name": "s2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 136,
                "end": 142
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 152,
                  "end": 153,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "typeArguments": null
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
      "type": "ClassDeclaration",
      "start": 160,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 178,
            "end": 205,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 189,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 189,
              "end": 205,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 190,
                  "end": 203,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 195,
                    "end": 203,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 197,
                      "end": 203
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 215,
              "end": 216,
              "value": 1,
              "raw": "1"
            }
          ],
          "typeArguments": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
