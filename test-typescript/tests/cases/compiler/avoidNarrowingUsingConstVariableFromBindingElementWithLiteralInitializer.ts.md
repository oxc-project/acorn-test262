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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 65,
            "name": "foo",
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
                          "value": "a",
                          "raw": "\"a\""
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
                          "value": "b",
                          "raw": "\"b\""
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
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 188,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 75,
        "end": 188,
        "id": {
          "type": "Identifier",
          "start": 84,
          "end": 88,
          "name": "test",
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
            "start": 89,
            "end": 112,
            "name": "arg",
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
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 101,
                      "name": "index",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 110,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 104,
                        "end": 110
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
                  "id": {
                    "type": "ObjectPattern",
                    "start": 124,
                    "end": 137,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 126,
                        "end": 135,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 131,
                          "name": "index",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 126,
                          "end": 135,
                          "left": {
                            "type": "Identifier",
                            "start": 126,
                            "end": 131,
                            "name": "index",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 134,
                            "end": 135,
                            "value": 0,
                            "raw": "0"
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
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 143,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "IfStatement",
              "start": 148,
              "end": 186,
              "test": {
                "type": "BinaryExpression",
                "start": 152,
                "end": 170,
                "left": {
                  "type": "MemberExpression",
                  "start": 152,
                  "end": 162,
                  "object": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 155,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 161,
                    "name": "index",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 167,
                  "end": 170,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
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
                      "name": "foo",
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
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
