__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 259,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
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
          "start": 87,
          "end": 116,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 90,
            "end": 116,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 92,
              "end": 116,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 95,
                "end": 107,
                "name": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "nested",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "nestedProp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 135,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 138,
            "end": 257,
            "callee": {
              "type": "Identifier",
              "start": 138,
              "end": 142,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 151,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 153,
                      "end": 158,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 201,
                    "end": 237,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 207,
                      "name": "nested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 215,
                            "end": 225,
                            "name": "nestedProp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 227,
                            "end": 232,
                            "value": "bar",
                            "raw": "\"bar\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 241,
                    "end": 253,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 246,
                      "name": "extra",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 248,
                      "end": 253,
                      "value": "baz",
                      "raw": "\"baz\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
