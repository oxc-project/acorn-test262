__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 21,
                    "end": 27
                  },
                  "start": 19,
                  "end": 27
                },
                "start": 18,
                "end": 27
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 34
                },
                "typeArguments": null,
                "start": 30,
                "end": 34
              },
              "start": 28,
              "end": 34
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 17,
            "end": 35
          }
        ],
        "start": 12,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 48
                },
                "typeArguments": null,
                "start": 47,
                "end": 48
              },
              "start": 45,
              "end": 48
            },
            "start": 43,
            "end": 48
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 60
                },
                "typeArguments": null,
                "arguments": [],
                "start": 52,
                "end": 62
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 64,
                "end": 65
              }
            ],
            "start": 51,
            "end": 66
          },
          "definite": false,
          "start": 43,
          "end": 66
        }
      ],
      "declare": false,
      "start": 39,
      "end": 67
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 75
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x3",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 80
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 81,
              "end": 82
            },
            "optional": false,
            "computed": true,
            "start": 78,
            "end": 83
          },
          "definite": false,
          "start": 73,
          "end": 83
        }
      ],
      "declare": false,
      "start": 69,
      "end": 84
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 88
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getDate",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 96
          },
          "optional": false,
          "computed": false,
          "start": 86,
          "end": 96
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 86,
        "end": 98
      },
      "directive": null,
      "start": 86,
      "end": 99
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 100
}
```
