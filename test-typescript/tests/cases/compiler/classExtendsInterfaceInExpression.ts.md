classExtendsInterfaceInExpression.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 76,
      "async": false,
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
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 32,
        "decorators": [],
        "name": "factory",
        "optional": false
      },
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
                    "optional": false
                  }
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 107,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 94,
        "end": 104,
        "arguments": [
          {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 94,
          "end": 101,
          "decorators": [],
          "name": "factory",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
