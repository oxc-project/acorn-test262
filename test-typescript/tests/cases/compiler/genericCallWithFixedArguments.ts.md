__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 21,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 21,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 19,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
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
              "start": 13,
              "end": 19,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 16,
                "end": 19,
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
        "end": 7,
        "decorators": [],
        "name": "A",
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
      "start": 22,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
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
              "start": 35,
              "end": 41,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 41,
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
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 68,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 65,
        "end": 68,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 55,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 57,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 60,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 69,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 69,
        "end": 79,
        "arguments": [
          {
            "type": "Literal",
            "start": 77,
            "end": 78,
            "raw": "7",
            "value": 7,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 70,
          "end": 76,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 71,
              "end": 72,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 74,
              "end": 75,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
