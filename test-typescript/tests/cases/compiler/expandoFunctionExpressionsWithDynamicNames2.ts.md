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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "name": "mySymbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 17,
            "end": 25,
            "callee": {
              "type": "Identifier",
              "start": 17,
              "end": 23,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 27,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 76,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 45,
            "end": 54,
            "typeParameters": null,
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
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 74,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 66,
              "name": "mySymbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 91,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 91,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "name": "Foo",
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
            "start": 94,
            "end": 102,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 100,
              "end": 102,
              "body": []
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
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 125,
      "expression": {
        "type": "AssignmentExpression",
        "start": 104,
        "end": 124,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 104,
          "end": 117,
          "object": {
            "type": "Identifier",
            "start": 104,
            "end": 107,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 108,
            "end": 116,
            "name": "mySymbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 120,
          "end": 124,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 127,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 140,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 141,
        "end": 170,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 145,
            "end": 154,
            "typeParameters": null,
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
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 157,
            "end": 168,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 161,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 181,
            "end": 196,
            "expression": {
              "type": "Literal",
              "start": 181,
              "end": 187,
              "value": "test",
              "raw": "\"test\""
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 191,
              "end": 196,
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 196,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 212,
            "name": "bar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 212,
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 212,
                  "name": "Bar",
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
            "start": 215,
            "end": 223,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 221,
              "end": 223,
              "body": []
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
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 239,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 238,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 225,
          "end": 231,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 228,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 229,
            "end": 230,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 234,
          "end": 238,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
