__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 188,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 187,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 57,
        "end": 187,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 78,
          "end": 187,
          "body": [
            {
              "type": "IfStatement",
              "start": 84,
              "end": 153,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 114,
                "end": 153,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 124,
                    "end": 147,
                    "argument": {
                      "type": "NewExpression",
                      "start": 131,
                      "end": 146,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 141,
                          "end": 142,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 144,
                          "end": 145,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 140,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "test": {
                "type": "UnaryExpression",
                "start": 88,
                "end": 112,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 90,
                  "end": 111,
                  "operator": "instanceof",
                  "left": {
                    "type": "ThisExpression",
                    "start": 90,
                    "end": 94
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 111,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "!",
                "prefix": true
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 158,
              "end": 169,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 158,
                "end": 168,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 158,
                  "end": 164,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 158,
                    "end": 162
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 168,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 174,
              "end": 185,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 174,
                "end": 184,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 174,
                  "end": 180,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 174,
                    "end": 178
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 71,
          "decorators": [],
          "name": "Point",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 30,
        "raw": "\"./source\"",
        "value": "./source"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 13,
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 13,
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 136,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 68,
        "end": 136,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 90,
          "end": 136,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 96,
              "end": 134,
              "argument": {
                "type": "CallExpression",
                "start": 103,
                "end": 133,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "start": 113,
                    "end": 132,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 113,
                      "end": 121,
                      "operator": "**",
                      "left": {
                        "type": "MemberExpression",
                        "start": 113,
                        "end": 116,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 114,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 120,
                        "end": 121,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 124,
                      "end": 132,
                      "operator": "**",
                      "left": {
                        "type": "MemberExpression",
                        "start": 124,
                        "end": 127,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 125,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 127,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 131,
                        "end": 132,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 103,
                  "end": 112,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 107,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 112,
                    "decorators": [],
                    "name": "sqrt",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 77,
          "end": 86,
          "decorators": [],
          "name": "magnitude",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
