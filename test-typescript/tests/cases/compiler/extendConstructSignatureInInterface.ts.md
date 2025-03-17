__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 38,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 18,
            "end": 36,
            "params": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 31,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 25,
                    "end": 31
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 54,
            "decorators": [],
            "name": "CStatic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 54,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 83,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 83,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 72,
        "end": 79,
        "decorators": [],
        "name": "CStatic",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 93,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 96,
            "end": 104,
            "arguments": [
              {
                "type": "Literal",
                "start": 102,
                "end": 103,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
