__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 14,
          "end": 18,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 18,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 17,
              "end": 18,
              "typeName": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 20,
          "end": 24,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 24,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 23,
              "end": 24,
              "typeName": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 42,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 31,
            "end": 40,
            "argument": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 25,
        "end": 28,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 27,
          "end": 28,
          "typeName": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 81,
      "expression": {
        "type": "AssignmentExpression",
        "start": 43,
        "end": 81,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 43,
          "end": 76,
          "object": {
            "type": "MemberExpression",
            "start": 43,
            "end": 73,
            "object": {
              "type": "CallExpression",
              "start": 43,
              "end": 71,
              "callee": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 45,
                  "end": 58,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 47,
                      "end": 56,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 48,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "start": 50,
                        "end": 56,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 51,
                            "end": 55,
                            "value": null,
                            "raw": "null"
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 60,
                  "end": 70,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 62,
                      "end": 68,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "start": 65,
                        "end": 68,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 66,
                            "end": 67,
                            "value": 1,
                            "raw": "1"
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
            "property": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 74,
            "end": 75,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 79,
          "end": 81,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 126,
      "expression": {
        "type": "AssignmentExpression",
        "start": 88,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 88,
          "end": 121,
          "object": {
            "type": "MemberExpression",
            "start": 88,
            "end": 118,
            "object": {
              "type": "CallExpression",
              "start": 88,
              "end": 116,
              "callee": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 90,
                  "end": 100,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 92,
                      "end": 98,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "start": 95,
                        "end": 98,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 96,
                            "end": 97,
                            "value": 1,
                            "raw": "1"
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 102,
                  "end": 115,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 104,
                      "end": 113,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 105,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "start": 107,
                        "end": 113,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 108,
                            "end": 112,
                            "value": null,
                            "raw": "null"
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
            "property": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 119,
            "end": 120,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 124,
          "end": 126,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
