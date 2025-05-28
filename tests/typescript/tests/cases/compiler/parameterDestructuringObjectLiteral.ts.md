__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 169,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 69,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 31,
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 34,
            "end": 68,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 53,
                          "decorators": [],
                          "name": "headers",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 65,
              "end": 68,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 99,
      "expression": {
        "type": "CallExpression",
        "start": 70,
        "end": 98,
        "callee": {
          "type": "Identifier",
          "start": 70,
          "end": 73,
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 83,
                  "decorators": [],
                  "name": "headers",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 85,
                  "end": 95,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 87,
                      "end": 93,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 90,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 92,
                        "end": 93,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 139,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 110,
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 113,
            "end": 138,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 114,
                "end": 130,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 116,
                    "end": 128,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 123,
                      "decorators": [],
                      "name": "headers",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 126,
                        "end": 128,
                        "properties": []
                      },
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 135,
              "end": 138,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 169,
      "expression": {
        "type": "CallExpression",
        "start": 140,
        "end": 168,
        "callee": {
          "type": "Identifier",
          "start": 140,
          "end": 143,
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 153,
                  "decorators": [],
                  "name": "headers",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 155,
                  "end": 165,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 157,
                      "end": 163,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 160,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 162,
                        "end": 163,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
