__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 55,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 53,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 52,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 31,
                "end": 52,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 32,
                    "end": 41,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
                  }
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 65,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 68,
            "end": 137,
            "properties": [
              {
                "type": "Property",
                "start": 74,
                "end": 106,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 75,
                  "end": 81,
                  "operator": "+",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 76,
                    "end": 81,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 82,
                  "end": 106,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 83,
                      "end": 84,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 86,
                    "end": 106,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 88,
                        "end": 104,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 95,
                          "end": 103,
                          "object": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 96,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 103,
                            "name": "length",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 112,
                "end": 135,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 113,
                  "end": 119,
                  "operator": "+",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 114,
                    "end": 119,
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 122,
                  "end": 135,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "MemberExpression",
                    "start": 127,
                    "end": 135,
                    "object": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 135,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
