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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                  "value": 0,
                  "raw": "0"
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
                  "value": 1,
                  "raw": "1"
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
                  "value": 2,
                  "raw": "2"
                }
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 41,
        "body": []
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 61,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 59,
          "end": 61,
          "typeName": {
            "type": "Identifier",
            "start": 59,
            "end": 61,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 98,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 66,
            "end": 84,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 72,
                "end": 83,
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
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 82,
                    "end": 83,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 87,
            "end": 96,
            "argument": {
              "type": "Literal",
              "start": 94,
              "end": 95,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
