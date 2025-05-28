__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 290,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 28,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 28,
        "end": 68,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 67,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 39,
              "end": 67,
              "typeName": {
                "type": "Identifier",
                "start": 39,
                "end": 45,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 45,
                "end": 67,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 46,
                    "end": 61,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 46,
                        "end": 52
                      },
                      {
                        "type": "TSSymbolKeyword",
                        "start": 55,
                        "end": 61
                      }
                    ]
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 63,
                    "end": 66
                  }
                ]
              }
            },
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
          "start": 69,
          "end": 78,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 78,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 77,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
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
          "start": 80,
          "end": 98,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 81,
            "end": 98,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 83,
              "end": 98,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 83,
                  "end": 89
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 92,
                  "end": 98
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 132,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 106,
            "end": 121,
            "expression": {
              "type": "AssignmentExpression",
              "start": 106,
              "end": 120,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 106,
                "end": 115,
                "object": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 112,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 118,
                "end": 120,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 134,
      "end": 290,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 147,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 147,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 201,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSIntersectionType",
              "start": 158,
              "end": 201,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 158,
                  "end": 166,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 158,
                    "end": 164
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 169,
                  "end": 201,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 171,
                      "end": 199,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 172,
                          "end": 181,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 173,
                            "end": 181,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 175,
                              "end": 181
                            }
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 182,
                        "end": 199,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 184,
                          "end": 199,
                          "types": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 184,
                              "end": 190
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 193,
                              "end": 199
                            }
                          ]
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
                }
              ]
            },
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
          "start": 203,
          "end": 212,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 209,
            "end": 212,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 211,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
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
          "start": 214,
          "end": 232,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 232,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 217,
              "end": 232,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 217,
                  "end": 223
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 226,
                  "end": 232
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 234,
        "end": 290,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 240,
            "end": 254,
            "expression": {
              "type": "AssignmentExpression",
              "start": 240,
              "end": 253,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 240,
                "end": 249,
                "object": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 246,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 252,
                "end": 253,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 268,
            "end": 282,
            "expression": {
              "type": "AssignmentExpression",
              "start": 268,
              "end": 281,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 268,
                "end": 277,
                "object": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 274,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 275,
                  "end": 276,
                  "value": 1,
                  "raw": "1"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 280,
                "end": 281,
                "value": 1,
                "raw": "1"
              }
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
