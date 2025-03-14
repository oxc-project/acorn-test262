classWithStaticFieldInParameterInitializer.3.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 204,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 66,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 66,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 124,
      "expression": {
        "type": "CallExpression",
        "start": 67,
        "end": 123,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 68,
          "end": 120,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 110,
            "end": 120,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 112,
                "end": 118,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 116,
                    "end": 117,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 69,
              "end": 105,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "ClassExpression",
                "start": 73,
                "end": 105,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 89,
                  "end": 105,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 91,
                      "end": 103,
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 99,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": true,
                      "value": {
                        "type": "Literal",
                        "start": 102,
                        "end": 103,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": null,
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          ]
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 136,
            "end": 138,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 204,
      "expression": {
        "type": "CallExpression",
        "start": 140,
        "end": 203,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 141,
          "end": 200,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 190,
            "end": 200,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 192,
                "end": 198,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 196,
                    "end": 197,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 197,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 142,
              "end": 178,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "ClassExpression",
                "start": 146,
                "end": 178,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 162,
                  "end": 178,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 164,
                      "end": 176,
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": true,
                      "value": {
                        "type": "Literal",
                        "start": 175,
                        "end": 176,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": null,
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            },
            {
              "type": "AssignmentPattern",
              "start": 180,
              "end": 185,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          ]
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
