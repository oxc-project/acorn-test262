typePredicateWithThisParameter.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 374,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 56,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 54,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 91,
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 91,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 77,
            "end": 89,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 80,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 88,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 167,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 136,
        "end": 167,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 142,
            "end": 165,
            "argument": {
              "type": "BinaryExpression",
              "start": 149,
              "end": 164,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 149,
                "end": 154,
                "raw": "'foo'",
                "value": "foo"
              },
              "right": {
                "type": "Identifier",
                "start": 158,
                "end": 164,
                "decorators": [],
                "name": "object",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 108,
        "decorators": [],
        "name": "isFoo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 119,
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 115,
            "end": 119,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 117,
              "end": 119,
              "members": []
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 135,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 122,
          "end": 135,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 122,
            "end": 128,
            "decorators": [],
            "name": "object",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 132,
            "end": 135,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 135,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 135,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 255,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 224,
        "end": 255,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 230,
            "end": 253,
            "argument": {
              "type": "BinaryExpression",
              "start": 237,
              "end": 252,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 237,
                "end": 242,
                "raw": "'foo'",
                "value": "foo"
              },
              "right": {
                "type": "Identifier",
                "start": 246,
                "end": 252,
                "decorators": [],
                "name": "object",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 184,
        "decorators": [],
        "name": "isFoo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 185,
          "end": 195,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 189,
            "end": 195,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 191,
              "end": 195
            }
          }
        },
        {
          "type": "Identifier",
          "start": 197,
          "end": 207,
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 203,
            "end": 207,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 205,
              "end": 207,
              "members": []
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 208,
        "end": 223,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 210,
          "end": 223,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 210,
            "end": 216,
            "decorators": [],
            "name": "object",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 220,
            "end": 223,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 220,
              "end": 223,
              "typeName": {
                "type": "Identifier",
                "start": 220,
                "end": 223,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 284,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 284,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 284,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 275,
                "end": 284,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 275,
                    "end": 278,
                    "typeName": {
                      "type": "Identifier",
                      "start": 275,
                      "end": 278,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 281,
                    "end": 284,
                    "typeName": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 284,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false
                    }
                  }
                ]
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
      "type": "IfStatement",
      "start": 287,
      "end": 329,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 305,
        "end": 329,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 311,
            "end": 327,
            "expression": {
              "type": "AssignmentExpression",
              "start": 311,
              "end": 326,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 311,
                "end": 319,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 315,
                  "decorators": [],
                  "name": "test",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 319,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 322,
                "end": 326,
                "raw": "'hi'",
                "value": "hi"
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 291,
        "end": 303,
        "arguments": [
          {
            "type": "Identifier",
            "start": 298,
            "end": 302,
            "decorators": [],
            "name": "test",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 291,
          "end": 297,
          "decorators": [],
          "name": "isFoo1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 331,
      "end": 373,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 349,
        "end": 373,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 355,
            "end": 371,
            "expression": {
              "type": "AssignmentExpression",
              "start": 355,
              "end": 370,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 355,
                "end": 363,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 359,
                  "decorators": [],
                  "name": "test",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 363,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 366,
                "end": 370,
                "raw": "'hi'",
                "value": "hi"
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 335,
        "end": 347,
        "arguments": [
          {
            "type": "Identifier",
            "start": 342,
            "end": 346,
            "decorators": [],
            "name": "test",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 335,
          "end": 341,
          "decorators": [],
          "name": "isFoo2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
