__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 30,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 11,
        "end": 29,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 11,
            "end": 18,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 11,
              "end": 18,
              "decorators": [],
              "name": "FooBase",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 21,
            "end": 29,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "decorators": [],
              "name": "FooArray",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 61,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 43,
        "decorators": [],
        "name": "FooBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 46,
        "end": 60,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 46,
            "end": 52
          },
          {
            "type": "TSLiteralType",
            "start": 55,
            "end": 60,
            "literal": {
              "type": "Literal",
              "start": 55,
              "end": 60,
              "raw": "false",
              "value": false
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 62,
      "end": 88,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 75,
        "decorators": [],
        "name": "FooArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 78,
        "end": 87,
        "elementType": {
          "type": "TSTypeReference",
          "start": 78,
          "end": 85,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 78,
            "end": 85,
            "decorators": [],
            "name": "FooBase",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 111,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 111,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 111,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 134,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 134,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 134,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 184,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 183,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 136,
          "end": 140,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 143,
          "end": 183,
          "elements": [
            {
              "type": "SpreadElement",
              "start": 144,
              "end": 182,
              "argument": {
                "type": "ConditionalExpression",
                "start": 147,
                "end": 182,
                "alternate": {
                  "type": "ArrayExpression",
                  "start": 176,
                  "end": 182,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 177,
                      "end": 181,
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "consequent": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 173,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "test": {
                  "type": "CallExpression",
                  "start": 147,
                  "end": 166,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 161,
                      "end": 165,
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 147,
                    "end": 160,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 152,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 160,
                      "decorators": [],
                      "name": "isArray",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
