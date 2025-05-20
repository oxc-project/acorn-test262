__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSEnumBody",
        "start": 20,
        "end": 32,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 25,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 30,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 19,
        "decorators": [],
        "name": "TestType",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 74,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 49,
        "decorators": [],
        "name": "TestTypeStr",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 52,
        "end": 73,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 58,
          "end": 73,
          "exprName": {
            "type": "Identifier",
            "start": 65,
            "end": 73,
            "decorators": [],
            "name": "TestType",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 104,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 104,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 87,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 88,
          "end": 99,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 99,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 99,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 99,
                "decorators": [],
                "name": "TestType",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 105,
      "end": 136,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 136,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 116,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 117,
          "end": 131,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 120,
              "end": 131,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 120,
                "end": 131,
                "decorators": [],
                "name": "TestTypeStr",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 154,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 138,
        "end": 154,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 141,
            "end": 153,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 141,
              "end": 149,
              "decorators": [],
              "name": "TestType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 150,
              "end": 153,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 138,
          "end": 140,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 171,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 155,
        "end": 171,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 158,
            "end": 170,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 158,
              "end": 166,
              "decorators": [],
              "name": "TestType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 167,
              "end": 170,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 155,
          "end": 157,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 181,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 172,
        "end": 181,
        "arguments": [
          {
            "type": "Literal",
            "start": 175,
            "end": 180,
            "raw": "'foo'",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 172,
          "end": 174,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 191,
        "arguments": [
          {
            "type": "Literal",
            "start": 185,
            "end": 190,
            "raw": "'bar'",
            "value": "bar"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 182,
          "end": 184,
          "decorators": [],
          "name": "f2",
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
