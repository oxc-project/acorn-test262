__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HTML",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 38
        },
        "constraint": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "div",
            "raw": "'div'",
            "start": 42,
            "end": 47
          },
          "start": 42,
          "end": 47
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Block",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 55
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTML",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 60
                },
                "typeArguments": null,
                "start": 56,
                "end": 60
              }
            ],
            "start": 55,
            "end": 61
          },
          "start": 50,
          "end": 61
        },
        "optional": false,
        "readonly": null,
        "start": 34,
        "end": 63
      },
      "declare": false,
      "start": 22,
      "end": 64
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Block",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 75
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 77
          }
        ],
        "start": 75,
        "end": 78
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 83
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 82,
              "end": 83
            }
          ],
          "start": 81,
          "end": 84
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTML",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 95
                },
                "typeArguments": null,
                "start": 91,
                "end": 95
              },
              "start": 89,
              "end": 95
            },
            "start": 85,
            "end": 95
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 100,
            "end": 102
          },
          "start": 97,
          "end": 102
        },
        "start": 81,
        "end": 102
      },
      "declare": false,
      "start": 65,
      "end": 103
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTML",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 124
                },
                "typeArguments": null,
                "start": 120,
                "end": 124
              },
              "start": 118,
              "end": 124
            },
            "start": 117,
            "end": 124
          },
          "init": null,
          "definite": false,
          "start": 117,
          "end": 124
        }
      ],
      "declare": true,
      "start": 105,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "div",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "optional": false,
          "computed": false,
          "start": 126,
          "end": 131
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          }
        ],
        "optional": false,
        "start": 126,
        "end": 134
      },
      "directive": null,
      "start": 126,
      "end": 135
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 135
}
```
