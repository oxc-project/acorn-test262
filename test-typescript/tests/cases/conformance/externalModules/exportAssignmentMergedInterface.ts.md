foo_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 49,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 17,
            "end": 35,
            "params": [
              {
                "type": "Identifier",
                "start": 18,
                "end": 27,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 19,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 21,
                    "end": 27
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 34,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 30,
                "end": 34
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 47,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 130,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 130,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 67,
            "end": 87,
            "params": [
              {
                "type": "Identifier",
                "start": 68,
                "end": 77,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 69,
                  "end": 77,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 71,
                    "end": 77
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 86,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 80,
                "end": 86
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 100,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 99,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 92,
                "end": 99
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 102,
            "end": 128,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 105,
                "end": 127,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 106,
                    "end": 116,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 109,
                        "end": 115
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 117,
                    "end": 126,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 118,
                      "end": 126,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 120,
                        "end": 126
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 131,
      "end": 144,
      "expression": {
        "type": "Identifier",
        "start": 140,
        "end": 143,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
foo_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
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
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 43,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 43,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 43,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 55,
      "expression": {
        "type": "CallExpression",
        "start": 45,
        "end": 54,
        "arguments": [
          {
            "type": "Literal",
            "start": 47,
            "end": 53,
            "raw": "\"test\"",
            "value": "test"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 62,
      "expression": {
        "type": "CallExpression",
        "start": 56,
        "end": 61,
        "arguments": [
          {
            "type": "Literal",
            "start": 58,
            "end": 60,
            "raw": "42",
            "value": 42
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 56,
          "end": 57,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 79,
            "end": 82,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 84,
      "end": 96,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 93,
        "end": 96,
        "body": []
      },
      "test": {
        "type": "UnaryExpression",
        "start": 87,
        "end": 92,
        "argument": {
          "type": "UnaryExpression",
          "start": 88,
          "end": 92,
          "argument": {
            "type": "MemberExpression",
            "start": 89,
            "end": 92,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          },
          "operator": "!",
          "prefix": true
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 105,
            "end": 117,
            "properties": [
              {
                "type": "Property",
                "start": 106,
                "end": 110,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
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
                  "start": 109,
                  "end": 110,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 112,
                "end": 116,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 115,
                  "end": 116,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 119,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 119,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 119,
          "end": 120,
          "decorators": [],
          "name": "z",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 123,
          "end": 126,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "d",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "module"
}
```
