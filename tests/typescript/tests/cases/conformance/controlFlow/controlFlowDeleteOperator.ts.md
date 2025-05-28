__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 237,
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
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 237,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 81,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 80,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 69,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 26,
                      "end": 69,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 28,
                          "end": 48,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 28,
                            "end": 29,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 30,
                            "end": 47,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 32,
                              "end": 47,
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 32,
                                  "end": 38
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 41,
                                  "end": 47
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 49,
                          "end": 67,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 49,
                            "end": 50,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 50,
                            "end": 67,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 52,
                              "end": 67,
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 52,
                                  "end": 58
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 61,
                                  "end": 67
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 72,
                  "end": 80,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 74,
                      "end": 78,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 77,
                        "end": 78,
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
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 90,
            "expression": {
              "type": "MemberExpression",
              "start": 86,
              "end": 89,
              "object": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 95,
            "end": 99,
            "expression": {
              "type": "MemberExpression",
              "start": 95,
              "end": 98,
              "object": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 104,
            "end": 112,
            "expression": {
              "type": "AssignmentExpression",
              "start": 104,
              "end": 111,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 104,
                "end": 107,
                "object": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 110,
                "end": 111,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 117,
            "end": 125,
            "expression": {
              "type": "AssignmentExpression",
              "start": 117,
              "end": 124,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 117,
                "end": 120,
                "object": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 123,
                "end": 124,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 130,
            "end": 134,
            "expression": {
              "type": "MemberExpression",
              "start": 130,
              "end": 133,
              "object": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 143,
            "expression": {
              "type": "MemberExpression",
              "start": 139,
              "end": 142,
              "object": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 148,
            "end": 159,
            "expression": {
              "type": "UnaryExpression",
              "start": 148,
              "end": 158,
              "operator": "delete",
              "argument": {
                "type": "MemberExpression",
                "start": 155,
                "end": 158,
                "object": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "prefix": true
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 164,
            "end": 175,
            "expression": {
              "type": "UnaryExpression",
              "start": 164,
              "end": 174,
              "operator": "delete",
              "argument": {
                "type": "MemberExpression",
                "start": 171,
                "end": 174,
                "object": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "prefix": true
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 180,
            "end": 184,
            "expression": {
              "type": "MemberExpression",
              "start": 180,
              "end": 183,
              "object": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 189,
            "end": 193,
            "expression": {
              "type": "MemberExpression",
              "start": 189,
              "end": 192,
              "object": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 198,
            "end": 200,
            "expression": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 214,
            "expression": {
              "type": "UnaryExpression",
              "start": 205,
              "end": 213,
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 233,
            "end": 235,
            "expression": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
