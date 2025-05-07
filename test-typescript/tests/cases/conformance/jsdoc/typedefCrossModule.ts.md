__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 35,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 20,
                "end": 35,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 22,
                    "end": 34,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 29,
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 34,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 31,
                        "end": 34
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
  "start": 149,
  "end": 200,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 167,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 149,
        "end": 167,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 149,
          "end": 163,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 149,
            "end": 155,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 156,
            "end": 163,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 168,
      "end": 199,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 181,
        "end": 199,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 187,
            "end": 197,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 187,
              "end": 197,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 187,
                "end": 193,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 187,
                  "end": 191
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 196,
                "end": 197,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
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
        "start": 177,
        "end": 178,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
  "start": 150,
  "end": 189,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 150,
      "end": 188,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 157,
        "end": 188,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 170,
          "end": 188,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 176,
              "end": 186,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 176,
                "end": 186,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 176,
                  "end": 182,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 176,
                    "end": 180
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 182,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 185,
                  "end": 186,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
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
          "start": 166,
          "end": 167,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
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
  "start": 150,
  "end": 192,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 150,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 150,
          "end": 159,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 150,
            "end": 157,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 162,
          "end": 191,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 173,
            "end": 191,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 179,
                "end": 189,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 179,
                  "end": 189,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 179,
                    "end": 185,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 179,
                      "end": 183
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 185,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 188,
                    "end": 189,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
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
  "start": 37,
  "end": 183,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 46,
            "decorators": [],
            "name": "both1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 49,
            "end": 68,
            "properties": [
              {
                "type": "Property",
                "start": 51,
                "end": 60,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 55,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 57,
                  "end": 60,
                  "raw": "'a'",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 62,
                "end": 66,
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
                  "type": "Literal",
                  "start": 65,
                  "end": 66,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 116,
            "decorators": [],
            "name": "both2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 119,
            "end": 124,
            "decorators": [],
            "name": "both1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 172,
            "decorators": [],
            "name": "both3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 175,
            "end": 180,
            "decorators": [],
            "name": "both2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
