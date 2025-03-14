override6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 242,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 104,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 104,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 37,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              }
            },
            "value": {
              "type": "Literal",
              "start": 35,
              "end": 36,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 102,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 53,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 102,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 102,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 54,
                  "end": 72,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 72,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
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
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 74,
                  "end": 92,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 92,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 86,
                        "end": 92
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 241,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 241,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 152,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 140,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 142,
                "end": 148
              }
            },
            "value": {
              "type": "Literal",
              "start": 151,
              "end": 152,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 157,
            "end": 239,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 168,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 168,
              "end": 239,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 239,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 219,
                    "end": 233,
                    "expression": {
                      "type": "CallExpression",
                      "start": 219,
                      "end": 233,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 225,
                          "end": 228,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        {
                          "type": "Literal",
                          "start": 230,
                          "end": 232,
                          "raw": "42",
                          "value": 42
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 219,
                        "end": 224
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 169,
                  "end": 187,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 187,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 179,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 189,
                  "end": 207,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 207,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 199,
                      "end": 207,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 201,
                        "end": 207
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
