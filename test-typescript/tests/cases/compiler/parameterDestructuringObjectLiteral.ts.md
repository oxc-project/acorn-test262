parameterDestructuringObjectLiteral.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 170,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 31,
            "decorators": [],
            "name": "fn1",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 34,
            "end": 68,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 65,
              "end": 68,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 60,
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 44,
                    "end": 60,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 46,
                        "end": 58,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 53,
                          "decorators": [],
                          "name": "headers",
                          "optional": false
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 54,
                          "end": 58,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 56,
                            "end": 58,
                            "members": []
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 99,
      "expression": {
        "type": "CallExpression",
        "start": 70,
        "end": 98,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 74,
            "end": 97,
            "properties": [
              {
                "type": "Property",
                "start": 76,
                "end": 95,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 83,
                  "decorators": [],
                  "name": "headers",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 85,
                  "end": 95,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 87,
                      "end": 93,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 90,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 92,
                        "end": 93,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 70,
          "end": 73,
          "decorators": [],
          "name": "fn1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 110,
            "decorators": [],
            "name": "fn2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 113,
            "end": 138,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 135,
              "end": 138,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 114,
                "end": 130,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 116,
                    "end": 128,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 123,
                      "decorators": [],
                      "name": "headers",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 116,
                      "end": 128,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 123,
                        "decorators": [],
                        "name": "headers",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "ObjectExpression",
                        "start": 126,
                        "end": 128,
                        "properties": []
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 169,
      "expression": {
        "type": "CallExpression",
        "start": 140,
        "end": 168,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 144,
            "end": 167,
            "properties": [
              {
                "type": "Property",
                "start": 146,
                "end": 165,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 153,
                  "decorators": [],
                  "name": "headers",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 155,
                  "end": 165,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 157,
                      "end": 163,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 160,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 162,
                        "end": 163,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 140,
          "end": 143,
          "decorators": [],
          "name": "fn2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
