__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 281,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 97,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 96,
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
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSLiteralType",
                  "start": 47,
                  "end": 52,
                  "literal": {
                    "type": "Literal",
                    "start": 47,
                    "end": 52,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
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
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 64,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 64,
                            "end": 72,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 66,
                              "end": 72
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                },
                "optional": false,
                "readonly": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 81,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 83,
                  "end": 95,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 84,
                      "end": 94,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 85,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 87,
                        "end": 94,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 98,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 118,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 118,
        "end": 121,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 120,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 281,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 152,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 152,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 153,
            "end": 168,
            "name": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSLiteralType",
              "start": 163,
              "end": 168,
              "literal": {
                "type": "Literal",
                "start": 163,
                "end": 168,
                "value": "foo",
                "raw": "\"foo\""
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 178,
        "end": 281,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 182,
            "end": 221,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 188,
                "end": 220,
                "id": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 195,
                  "decorators": [],
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 198,
                  "end": 220,
                  "callee": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 201,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 202,
                      "end": 219,
                      "object": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 214,
                        "decorators": [],
                        "name": "mappedObject",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 215,
                        "end": 218,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 224,
            "end": 256,
            "test": {
              "type": "BinaryExpression",
              "start": 228,
              "end": 243,
              "left": {
                "type": "Identifier",
                "start": 228,
                "end": 235,
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 239,
                "end": 243,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 249,
              "end": 256,
              "argument": null
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 259,
            "end": 279,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 265,
                "end": 278,
                "id": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 266,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 269,
                  "end": 278,
                  "object": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 276,
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
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
