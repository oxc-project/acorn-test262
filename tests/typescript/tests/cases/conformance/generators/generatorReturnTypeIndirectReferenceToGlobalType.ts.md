__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 41,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 21,
          "end": 38,
          "expression": {
            "type": "Identifier",
            "start": 21,
            "end": 29,
            "decorators": [],
            "name": "Iterator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 29,
            "end": 38,
            "params": [
              {
                "type": "TSLiteralType",
                "start": 30,
                "end": 31,
                "literal": {
                  "type": "Literal",
                  "start": 30,
                  "end": 31,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "TSLiteralType",
                "start": 33,
                "end": 34,
                "literal": {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "TSLiteralType",
                "start": 36,
                "end": 37,
                "literal": {
                  "type": "Literal",
                  "start": 36,
                  "end": 37,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 98,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 98,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 66,
            "end": 84,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 72,
                "end": 83,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 76,
                  "end": 83,
                  "argument": {
                    "type": "Literal",
                    "start": 82,
                    "end": 83,
                    "raw": "0",
                    "value": 0
                  },
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 87,
            "end": 96,
            "argument": {
              "type": "Literal",
              "start": 94,
              "end": 95,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 61,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 59,
          "end": 61,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 59,
            "end": 61,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
