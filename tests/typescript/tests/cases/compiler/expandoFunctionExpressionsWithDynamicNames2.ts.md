__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mySymbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 23
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 17,
            "end": 25
          },
          "definite": false,
          "start": 6,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 40
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 49,
                "end": 53
              },
              "start": 47,
              "end": 53
            },
            "start": 45,
            "end": 54
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mySymbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 69,
                  "end": 73
                },
                "start": 69,
                "end": 73
              },
              "start": 67,
              "end": 73
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 74
          }
        ],
        "start": 41,
        "end": 76
      },
      "declare": false,
      "start": 27,
      "end": 76
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 91
                },
                "typeArguments": null,
                "start": 88,
                "end": 91
              },
              "start": 86,
              "end": 91
            },
            "start": 83,
            "end": 91
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 100,
              "end": 102
            },
            "id": null,
            "generator": false,
            "start": 94,
            "end": 102
          },
          "definite": false,
          "start": 83,
          "end": 102
        }
      ],
      "declare": false,
      "start": 77,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 107
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mySymbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 116
          },
          "optional": false,
          "computed": true,
          "start": 104,
          "end": 117
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 120,
          "end": 124
        },
        "start": 104,
        "end": 124
      },
      "directive": null,
      "start": 104,
      "end": 125
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 140
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 149,
                "end": 153
              },
              "start": 147,
              "end": 153
            },
            "start": 145,
            "end": 154
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 161
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 163,
                  "end": 167
                },
                "start": 163,
                "end": 167
              },
              "start": 161,
              "end": 167
            },
            "accessibility": null,
            "static": false,
            "start": 157,
            "end": 168
          }
        ],
        "start": 141,
        "end": 170
      },
      "declare": false,
      "start": 127,
      "end": 170
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 178
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "test",
              "raw": "\"test\"",
              "start": 181,
              "end": 187
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 196
              },
              "typeArguments": null,
              "start": 191,
              "end": 196
            },
            "start": 181,
            "end": 196
          },
          "definite": false,
          "start": 177,
          "end": 196
        }
      ],
      "declare": false,
      "start": 171,
      "end": 197
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 212
                },
                "typeArguments": null,
                "start": 209,
                "end": 212
              },
              "start": 207,
              "end": 212
            },
            "start": 204,
            "end": 212
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 221,
              "end": 223
            },
            "id": null,
            "generator": false,
            "start": 215,
            "end": 223
          },
          "definite": false,
          "start": 204,
          "end": 223
        }
      ],
      "declare": false,
      "start": 198,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 228
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 230
          },
          "optional": false,
          "computed": true,
          "start": 225,
          "end": 231
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 234,
          "end": 238
        },
        "start": 225,
        "end": 238
      },
      "directive": null,
      "start": 225,
      "end": 239
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 239
}
```
