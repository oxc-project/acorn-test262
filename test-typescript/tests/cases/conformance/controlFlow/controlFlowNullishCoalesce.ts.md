__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 205,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 48,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 63,
      "expression": {
        "type": "LogicalExpression",
        "start": 50,
        "end": 62,
        "left": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "??",
        "right": {
          "type": "AssignmentExpression",
          "start": 56,
          "end": 61,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 60,
            "end": 61,
            "value": 1,
            "raw": "1"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 77,
      "expression": {
        "type": "CallExpression",
        "start": 64,
        "end": 76,
        "callee": {
          "type": "MemberExpression",
          "start": 64,
          "end": 74,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 66,
            "end": 74,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 140,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 140,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 115,
                "end": 140,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 115,
                    "end": 128,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 117,
                        "end": 126,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 118,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 118,
                          "end": 126,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 120,
                            "end": 126
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 131,
                    "end": 140
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 172,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 172,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 149,
                "end": 172,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 149,
                    "end": 162,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 151,
                        "end": 160,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 152,
                          "end": 160,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 154,
                            "end": 160
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 165,
                    "end": 172
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 174,
      "end": 203,
      "test": {
        "type": "AssignmentExpression",
        "start": 178,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 178,
          "end": 179,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 182,
          "end": 191,
          "left": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "??",
          "right": {
            "type": "Literal",
            "start": 187,
            "end": 191,
            "value": true,
            "raw": "true"
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 193,
        "end": 203,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 199,
            "end": 201,
            "expression": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
