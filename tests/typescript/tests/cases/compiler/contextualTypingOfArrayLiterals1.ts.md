__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 37,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 17,
            "end": 35,
            "parameters": [
              {
                "type": "Identifier",
                "start": 18,
                "end": 27,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 19,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 21,
                    "end": 27
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 34,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 34,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 67,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 48,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 48,
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 51,
            "end": 66,
            "elements": [
              {
                "type": "NewExpression",
                "start": 52,
                "end": 62,
                "callee": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 60,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "Literal",
                "start": 64,
                "end": 65,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 84,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 75,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 78,
            "end": 83,
            "object": {
              "type": "Identifier",
              "start": 78,
              "end": 80,
              "decorators": [],
              "name": "x3",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 99,
      "expression": {
        "type": "CallExpression",
        "start": 86,
        "end": 98,
        "callee": {
          "type": "MemberExpression",
          "start": 86,
          "end": 96,
          "object": {
            "type": "Identifier",
            "start": 86,
            "end": 88,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 96,
            "decorators": [],
            "name": "getDate",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
