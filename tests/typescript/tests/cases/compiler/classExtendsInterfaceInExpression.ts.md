__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
        "decorators": [],
        "name": "factory",
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
          "start": 33,
          "end": 39,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 39,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 36,
              "end": 39
            }
          }
        }
      ],
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
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        }
      },
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 107,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "start": 94,
        "end": 104,
        "callee": {
          "type": "Identifier",
          "start": 94,
          "end": 101,
          "decorators": [],
          "name": "factory",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 107,
        "body": []
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
