__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 31,
            "name": "fn1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 34,
            "end": 68,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 60,
                "name": "options",
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
                          "name": "headers",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 65,
              "end": 68,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "fn1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 83,
                  "name": "headers",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 90,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 92,
                        "end": 93,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 110,
            "name": "fn2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 113,
            "end": 138,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 114,
                "end": 130,
                "properties": [
                  {
                    "type": "Property",
                    "start": 116,
                    "end": 128,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 123,
                      "name": "headers",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 116,
                      "end": 128,
                      "left": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 123,
                        "name": "headers",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 126,
                        "end": 128,
                        "properties": []
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 135,
              "end": 138,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "fn2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 153,
                  "name": "headers",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 160,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 162,
                        "end": 163,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
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
