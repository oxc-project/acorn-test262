__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 304,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 45,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 29,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 29,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 22,
                "end": 29
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 43,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 42,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 39,
                "end": 42,
                "literal": {
                  "type": "Literal",
                  "start": 39,
                  "end": 42,
                  "value": 123,
                  "raw": "123"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 86,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 53,
        "end": 86,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 59,
            "end": 85,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 72,
              "name": "interfaced",
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
                    "name": "N",
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
              "type": "ArrowFunctionExpression",
              "start": 75,
              "end": 85,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Literal",
                "start": 81,
                "end": 85,
                "value": true,
                "raw": "true"
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 108,
      "expression": {
        "type": "AssignmentExpression",
        "start": 87,
        "end": 107,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 87,
          "end": 101,
          "object": {
            "type": "Identifier",
            "start": 87,
            "end": 97,
            "name": "interfaced",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 98,
            "end": 101,
            "name": "num",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 104,
          "end": 107,
          "value": 123,
          "raw": "123"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 110,
      "end": 171,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 117,
        "end": 171,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 123,
            "end": 170,
            "id": {
              "type": "Identifier",
              "start": 123,
              "end": 157,
              "name": "inlined",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 130,
                "end": 157,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 132,
                  "end": 157,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 134,
                      "end": 146,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 136,
                        "end": 145,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 138,
                          "end": 145
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 147,
                      "end": 155,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 150,
                        "name": "nun",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 150,
                        "end": 155,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 152,
                          "end": 155,
                          "literal": {
                            "type": "Literal",
                            "start": 152,
                            "end": 155,
                            "value": 456,
                            "raw": "456"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 160,
              "end": 170,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Literal",
                "start": 166,
                "end": 170,
                "value": true,
                "raw": "true"
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 190,
      "expression": {
        "type": "AssignmentExpression",
        "start": 172,
        "end": 189,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 172,
          "end": 183,
          "object": {
            "type": "Identifier",
            "start": 172,
            "end": 179,
            "name": "inlined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "name": "nun",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 186,
          "end": 189,
          "value": 456,
          "raw": "456"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 192,
      "end": 230,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 199,
        "end": 230,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 205,
            "end": 229,
            "id": {
              "type": "Identifier",
              "start": 205,
              "end": 216,
              "name": "ignoreJsdoc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 219,
              "end": 229,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Literal",
                "start": 225,
                "end": 229,
                "value": true,
                "raw": "true"
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 303,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 303,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 280,
          "end": 297,
          "object": {
            "type": "Identifier",
            "start": 280,
            "end": 291,
            "name": "ignoreJsdoc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 292,
            "end": 297,
            "name": "extra",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 300,
          "end": 303,
          "value": 111,
          "raw": "111"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
