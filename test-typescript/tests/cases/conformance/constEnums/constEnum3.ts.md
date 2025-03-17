__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 19,
        "name": "TestType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 22,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 25,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 27,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 30,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 20,
        "end": 32,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 25,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 30,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 49,
        "name": "TestTypeStr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "name": "TestType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 87,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 88,
          "end": 99,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 99,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 99,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 99,
                "name": "TestType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 104,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 105,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 116,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 117,
          "end": 131,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 120,
              "end": 131,
              "typeName": {
                "type": "Identifier",
                "start": 120,
                "end": 131,
                "name": "TestTypeStr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 136,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 154,
      "expression": {
        "type": "CallExpression",
        "start": 138,
        "end": 154,
        "callee": {
          "type": "Identifier",
          "start": 138,
          "end": 140,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 141,
            "end": 153,
            "object": {
              "type": "Identifier",
              "start": 141,
              "end": 149,
              "name": "TestType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 150,
              "end": 153,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 171,
      "expression": {
        "type": "CallExpression",
        "start": 155,
        "end": 171,
        "callee": {
          "type": "Identifier",
          "start": 155,
          "end": 157,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 158,
            "end": 170,
            "object": {
              "type": "Identifier",
              "start": 158,
              "end": 166,
              "name": "TestType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 167,
              "end": 170,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 181,
      "expression": {
        "type": "CallExpression",
        "start": 172,
        "end": 181,
        "callee": {
          "type": "Identifier",
          "start": 172,
          "end": 174,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 175,
            "end": 180,
            "value": "foo",
            "raw": "'foo'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 191,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 191,
        "callee": {
          "type": "Identifier",
          "start": 182,
          "end": 184,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 185,
            "end": 190,
            "value": "bar",
            "raw": "'bar'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
