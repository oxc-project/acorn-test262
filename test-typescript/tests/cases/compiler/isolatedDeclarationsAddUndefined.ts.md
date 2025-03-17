__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 9,
        "end": 10,
        "literal": {
          "type": "Literal",
          "start": 9,
          "end": 10,
          "value": 1,
          "raw": "1"
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 12,
      "end": 109,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 19,
        "end": 109,
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 29,
          "end": 109,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 35,
              "end": 58,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "TSAsExpression",
                "start": 40,
                "end": 57,
                "expression": {
                  "type": "ArrayExpression",
                  "start": 40,
                  "end": 48,
                  "elements": [
                    {
                      "type": "TSAsExpression",
                      "start": 41,
                      "end": 47,
                      "expression": {
                        "type": "Literal",
                        "start": 41,
                        "end": 42,
                        "value": 2,
                        "raw": "2"
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 46,
                        "end": 47,
                        "typeName": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 47,
                          "name": "N",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 57,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 57,
                    "name": "const",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 63,
              "end": 76,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 63,
                "end": 65,
                "name": "c3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "TSAsExpression",
                "start": 69,
                "end": 75,
                "expression": {
                  "type": "Literal",
                  "start": 69,
                  "end": 70,
                  "value": 1,
                  "raw": "1"
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 74,
                  "end": 75,
                  "typeName": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 81,
              "end": 96,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 94,
                "end": 95,
                "value": 1,
                "raw": "1"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 101,
              "end": 107,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 105,
                "end": 106,
                "value": 2,
                "raw": "2"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 207,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 66,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 66,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 20,
            "end": 56,
            "left": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 24,
              "end": 56,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 25,
                  "end": 32,
                  "left": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 27,
                    "name": "ip",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 30,
                    "end": 32,
                    "value": 10,
                    "raw": "10"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 43,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 37,
                      "end": 43
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 56,
                "body": []
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 46,
                  "end": 50
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 63,
          "end": 66,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 57,
          "end": 63,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 59,
            "end": 63
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 76,
        "end": 82
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 83,
      "end": 154,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 90,
        "end": 154,
        "id": {
          "type": "Identifier",
          "start": 99,
          "end": 103,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 104,
            "end": 145,
            "left": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 108,
              "end": 145,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 109,
                  "end": 121,
                  "left": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 111,
                    "name": "ip",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "start": 114,
                    "end": 121,
                    "expression": {
                      "type": "Literal",
                      "start": 114,
                      "end": 116,
                      "value": 10,
                      "raw": "10"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 120,
                      "end": 121,
                      "typeName": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 123,
                  "end": 132,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 124,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 126,
                      "end": 132
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 145,
                "body": []
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 133,
                "end": 139,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 135,
                  "end": 139
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 152,
          "end": 154,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 146,
          "end": 152,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 148,
            "end": 152
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 155,
      "end": 207,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 162,
        "end": 207,
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 172,
          "name": "Bar2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 173,
          "end": 207,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 179,
              "end": 194,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 192,
                "end": 193,
                "value": 1,
                "raw": "1"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 199,
              "end": 205,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 199,
                "end": 200,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 203,
                "end": 204,
                "value": 2,
                "raw": "2"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
