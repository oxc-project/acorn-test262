__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 32,
        "name": "factory",
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
          "start": 33,
          "end": 39,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 39,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 36,
              "end": 39
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 76,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 74,
            "argument": {
              "type": "Literal",
              "start": 69,
              "end": 73,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 40,
        "end": 57,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 42,
          "end": 57,
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 43,
              "end": 56,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 48,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 50,
                  "end": 56,
                  "typeName": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 56,
                    "name": "Object",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 94,
        "end": 104,
        "callee": {
          "type": "Identifier",
          "start": 94,
          "end": 101,
          "name": "factory",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 107,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
