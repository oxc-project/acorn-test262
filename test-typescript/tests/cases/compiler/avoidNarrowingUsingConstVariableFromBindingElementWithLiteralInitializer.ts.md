__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 65,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 65,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 19,
                "end": 65,
                "types": [
                  {
                    "type": "TSTupleType",
                    "start": 19,
                    "end": 40,
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "start": 20,
                        "end": 23,
                        "literal": {
                          "type": "Literal",
                          "start": 20,
                          "end": 23,
                          "raw": "\"a\"",
                          "value": "a"
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 25,
                        "end": 31
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 33,
                        "end": 39
                      }
                    ]
                  },
                  {
                    "type": "TSTupleType",
                    "start": 43,
                    "end": 65,
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "start": 44,
                        "end": 47,
                        "literal": {
                          "type": "Literal",
                          "start": 44,
                          "end": 47,
                          "raw": "\"b\"",
                          "value": "b"
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 49,
                        "end": 55
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 57,
                        "end": 64
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 188,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 75,
        "end": 188,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 114,
          "end": 188,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 118,
              "end": 144,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 124,
                  "end": 143,
                  "definite": false,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 124,
                    "end": 137,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 126,
                        "end": 135,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 131,
                          "decorators": [],
                          "name": "index",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 126,
                          "end": 135,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 126,
                            "end": 131,
                            "decorators": [],
                            "name": "index",
                            "optional": false
                          },
                          "optional": false,
                          "right": {
                            "type": "Literal",
                            "start": 134,
                            "end": 135,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      }
                    ]
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 143,
                    "decorators": [],
                    "name": "arg",
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "IfStatement",
              "start": 148,
              "end": 186,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 172,
                "end": 186,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 178,
                    "end": 182,
                    "expression": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 181,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 152,
                "end": 170,
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "start": 152,
                  "end": 162,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 155,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 161,
                    "decorators": [],
                    "name": "index",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 167,
                  "end": 170,
                  "raw": "\"a\"",
                  "value": "a"
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
          "start": 84,
          "end": 88,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 89,
            "end": 112,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 94,
                "end": 112,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 96,
                    "end": 110,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 101,
                      "decorators": [],
                      "name": "index",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 110,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 104,
                        "end": 110
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
