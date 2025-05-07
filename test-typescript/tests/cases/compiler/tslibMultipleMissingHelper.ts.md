__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 49,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 49,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 46,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 40,
            "end": 46,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 41,
                "end": 45
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 88,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 88,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 70,
        "end": 85,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 72,
          "end": 85,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 79,
            "end": 85,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 80,
                "end": 84
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 72,
            "end": 79,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
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
  "end": 158,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 11,
      "end": 57,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 18,
        "end": 57,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 55,
          "end": 57,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 33,
          "end": 37,
          "decorators": [],
          "name": "noop",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 39,
          "end": 54,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 41,
            "end": 54,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 48,
              "end": 54,
              "params": [
                {
                  "type": "TSVoidKeyword",
                  "start": 49,
                  "end": 53
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 41,
              "end": 48,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 157,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 65,
        "end": 157,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 122,
          "end": 157,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 128,
              "end": 155,
              "argument": {
                "type": "ObjectExpression",
                "start": 135,
                "end": 154,
                "properties": [
                  {
                    "type": "Property",
                    "start": 137,
                    "end": 143,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 140,
                      "end": 143,
                      "raw": "\"c\"",
                      "value": "c",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "SpreadElement",
                    "start": 145,
                    "end": 152,
                    "argument": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 152,
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 80,
          "decorators": [],
          "name": "spread",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "ObjectPattern",
            "start": 81,
            "end": 120,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 83,
                "end": 84,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "RestElement",
                "start": 86,
                "end": 93,
                "argument": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 93,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 97,
                "end": 120,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 99,
                    "end": 109,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 108,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 102,
                        "end": 108
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 110,
                    "end": 119,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 111,
                      "end": 119,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 113,
                        "end": 119
                      }
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 28,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 28,
              "decorators": [],
              "name": "notAHelper",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 23,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 25,
                  "end": 28
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 31,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 30,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 29,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 25,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 14,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 6,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 7,
              "end": 14,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 25,
            "decorators": [],
            "name": "notAHelper",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 28,
          "end": 29,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
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
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 49,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 49,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 46,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 40,
            "end": 46,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 41,
                "end": 45
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
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
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 28,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 28,
              "decorators": [],
              "name": "notAHelper",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 23,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 25,
                  "end": 28
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 30,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 30,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 29,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 25,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 14,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 6,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 7,
              "end": 14,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 25,
            "decorators": [],
            "name": "notAHelper",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 28,
          "end": 29,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
