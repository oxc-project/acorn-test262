__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 54,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 54,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 18,
          "decorators": [],
          "name": "Common",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 21,
          "end": 53,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 21,
              "end": 35,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 23,
                  "end": 33,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 27,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 33,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 29,
                      "end": 33,
                      "literal": {
                        "type": "Literal",
                        "start": 29,
                        "end": 33,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSTypeLiteral",
              "start": 38,
              "end": 53,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 40,
                  "end": 51,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 44,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 46,
                      "end": 51,
                      "literal": {
                        "type": "Literal",
                        "start": 46,
                        "end": 51,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 91,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 62,
        "end": 91,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 71,
          "end": 90,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 71,
              "end": 77,
              "typeName": {
                "type": "Identifier",
                "start": 71,
                "end": 77,
                "decorators": [],
                "name": "Common",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeLiteral",
              "start": 80,
              "end": 90,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 82,
                  "end": 88,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 85,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 87,
                      "end": 88,
                      "literal": {
                        "type": "Literal",
                        "start": 87,
                        "end": 88,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 128,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 99,
        "end": 128,
        "id": {
          "type": "Identifier",
          "start": 104,
          "end": 105,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 108,
          "end": 127,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 108,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 114,
                "decorators": [],
                "name": "Common",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeLiteral",
              "start": 117,
              "end": 127,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 119,
                  "end": 125,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 122,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 122,
                    "end": 125,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 124,
                      "end": 125,
                      "literal": {
                        "type": "Literal",
                        "start": 124,
                        "end": 125,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 149,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 148,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 167,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 166,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 165,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 175,
      "expression": {
        "type": "AssignmentExpression",
        "start": 169,
        "end": 174,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 169,
          "end": 170,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 173,
          "end": 174,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
