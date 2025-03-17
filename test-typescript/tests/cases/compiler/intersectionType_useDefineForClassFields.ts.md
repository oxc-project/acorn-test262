__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 14,
        "end": 50,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 21,
          "end": 42,
          "name": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSIntersectionType",
            "start": 26,
            "end": 42,
            "types": [
              {
                "type": "TSTypeOperator",
                "start": 26,
                "end": 33,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 32,
                  "end": 33,
                  "typeName": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
              }
            ]
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 45,
          "end": 48
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSIntersectionType",
          "start": 26,
          "end": 42,
          "types": [
            {
              "type": "TSTypeOperator",
              "start": 26,
              "end": 33,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 36,
              "end": 42
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "name": "bar",
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
          "start": 68,
          "end": 73,
          "name": "_p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 70,
            "end": 73,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 121,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 100,
            "end": 119,
            "argument": {
              "type": "TSAsExpression",
              "start": 107,
              "end": 118,
              "expression": {
                "type": "Literal",
                "start": 107,
                "end": 111,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 115,
                "end": 118
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 67,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 66,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 74,
        "end": 93,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 76,
          "end": 93,
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 78,
              "end": 91,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 85,
                  "end": 91,
                  "typeName": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 88,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 88,
                    "end": 91,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 89,
                        "end": 90,
                        "typeName": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 90,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 132,
        "name": "Baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 141,
        "end": 154,
        "callee": {
          "type": "Identifier",
          "start": 141,
          "end": 144,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 145,
            "end": 153,
            "properties": [
              {
                "type": "Property",
                "start": 147,
                "end": 151,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 150,
                  "end": 151,
                  "value": 1,
                  "raw": "1"
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
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 158,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
