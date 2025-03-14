__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 77,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 77,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 54,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 50,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 53,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 75,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 67,
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
              "start": 67,
              "end": 75,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 75,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 72,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 71,
                      "end": 72,
                      "typeName": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
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
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 43,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 42,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 20,
              "end": 42,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 21,
                  "end": 31,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 24,
                      "end": 30
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 32,
                  "end": 41,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 34,
                      "end": 40
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
      "type": "TSExportAssignment",
      "start": 79,
      "end": 92,
      "expression": {
        "type": "Identifier",
        "start": 88,
        "end": 91,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "raw": "\"./foo_0\"",
          "value": "./foo_0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 41,
            "end": 54,
            "arguments": [
              {
                "type": "Literal",
                "start": 49,
                "end": 53,
                "raw": "true",
                "value": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 80,
            "end": 107,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 88,
                "end": 106,
                "properties": [
                  {
                    "type": "Property",
                    "start": 89,
                    "end": 98,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 92,
                      "end": 98,
                      "raw": "\"test\"",
                      "value": "test"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 100,
                    "end": 105,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 101,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 103,
                      "end": 105,
                      "raw": "42",
                      "value": 42
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 138,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 132,
                "end": 138
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 141,
            "end": 149,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 141,
              "end": 147,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 143,
                "end": 147,
                "decorators": [],
                "name": "test",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
