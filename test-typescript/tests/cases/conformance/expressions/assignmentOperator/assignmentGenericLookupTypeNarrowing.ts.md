assignmentGenericLookupTypeNarrowing.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 282,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 74,
            "decorators": [],
            "name": "mappedObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 74,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 40,
                "end": 74,
                "constraint": {
                  "type": "TSLiteralType",
                  "start": 47,
                  "end": 52,
                  "literal": {
                    "type": "Literal",
                    "start": 47,
                    "end": 52,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 55,
                  "end": 73,
                  "types": [
                    {
                      "type": "TSNullKeyword",
                      "start": 55,
                      "end": 59
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 62,
                      "end": 73,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 63,
                          "end": 72,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 64,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 64,
                            "end": 72,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 66,
                              "end": 72
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 77,
            "end": 96,
            "properties": [
              {
                "type": "Property",
                "start": 78,
                "end": 95,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 81,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 83,
                  "end": 95,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 84,
                      "end": 94,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 85,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 87,
                        "end": 94,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 98,
      "end": 138,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 118,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 122,
          "end": 126,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 126,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 126,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 127,
        "end": 137,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 129,
          "end": 137,
          "types": [
            {
              "type": "TSNullKeyword",
              "start": 129,
              "end": 133
            },
            {
              "type": "TSTypeReference",
              "start": 136,
              "end": 137,
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 118,
        "end": 121,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 120,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 281,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 178,
        "end": 281,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 182,
            "end": 221,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 188,
                "end": 220,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 195,
                  "decorators": [],
                  "name": "element",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 198,
                  "end": 220,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 202,
                      "end": 219,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 214,
                        "decorators": [],
                        "name": "mappedObject",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 215,
                        "end": 218,
                        "decorators": [],
                        "name": "key",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 201,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 224,
            "end": 256,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 249,
              "end": 256,
              "argument": null
            },
            "test": {
              "type": "BinaryExpression",
              "start": 228,
              "end": 243,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 228,
                "end": 235,
                "decorators": [],
                "name": "element",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 239,
                "end": 243,
                "raw": "null",
                "value": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 259,
            "end": 279,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 265,
                "end": 278,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 266,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 269,
                  "end": 278,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 276,
                    "decorators": [],
                    "name": "element",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 152,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 170,
          "end": 176,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 176,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 176,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 152,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 153,
            "end": 168,
            "const": false,
            "constraint": {
              "type": "TSLiteralType",
              "start": 163,
              "end": 168,
              "literal": {
                "type": "Literal",
                "start": 163,
                "end": 168,
                "raw": "\"foo\"",
                "value": "foo"
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
