__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 42,
      "async": false,
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 18,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 17,
              "end": 18,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 20,
          "end": 24,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 24,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 23,
              "end": 24,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 25,
        "end": 28,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 27,
          "end": 28,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 81,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 43,
        "end": 81,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 43,
          "end": 76,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 43,
            "end": 73,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 43,
              "end": 71,
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 48,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 50,
                        "end": 56,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 51,
                            "end": 55,
                            "raw": "null",
                            "value": null,
                            "regex": null,
                            "bigint": null
                          }
                        ]
                      }
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 65,
                        "end": 68,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 66,
                            "end": 67,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 74,
            "end": 75,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 79,
          "end": 81,
          "raw": "\"\"",
          "value": "",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 126,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 88,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 88,
          "end": 121,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 88,
            "end": 118,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 88,
              "end": 116,
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 95,
                        "end": 98,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 96,
                            "end": 97,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        ]
                      }
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 105,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrayExpression",
                        "start": 107,
                        "end": 113,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 108,
                            "end": 112,
                            "raw": "null",
                            "value": null,
                            "regex": null,
                            "bigint": null
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 119,
            "end": 120,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 124,
          "end": 126,
          "raw": "\"\"",
          "value": "",
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
