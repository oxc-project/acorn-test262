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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeName": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
              "typeName": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
      "expression": false
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
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 48,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
            "property": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Literal",
            "start": 74,
            "end": 75,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
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
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 105,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
            "property": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Literal",
            "start": 119,
            "end": 120,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
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
