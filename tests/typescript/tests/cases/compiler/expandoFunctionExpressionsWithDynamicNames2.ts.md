__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 239,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "decorators": [],
            "name": "mySymbol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 17,
            "end": 25,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 17,
              "end": 23,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 27,
      "end": 76,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 76,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 45,
            "end": 54,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 53,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 49,
                "end": 53
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 74,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 66,
              "decorators": [],
              "name": "mySymbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 73,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 69,
                "end": 73,
                "literal": {
                  "type": "Literal",
                  "start": 69,
                  "end": 73,
                  "raw": "true",
                  "value": true
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 91,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 91,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 94,
            "end": 102,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 100,
              "end": 102,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 125,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 104,
        "end": 124,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 104,
          "end": 117,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 104,
            "end": 107,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 108,
            "end": 116,
            "decorators": [],
            "name": "mySymbol",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 120,
          "end": 124,
          "raw": "true",
          "value": true
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 127,
      "end": 170,
      "body": {
        "type": "TSInterfaceBody",
        "start": 141,
        "end": 170,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 145,
            "end": 154,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 153,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 149,
                "end": 153
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 157,
            "end": 168,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 161,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 167,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 163,
                "end": 167,
                "literal": {
                  "type": "Literal",
                  "start": 163,
                  "end": 167,
                  "raw": "true",
                  "value": true
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 140,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 196,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 181,
            "end": 196,
            "expression": {
              "type": "Literal",
              "start": 181,
              "end": 187,
              "raw": "\"test\"",
              "value": "test"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 191,
              "end": 196,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 196,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 212,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 212,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 212,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 215,
            "end": 223,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 221,
              "end": 223,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 239,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 238,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 225,
          "end": 231,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 228,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 229,
            "end": 230,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 234,
          "end": 238,
          "raw": "true",
          "value": true
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
