callOnInstance.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "D",
        "optional": false
      },
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
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 88,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 86,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 69,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 70,
              "end": 86,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "D",
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
      "start": 128,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 157,
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "NewExpression",
              "start": 146,
              "end": 154,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 152,
                  "end": 153,
                  "raw": "1",
                  "value": 1
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "D",
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
      "type": "ClassDeclaration",
      "start": 160,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 178,
            "end": 205,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 189,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 189,
              "end": 205,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 221,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 220,
        "arguments": [],
        "callee": {
          "type": "NewExpression",
          "start": 209,
          "end": 217,
          "arguments": [
            {
              "type": "Literal",
              "start": 215,
              "end": 216,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
