__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestType",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 19
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 25
            },
            "initializer": null,
            "computed": false,
            "start": 22,
            "end": 25
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 30
            },
            "initializer": null,
            "computed": false,
            "start": 27,
            "end": 30
          }
        ],
        "start": 20,
        "end": 32
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestTypeStr",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 49
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TestType",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 73
          },
          "typeArguments": null,
          "start": 58,
          "end": 73
        },
        "start": 52,
        "end": 73
      },
      "declare": false,
      "start": 33,
      "end": 74
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 87
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TestType",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 99
              },
              "typeArguments": null,
              "start": 91,
              "end": 99
            },
            "start": 89,
            "end": 99
          },
          "start": 88,
          "end": 99
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 101,
        "end": 104
      },
      "expression": false,
      "start": 76,
      "end": 104
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 116
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TestTypeStr",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 131
              },
              "typeArguments": null,
              "start": 120,
              "end": 131
            },
            "start": 118,
            "end": 131
          },
          "start": 117,
          "end": 131
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 133,
        "end": 136
      },
      "expression": false,
      "start": 105,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 140
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestType",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 149
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 153
            },
            "optional": false,
            "computed": false,
            "start": 141,
            "end": 153
          }
        ],
        "optional": false,
        "start": 138,
        "end": 154
      },
      "directive": null,
      "start": 138,
      "end": 154
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 157
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestType",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 166
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 170
            },
            "optional": false,
            "computed": false,
            "start": 158,
            "end": 170
          }
        ],
        "optional": false,
        "start": 155,
        "end": 171
      },
      "directive": null,
      "start": 155,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 174
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 175,
            "end": 180
          }
        ],
        "optional": false,
        "start": 172,
        "end": 181
      },
      "directive": null,
      "start": 172,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 184
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 185,
            "end": 190
          }
        ],
        "optional": false,
        "start": 182,
        "end": 191
      },
      "directive": null,
      "start": 182,
      "end": 191
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 191
}
```
