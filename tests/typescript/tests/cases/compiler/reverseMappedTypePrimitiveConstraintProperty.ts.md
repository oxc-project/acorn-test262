__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 86,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 83,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 35,
              "end": 83,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 37,
                  "end": 50,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 41,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 43,
                      "end": 49
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 51,
                  "end": 81,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 57,
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 59,
                      "end": 81,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 61,
                          "end": 79,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 71,
                            "decorators": [],
                            "name": "nestedProp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 71,
                            "end": 79,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 73,
                              "end": 79
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
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
          "start": 87,
          "end": 116,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 90,
            "end": 116,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 92,
              "end": 116,
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 100,
                "end": 107,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 106,
                  "end": 107,
                  "typeName": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 110,
                "end": 114,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 110,
                  "end": 111,
                  "typeName": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 112,
                  "end": 113,
                  "typeName": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 117,
        "end": 120,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 119,
          "end": 120,
          "typeName": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 258,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 135,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 138,
            "end": 257,
            "callee": {
              "type": "Identifier",
              "start": 138,
              "end": 142,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 143,
                "end": 256,
                "properties": [
                  {
                    "type": "Property",
                    "start": 147,
                    "end": 158,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 151,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 153,
                      "end": 158,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 201,
                    "end": 237,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 207,
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 209,
                      "end": 237,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 215,
                          "end": 232,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 215,
                            "end": 225,
                            "decorators": [],
                            "name": "nestedProp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 227,
                            "end": 232,
                            "value": "bar",
                            "raw": "\"bar\""
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
                  },
                  {
                    "type": "Property",
                    "start": 241,
                    "end": 253,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 246,
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 248,
                      "end": 253,
                      "value": "baz",
                      "raw": "\"baz\""
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
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
