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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 19,
        "decorators": [],
        "name": "TestType",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 49,
        "decorators": [],
        "name": "TestTypeStr",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "TestType",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 99,
                "decorators": [],
                "name": "TestType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 104,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 105,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 116,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 120,
                "end": 131,
                "decorators": [],
                "name": "TestTypeStr",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 136,
        "body": []
      },
      "expression": false
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
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 141,
            "end": 153,
            "object": {
              "type": "Identifier",
              "start": 141,
              "end": 149,
              "decorators": [],
              "name": "TestType",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 150,
              "end": 153,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 158,
            "end": 170,
            "object": {
              "type": "Identifier",
              "start": 158,
              "end": 166,
              "decorators": [],
              "name": "TestType",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 167,
              "end": 170,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 175,
            "end": 180,
            "value": "foo",
            "raw": "'foo'"
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 185,
            "end": 190,
            "value": "bar",
            "raw": "'bar'"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
