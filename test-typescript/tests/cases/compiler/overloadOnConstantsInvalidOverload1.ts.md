__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 24,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 22,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 22,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 19,
                "end": 22,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 66,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 64,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 64,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 64,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 39,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 106,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 81,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 90,
        "end": 94,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "biz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 148,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 123,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 136,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 152,
      "end": 189,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 164,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 165,
          "end": 177,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 177,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 171,
              "end": 177,
              "literal": {
                "type": "Literal",
                "start": 171,
                "end": 177,
                "raw": "\"SPAN\"",
                "value": "SPAN",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 178,
        "end": 188,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 180,
          "end": 188,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 180,
            "end": 188,
            "decorators": [],
            "name": "Derived1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 190,
      "end": 246,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 226,
        "end": 246,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 232,
            "end": 244,
            "argument": {
              "type": "Literal",
              "start": 239,
              "end": 243,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 202,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 203,
          "end": 214,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 207,
            "end": 214,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 209,
              "end": 214,
              "literal": {
                "type": "Literal",
                "start": 209,
                "end": 214,
                "raw": "\"DIV\"",
                "value": "DIV",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 215,
        "end": 225,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 217,
          "end": 225,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 217,
            "end": 225,
            "decorators": [],
            "name": "Derived2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 258,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 248,
        "end": 257,
        "arguments": [
          {
            "type": "Literal",
            "start": 252,
            "end": 256,
            "raw": "\"HI\"",
            "value": "HI",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
